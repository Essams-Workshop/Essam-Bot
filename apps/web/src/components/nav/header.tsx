"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { headerConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

interface HeaderProps {
	className?: string;
	children?: React.ReactNode;
}

export function Header({ className, children }: HeaderProps) {
	const { header } = headerConfig;

	return (
		<header
			className={cn("w-full border-b border-border bg-background sticky top-0 z-50", className)}
		>
			<div className="flex items-stretch border-x border-border mx-auto w-full max-w-screen-2xl">
				{/* Left Side - Logo */}
				<div className="flex-1 flex items-center px-6 border-r border-border min-h-16">
					<Link to="/" className="flex items-center gap-2 group">
						<img
							src={header.logo.src}
							alt={header.logo.alt}
							className="h-8 w-auto object-contain"
						/>
						Contrasture
					</Link>
				</div>

				{/* Right Side - Links */}
				<div className="flex items-stretch divide-x divide-border">
					<TooltipProvider>
						{header.links.map((link) => {
							const isActive = link.toggle?.active === true;
							const containerClass = "flex items-center justify-center px-6 md:px-8 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors";
							const content = link.label;
							const tooltipText = isActive ? link.toggle?.title : link.toggle?.inactiveTitle;

							return (
								<Tooltip key={link.label} delayDuration={100}>
									<TooltipTrigger asChild>
										{isActive ? (
											<Link
												to={link.href}
												className={cn(containerClass, "text-foreground cursor-pointer")}
											>
												{content}
											</Link>
										) : (
											<div
												className={cn(
													containerClass,
													"cursor-not-allowed opacity-60 hover:text-muted-foreground hover:bg-transparent"
												)}>
												{content}
											</div>
										)}
									</TooltipTrigger>
									{tooltipText && (
										<TooltipContent
											className="rounded-none ring-1 ring-border bg-background text-foreground"
											sideOffset={5}
										>
											{tooltipText}
										</TooltipContent>
									)}
								</Tooltip>
							);
						})}
					</TooltipProvider>

					{children && (
						<div className="flex items-center justify-center px-6 border-l border-border">
							{children}
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
