import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/docs/section-heading";
import { DefaultUnderConstruction } from "@/components/not-found";

export const Route = createFileRoute("/resources/cookie-policy")({
	component: CookiePolicyPage,
	loader: async () => { },
	notFoundComponent: () => <DefaultUnderConstruction />,
});

function CookiePolicyPage() {
	const currentDate = new Date().toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<div className="min-h-screen bg-background">
			<main className="max-w-4xl mx-auto px-6 py-12">
				<div className="prose prose-invert max-w-none">
					{/* Header */}
					<section className="mb-16">
						<SectionHeading level={1} id="cookie-policy">
							Cookie Policy
						</SectionHeading>
						<p className="text-muted-foreground mb-4">Last updated: {currentDate}</p>
						<p className="text-foreground leading-relaxed mb-4">
							This Cookie Policy explains how Contrasture ("we," "our," or "us") uses
							cookies and similar tracking technologies when you visit our website and
							use our services.
						</p>
					</section>

					{/* What Are Cookies */}
					<section id="what-are-cookies" className="mb-16">
						<SectionHeading id="what-are-cookies">What Are Cookies</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							Cookies are small text files that are placed on your device when you visit a website.
							They are widely used to make websites work more efficiently and provide information to
							website owners. Cookies can be "persistent" (remain on your device until deleted or
							expired) or "session" cookies (deleted when you close your browser).
						</p>
						<p className="text-foreground leading-relaxed mb-4">
							We also use similar technologies such as web beacons, pixel tags, and local storage,
							which function similarly to cookies.
						</p>
					</section>

					{/* How We Use Cookies */}
					<section id="how-we-use-cookies" className="mb-16">
						<SectionHeading id="how-we-use-cookies">How We Use Cookies</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							We use cookies and similar technologies for the following purposes:
						</p>

						<h3 className="text-2xl font-semibold mb-3 mt-8 text-foreground">Essential Cookies</h3>
						<p className="text-foreground leading-relaxed mb-4">
							These cookies are necessary for the website to function properly. They enable core
							functionality such as security, network management, and accessibility. You cannot
							opt-out of these cookies as they are essential for the website to work.
						</p>
						<ul className="space-y-2 list-disc pl-6 mb-6">
							<li className="text-foreground">Authentication and session management</li>
							<li className="text-foreground">Security and fraud prevention</li>
							<li className="text-foreground">Load balancing and performance</li>
						</ul>

						<h3 className="text-2xl font-semibold mb-3 mt-8 text-foreground">Analytics Cookies</h3>
						<p className="text-foreground leading-relaxed mb-4">
							These cookies help us understand how visitors interact with our website by collecting
							and reporting information anonymously. This helps us improve our website and user
							experience.
						</p>
						<ul className="space-y-2 list-disc pl-6 mb-6">
							<li className="text-foreground">Page views and navigation patterns</li>
							<li className="text-foreground">Time spent on pages</li>
							<li className="text-foreground">Error tracking and debugging</li>
							<li className="text-foreground">User flow analysis</li>
						</ul>

						<h3 className="text-2xl font-semibold mb-3 mt-8 text-foreground">Functional Cookies</h3>
						<p className="text-foreground leading-relaxed mb-4">
							These cookies enable enhanced functionality and personalization. They may be set by us
							or by third-party providers whose services we have added to our pages.
						</p>
						<ul className="space-y-2 list-disc pl-6 mb-6">
							<li className="text-foreground">User preferences and settings</li>
							<li className="text-foreground">Language selection</li>
							<li className="text-foreground">Remembering your choices</li>
						</ul>

						<h3 className="text-2xl font-semibold mb-3 mt-8 text-foreground">Marketing Cookies</h3>
						<p className="text-foreground leading-relaxed mb-4">
							These cookies are used to track visitors across websites to display relevant
							advertisements and measure the effectiveness of our marketing campaigns.
						</p>
						<ul className="space-y-2 list-disc pl-6 mb-6">
							<li className="text-foreground">Ad targeting and personalization</li>
							<li className="text-foreground">Campaign performance measurement</li>
							<li className="text-foreground">Cross-site tracking (if applicable)</li>
						</ul>
					</section>

					{/* Third-Party Cookies */}
					<section id="third-party-cookies" className="mb-16">
						<SectionHeading id="third-party-cookies">Third-Party Cookies</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							In addition to our own cookies, we may also use various third-party cookies to report
							usage statistics, deliver advertisements, and provide other services. These third
							parties may include:
						</p>
						<ul className="space-y-2 list-disc pl-6 mb-6">
							<li className="text-foreground">
								Analytics providers (e.g., Google Analytics, if used)
							</li>
							<li className="text-foreground">Advertising networks</li>
							<li className="text-foreground">Social media platforms</li>
							<li className="text-foreground">Content delivery networks</li>
						</ul>
						<p className="text-foreground leading-relaxed mb-4">
							These third parties may use cookies to collect information about your online
							activities across different websites. We do not control these third-party cookies, and
							you should review their respective privacy and cookie policies.
						</p>
					</section>

					{/* Cookie Duration */}
					<section id="cookie-duration" className="mb-16">
						<SectionHeading id="cookie-duration">Cookie Duration</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							Cookies may be either "persistent" or "session" cookies:
						</p>
						<ul className="space-y-2 list-disc pl-6 mb-6">
							<li className="text-foreground">
								<strong>Session cookies:</strong> These are temporary cookies that expire when you
								close your browser. They help maintain your session while navigating our website.
							</li>
							<li className="text-foreground">
								<strong>Persistent cookies:</strong> These remain on your device for a set period or
								until you delete them. They help us recognize you when you return to our website and
								remember your preferences.
							</li>
						</ul>
					</section>

					{/* Managing Cookies */}
					<section id="managing-cookies" className="mb-16">
						<SectionHeading id="managing-cookies">Managing Cookies</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							You have the right to decide whether to accept or reject cookies. You can exercise
							your cookie rights by setting your browser preferences. Most browsers allow you to:
						</p>
						<ul className="space-y-2 list-disc pl-6 mb-6">
							<li className="text-foreground">
								See what cookies you have and delete them individually
							</li>
							<li className="text-foreground">Block third-party cookies</li>
							<li className="text-foreground">Block all cookies from specific sites</li>
							<li className="text-foreground">Block all cookies</li>
							<li className="text-foreground">Delete all cookies when you close your browser</li>
						</ul>
						<p className="text-foreground leading-relaxed mb-4">
							Please note that blocking or deleting cookies may impact your experience on our
							website. Some features may not function properly if cookies are disabled.
						</p>

						<h3 className="text-2xl font-semibold mb-3 mt-8 text-foreground">
							Browser-Specific Instructions
						</h3>
						<div className="bg-muted/50 border border-border rounded-lg p-6 my-6">
							<p className="text-sm text-muted-foreground mb-4">
								To manage cookies in your browser, please refer to the following links:
							</p>
							<ul className="space-y-2 list-disc pl-6">
								<li className="text-foreground">
									<a
										href="https://support.google.com/chrome/answer/95647"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										Google Chrome
									</a>
								</li>
								<li className="text-foreground">
									<a
										href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										Mozilla Firefox
									</a>
								</li>
								<li className="text-foreground">
									<a
										href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										Safari
									</a>
								</li>
								<li className="text-foreground">
									<a
										href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										Microsoft Edge
									</a>
								</li>
							</ul>
						</div>
					</section>

					{/* Do Not Track Signals */}
					<section id="do-not-track" className="mb-16">
						<SectionHeading id="do-not-track">Do Not Track Signals</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							Some browsers include a "Do Not Track" (DNT) feature that signals to websites you
							visit that you do not want to have your online activity tracked. Currently, there is
							no standard for how DNT signals should be interpreted. As a result, our website does
							not currently respond to DNT browser signals or mechanisms.
						</p>
					</section>

					{/* Updates to This Policy */}
					<section id="updates" className="mb-16">
						<SectionHeading id="updates">Updates to This Cookie Policy</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							We may update this Cookie Policy from time to time to reflect changes in our practices
							or for other operational, legal, or regulatory reasons. We will notify you of any
							material changes by posting the new Cookie Policy on this page and updating the "Last
							updated" date.
						</p>
						<p className="text-foreground leading-relaxed mb-4">
							You are advised to review this Cookie Policy periodically for any changes. Changes to
							this Cookie Policy are effective when they are posted on this page.
						</p>
					</section>

					{/* Contact Us */}
					<section id="contact" className="mb-16">
						<SectionHeading id="contact">Contact Us</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							If you have any questions about our use of cookies or this Cookie Policy, please
							contact us:
						</p>
						<div className="bg-muted/50 border border-border rounded-lg p-6 my-6">
							<p className="text-foreground mb-2">
								<strong>Email:</strong> privacy@contrasture.com
							</p>
							<p className="text-foreground">
								<strong>Company:</strong> Contrasture & Agora Edu
							</p>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}
