"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { footerConfig } from "@/lib/config";
import { Icons } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

interface FooterProps {
	className?: string;
	children?: React.ReactNode;
}

export function Footer({ className, children }: FooterProps) {
	const footer = footerConfig.footer.content;

	return (
		<footer className={cn("w-full border-t border-border", className)}>
			{/* Socials */}
			{footer.socials.some((social) => social.toggle.active) && (
				<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border border-x border-b border-border">
					<TooltipProvider>
						{footer.socials.map((social) => {
							const isActive = social.toggle.active;
							const containerClass =
								"flex w-full h-full items-center justify-center gap-1 p-4 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors";

							const content = (
								<>
									{social.label}
									{social.value && (
										<span className="text-xs text-muted-foreground/80">[{social.value}]</span>
									)}
								</>
							);

							const tooltipText = isActive ? social.toggle.title : social.toggle.inactiveTitle;

							return (
								<Tooltip key={social.label} delayDuration={100}>
									<TooltipTrigger asChild>
										{isActive ? (
											<Link to={social.href} className={cn(containerClass, "cursor-pointer")}>
												{content}
											</Link>
										) : (
											<div
												className={cn(
													containerClass,
													"cursor-not-allowed opacity-60 hover:text-muted-foreground hover:bg-transparent",
												)}
											>
												{content}
											</div>
										)}
									</TooltipTrigger>
									<TooltipContent
										className="rounded-none ring-1 ring-border bg-background text-foreground py-3 shadow-lg max-w-xs"
										sideOffset={5}
									>
										<p>{tooltipText}</p>
									</TooltipContent>
								</Tooltip>
							);
						})}
					</TooltipProvider>
				</div>
			)}

			{/* Footer */}
			<div className="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
				<div className="flex items-end justify-between gap-4">
					{/* Copyright */}
					<p className="text-md text-muted-foreground flex-1">{footer.copyright.text}</p>

					{/* Logo */}
					<Link to="/" className="flex items-center gap-2 group">
						<Icons.logo className="h-12 w-auto object-contain" />
					</Link>

					{/* Legal Links */}
					<div className="flex items-center gap-6 flex-1 justify-end">
						{footer.links.map((link) => (
							<Link
								key={link.label}
								to={link.to}
								className="text-md text-muted-foreground hover:text-foreground transition-colors"
							>
								{link.label}
							</Link>
						))}
					</div>
					{children}
				</div>
			</div>
		</footer>
	);
}
