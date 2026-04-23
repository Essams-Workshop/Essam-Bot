import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { addToWaitlist } from "@/server/waitlist";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";

interface WaitlistSectionProps {
	id: string;
	title: string;
	description: string;
	placeholder: {
		email?: string;
		userName?: string;
		buttonText?: string;
	};
	className?: string;
	children?: React.ReactNode;
}

export default function WaitlistSection({
	id,
	title,
	description,
	placeholder,
	className,
	children,
}: WaitlistSectionProps) {
	const form = useForm({
		defaultValues: {
			userName: "",
			email: "",
		},
		onSubmit: async ({ value }) => {
			try {
				const result = await addToWaitlist({ data: value });

				if (!result.success) {
					toast.error("Action Failed", {
						descriptionClassName: "text-sm font-sans",
						description: result.message || "Failed to join the waitlist. Please try again.",
					});
					return;
				}

				toast.success("Welcome aboard!", {
					descriptionClassName: "text-sm font-sans",
					description: result.message || "You have been added to the waitlist!",
				});
				form.reset();
			} catch (error: any) {
				const errorMessage = error.message?.split(": ").pop() || "An unexpected error occurred.";

				toast.error("Something went wrong", {
					descriptionClassName: "text-sm font-sans",
					description: errorMessage,
				});
			}
		},
	});

	return (
		<section
			id={id}
			className={cn(
				"flex flex-col items-start justify-center py-20 md:py-32 px-20 md:px-0 max-w-3xl mx-auto",
				className,
			)}
		>
			{/* Distributions (Apple, Windows, Linux) */}
			<div className="mb-8 p-2 flex items-center gap-5">
				<Icons.apple className="w-12 h-auto" />
				<Icons.windows className="w-12 h-auto" />
				<Icons.linux className="w-12 h-auto" />
			</div>

			{/* Call to Action */}
			<div className="space-y-4 mb-10">
				<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white">{title}</h2>
				<p className="text-muted-foreground text-lg">{description}</p>
			</div>

			{/* Waitlist */}
			<div className="w-full max-w-md md:max-w-none">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						e.stopPropagation();
						form.handleSubmit();
					}}
					className="flex flex-col gap-4"
				>
					<div className="flex flex-col md:flex-row gap-4 w-full">
						{/* UserName */}
						<form.Field
							name="userName"
							validators={{
								onChange: ({ value }) =>
									!value
										? "Name is a required field."
										: value.length < 2
											? "Name is too short."
											: undefined,
							}}
						>
							{(field) => (
								<div className="flex-1 flex flex-col gap-2">
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										placeholder={placeholder.userName || "Your Name..."}
										className="h-12 w-full bg-background/50"
									/>
									{field.state.meta.errors ? (
										<em role="alert" className="text-primary text-xs px-1">
											{field.state.meta.errors.join(", ")}
										</em>
									) : null}
								</div>
							)}
						</form.Field>

						{/* Email */}
						<form.Field
							name="email"
							validators={{
								onChange: ({ value }) =>
									!value
										? "Email is a required field."
										: !/^\S+@\S+\.\S+$/.test(value)
											? "The email is invalid, try again."
											: undefined,
							}}
						>
							{(field) => (
								<div className="relative flex-[1.5] flex flex-col gap-2">
									<div className="relative w-full">
										<Input
											id={field.name}
											name={field.name}
											type="email"
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											placeholder={
												placeholder.email || "Your Email...Don't worry, we won't spam you!"
											}
											className="h-12 w-full bg-background/50 pr-36"
										/>
										<div className="absolute right-1 top-1 bottom-1">
											<form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
												{([canSubmit, isSubmitting]) => (
													<Button
														type="submit"
														disabled={!canSubmit}
														variant="secondary"
														className="h-full px-5 font-medium transition-colors rounded-lg"
													>
														{isSubmitting
															? "Joining..."
															: placeholder.buttonText || "Join Waitlist"}
													</Button>
												)}
											</form.Subscribe>
										</div>
									</div>
									{field.state.meta.errors ? (
										<em role="alert" className="text-primary text-xs px-1">
											{field.state.meta.errors.join(", ")}
										</em>
									) : null}
								</div>
							)}
						</form.Field>
					</div>
				</form>
			</div>
			{children}
		</section>
	);
}
