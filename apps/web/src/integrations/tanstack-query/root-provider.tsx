import { QueryClient } from "@tanstack/react-query";

export function getContext() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 1000 * 60 * 5, // 5 minutes
				retry: (failureCount, error: any) => {
					// NOTE: Only retry on server errors (5xx), not client errors (4xx).
					if (error?.status && error.status >= 400 && error.status < 500) {
						return false;
					}
					return failureCount < 3;
				},
			},
		},
	});

	return {
		queryClient,
	};
}

export function Provider({ children }: { children: React.ReactNode; queryClient: QueryClient }) {
	return <>{children}</>;
}
