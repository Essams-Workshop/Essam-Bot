/// <reference types="vite/client" />

interface ImportMetaEnv {
	// General Configuration
	readonly VITE_APP_ENV?: "dev" | "prod";

	// Social Configuration
	readonly VITE_X_URL?: string;
	readonly VITE_DISCORD_URL?: string;
	readonly VITE_GITHUB_URL?: string;

	// Resend Configuration (Email Service)
	readonly VITE_RESEND_API_KEY?: string;
	readonly VITE_RESEND_FROM_EMAIL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
