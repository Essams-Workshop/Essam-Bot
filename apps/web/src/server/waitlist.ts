import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { z } from "zod";

const waitlistSchema = z.object({
	userName: z.string().min(2).nonoptional(),
	email: z.email().nonoptional(),
});

// NOTE: Get environment variables for Resend (Api Key, Email)
const getEnvironment = createServerFn().handler(async () => {
	if (!import.meta.env.VITE_RESEND_FROM_EMAIL || !import.meta.env.VITE_RESEND_API_KEY) {
		throw new Error(
			"Missing required environment variable(s): VITE_RESEND_API_KEY or VITE_RESEND_FROM_EMAIL",
		);
	}

	const config = {
		resendApiKey: import.meta.env.VITE_RESEND_API_KEY!,
		resendFromEmail: import.meta.env.VITE_RESEND_FROM_EMAIL!,
	};

	return config;
});

// NOTE: Add user to waitlist (Resend)
export const addToWaitlist = createServerFn({ method: "POST" })
	.inputValidator((data: { userName: string; email: string }) => {
		return waitlistSchema.parse(data);
	})
	.handler(async (ctx: any) => {
		const { userName, email } = ctx.data;
		const config = await getEnvironment();

		if (!config) throw new Error("Missing configuration for Resend.");
		const resend = new Resend(config.resendApiKey);

		try {
			const { error: contactError } = await resend.contacts.create({
				email: email,
				unsubscribed: false,
			});

			if (contactError) {
				if (contactError.statusCode === 409) {
					return { success: false, message: "You are already on the waitlist!" };
				}
				throw new Error(`Failed to add contact: ${contactError.message}`);
			}

			const { error: emailError } = await resend.emails.send({
				from: config.resendFromEmail,
				to: email,
				tags: [
					{
						name: "category",
						value: "waitlist_confirm",
					},
				],
				template: {
					id: "contrasture-waitlist",
					variables: {
						userName: userName,
					},
				},
			});

			if (emailError) {
				console.error("Resend email error:", {
					statusCode: emailError.statusCode,
					name: emailError.name,
					message: emailError.message,
				});
				throw new Error(`Failed to send confirmation email: ${emailError.message}`);
			}
			return { success: true, message: "You have been added to the waitlist!" };
		} catch (error: any) {
			throw new Error(`Failed to add to waitlist, unexpected error: ${error.message}`);
		}
	});
