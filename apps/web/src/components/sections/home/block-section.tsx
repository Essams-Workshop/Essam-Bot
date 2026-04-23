import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";

interface BlockSectionProps {
	id: string;
	title: string;
	description: string;
	link?: {
		text: string;
		href: string;
	};
	className?: string;
	children?: React.ReactNode;
}

export default function BlockSection({
	id,
	title,
	description,
	link,
	className,
	children,
}: BlockSectionProps) {
	return (
		<section id={id} className={cn("container py-12 px-5 max-w-6xl mx-auto", className)}>
			<div className="mx-auto px-4">
				<div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">
					{/* Left Side - Content */}
					<div className="flex-1 w-full space-y-6">
						<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground">
							{title}
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed max-w-xl">{description}</p>
						{link && (
							<div className="pt-2">
								<a
									href={link.href}
									className="text-sm font-medium border-b border-foreground/20 pb-0.5 hover:border-foreground transition-colors"
								>
									{link.text}
									<ArrowRightIcon className="inline-block ml-1 h-4 w-4" />
								</a>
							</div>
						)}
					</div>
					{children && <div className="flex-1 w-full">{children}</div>}
				</div>
			</div>
		</section>
	);
}
