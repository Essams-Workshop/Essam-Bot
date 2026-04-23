import { Program, ProgramType, ProgramCommitment, ProgramDelivery } from "@/types/program";

// ... existing imports ...
import {
	ActivityIcon,
	BotIcon,
	CableIcon,
	GaugeIcon,
	LayoutTemplateIcon,
	NetworkIcon,
} from "lucide-react";

interface SectionConfig {
	id: string;
	title: string;
	description: string;
	content: Record<string, unknown>;
	visible?: boolean;
}

interface SocialLinks {
	github?: string;
	twitter?: string;
	linkedin?: string;
	instagram?: string;
	youtube?: string;
}

interface PageConfig {
	title: string;
	description: string;
	sections: any;
	// FIXME: Not sure if we need meta, seo.
	meta?: {
		author?: string;
		published?: string;
		modified?: string;
		canonicalUrl?: string;
	};
	seo?: {
		title?: string;
		description?: string;
		keywords?: string[];
		ogImage?: string;
		twitterCard?: string;
	};
}

interface SiteConfig {
	name: string;
	description: string;
	url: string;
	keywords?: string[];
	links?: SocialLinks;
	pages: Record<string, PageConfig>;
}

export const siteConfig: SiteConfig = {
	name: "Contrasture",
	description: "",
	url: "https://context.constrasture.com/",
	links: {
		github: "",
		twitter: "",
		linkedin: "",
		instagram: "",
		youtube: "",
	},
	pages: {},
};

export const homeConfig: PageConfig = {
	title: "Contrasture",
	description: "Building context for a new generation of agents",
	sections: {
		hero: {
			id: "contrasture-hero",
			title: "Contrasture",
			subtitle: "Building context for a new generation of agents",
			description:
				"A platform designed to empower AI agents with rich, contextual information, enabling them to perform complex tasks more effectively.",
			content: {
				cta: {
					btnRight: {
						title: "Join Waitlist",
						href: "#contrasture-waitlist",
						variant: "default",
					},
					btnLeft: {
						title: "Read Docs",
						href: "/docs",
						variant: "outline",
					},
				},
				image: {
					src: "/images/hero-image.png",
					alt: "Contrasture Hero Image",
				},
			},
			visible: true,
		},
		features: {
			id: "contrasture-features",
			title: "Features",
			description: "Explore the key capabilities that make Contrasture unique.",
			content: {
				highlights: [
					{
						id: 1,
						title: "Universal Model Integrations",
						description:
							"Seamless connectivity with leading providers including OpenRouter, Anthropic, Gemini, and ChatGPT, all in one place.",
						icon: <CableIcon />,
					},
					{
						id: 2,
						title: "Ephemeral Knowledge Graph",
						description:
							" A Zettelkasten-inspired retreival system with optional ephemeral sessions that builds secure, time-boxed project contexts. Perfect for collaboration without long-term data lock-in.",
						icon: <NetworkIcon />,
					},
					{
						id: 3,
						title: "Multi-Agent Architecture",
						description:
							"A robust framework for orchestrating cooperative agent workflows and enabling complex protocols.",
						icon: <BotIcon />,
					},
					{
						id: 4,
						title: "Deep Observability",
						description:
							"Native integration with Langfuse to provide real-time monitoring of agent traces, costs, and performance, giving teams full visibility and control.",
						icon: <ActivityIcon />,
					},
					{
						id: 5,
						title: "Frontend Components",
						description:
							"Deployment-ready landing page modules and UI kits designed to accelerate agent-focused product development.",
						icon: <LayoutTemplateIcon />,
					},
					{
						id: 6,
						title: "Benchmarking & Testing",
						description:
							"Comprehensive suites to validate agent behavior, measure performance metrics, and ensure reliability across diverse tasks.",
						icon: <GaugeIcon />,
					},
				],
			},
			visible: true,
		},
		roadmap: {
			id: "contrasture-roadmap",
			title: "Our Roadmap",
			description: `Contrasture is building the future of long-context LLM agents, or we wouldn't be here otherwise. 
			We've understood that agents today struggle with long contexts, complex tasks, and hallucinations.
			Here's our roadmap to tackling these challenges head-on.`,
			content: {
				roadmap: [
					{
						id: 1,
						title: "Phase 0: Learning and Research.",
						description: `Exploring SDK and API design to 
						faciliate easy integration and interaction with our platform, 
						while laying the foundation for scalable infrastructure.`,
						dated: "2025-11-01",
					},
					{
						id: 2,
						title: "Phase 1: Building the SDK, APIs, and Core Infrastructure",
						description: `Delivering robust developer tools 
						and infrastructure to support diverse agent workflows.`,
						dated: "2025-11-21",
					},
					{
						id: 3,
						title: "Phase 2: Beta Launch and Feedback",
						description: `Releasing a beta version of our platform to gather
						valuable user feedback and use it to iteratively refine the platform.`,
						dated: "",
					},
					{
						id: 4,
						title: "Future Phases",
						description: "More details coming soon. Stay tuned!",
						dated: "",
					},
					{
						id: 5,
						title: "Future Phases",
						description: "More details coming soon. Stay tuned!",
						dated: "",
					},
				],
			},
			visible: true,
		},
		faq: {
			id: "contrasture-faq",
			title: "Frequently Asked Questions",
			description: "Answers to common questions about Contrasture",
			content: {
				faqs: [
					// TODO: Fix this FAQs section with proper questions and answers.
					{
						id: 1,
						question: "What is Contrasture?",
						answer:
							"Contrasture is a platform built for the next generation of AI agents. It helps them handle long contexts, complex tasks, and reduces hallucinations.",
					},
					{
						id: 2,
						question: "How does Contrasture differ from other AI platforms?",
						answer:
							"Unlike traditional AI platforms, Contrasture is specifically designed to handle long contexts and complex tasks with greater efficiency, while emphasizing multi-agent collaboration, deep observability, and context-rich reasoning.",
					},
					{
						id: 3,
						question: "What is the roadmap for Contrasture?",
						answer:
							"Our roadmap includes phases for developing robust SDK and APIs, setting up core infrastructure, launching a beta version, and continuous iteration based on user feedback.",
					},
					{
						id: 4,
						question: "When will Contrasture be available?",
						answer:
							"Contrasture is currently under development, with a beta version expected to launch soon! Exact dates will be announced as they are confirmed.",
					},
					{
						id: 5,
						question: "How can I get involved with Contrasture?",
						answer:
							"Sign up for the waitlist to stay updated on the latest developments and be among the first to experience Contrasture when it launches.",
					},
					{
						id: 6,
						question: "What technologies power Contrasture?",
						answer:
							"Contrasture leverages advanced AI, machine learning, and knowledge graph technologies to enhance the performance of long-context LLM agents.",
					},
				],
			},
			visible: true,
		},
		waitlist: {
			id: "contrasture-waitlist",
			title: "Contrasture will be available on all major distributions soon.",
			description:
				"Join our waitlist to stay updated on the latest developments and be among the first to experience Contrasture when it launches.",
			content: {
				placeholder: {
					email: "Your Email...We won't spam you!",
					userName: "Your Name",
					buttonText: "Join Waitlist",
				},
			},
			visible: true,
		},
	},
};

