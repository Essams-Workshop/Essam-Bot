import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	id?: string;
}

export function SectionHeading({
	level = 2,
	className,
	children,
	id,
	...props
}: SectionHeadingProps) {
	const Comp = `h${level}` as any;
	
	return (
		<Comp
			id={id}
			className={cn(
				"font-semibold tracking-tight text-foreground",
				level === 1 && "text-4xl font-extrabold lg:text-5xl",
				level === 2 && "text-3xl border-b pb-2",
				level === 3 && "text-2xl",
				level === 4 && "text-xl",
				level === 5 && "text-lg",
				level === 6 && "text-base",
				className
			)}
			{...props}
		>
			{children}
		</Comp>
	);
}
