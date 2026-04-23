import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/docs/section-heading";

export const Route = createFileRoute("/resources/privacy-policy")({
	component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
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
						<SectionHeading level={1} id="privacy-policy">
							Privacy Policy
						</SectionHeading>
						<p className="text-muted-foreground mb-4">Last updated: {currentDate}</p>
						<p className="text-foreground leading-relaxed mb-4">
							At Contrasture ("we," "our," or "us"), we are committed to protecting
							your privacy. This Privacy Policy explains how we collect, use, disclose,
							and safeguard your information when you visit our website and use our
							services.
						</p>
					</section>

					{/* Information We Collect */}
					<section id="information-we-collect" className="mb-16">
						<SectionHeading id="information-we-collect">Information We Collect</SectionHeading>

						<h3 className="text-2xl font-semibold mb-3 mt-8 text-foreground">
							Personal Information
						</h3>
						<p className="text-foreground leading-relaxed mb-4">
							We may collect personal information that you voluntarily provide to us when you:
						</p>
						<ul className="space-y-2 list-disc pl-6 mb-6">
							<li className="text-foreground">Register for an account or join our waitlist</li>
							<li className="text-foreground">Subscribe to our newsletter or communications</li>
							<li className="text-foreground">
								Contact us through our website or support channels
							</li>
							<li className="text-foreground">Use our services or interact with our platform</li>
						</ul>
						<p className="text-foreground leading-relaxed mb-4">
							This information may include your name, email address, company name, and any other
							information you choose to provide.
						</p>

						<h3 className="text-2xl font-semibold mb-3 mt-8 text-foreground">Usage Data</h3>
						<p className="text-foreground leading-relaxed mb-4">
							We automatically collect certain information when you access and use our website,
							including:
						</p>
						<ul className="space-y-2 list-disc pl-6 mb-6">
							<li className="text-foreground">IP address and location data</li>
							<li className="text-foreground">Browser type and version</li>
							<li className="text-foreground">Device information</li>
							<li className="text-foreground">Pages visited and time spent on pages</li>
							<li className="text-foreground">Referring website addresses</li>
							<li className="text-foreground">Access times and dates</li>
						</ul>

						<h3 className="text-2xl font-semibold mb-3 mt-8 text-foreground">
							Cookies and Tracking Technologies
						</h3>
						<p className="text-foreground leading-relaxed mb-4">
							We use cookies and similar tracking technologies to track activity on our website and
							store certain information. You can instruct your browser to refuse all cookies or to
							indicate when a cookie is being sent. For more information, please see our Cookie
							Policy.
						</p>
					</section>

					{/* How We Use Your Information */}
					<section id="how-we-use-information" className="mb-16">
						<SectionHeading id="how-we-use-information">How We Use Your Information</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							We use the information we collect for various purposes, including:
						</p>
						<ul className="space-y-2 list-disc pl-6 mb-6">
							<li className="text-foreground">To provide, maintain, and improve our services</li>
							<li className="text-foreground">To process your requests and transactions</li>
							<li className="text-foreground">
								To send you updates, newsletters, and marketing communications (with your consent)
							</li>
							<li className="text-foreground">
								To respond to your inquiries and provide customer support
							</li>
							<li className="text-foreground">To monitor and analyze usage patterns and trends</li>
							<li className="text-foreground">
								To detect, prevent, and address technical issues and security threats
							</li>
							<li className="text-foreground">
								To comply with legal obligations and enforce our terms
							</li>
						</ul>
					</section>

					{/* Information Sharing and Disclosure */}
					<section id="information-sharing" className="mb-16">
						<SectionHeading id="information-sharing">
							Information Sharing and Disclosure
						</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							We do not sell, trade, or rent your personal information to third parties. We may
							share your information in the following circumstances:
						</p>

						<h3 className="text-2xl font-semibold mb-3 mt-8 text-foreground">Service Providers</h3>
						<p className="text-foreground leading-relaxed mb-4">
							We may share your information with third-party service providers who perform services
							on our behalf, such as hosting, analytics, email delivery, and customer support.
						</p>

						<h3 className="text-2xl font-semibold mb-3 mt-8 text-foreground">Legal Requirements</h3>
						<p className="text-foreground leading-relaxed mb-4">
							We may disclose your information if required to do so by law or in response to valid
							requests by public authorities.
						</p>

						<h3 className="text-2xl font-semibold mb-3 mt-8 text-foreground">Business Transfers</h3>
						<p className="text-foreground leading-relaxed mb-4">
							In the event of a merger, acquisition, or sale of assets, your information may be
							transferred as part of that transaction.
						</p>

						<h3 className="text-2xl font-semibold mb-3 mt-8 text-foreground">With Your Consent</h3>
						<p className="text-foreground leading-relaxed mb-4">
							We may share your information with your consent or at your direction.
						</p>
					</section>

					{/* Data Security */}
					<section id="data-security" className="mb-16">
						<SectionHeading id="data-security">Data Security</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							We implement appropriate technical and organizational security measures to protect
							your personal information against unauthorized access, alteration, disclosure, or
							destruction. However, no method of transmission over the Internet or electronic
							storage is 100% secure, and we cannot guarantee absolute security.
						</p>
					</section>

					{/* Your Rights */}
					<section id="your-rights" className="mb-16">
						<SectionHeading id="your-rights">Your Rights</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							Depending on your location, you may have certain rights regarding your personal
							information, including:
						</p>
						<ul className="space-y-2 list-disc pl-6 mb-6">
							<li className="text-foreground">The right to access your personal information</li>
							<li className="text-foreground">The right to rectify inaccurate information</li>
							<li className="text-foreground">The right to request deletion of your information</li>
							<li className="text-foreground">
								The right to object to processing of your information
							</li>
							<li className="text-foreground">The right to data portability</li>
							<li className="text-foreground">The right to withdraw consent</li>
						</ul>
						<p className="text-foreground leading-relaxed mb-4">
							To exercise these rights, please contact us using the information provided in the
							"Contact Us" section below.
						</p>
					</section>

					{/* Data Retention */}
					<section id="data-retention" className="mb-16">
						<SectionHeading id="data-retention">Data Retention</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							We retain your personal information for as long as necessary to fulfill the purposes
							outlined in this Privacy Policy, unless a longer retention period is required or
							permitted by law.
						</p>
					</section>

					{/* Children's Privacy */}
					<section id="children-privacy" className="mb-16">
						<SectionHeading id="children-privacy">Children's Privacy</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							Our services are not intended for individuals under the age of 18. We do not knowingly
							collect personal information from children. If you become aware that a child has
							provided us with personal information, please contact us, and we will take steps to
							delete such information.
						</p>
					</section>

					{/* International Data Transfers */}
					<section id="international-transfers" className="mb-16">
						<SectionHeading id="international-transfers">
							International Data Transfers
						</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							Your information may be transferred to and processed in countries other than your
							country of residence. These countries may have data protection laws that differ from
							those in your country. We take appropriate safeguards to ensure that your information
							receives an adequate level of protection.
						</p>
					</section>

					{/* Changes to This Privacy Policy */}
					<section id="changes" className="mb-16">
						<SectionHeading id="changes">Changes to This Privacy Policy</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							We may update this Privacy Policy from time to time. We will notify you of any changes
							by posting the new Privacy Policy on this page and updating the "Last updated" date.
							You are advised to review this Privacy Policy periodically for any changes.
						</p>
					</section>

					{/* Contact Us */}
					<section id="contact" className="mb-16">
						<SectionHeading id="contact">Contact Us</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							If you have any questions about this Privacy Policy, please contact us:
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