export const headerConfig = {
	header: {
		logo: {
			src: "contrasture-logo-outline.png",
			alt: "Contrasture Logo",
		},
		links: [
			{
				label: "Docs",
				href: "/docs",
				toggle: {
					title: "Read Our Docs",
					inactiveTitle: "Docs Coming Soon",
					active: false
				}
			},
			{
				label: "Manifesto",
				href: "/manifesto",
				toggle: {
					title: "Read Our Manifesto",
					inactiveTitle: "Manifesto Coming Soon",
					active: true
				}
			},
			{
				label: "Programs",
				href: "/programs",
				toggle: {
					title: "Explore Programs",
					inactiveTitle: "Programs Coming Soon",
					active: true
				}
			},
			{
				label: "Login",
				href: "/auth",
				toggle: {
					title: "Login",
					inactiveTitle: "Login coming soon",
					active: true
				}
			}
		],
	},
};

export const footerConfig = {
	footer: {
		id: "contrasture-footer",
		title: "Build the future of long-context agents.",
		content: {
			copyright: {
				text: `© ${new Date().getFullYear()} Contrasture by Contrasture & Agora Edu. All rights reserved.`,
			},
			links: [
				{
					id: 1,
					label: "Privacy Policy",
					to: "/resources/privacy-policy",
				},
				{
					id: 2,
					label: "Terms of Service",
					to: "/resources/terms-of-service",
				},
				{
					id: 3,
					label: "Cookie Policy",
					to: "/resources/cookie-policy",
				},
			],
			socials: [
				{
					label: "GitHub",
					value: "0K", // NOTE: This value should be dynamically fetched from Github.
					href: import.meta.env.VITE_GITHUB_URL || "",
					toggle: {
						title: "Contribute on GitHub",
						inactiveTitle: "GitHub Organization is Private (For Now!)",
						active: false,
					},
				},
				{
					label: "Docs",
					href: "/docs",
					toggle: {
						title: "Read Our Docs",
						inactiveTitle: "Docs Coming Soon",
						active: false,
					},
				},
				{
					label: "Discord",
					href: import.meta.env.VITE_DISCORD_URL || "",
					toggle: {
						title: "Join Our Discord",
						inactiveTitle: "Discord Community Coming Soon",
						active: false,
					},
				},
				{
					label: "X",
					href: import.meta.env.VITE_X_URL || "",
					toggle: {
						title: "Follow Us on X",
						inactiveTitle: "X Community Coming Soon",
						active: true,
					},
				},
			],
		},
		visible: true,
	},
};

