import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/docs/section-heading";

export const Route = createFileRoute("/resources/terms-of-service")({
	component: TermsOfServicePage,
});

function TermsOfServicePage() {
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
						<SectionHeading level={1} id="terms-of-service">
							Terms of Service
						</SectionHeading>
						<p className="text-muted-foreground mb-4">Last updated: {currentDate}</p>
						<p className="text-foreground leading-relaxed mb-4">
							Please read these Terms of Service ("Terms") carefully before using the Contrasture
							website and services operated by Contrasture & Agora Edu ("we," "us," or "our").
						</p>
					</section>

					{/* Agreement to Terms */}
					<section id="agreement" className="mb-16">
						<SectionHeading id="agreement">Agreement to Terms</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							By accessing or using our website and services, you agree to be bound by these Terms.
							If you disagree with any part of these Terms, then you may not access or use our
							services.
						</p>
					</section>

					{/* Description of Service */}
					<section id="description" className="mb-16">
						<SectionHeading id="description">Description of Service</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							Contrasture is a platform designed to enhance the capabilities of AI agents by
							providing them with rich, contextual information. Our services include, but are not
							limited to:
						</p>
						<ul className="space-y-2 list-disc pl-6 mb-6">
							<li className="text-foreground">Ephemeral Knowledge Graph technology</li>
							<li className="text-foreground">Multi-agent architecture and collaboration tools</li>
							<li className="text-foreground">
								Integration capabilities with various data sources
							</li>
							<li className="text-foreground">Observability and monitoring features</li>
							<li className="text-foreground">Frontend components and developer tools</li>
							<li className="text-foreground">Benchmarking and testing frameworks</li>
						</ul>
					</section>

					{/* User Accounts */}
					<section id="user-accounts" className="mb-16">
						<SectionHeading id="user-accounts">User Accounts</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							When you create an account with us, you must provide information that is accurate,
							complete, and current at all times. You are responsible for:
						</p>
						<ul className="space-y-2 list-disc pl-6 mb-6">
							<li className="text-foreground">
								Maintaining the security of your account and password
							</li>
							<li className="text-foreground">All activities that occur under your account</li>
							<li className="text-foreground">Notifying us immediately of any unauthorized use</li>
						</ul>
						<p className="text-foreground leading-relaxed mb-4">
							We reserve the right to suspend or terminate accounts that violate these Terms or
							engage in fraudulent, illegal, or harmful activities.
						</p>
					</section>

					{/* Acceptable Use */}
					<section id="acceptable-use" className="mb-16">
						<SectionHeading id="acceptable-use">Acceptable Use</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							You agree not to use our services to:
						</p>
						<ul className="space-y-2 list-disc pl-6 mb-6">
							<li className="text-foreground">Violate any applicable laws or regulations</li>
							<li className="text-foreground">Infringe upon the rights of others</li>
							<li className="text-foreground">
								Transmit any malicious code, viruses, or harmful software
							</li>
							<li className="text-foreground">
								Attempt to gain unauthorized access to our systems or networks
							</li>
							<li className="text-foreground">
								Interfere with or disrupt the integrity or performance of our services
							</li>
							<li className="text-foreground">
								Use our services to build competing products or services
							</li>
							<li className="text-foreground">
								Scrape, crawl, or harvest data from our services without permission
							</li>
							<li className="text-foreground">
								Impersonate any person or entity or misrepresent your affiliation
							</li>
						</ul>
					</section>

					{/* Intellectual Property */}
					<section id="intellectual-property" className="mb-16">
						<SectionHeading id="intellectual-property">Intellectual Property</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							The service and its original content, features, and functionality are owned by
							Contrasture & Agora Edu and are protected by international copyright, trademark,
							patent, trade secret, and other intellectual property laws.
						</p>
						<p className="text-foreground leading-relaxed mb-4">
							You retain ownership of any content you create or upload using our services. By using
							our services, you grant us a worldwide, non-exclusive, royalty-free license to use,
							reproduce, modify, and distribute your content solely for the purpose of providing and
							improving our services.
						</p>
					</section>

					{/* Beta and Pre-Release Services */}
					<section id="beta-services" className="mb-16">
						<SectionHeading id="beta-services">Beta and Pre-Release Services</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							Some of our services may be labeled as "beta," "preview," or "experimental." These
							services are provided "as is" and may contain bugs, errors, or other issues. We make
							no warranties regarding beta services and may discontinue them at any time without
							notice.
						</p>
					</section>

					{/* Service Availability */}
					<section id="service-availability" className="mb-16">
						<SectionHeading id="service-availability">Service Availability</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							We strive to maintain high availability of our services but do not guarantee
							uninterrupted, secure, or error-free operation. We reserve the right to:
						</p>
						<ul className="space-y-2 list-disc pl-6 mb-6">
							<li className="text-foreground">
								Modify, suspend, or discontinue any part of our services
							</li>
							<li className="text-foreground">Perform scheduled or unscheduled maintenance</li>
							<li className="text-foreground">Limit access to certain features or services</li>
						</ul>
					</section>

					{/* Third-Party Services */}
					<section id="third-party" className="mb-16">
						<SectionHeading id="third-party">Third-Party Services</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							Our services may integrate with or link to third-party services, websites, or
							applications. We are not responsible for the content, privacy practices, or terms of
							service of third-party services. Your interactions with third-party services are
							solely between you and the third party.
						</p>
					</section>

					{/* Limitation of Liability */}
					<section id="limitation-liability" className="mb-16">
						<SectionHeading id="limitation-liability">Limitation of Liability</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							To the maximum extent permitted by law, in no event shall Contrasture & Agora Edu, its
							directors, employees, or agents be liable for any indirect, incidental, special,
							consequential, or punitive damages, including without limitation, loss of profits,
							data, use, goodwill, or other intangible losses, resulting from your use of or
							inability to use our services.
						</p>
					</section>

					{/* Disclaimer of Warranties */}
					<section id="disclaimer" className="mb-16">
						<SectionHeading id="disclaimer">Disclaimer of Warranties</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							Our services are provided "as is" and "as available" without warranties of any kind,
							either express or implied, including but not limited to, implied warranties of
							merchantability, fitness for a particular purpose, or non-infringement.
						</p>
					</section>

					{/* Indemnification */}
					<section id="indemnification" className="mb-16">
						<SectionHeading id="indemnification">Indemnification</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							You agree to defend, indemnify, and hold harmless Contrasture & Agora Edu and its
							officers, directors, employees, and agents from and against any claims, liabilities,
							damages, losses, and expenses, including without limitation, reasonable legal fees,
							arising out of or in any way connected with your use of our services or violation of
							these Terms.
						</p>
					</section>

					{/* Termination */}
					<section id="termination" className="mb-16">
						<SectionHeading id="termination">Termination</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							We may terminate or suspend your account and access to our services immediately,
							without prior notice or liability, for any reason, including if you breach these
							Terms. Upon termination, your right to use the services will immediately cease.
						</p>
					</section>

					{/* Governing Law */}
					<section id="governing-law" className="mb-16">
						<SectionHeading id="governing-law">Governing Law</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							These Terms shall be governed by and construed in accordance with the laws of the
							jurisdiction in which Contrasture & Agora Edu operates, without regard to its conflict
							of law provisions.
						</p>
					</section>

					{/* Changes to Terms */}
					<section id="changes" className="mb-16">
						<SectionHeading id="changes">Changes to Terms</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							We reserve the right to modify or replace these Terms at any time. If a revision is
							material, we will provide at least 30 days notice prior to any new terms taking
							effect. What constitutes a material change will be determined at our sole discretion.
						</p>
						<p className="text-foreground leading-relaxed mb-4">
							By continuing to access or use our services after any revisions become effective, you
							agree to be bound by the revised terms.
						</p>
					</section>

					{/* Severability */}
					<section id="severability" className="mb-16">
						<SectionHeading id="severability">Severability</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							If any provision of these Terms is held to be invalid or unenforceable by a court, the
							remaining provisions of these Terms will remain in effect.
						</p>
					</section>

					{/* Contact Information */}
					<section id="contact" className="mb-16">
						<SectionHeading id="contact">Contact Information</SectionHeading>
						<p className="text-foreground leading-relaxed mb-4">
							If you have any questions about these Terms of Service, please contact us:
						</p>
						<div className="bg-muted/50 border border-border rounded-lg p-6 my-6">
							<p className="text-foreground mb-2">
								<strong>Email:</strong> legal@contrasture.com
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
