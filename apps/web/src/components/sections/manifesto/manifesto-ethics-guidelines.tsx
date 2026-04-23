interface ManifestoEthicsGuidelinesProps {
    id: string;
    title: string;
    description: string;
    content: React.ReactNode;
}

export function ManifestoEthicsGuidelines({ id, title, description, content }: ManifestoEthicsGuidelinesProps) {
    return (
        <section id={id} className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
                {title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {description}
            </p>
            <div className="space-y-8">
                {content}
            </div>
        </section>
    );
}