export const manifestoConfig: PageConfig = {
	title: "We Want Better Agents, and That Starts with Better Context.",
	description: "Agents will only perform as well as the context they have.",
	sections: {
		mission: {
			id: "contrasture-manifest-mission-statement",
			title: "Why we're building Contrasture?",
			description: "Agents today are blind to everything thrown at them, and that's a huge problem.",
			content: (
				<div>
					<p className="text-lg text-muted-foreground leading-relaxed mb-6">
						We believe agents should understand everything you throw at them,
						yet today, they still have troubles understanding menial task you
						set them out to do. They hallucinate, forget context mid-task,
						sometimes even refuse to help at all. Contrasture exists to
						solve this problem, by giving agents <span className="text-primary font-semibold">RAG, MCPs, our own
							knowledge graphs, and situational awareness</span> to actually
						get the work done. When agents understand your requirements, your
						data, your goals, everything changes. They stop being clueless,
						and start being real collaborators.
					</p>

					<div className="bg-card border border-border rounded-lg p-6">
						<p className="text-lg text-foreground italic">
							"The future won't reward the biggest model. It'll reward the best understanding."
						</p>
					</div>
				</div>
			),
		},
		principles: {
			id: "contrasture-manifest-principles",
			title: "Our Principles",
			description: "The core beliefs that guide everything we do.",
			content: (
				<ol className="space-y-8 list-none counter-reset">
					<li>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							1. Context is King
						</h3>
						<p className="text-muted-foreground leading-relaxed">
							Raw intelligence without context is useless. A brilliant
							agent that doesn't understand your project is just an
							expensive autocomplete. We prioritize rich,
							relevant context above all else.
						</p>
					</li>

					<li>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							2. Ephemeral by Default
						</h3>
						<p className="text-muted-foreground leading-relaxed">
							Your data shouldn't live forever on someone else's
							servers. Our ephemeral knowledge graphs give you powerful
							context without permanent data lock-in. Use it when you
							need it, and when you don't? Just let it go.
						</p>
					</li>

					<li>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							3. Agents Should Collaborate, not Compete
						</h3>
						<p className="text-muted-foreground leading-relaxed">
							The best work happens when specialized agents work together.
							Our multi-agent architecture enables cooperation over
							isolation, orchestration over chaos.
						</p>
					</li>

					<li>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							4. Observability is NON-NEGOTIABLE
						</h3>
						<p className="text-muted-foreground leading-relaxed">
							You can't trust what you can't see. Every agent action,
							every decision, every cost should be visible and traceable.
							Black boxes belong in flight recorders, not AI systems.
						</p>
					</li>

					<li>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							5. Build for Builders
						</h3>
						<p className="text-muted-foreground leading-relaxed">
							We're developers building for developers. Clean APIs,
							sensible defaults, escape hatches when you need them.
							The tool should get out of your way, and let you
							do what you do best: build.
						</p>
					</li>
				</ol>
			)
		},
		ethicsAndGuidelines: {
			id: "contrasture-manifest-ethics-principles",
			title: "Ethics and Guidelines",
			description: "We're building powerful tech, and that comes with a heavy responsibility. Here's what we commit to:",
			content: (
				<ul className="space-y-8 list-none">
					<li className="border-l-2 border-primary pl-6">
						<h3 className="text-lg font-semibold text-foreground mb-2">
							Your data, Your Control
						</h3>
						<p className="text-muted-foreground">
							We don't train on your data. We don't sell your data.
							You decide what stays, what gets processed, and what
							gets deleted. Period.
						</p>
					</li>

					<li className="border-l-2 border-primary pl-6">
						<h3 className="text-lg font-semibold text-foreground mb-2">
							Transparency Over Magic
						</h3>
						<p className="text-muted-foreground">
							When an agent makes a decision, you should know why.
							We're committed to building a system thats
							transparent and shows a clear audit to trails
							over a black-box with no idea what's going
							on inside.
						</p>
					</li>

					<li className="border-l-2 border-primary pl-6">
						<h3 className="text-lg font-semibold text-foreground mb-2">
							Human in the Loop
						</h3>
						<p className="text-muted-foreground">
							AI should augment human capability, not replace human
							judgement. Critical decisions should always be made
							by a human and should always have the right to be
							made by a human. Automation is a tool, not a
							replacement for thinking.
						</p>
					</li>

					<li className="border-l-2 border-primary pl-6">
						<h3 className="text-lg font-semibold text-foreground mb-2">
							Security-First Foundation
						</h3>
						<p className="text-muted-foreground">
							Security isn't a feature, it's the foundation.
							Encryption at rest and in transit, minimal data
							retention, and continuous security audits are
							table stakes.
						</p>
					</li>

					<li className="border-l-2 border-primary pl-6">
						<h3 className="text-lg font-semibold text-foreground mb-2">
							Honest About Limitations
						</h3>
						<p className="text-muted-foreground">
							We know AI isn't magic. It makes mistakes.
							It hallucinates. We'll never oversell what's possible,
							and we'll always be upfront about the edges of what
							the technology can do. However, we will try our best
							to iterate and push the boundaries of what's possible.
						</p>
					</li>
				</ul>
			)
		},
		conclusion: "The future of AI isn't just about smater agents, but agents that understand you and your world. Together, we can build the future."
	}
};

