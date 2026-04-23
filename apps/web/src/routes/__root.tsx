import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";
import { DefaultUnderConstruction } from "@/components/not-found";
import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { Toaster } from "sonner";
import appCss from "../globals.css?url";

// FIXME: Devtools show up during production, should be disabled in prod.
// import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
// import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";

interface RouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Contrasture - Building context for a new generation of agents.",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	component: RootLayout,
	notFoundComponent: () => <DefaultUnderConstruction />,
});

function RootLayout() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning={true}
			className="no-scrollbar scroll-smooth antialiased"
		>
			<head>
				<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<meta name="apple-mobile-web-app-title" content="Contextures" />
				<link rel="manifest" href="/site.webmanifest" />
				<HeadContent />
			</head>

			<body>
				<div className="flex-1 w-full flex flex-col">
					<main className="flex-1 w-full relative">
						<div className="mx-auto border-x border-border max-w-7xl min-h-screen">
							<Header />
							{children}
							<Footer />
						</div>
					</main>
				</div>
				<Toaster />
				<Scripts />
			</body>
		</html>
	);
}
