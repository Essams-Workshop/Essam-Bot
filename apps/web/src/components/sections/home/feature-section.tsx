import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeaturesSectionProps {
	id: string;
	title: string;
	description: string;
	highlights: Array<{
		title: string;
		description: string;
		icon?: React.ReactNode;
		badge?: string;
	}>;
	className?: string;
	children?: React.ReactNode;
}

export default function FeaturesSection({
	id,
	title,
	description,
	highlights,
	className,
	children,
}: FeaturesSectionProps) {
	return (
		<section id={id} className={cn("", className)}>
			<div className="container px-4 py-16 sm:px-6 md:py-24 lg:px-8">
				{/* Section Header */}
				{(title || description) && (
					<div className="max-w-4xl mb-12">
						{title && <h2 className="text-3xl font-semibold mb-4">{title}</h2>}
						{description && (
							<p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
						)}
					</div>
				)}

				{/* Highlights */}
				<div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{highlights &&
						highlights.map((highlight) => (
							<Card
								key={highlight.title}
								className="bg-transparent border-2 border-border hover:border-ring transition-all duration-200 rounded-none"
							>
								<CardHeader>
									{highlight.icon && (
										<span className="bg-primary/10 text-primary flex size-12 items-center justify-center">
											{highlight.icon}
										</span>
									)}
									<CardTitle className="text-lg font-semibold tracking-tight">
										{highlight.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground text-sm leading-6">{highlight.description}</p>
								</CardContent>
							</Card>
						))}
				</div>
			</div>
			{children}
		</section>
	);
}
