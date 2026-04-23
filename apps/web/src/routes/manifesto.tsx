import { DefaultUnderConstruction } from "@/components/not-found";
import { ManifestoMissionStatement } from "@/components/sections/manifesto/manifesto-mission-statement";
import { ManifestoPrinciples } from "@/components/sections/manifesto/manifesto-principles";
import { manifestoConfig } from "@/lib/config";
import { createFileRoute } from "@tanstack/react-router";
import { ManifestoEthicsGuidelines } from '../components/sections/manifesto/manifesto-ethics-guidelines';

export const Route = createFileRoute("/manifesto")({
	component: ManifestoPage,
	loader: async () => { },
	notFoundComponent: () => <DefaultUnderConstruction />,
});

function ManifestoPage() {
	const { sections } = manifestoConfig;

	return (
		<div className="min-h-screen bg-background">
			<main className="max-w-4xl mx-auto px-4 pb-20">
				{/* Reason */}
				<section id="contrasture-manifest-reason" className="my-20 space-y-8">
					<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
						Agents were promised to automate our work, solve complex problems, and collaborate seamlessly.
					</p>
					<p className="text-lg md:text-xl text-foreground leading-relaxed">
						But here's the reality: <span className="text-primary font-medium">most agents are blind and clueless.</span>
					</p>

					<div className="border-l-2 border-primary pl-6 space-y-4 max-w-3xl">
						<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
							They don't understand your codebase. They can't see the bigger picture.
							Every conversation starts from zero, even with all the RAG you throw
							at it. We've watched teams build incredible systems, only to see them
							hallucinate, forget context mid-task, and fail at basic coordination.
						</p>
					</div>

					<p className="text-lg text-foreground/90 font-medium">
						That to us, is not a model problem. It's a context problem.
					</p>
				</section>

				{/* Mission Statement */}
				<ManifestoMissionStatement
					id={sections.mission.id}
					title={sections.mission.title}
					description={sections.mission.description}
					content={sections.mission.content}
				/>

				{/* Core Principles */}
				<ManifestoPrinciples
					id={sections.principles.id}
					title={sections.principles.title}
					description={sections.principles.description}
					content={sections.principles.content}
				/>

				{/* Ethics and Guidelines */}
				<ManifestoEthicsGuidelines
					id={sections.ethicsAndGuidelines.id}
					title={sections.ethicsAndGuidelines.title}
					description={sections.ethicsAndGuidelines.description}
					content={sections.ethicsAndGuidelines.content}
				/>

				{/* Conclusion */}
				<div className="mt-10 text-xl md:text-2xl text-foreground leading-relaxed font-semibold">
					{sections.conclusion}
				</div>
			</main>
		</div >
	);
}