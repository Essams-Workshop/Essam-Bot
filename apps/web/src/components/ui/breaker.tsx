import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BreakerProps {
	title: string;
	description: string;
	align?: "start" | "center";
	children?: ReactNode;
	className?: string;
}

export function Breaker({
	title,
	description,
	align = "center",
	children,
	className,
}: BreakerProps) {
	return (
		<div
			className={cn(
				"w-[calc(100%+2rem)] -mx-4 md:w-[calc(100%+3rem)] md:-mx-6 lg:w-[calc(100%+4rem)] lg:-mx-8 border-y py-10 md:py-14",
				className,
			)}
		>
			<div
				className={cn(
					"max-w-xl flex flex-col gap-2 px-4",
					align === "center" ? "mx-auto justify-center" : "mr-auto justify-start",
				)}
			>
				{title && (
					<h1
						className={cn(
							"text-3xl md:text-4xl font-medium tracking-tighter text-balance dark:text-accent pb-1",
							align === "center" ? "text-center" : "text-left",
						)}
					>
						{title}
					</h1>
				)}
				{description && (
					<p
						className={cn(
							"text-balance font-medium",
							align === "center" ? "text-center" : "text-left",
						)}
					>
						{description}
					</p>
				)}
				{children}
			</div>
		</div>
	);
}
