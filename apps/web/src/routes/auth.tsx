import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { GraduationCap, Mail, Lock, ArrowRight, UserCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/auth")({
	component: RouteComponent,
});

function RouteComponent() {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<div className="min-h-screen bg-background flex items-center justify-center py-16 px-4">
			<motion.div 
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
				className="w-full max-w-md"
			>
				<div className="flex flex-col items-center mb-8">
					<Link to="/" className="flex items-center gap-2 mb-6">
						<div className="shrink-0 w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-sm">
							<GraduationCap className="w-6 h-6" />
						</div>
						<span className="font-bold text-xl tracking-tight">GradSearch</span>
					</Link>
					<h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
						{isLogin ? "Welcome back" : "Create an account"}
					</h1>
					<p className="text-muted-foreground text-center">
						{isLogin 
							? "Log in to view your saved programs and applications." 
							: "Sign up to save programs, track deadlines, and apply."}
					</p>
				</div>

				<div className="bg-card border border-border rounded-xl shadow-sm p-6 sm:p-8">
					<form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
						{!isLogin && (
							<div className="space-y-2">
								<Label htmlFor="name">Full Name</Label>
								<div className="relative">
									<UserCircle className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
									<Input id="name" placeholder="John Doe" className="pl-9" required />
								</div>
							</div>
						)}
						
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<div className="relative">
								<Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
								<Input id="email" type="email" placeholder="you@example.com" className="pl-9" required />
							</div>
						</div>

						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<Label htmlFor="password">Password</Label>
								{isLogin && (
									<a href="#" className="text-xs text-primary hover:underline font-medium">
										Forgot password?
									</a>
								)}
							</div>
							<div className="relative">
								<Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
								<Input id="password" type="password" placeholder="••••••••" className="pl-9" required />
							</div>
						</div>

						<Button type="submit" className="w-full mt-6 group">
							{isLogin ? "Log in" : "Create account"}
							<ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
						</Button>
					</form>

					<div className="mt-8 text-center text-sm">
						<span className="text-muted-foreground">
							{isLogin ? "Don't have an account?" : "Already have an account?"}
						</span>{" "}
						<button 
							onClick={() => setIsLogin(!isLogin)}
							className="text-primary font-medium hover:underline focus:outline-none"
						>
							{isLogin ? "Sign up" : "Log in"}
						</button>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