export const programsConfig: PageConfig = {
	title: "Graduate Programs",
	description: `Explore a wide variety of graduate programs and start your application journey today. Filter, find, and secure your future.`,
	sections: {
		programs: {
			id: "gradsearch-programs-list",
			list: [
				{
					id: "f83a45c3-1d9e-4c7b-b384-6e1c2a123f99",
					university_id: "u-1",
					field_id: "f-1",
					program_name: "Master of Computer Science",
					description: "Advanced study in algorithms, AI, and modern software engineering practices.",
					duration_months: 24,
					type: ProgramType.COURSE_BASED,
					commitment: ProgramCommitment.FULLTIME,
					tuition_estimate: 45000,
					application_deadline: "2026-12-15",
					min_gpa: 3.5,
					gpa_required: true,
					gre_required: false,
					eng_test_required: true,
					program_url: "https://example.edu/mcs",
					has_coop: true,
					locations: ["San Francisco, CA"],
					delivery: ProgramDelivery.IN_PERSON,
					status: "open",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-1",
						name: "University of Silicon Valley",
						city: "San Francisco",
						country: "USA",
						website_url: "https://example.edu",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
					university_id: "u-2",
					field_id: "f-2",
					program_name: "Master of Data Science",
					description: "Learn to analyze, interpret, and leverage complex data sets for strategic decision making.",
					duration_months: 18,
					type: ProgramType.RESEARCH_BASED,
					commitment: ProgramCommitment.FULLTIME,
					tuition_estimate: 38000,
					application_deadline: "2027-01-30",
					min_gpa: 3.2,
					gpa_required: true,
					gre_required: true,
					eng_test_required: false,
					program_url: "https://tech-inst.edu/mds",
					has_coop: false,
					locations: ["New York, NY", "Online"],
					delivery: ProgramDelivery.HYBRID,
					status: "open",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-2",
						name: "Tech Institute of New York",
						city: "New York",
						country: "USA",
						website_url: "https://tech-inst.edu",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "12345678-abcd-efgh-ijkl-9876543210ab",
					university_id: "u-3",
					field_id: "f-3",
					program_name: "MBA in Finance",
					description: "Comprehensive business administration program with a deep dive into corporate finance and markets.",
					duration_months: 24,
					type: ProgramType.COURSE_BASED,
					commitment: ProgramCommitment.PARTTIME,
					tuition_estimate: 65000,
					application_deadline: "2026-10-01",
					min_gpa: 3.0,
					gpa_required: true,
					gre_required: false,
					eng_test_required: false,
					program_url: "https://global-biz.edu/mba-finance",
					has_coop: false,
					locations: ["London, UK"],
					delivery: ProgramDelivery.IN_PERSON,
					status: "upcoming",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-3",
						name: "Global Business School",
						city: "London",
						country: "UK",
						website_url: "https://global-biz.edu",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "9f8e7d6c-5b4a-3f2e-1d0c-b9a8s7d6f5g4",
					university_id: "u-4",
					field_id: "f-1",
					program_name: "MS in Artificial Intelligence",
					description: "Specialized focus on machine learning, neural networks, and generative AI technologies.",
					duration_months: 12,
					type: ProgramType.THESIS,
					commitment: ProgramCommitment.FULLTIME,
					tuition_estimate: 55000,
					application_deadline: "2026-11-15",
					min_gpa: 3.8,
					gpa_required: true,
					gre_required: true,
					eng_test_required: true,
					program_url: "https://ai-university.edu/ms-ai",
					has_coop: true,
					locations: ["Online"],
					delivery: ProgramDelivery.ONLINE,
					status: "open",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-4",
						name: "AI University",
						city: "Boston",
						country: "USA",
						website_url: "https://ai-university.edu",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "aa11bb22-cc33-dd44-ee55-ff66gg77hh88",
					university_id: "u-5",
					field_id: "f-4",
					program_name: "MS in Cybersecurity",
					description: "Develop skills to protect critical infrastructure, secure networks, and handle cyber threats.",
					duration_months: 16,
					type: ProgramType.COURSE_BASED,
					commitment: ProgramCommitment.FLEXIBLE,
					tuition_estimate: 42000,
					application_deadline: "2027-03-01",
					min_gpa: 3.0,
					gpa_required: false,
					gre_required: false,
					eng_test_required: true,
					program_url: "https://cyber-college.ca/msc",
					has_coop: true,
					locations: ["Toronto, ON"],
					delivery: ProgramDelivery.HYBRID,
					status: "upcoming",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-5",
						name: "Cyber College",
						city: "Toronto",
						country: "Canada",
						website_url: "https://cyber-college.ca",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "11223344-5566-7788-9900-aabbccddeeff",
					university_id: "u-6",
					field_id: "f-5",
					program_name: "Master of Engineering Management",
					description: "Bridging the gap between engineering and management to lead technical teams.",
					duration_months: 20,
					type: ProgramType.COURSE_BASED,
					commitment: ProgramCommitment.FULLTIME,
					tuition_estimate: 50000,
					application_deadline: "2026-09-30",
					min_gpa: 3.3,
					gpa_required: true,
					gre_required: false,
					eng_test_required: false,
					program_url: "https://eng-management.edu/mem",
					has_coop: false,
					locations: ["Berlin, UK"],
					delivery: ProgramDelivery.IN_PERSON,
					status: "open",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-6",
						name: "Berlin School of Engineering",
						city: "Berlin",
						country: "Germany",
						website_url: "https://eng-management.edu",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},

				{
					id: "p-7",
					university_id: "u-7",
					field_id: "f-1",
					program_name: "Master of Software Engineering",
					description: "Focus on building large-scale software systems, agile methodologies, and cloud computing.",
					duration_months: 16,
					type: ProgramType.COURSE_BASED,
					commitment: ProgramCommitment.FULLTIME,
					tuition_estimate: 48000,
					application_deadline: "2026-11-01",
					min_gpa: 3.4,
					gpa_required: true,
					gre_required: false,
					eng_test_required: true,
					program_url: "https://seattle-tech.edu/mse",
					has_coop: true,
					locations: ["Seattle, WA"],
					delivery: ProgramDelivery.IN_PERSON,
					status: "open",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-7",
						name: "Seattle Institute of Technology",
						city: "Seattle",
						country: "USA",
						website_url: "https://seattle-tech.edu",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "p-8",
					university_id: "u-8",
					field_id: "f-6",
					program_name: "Master of Public Health (MPH)",
					description: "Prepares students for leadership roles in public health policy, epidemiology, and global health.",
					duration_months: 24,
					type: ProgramType.COURSE_BASED,
					commitment: ProgramCommitment.FULLTIME,
					tuition_estimate: 52000,
					application_deadline: "2026-12-01",
					min_gpa: 3.2,
					gpa_required: true,
					gre_required: true,
					eng_test_required: true,
					program_url: "https://jhu-medical.edu/mph",
					has_coop: false,
					locations: ["Baltimore, MD"],
					delivery: ProgramDelivery.IN_PERSON,
					status: "open",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-8",
						name: "Johns Hopkins Medical School",
						city: "Baltimore",
						country: "USA",
						website_url: "https://jhu-medical.edu",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "p-9",
					university_id: "u-9",
					field_id: "f-7",
					program_name: "MSc in Environmental Science",
					description: "Research-driven program focused on climate change, sustainability, and ecological conservation.",
					duration_months: 24,
					type: ProgramType.THESIS,
					commitment: ProgramCommitment.FULLTIME,
					tuition_estimate: 31000,
					application_deadline: "2027-01-15",
					min_gpa: 3.5,
					gpa_required: true,
					gre_required: false,
					eng_test_required: true,
					program_url: "https://ubc-science.ca/env",
					has_coop: true,
					locations: ["Vancouver, BC"],
					delivery: ProgramDelivery.IN_PERSON,
					status: "upcoming",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-9",
						name: "University of British Columbia",
						city: "Vancouver",
						country: "Canada",
						website_url: "https://ubc-science.ca",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "p-10",
					university_id: "u-10",
					field_id: "f-8",
					program_name: "Master of Architecture",
					description: "Advanced design studio program blending theoretical concepts with practical urban planning.",
					duration_months: 36,
					type: ProgramType.COURSE_BASED,
					commitment: ProgramCommitment.FULLTIME,
					tuition_estimate: 60000,
					application_deadline: "2027-02-01",
					min_gpa: 3.3,
					gpa_required: true,
					gre_required: true,
					eng_test_required: false,
					program_url: "https://ucl-arch.uk/march",
					has_coop: false,
					locations: ["London, UK"],
					delivery: ProgramDelivery.IN_PERSON,
					status: "open",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-10",
						name: "University College London",
						city: "London",
						country: "UK",
						website_url: "https://ucl-arch.uk",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "p-11",
					university_id: "u-11",
					field_id: "f-9",
					program_name: "Master of Fine Arts (MFA) in Creative Writing",
					description: "An intensive studio program focusing on fiction, poetry, and literary publishing.",
					duration_months: 24,
					type: ProgramType.COURSE_BASED,
					commitment: ProgramCommitment.FLEXIBLE,
					tuition_estimate: 35000,
					application_deadline: "2026-12-01",
					min_gpa: 3.0,
					gpa_required: false,
					gre_required: false,
					eng_test_required: true,
					program_url: "https://iowa-arts.edu/mfa",
					has_coop: false,
					locations: ["Iowa City, IA"],
					delivery: ProgramDelivery.HYBRID,
					status: "upcoming",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-11",
						name: "University of Iowa",
						city: "Iowa City",
						country: "USA",
						website_url: "https://iowa-arts.edu",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "p-12",
					university_id: "u-12",
					field_id: "f-10",
					program_name: "MSc in Quantum Computing",
					description: "Cutting-edge research and applications in quantum algorithms, cryptography, and hardware.",
					duration_months: 24,
					type: ProgramType.RESEARCH_BASED,
					commitment: ProgramCommitment.FULLTIME,
					tuition_estimate: 41000,
					application_deadline: "2026-11-30",
					min_gpa: 3.8,
					gpa_required: true,
					gre_required: true,
					eng_test_required: true,
					program_url: "https://ethz.ch/quantum",
					has_coop: false,
					locations: ["Zurich, Switzerland"],
					delivery: ProgramDelivery.IN_PERSON,
					status: "open",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-12",
						name: "ETH Zurich",
						city: "Zurich",
						country: "Switzerland",
						website_url: "https://ethz.ch",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "p-13",
					university_id: "u-13",
					field_id: "f-11",
					program_name: "Master of Laws (LLM)",
					description: "Advanced legal studies with specializations in international law, human rights, and corporate law.",
					duration_months: 12,
					type: ProgramType.COURSE_BASED,
					commitment: ProgramCommitment.FULLTIME,
					tuition_estimate: 72000,
					application_deadline: "2026-10-15",
					min_gpa: 3.6,
					gpa_required: true,
					gre_required: false,
					eng_test_required: true,
					program_url: "https://harvard-law.edu/llm",
					has_coop: false,
					locations: ["Cambridge, MA"],
					delivery: ProgramDelivery.IN_PERSON,
					status: "open",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-13",
						name: "Harvard Law School",
						city: "Cambridge",
						country: "USA",
						website_url: "https://harvard-law.edu",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "p-14",
					university_id: "u-14",
					field_id: "f-12",
					program_name: "MSc in Financial Engineering",
					description: "Quantitative finance program integrating mathematical modeling, computer science, and finance.",
					duration_months: 18,
					type: ProgramType.COURSE_BASED,
					commitment: ProgramCommitment.FULLTIME,
					tuition_estimate: 80000,
					application_deadline: "2027-01-05",
					min_gpa: 3.7,
					gpa_required: true,
					gre_required: true,
					eng_test_required: false,
					program_url: "https://columbia.edu/mfe",
					has_coop: true,
					locations: ["New York, NY"],
					delivery: ProgramDelivery.IN_PERSON,
					status: "upcoming",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-14",
						name: "Columbia University",
						city: "New York",
						country: "USA",
						website_url: "https://columbia.edu",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "p-15",
					university_id: "u-15",
					field_id: "f-13",
					program_name: "MSc in Robotics",
					description: "Interdisciplinary program covering mechanical engineering, AI, and control systems.",
					duration_months: 24,
					type: ProgramType.THESIS,
					commitment: ProgramCommitment.FULLTIME,
					tuition_estimate: 53000,
					application_deadline: "2026-12-10",
					min_gpa: 3.5,
					gpa_required: true,
					gre_required: true,
					eng_test_required: true,
					program_url: "https://cmu.edu/robotics",
					has_coop: false,
					locations: ["Pittsburgh, PA"],
					delivery: ProgramDelivery.IN_PERSON,
					status: "open",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-15",
						name: "Carnegie Mellon University",
						city: "Pittsburgh",
						country: "USA",
						website_url: "https://cmu.edu",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "p-16",
					university_id: "u-16",
					field_id: "f-14",
					program_name: "Master of Public Administration (MPA)",
					description: "Equips students for leadership in public service, government, and non-profit organizations.",
					duration_months: 24,
					type: ProgramType.COURSE_BASED,
					commitment: ProgramCommitment.PARTTIME,
					tuition_estimate: 46000,
					application_deadline: "2027-02-15",
					min_gpa: 3.2,
					gpa_required: true,
					gre_required: false,
					eng_test_required: false,
					program_url: "https://syracuse.edu/mpa",
					has_coop: false,
					locations: ["Online", "Syracuse, NY"],
					delivery: ProgramDelivery.ONLINE,
					status: "open",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-16",
						name: "Syracuse University",
						city: "Syracuse",
						country: "USA",
						website_url: "https://syracuse.edu",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "p-17",
					university_id: "u-17",
					field_id: "f-15",
					program_name: "MSc in Bioinformatics",
					description: "Applying computational techniques to analyze complex biological data and genetics.",
					duration_months: 24,
					type: ProgramType.RESEARCH_BASED,
					commitment: ProgramCommitment.FULLTIME,
					tuition_estimate: 34000,
					application_deadline: "2026-11-20",
					min_gpa: 3.4,
					gpa_required: true,
					gre_required: false,
					eng_test_required: true,
					program_url: "https://utoronto.ca/bioinfo",
					has_coop: true,
					locations: ["Toronto, ON"],
					delivery: ProgramDelivery.IN_PERSON,
					status: "upcoming",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-17",
						name: "University of Toronto",
						city: "Toronto",
						country: "Canada",
						website_url: "https://utoronto.ca",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "p-18",
					university_id: "u-18",
					field_id: "f-16",
					program_name: "Master of Social Work (MSW)",
					description: "Clinical and macro social work training for diverse populations and policy advocacy.",
					duration_months: 24,
					type: ProgramType.COURSE_BASED,
					commitment: ProgramCommitment.FLEXIBLE,
					tuition_estimate: 28000,
					application_deadline: "2027-03-15",
					min_gpa: 3.0,
					gpa_required: false,
					gre_required: false,
					eng_test_required: false,
					program_url: "https://umich.edu/msw",
					has_coop: true,
					locations: ["Ann Arbor, MI"],
					delivery: ProgramDelivery.HYBRID,
					status: "open",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-18",
						name: "University of Michigan",
						city: "Ann Arbor",
						country: "USA",
						website_url: "https://umich.edu",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "p-19",
					university_id: "u-19",
					field_id: "f-17",
					program_name: "Master of Urban Planning",
					description: "Design and policy strategies for sustainable and equitable urban development.",
					duration_months: 24,
					type: ProgramType.COURSE_BASED,
					commitment: ProgramCommitment.FULLTIME,
					tuition_estimate: 39000,
					application_deadline: "2027-01-10",
					min_gpa: 3.1,
					gpa_required: true,
					gre_required: false,
					eng_test_required: true,
					program_url: "https://mit.edu/dusp",
					has_coop: false,
					locations: ["Cambridge, MA"],
					delivery: ProgramDelivery.IN_PERSON,
					status: "open",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-19",
						name: "Massachusetts Institute of Technology",
						city: "Cambridge",
						country: "USA",
						website_url: "https://mit.edu",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "p-20",
					university_id: "u-20",
					field_id: "f-18",
					program_name: "MSc in Aerospace Engineering",
					description: "Advanced principles of aerodynamics, propulsion, and space systems design.",
					duration_months: 24,
					type: ProgramType.THESIS,
					commitment: ProgramCommitment.FULLTIME,
					tuition_estimate: 44000,
					application_deadline: "2026-12-05",
					min_gpa: 3.5,
					gpa_required: true,
					gre_required: true,
					eng_test_required: true,
					program_url: "https://stanford.edu/aero",
					has_coop: false,
					locations: ["Stanford, CA"],
					delivery: ProgramDelivery.IN_PERSON,
					status: "open",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-20",
						name: "Stanford University",
						city: "Stanford",
						country: "USA",
						website_url: "https://stanford.edu",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "p-21",
					university_id: "u-21",
					field_id: "f-19",
					program_name: "Master of Supply Chain Management",
					description: "Focus on logistics, operations research, and global supply network optimization.",
					duration_months: 12,
					type: ProgramType.COURSE_BASED,
					commitment: ProgramCommitment.FULLTIME,
					tuition_estimate: 55000,
					application_deadline: "2027-02-28",
					min_gpa: 3.3,
					gpa_required: true,
					gre_required: true,
					eng_test_required: false,
					program_url: "https://nus.edu.sg/scm",
					has_coop: true,
					locations: ["Singapore"],
					delivery: ProgramDelivery.IN_PERSON,
					status: "upcoming",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-21",
						name: "National University of Singapore",
						city: "Singapore",
						country: "Singapore",
						website_url: "https://nus.edu.sg",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "p-22",
					university_id: "u-22",
					field_id: "f-20",
					program_name: "MSc in Psychology",
					description: "Research-oriented program spanning cognitive, developmental, and clinical psychology.",
					duration_months: 24,
					type: ProgramType.RESEARCH_BASED,
					commitment: ProgramCommitment.FULLTIME,
					tuition_estimate: 21000,
					application_deadline: "2026-11-15",
					min_gpa: 3.6,
					gpa_required: true,
					gre_required: true,
					eng_test_required: true,
					program_url: "https://ox.ac.uk/psych",
					has_coop: false,
					locations: ["Oxford, UK"],
					delivery: ProgramDelivery.IN_PERSON,
					status: "open",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-22",
						name: "University of Oxford",
						city: "Oxford",
						country: "UK",
						website_url: "https://ox.ac.uk",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "p-23",
					university_id: "u-23",
					field_id: "f-21",
					program_name: "Master of Education (MEd)",
					description: "Prepares educators for administrative leadership, curriculum development, and policy.",
					duration_months: 18,
					type: ProgramType.COURSE_BASED,
					commitment: ProgramCommitment.PARTTIME,
					tuition_estimate: 25000,
					application_deadline: "2027-04-01",
					min_gpa: 3.0,
					gpa_required: false,
					gre_required: false,
					eng_test_required: false,
					program_url: "https://unimelb.edu.au/med",
					has_coop: false,
					locations: ["Online", "Melbourne, AUS"],
					delivery: ProgramDelivery.ONLINE,
					status: "open",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-23",
						name: "University of Melbourne",
						city: "Melbourne",
						country: "Australia",
						website_url: "https://unimelb.edu.au",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "p-24",
					university_id: "u-24",
					field_id: "f-22",
					program_name: "MSc in Biomedical Engineering",
					description: "Applying engineering principles to healthcare technologies and medical devices.",
					duration_months: 24,
					type: ProgramType.THESIS,
					commitment: ProgramCommitment.FULLTIME,
					tuition_estimate: 48000,
					application_deadline: "2026-12-15",
					min_gpa: 3.5,
					gpa_required: true,
					gre_required: true,
					eng_test_required: true,
					program_url: "https://imperial.ac.uk/bme",
					has_coop: true,
					locations: ["London, UK"],
					delivery: ProgramDelivery.IN_PERSON,
					status: "open",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-24",
						name: "Imperial College London",
						city: "London",
						country: "UK",
						website_url: "https://imperial.ac.uk",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "p-25",
					university_id: "u-25",
					field_id: "f-23",
					program_name: "Master of Data Analytics",
					description: "Practical program focused on business intelligence, big data tools, and analytics.",
					duration_months: 12,
					type: ProgramType.CERTIFICATE,
					commitment: ProgramCommitment.FLEXIBLE,
					tuition_estimate: 22000,
					application_deadline: "2027-05-01",
					min_gpa: 2.8,
					gpa_required: false,
					gre_required: false,
					eng_test_required: true,
					program_url: "https://waterloo.ca/mda",
					has_coop: true,
					locations: ["Waterloo, ON"],
					delivery: ProgramDelivery.HYBRID,
					status: "open",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-25",
						name: "University of Waterloo",
						city: "Waterloo",
						country: "Canada",
						website_url: "https://waterloo.ca",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
				{
					id: "p-26",
					university_id: "u-26",
					field_id: "f-24",
					program_name: "MSc in Renewable Energy",
					description: "Technical engineering program focusing on solar, wind, and sustainable power systems.",
					duration_months: 24,
					type: ProgramType.COURSE_BASED,
					commitment: ProgramCommitment.FULLTIME,
					tuition_estimate: 32000,
					application_deadline: "2027-02-01",
					min_gpa: 3.2,
					gpa_required: true,
					gre_required: false,
					eng_test_required: true,
					program_url: "https://kth.ch/energy",
					has_coop: false,
					locations: ["Stockholm, Sweden"],
					delivery: ProgramDelivery.IN_PERSON,
					status: "upcoming",
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
					deleted_at: null,
					university: {
						id: "u-26",
						name: "KTH Royal Institute of Technology",
						city: "Stockholm",
						country: "Sweden",
						website_url: "https://kth.se",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
						deleted_at: null,
					},
				},
			] as Program[],
		}
	}
}

export type homeConfig = typeof homeConfig;
export type manifestoConfig = typeof manifestoConfig;
export type programsConfig = typeof programsConfig;
export type { SectionConfig, PageConfig, SiteConfig, SocialLinks };