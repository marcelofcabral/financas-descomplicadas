import { cn } from "@/lib/utils";

interface FormulaCardProps {
	formula: string;
	variables: Array<{
		symbol: string;
		description: string;
	}>;
	className?: string;
}

export function FormulaCard({
	formula,
	variables,
	className,
}: FormulaCardProps) {
	return (
		<div
			className={cn(
				"bg-background p-4 rounded-lg border border-border/40",
				className,
			)}
		>
			<p className="text-sm font-semibold text-primary mb-2">Fórmula:</p>
			<code className="text-sm font-mono bg-muted px-3 py-2 rounded block">
				{formula}
			</code>
			<div className="mt-3 space-y-1 text-xs text-muted-foreground">
				{variables.map((variable) => (
					<p key={variable.symbol}>
						<strong>{variable.symbol}</strong> = {variable.description}
					</p>
				))}
			</div>
		</div>
	);
}
