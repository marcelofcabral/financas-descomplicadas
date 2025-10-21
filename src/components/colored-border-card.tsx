import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ColoredBorderCardProps {
	title: string;
	color: "success" | "warning" | "error" | "accent" | "primary" | "secondary";
	children: React.ReactNode;
	className?: string;
}

const colorClasses = {
	success: {
		border: "border-l-success/40",
		title: "text-success",
		exampleBg: "bg-success/5",
		exampleText: "text-success",
	},
	warning: {
		border: "border-l-warning/40",
		title: "text-warning",
		exampleBg: "bg-warning/5",
		exampleText: "text-warning",
	},
	error: {
		border: "border-l-error/40",
		title: "text-error",
		exampleBg: "bg-error/5",
		exampleText: "text-error",
	},
	accent: {
		border: "border-l-accent/40",
		title: "text-accent",
		exampleBg: "bg-accent/5",
		exampleText: "text-accent",
	},
	primary: {
		border: "border-l-primary/40",
		title: "text-primary",
		exampleBg: "bg-primary/5",
		exampleText: "text-primary",
	},
	secondary: {
		border: "border-l-secondary/40",
		title: "text-secondary",
		exampleBg: "bg-secondary/5",
		exampleText: "text-secondary",
	},
};

export function ColoredBorderCard({
	title,
	color,
	children,
	className,
}: ColoredBorderCardProps) {
	const colors = colorClasses[color];

	return (
		<Card
			className={cn(
				"border-l-4 border-y-0 border-r-0 shadow-sm",
				colors.border,
				className,
			)}
		>
			<CardHeader>
				<CardTitle className={colors.title}>{title}</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">{children}</CardContent>
		</Card>
	);
}

interface ExampleBoxProps {
	color: "success" | "warning" | "error" | "accent" | "primary" | "secondary";
	children: React.ReactNode;
	className?: string;
}

export function ExampleBox({ color, children, className }: ExampleBoxProps) {
	const colors = colorClasses[color];

	return (
		<div className={cn("p-4 rounded-lg", colors.exampleBg, className)}>
			<p className={cn("text-xs font-medium mb-2", colors.exampleText)}>
				Exemplo:
			</p>
			<div className="text-sm text-text">{children}</div>
		</div>
	);
}
