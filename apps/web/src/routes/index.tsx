import { DefaultUnderConstruction } from "@/components/not-found";
import BlockSection from "@/components/sections/home/block-section";
import FaqSection from "@/components/sections/home/faq-section";
import FeaturesSection from "@/components/sections/home/feature-section";
import HeroSection from "@/components/sections/home/hero-section";
import TimelineSection from "@/components/sections/home/roadmap-section";
import { Separator } from "@/components/ui/separator";
import { homeConfig } from "@/lib/config";
import { createFileRoute } from "@tanstack/react-router";
import WaitlistSection from "../components/sections/home/waitlist-section";

export const Route = createFileRoute("/")({
	component: Home,
	loader: async () => { },
	notFoundComponent: () => <DefaultUnderConstruction />,
});

function Home() {
	const { hero, roadmap, faq, features, waitlist } = homeConfig.sections;

	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<HeroSection
				id={hero.id}
				title={hero.title}
				subtitle={hero.subtitle}
				description={hero.description}
				cta={hero.content.cta}
				image={hero.content.image}
			/>

			{/* Integrations Section */}
			<Separator className="my-12" />
			<BlockSection
				id="contexture-integrations"
				title="Countless Integrations"
				description="Our architecture is designed to handle a wide range of data sources and formats, ensuring seamless integration with your existing tools and workflows."
				link={{ text: "Checkout Integrations List", href: "/integrations" }}
			>
				<img
					src="/images/Integrations-Illustration.webp"
					alt="Countless Integrations Illustration"
					className="w-lg h-auto object-contain"
				/>
			</BlockSection>

			{/* Timeline Section */}
			<Separator className="my-12" />
			<TimelineSection
				id={roadmap.id}
				title={roadmap.title}
				description={roadmap.description}
				items={roadmap.content.roadmap}
				className="p-8 md:p-12 max-w-6xl mx-auto"
			/>

			{/* Feature Section */}
			<Separator className="my-12" />
			<FeaturesSection
				id={features.id}
				title={features.title}
				description={features.description}
				highlights={features.content.highlights}
				className="max-w-6xl mx-auto"
			/>

			{/* FAQ Section */}
			<Separator className="my-12" />
			<FaqSection
				id={faq.id}
				title={faq.title}
				description={faq.description}
				faqs={faq.content.faqs}
				className="p-8 md:p-12 max-w-6xl mx-auto"
			/>

			{/* Waitlist Section */}
			<Separator className="my-12" />
			<WaitlistSection
				id={waitlist.id}
				title={waitlist.title}
				description={waitlist.description}
				placeholder={waitlist.content.placeholder}
				className="p-8 md:p-12 max-w-6xl mx-auto"
			/>
		</div>
	);
}
