// biome-ignore-all lint/correctness/useUniqueElementIds: allow arbitrary ids

import { LineChart, TrendingUp } from "lucide-react";
import { useState } from "react";
import { InfoBoxCard } from "@/components/info-box-card";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Rentabilidade: React.FC = () => {
	const [valorInicial, setValorInicial] = useState<string>("");
	const [valorFinal, setValorFinal] = useState<string>("");
	const [periodo, setPeriodo] = useState<string>("");
	const [resultado, setResultado] = useState<{
		rentabilidadeTotal: number;
		rentabilidadeMensal: number;
		rentabilidadeAnual: number;
		ganhoAbsoluto: number;
	} | null>(null);

	const calcular = () => {
		const vi = Number.parseFloat(valorInicial);
		const vf = Number.parseFloat(valorFinal);
		const n = Number.parseFloat(periodo);

		if (vi <= 0 || vf <= 0 || n <= 0) {
			alert("Preencha todos os campos com valores válidos");
			return;
		}

		if (vf < vi) {
			alert(
				"O valor final não pode ser menor que o valor inicial para calcular rentabilidade positiva",
			);
		}

		// Rentabilidade total
		const rentabilidadeTotal = ((vf - vi) / vi) * 100;

		// Rentabilidade mensal: ((VF/VI)^(1/n) - 1) × 100
		const rentabilidadeMensal = ((vf / vi) ** (1 / n) - 1) * 100;

		// Rentabilidade anual composta
		const rentabilidadeAnual =
			((1 + rentabilidadeMensal / 100) ** 12 - 1) * 100;

		// Ganho absoluto
		const ganhoAbsoluto = vf - vi;

		setResultado({
			rentabilidadeTotal,
			rentabilidadeMensal,
			rentabilidadeAnual,
			ganhoAbsoluto,
		});
	};

	const limpar = () => {
		setValorInicial("");
		setValorFinal("");
		setPeriodo("");
		setResultado(null);
	};

	return (
		<div className="space-y-12">
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-3 rounded-lg">
						<TrendingUp className="w-6 h-6" />
					</div>
					<Title variant="h1">Calculadora de Rentabilidade</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<CardTitle>Como funciona?</CardTitle>
						<CardDescription>
							Calcule o rendimento de seus investimentos
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							Esta calculadora permite que você calcule a rentabilidade de um
							investimento comparando o valor inicial com o valor final após um
							determinado período. Você verá a rentabilidade total, mensal e
							anual equivalente.
						</p>
						<InfoBoxCard color="primary" title="Fórmulas utilizadas:">
							<div className="font-mono text-sm space-y-2">
								<div>
									<p>Rentabilidade Total = ((VF - VI) / VI) × 100</p>
								</div>
								<div>
									<p>Rentabilidade Mensal = ((VF/VI)^(1/n) - 1) × 100</p>
								</div>
								<div>
									<p>Rentabilidade Anual = ((1 + i)^12 - 1) × 100</p>
								</div>
								<div className="mt-2 text-xs space-y-1 pt-2 border-t border-border/20">
									<p>VF = Valor Final</p>
									<p>VI = Valor Inicial</p>
									<p>n = Número de meses</p>
									<p>i = Taxa mensal (decimal)</p>
								</div>
							</div>
						</InfoBoxCard>
					</CardContent>
				</Card>
			</section>

			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-secondary/10 text-secondary p-3 rounded-lg">
						<LineChart className="w-6 h-6" />
					</div>
					<Title variant="h2">Calcular</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6 space-y-6">
						<div className="grid md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<Label htmlFor="valorInicial">Valor Inicial (R$)</Label>
								<Input
									id="valorInicial"
									type="number"
									placeholder="0.00"
									value={valorInicial}
									onChange={(e) => setValorInicial(e.target.value)}
									min="0"
									step="0.01"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="valorFinal">Valor Final (R$)</Label>
								<Input
									id="valorFinal"
									type="number"
									placeholder="0.00"
									value={valorFinal}
									onChange={(e) => setValorFinal(e.target.value)}
									min="0"
									step="0.01"
								/>
							</div>

							<div className="space-y-2 md:col-span-2">
								<Label htmlFor="periodo">Período (meses)</Label>
								<Input
									id="periodo"
									type="number"
									placeholder="0"
									value={periodo}
									onChange={(e) => setPeriodo(e.target.value)}
									min="1"
									step="1"
								/>
							</div>
						</div>

						<div className="flex gap-4">
							<Button onClick={calcular} className="flex-1">
								Calcular
							</Button>
							<Button onClick={limpar} variant="outline">
								Limpar
							</Button>
						</div>

						{resultado && (
							<div className="mt-6 space-y-4">
								<div className="bg-primary/5 p-6 rounded-lg border-2 border-primary/20">
									<h3 className="text-lg font-semibold text-primary mb-4">
										Resultados
									</h3>
									<div className="space-y-3">
										<div className="flex justify-between items-center">
											<span className="text-muted-foreground">
												Ganho Absoluto:
											</span>
											<span className="text-2xl font-bold text-success">
												{resultado.ganhoAbsoluto.toLocaleString("pt-BR", {
													style: "currency",
													currency: "BRL",
												})}
											</span>
										</div>
										<div className="flex justify-between items-center pt-3 border-t border-border/40">
											<span className="text-muted-foreground">
												Rentabilidade Total:
											</span>
											<span className="text-xl font-bold text-primary">
												{resultado.rentabilidadeTotal.toFixed(2)}%
											</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="text-muted-foreground">
												Rentabilidade Mensal:
											</span>
											<span className="text-lg font-semibold text-accent">
												{resultado.rentabilidadeMensal.toFixed(2)}% a.m.
											</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="text-muted-foreground">
												Rentabilidade Anual:
											</span>
											<span className="text-lg font-semibold text-secondary">
												{resultado.rentabilidadeAnual.toFixed(2)}% a.a.
											</span>
										</div>
									</div>
								</div>

								<InfoBoxCard color="accent" borderColor="accent" titleIcon="💡">
									A rentabilidade anual é calculada considerando o efeito dos
									juros compostos, ou seja, a capitalização mensal ao longo de
									12 meses.
								</InfoBoxCard>
							</div>
						)}
					</CardContent>
				</Card>
			</section>
		</div>
	);
};

export default Rentabilidade;
