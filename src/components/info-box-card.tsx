import type React from "react";
import { cn } from "@/lib/utils";

interface InfoBoxCardProps {
	color?: "accent" | "muted" | "primary" | "secondary" | "warning";
	title?: string;
	titleIcon?: string;
	children: React.ReactNode;
	className?: string;
	borderColor?: "accent" | "warning" | "primary" | "secondary";
	titleColor?: "accent" | "primary" | "secondary" | "warning" | "muted";
}

const colorClasses = {
	accent: "bg-accent/5",
	muted: "bg-muted/50",
	primary: "bg-primary/5",
	secondary: "bg-secondary/5",
	warning: "bg-warning/5",
};

const borderColorClasses = {
	accent: "border-l-4 border-accent/40",
	warning: "border-l-4 border-warning/40",
	primary: "border-l-4 border-primary/40",
	secondary: "border-l-4 border-secondary/40",
};

const titleColorClasses = {
	accent: "text-accent",
	primary: "text-primary",
	secondary: "text-secondary",
	warning: "text-warning",
	muted: "text-muted-foreground",
};

export function InfoBoxCard({
	color = "muted",
	title,
	titleIcon,
	children,
	className,
	borderColor,
	titleColor = "muted",
}: InfoBoxCardProps) {
	const bgColor = colorClasses[color];
	const borderClass = borderColor ? borderColorClasses[borderColor] : "";
	const titleClass = titleColorClasses[titleColor];

	return (
		<div className={cn("p-4 rounded-lg", bgColor, borderClass, className)}>
			{title && (
				<p className={cn("text-sm font-medium mb-2", titleClass)}>
					{titleIcon && <span className="mr-1">{titleIcon}</span>}
					{title}
				</p>
			)}
			<div className="text-sm text-text">{children}</div>
		</div>
	);
}
