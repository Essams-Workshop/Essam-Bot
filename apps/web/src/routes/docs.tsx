import { createFileRoute } from "@tanstack/react-router";
// import { DocsLayout } from "@/components/docs/docs-layout";
// import { DocsContent } from "@/components/docs/docs-content";
import { DefaultUnderConstruction } from "@/components/not-found";

export const Route = createFileRoute("/docs")({
	component: () => <DefaultUnderConstruction />,
});

// NOTE: Removed DocsPage content for now, as we prefer to use mkdocs for our documentation instead.
// function DocsPage() {
// 	return (
// 		<DocsLayout>
// 			<DocsContent />
// 		</DocsLayout>
// 	);
// }
