import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { AsteriskIcon } from "lucide-react";

interface FaqSectionProps {
	id: string;
	title: string;
	description: string;
	className?: string;
	children?: React.ReactNode;
	faqs?: Array<{
		id: string;
		question: string;
		answer: string;
	}>;
}

export default function FaqSection({
	id,
	title,
	description,
	className,
	children,
	faqs,
}: FaqSectionProps) {
	return (
		<section
			className={cn("max-w-7xl mx-auto px-4", className)}
			aria-label="Frequently Asked Questions"
		>
			{/* Section Header */}
			{(title || description) && (
				<div className="max-w-4xl mb-12">
					{title && <h2 className="text-3xl font-semibold mb-4">{title}</h2>}
					{description && (
						<p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
					)}
				</div>
			)}

			<Accordion type="single" collapsible className="w-full space-y-6" data-testid="faq-accordion">
				{faqs &&
					faqs.map((faq) => (
						<AccordionItem
							key={faq.id}
							value={faq.id}
							className="border-none"
							data-testid={`faq-item-${faq.id}`}
						>
							<AccordionTrigger
								className="flex items-start justify-start gap-4 py-2 text-left hover:no-underline group"
								aria-label={`Toggle answer for: ${faq.question}`}
							>
								<div className="shrink-0 mt-[2px]">
									<AsteriskIcon className="h-5 w-5 text-primary" />
								</div>
								<span className="text-lg md:text-xl transition-colors duration-200">
									{faq.question}
								</span>
							</AccordionTrigger>
							<AccordionContent className="pl-9 pb-4">
								<p className="text-zinc-500 text-base leading-relaxed max-w-2xl">{faq.answer}</p>
							</AccordionContent>
						</AccordionItem>
					))}
			</Accordion>
			{children}
		</section>
	);
}
