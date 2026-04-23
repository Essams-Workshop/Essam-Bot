"use client";

import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type variantType = "default" | "link" | "destructive" | "outline" | "secondary" | "ghost";

interface HeroSectionProps {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	cta?: {
		btnRight: {
			title: string;
			href: string;
			variant: variantType;
		};
		btnLeft: {
			title: string;
			href: string;
			variant: variantType;
		};
	};
	image?: {
		src: string;
		alt: string;
	};
}

export default function HeroSection({
	id,
	title,
	subtitle,
	description,
	cta,
	image,
}: HeroSectionProps) {
	return (
		<section id={id} className="container mx-auto px-4 py-12 md:py-24 lg:py-32 max-w-6xl relative">
			<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
				{/* Left Side */}
				<div className="flex-1 max-w-2xl space-y-8">
					<div className="space-y-4">
						{subtitle && (
							<p className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
								{subtitle}
							</p>
						)}
						<h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">{title}</h1>
					</div>
					<p className="text-xl text-muted-foreground leading-relaxed max-w-lg">{description}</p>
					<div className="flex flex-wrap gap-4 pt-2">
						{cta && cta.btnLeft && (
							<Button
								variant={cta.btnLeft.variant}
								size="lg"
								className="px-8 h-12 text-base"
								asChild
							>
								<a href={cta.btnLeft.href}>{cta.btnLeft.title}</a>
							</Button>
						)}
						{cta && cta.btnRight && (
							<Button
								variant={cta.btnRight.variant}
								size="lg"
								className="px-8 h-12 text-base"
								asChild
							>
								<a href={cta.btnRight.href}>{cta.btnRight.title}</a>
							</Button>
						)}
					</div>
				</div>

				{/* Right Side */}
				<div className="flex-1 w-full relative">
					{image && (
						<AspectRatio
							ratio={4 / 3}
							className="overflow-hidden bg-foreground/5 border border-border flex items-center justify-center"
						>
							Image Placeholder
						</AspectRatio>
					)}
				</div>
			</div>
		</section>
	);
}
