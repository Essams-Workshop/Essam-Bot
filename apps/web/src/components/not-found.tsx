import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { LinkIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "./ui/button";

interface NotFoundProps {
	children: ReactNode;
}

export function NotFound({ children }: NotFoundProps) {
	return (
		<div className="flex-1 w-full flex items-center justify-center min-h-screen">
			<div className="container mx-auto p-4 md:p-6 lg:p-8 max-w-2xl">
				<div className={cn("flex flex-col items-center text-center space-y-4")}>{children}</div>
			</div>
		</div>
	);
}

export function DefaultNotFound() {
	return (
		<NotFound>
			<img
				className="justify-center mb-5 w-10 h-10 object-contain"
				src="/vid/exclamation-grayscale.gif"
				alt="404 - Exclamation Mark"
			/>
			<h1 className="text-3xl mb-4">404 - Page Not Found!</h1>
			<p>Sorry, the page you are looking for either does not exist or is under construction.</p>

			<Button type="button" className="mt-6" variant="default" size="lg">
				Go Back Home
			</Button>
		</NotFound>
	);
}

export function DefaultUnderConstruction() {
	return (
		<NotFound>
			<img
				className="justify-center mb-5 w-15 h-15 object-contain"
				src="/images/404/token.png"
				alt="425 - Too Early, Under Construction"
			/>
			<h1 className="text-3xl mb-4">Whoops!</h1>
			<p>
				Looks like this page is currently under construction (or non existent) and will be available
				soon.
			</p>
			<Link to="/" className="flex items-center gap-2 group">
				<Button className="mt-6" variant="default" size="lg">
					Go Home
					<LinkIcon className="ml-2 h-4 w-4" />
				</Button>
			</Link>
		</NotFound>
	);
}
