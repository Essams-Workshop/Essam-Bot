import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AsteriskIcon } from "lucide-react";

interface TimelineSectionProps {
	id: string;
	title: string;
	description: string;
	items: Array<{
		title: string;
		description: string;
		date?: string;
	}>;
	className?: string;
	children?: React.ReactNode;
}

export default function TimelineSection({
	id,
	title,
	description,
	items,
	className,
	children,
}: TimelineSectionProps) {
	return (
		<section id={id} className={cn("py-12 space-y-8", className)}>
			{/* Section Header */}
			{(title || description) && (
				<div className="max-w-6xl mb-12">
					{title && <h2 className="text-3xl font-semibold mb-4">{title}</h2>}
					{description && (
						<p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
					)}
				</div>
			)}

			{/* Timeline */}
			<div className="relative border-l border-border ml-3 md:ml-4 space-y-12">
				{items?.map((item, index) => (
					<div key={index} className="relative pl-8 md:pl-12 group">
						<div className="absolute -left-[12px] top-1">
							<div
								className={cn(
									"flex items-center justify-center w-7 h-7 rounded-md border border-border",
									"bg-background shadow-none ring-1 ring-accent transition-all duration-300",
									"group-hover:border-primary group-hover:text-primary",
								)}
							>
								<AsteriskIcon className="w-6 h-auto" />
							</div>
						</div>
						<Card className="container border border-border shadow-none rounded-none bg-transparent px-6 hover:border-primary transition-colors duration-300">
							<CardContent className="p-0">
								<div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
									<div className="space-y-2 max-w-4xl">
										<h3 className="text-lg font-medium leading-none">{item.title}</h3>
										<p className="text-muted-foreground leading-relaxed">{item.description}</p>
									</div>
									{/* Date/Tag */}
									{item.date && (
										<span className="text-sm text-muted-foreground font-mono shrink-0 md:text-right p-1">
											{item.date}
										</span>
									)}
								</div>
							</CardContent>
						</Card>
					</div>
				))}
				{children}
			</div>
		</section>
	);
}
