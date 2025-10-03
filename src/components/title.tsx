import { cn } from "@/lib/utils";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	variant?: "h1" | "h2" | "h3";
}

export function Title({
	variant = "h1",
	className,
	children,
	...props
}: TitleProps) {
	const Component = variant;

	return (
		<Component
			className={cn(
				"font-bold text-primary",
				{
					"text-4xl": variant === "h1",
					"text-3xl": variant === "h2",
					"text-2xl": variant === "h3",
				},
				className,
			)}
			{...props}
		>
			{children}
		</Component>
	);
}
export default Title;
