// biome-ignore-all lint/correctness/useUniqueElementIds: allow arbitrary ids

import { BarChart3, Target } from "lucide-react";
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

const ROI: React.FC = () => {
	const [investimentoInicial, setInvestimentoInicial] = useState<string>("");
	const [ganhoObtido, setGanhoObtido] = useState<string>("");
	const [custosAdicionais, setCustosAdicionais] = useState<string>("");
	const [resultado, setResultado] = useState<{
		roi: number;
		lucroLiquido: number;
		investimentoTotal: number;
		retornoTotal: number;
	} | null>(null);

	const calcular = () => {
		const investimento = Number.parseFloat(investimentoInicial);
		const ganho = Number.parseFloat(ganhoObtido);
		const custos = Number.parseFloat(custosAdicionais) || 0;

		if (investimento <= 0 || ganho < 0) {
			alert("Preencha os campos obrigatórios com valores válidos");
			return;
		}

		const investimentoTotal = investimento + custos;
		const lucroLiquido = ganho - investimentoTotal;

		// ROI = (Ganho - Investimento) / Investimento × 100
		const roi = (lucroLiquido / investimentoTotal) * 100;
		const retornoTotal = (ganho / investimentoTotal) * 100;

		setResultado({
			roi,
			lucroLiquido,
			investimentoTotal,
			retornoTotal,
		});
	};

	const limpar = () => {
		setInvestimentoInicial("");
		setGanhoObtido("");
		setCustosAdicionais("");
		setResultado(null);
	};

	return (
		<div className="space-y-12">
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-3 rounded-lg">
						<Target className="w-6 h-6" />
					</div>
					<Title variant="h1">Calculadora de ROI</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<CardTitle>O que é ROI?</CardTitle>
						<CardDescription>
							Return on Investment - Retorno sobre Investimento
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							O ROI (Return on Investment) é uma métrica financeira que mede a
							eficiência de um investimento. Ele mostra quanto você ganhou ou
							perdeu em relação ao valor investido, sendo expresso em
							porcentagem.
						</p>
						<p className="text-text leading-relaxed">
							Um ROI positivo indica que o investimento gerou lucro, enquanto um
							ROI negativo indica prejuízo. Quanto maior o ROI, melhor foi o
							retorno do investimento.
						</p>
						<InfoBoxCard color="primary" title="Fórmula utilizada:">
							<div className="font-mono text-sm">
								<p>
									ROI = (Ganho - Investimento Total) / Investimento Total × 100
								</p>
								<div className="mt-2 text-xs space-y-1">
									<p>Ganho = Receita ou valor obtido</p>
									<p>Investimento Total = Investimento inicial + custos</p>
								</div>
							</div>
						</InfoBoxCard>
						<InfoBoxCard color="accent" borderColor="accent" titleIcon="💡">
							O ROI é útil para comparar diferentes investimentos e tomar
							decisões mais informadas sobre onde alocar seus recursos.
						</InfoBoxCard>
					</CardContent>
				</Card>
			</section>

			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-secondary/10 text-secondary p-3 rounded-lg">
						<BarChart3 className="w-6 h-6" />
					</div>
					<Title variant="h2">Calcular</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6 space-y-6">
						<div className="grid md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<Label htmlFor="investimento">Investimento Inicial (R$)</Label>
								<Input
									id="investimento"
									type="number"
									placeholder="0.00"
									value={investimentoInicial}
									onChange={(e) => setInvestimentoInicial(e.target.value)}
									min="0"
									step="0.01"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="ganho">Ganho Obtido (R$)</Label>
								<Input
									id="ganho"
									type="number"
									placeholder="0.00"
									value={ganhoObtido}
									onChange={(e) => setGanhoObtido(e.target.value)}
									min="0"
									step="0.01"
								/>
							</div>

							<div className="space-y-2 md:col-span-2">
								<Label htmlFor="custos">
									Custos Adicionais (R$) - Opcional
								</Label>
								<Input
									id="custos"
									type="number"
									placeholder="0.00"
									value={custosAdicionais}
									onChange={(e) => setCustosAdicionais(e.target.value)}
									min="0"
									step="0.01"
								/>
								<p className="text-xs text-muted-foreground">
									Inclua taxas, impostos, manutenção e outros custos
									relacionados
								</p>
							</div>
						</div>

						<div className="flex gap-4">
							<Button onClick={calcular} className="flex-1">
								Calcular ROI
							</Button>
							<Button onClick={limpar} variant="outline">
								Limpar
							</Button>
						</div>

						{resultado && (
							<div className="mt-6 space-y-4">
								<div
									className={`p-6 rounded-lg border-2 ${
										resultado.roi >= 0
											? "bg-success/5 border-success/20"
											: "bg-error/5 border-error/20"
									}`}
								>
									<h3 className="text-lg font-semibold text-primary mb-4">
										Resultados
									</h3>
									<div className="space-y-3">
										<div className="flex justify-between items-center">
											<span className="text-muted-foreground">ROI:</span>
											<span
												className={`text-3xl font-bold ${
													resultado.roi >= 0 ? "text-success" : "text-error"
												}`}
											>
												{resultado.roi.toFixed(2)}%
											</span>
										</div>
										<div className="flex justify-between items-center pt-3 border-t border-border/40">
											<span className="text-muted-foreground">
												Lucro Líquido:
											</span>
											<span
												className={`text-xl font-bold ${
													resultado.lucroLiquido >= 0
														? "text-success"
														: "text-error"
												}`}
											>
												{resultado.lucroLiquido.toLocaleString("pt-BR", {
													style: "currency",
													currency: "BRL",
												})}
											</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="text-muted-foreground">
												Investimento Total:
											</span>
											<span className="text-lg font-semibold">
												{resultado.investimentoTotal.toLocaleString("pt-BR", {
													style: "currency",
													currency: "BRL",
												})}
											</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="text-muted-foreground">
												Retorno Total:
											</span>
											<span className="text-lg font-semibold text-accent">
												{resultado.retornoTotal.toFixed(2)}%
											</span>
										</div>
									</div>
								</div>

								<div className="grid md:grid-cols-3 gap-3">
									{resultado.roi > 50 && (
										<InfoBoxCard color="accent" title="Excelente ROI! 🎉">
											<p className="text-sm">
												Seu investimento teve um retorno excepcional.
											</p>
										</InfoBoxCard>
									)}
									{resultado.roi > 0 && resultado.roi <= 50 && (
										<InfoBoxCard color="accent" title="ROI Positivo ✓">
											<p className="text-sm">
												Seu investimento gerou retorno positivo.
											</p>
										</InfoBoxCard>
									)}
									{resultado.roi < 0 && (
										<InfoBoxCard color="warning" title="ROI Negativo">
											<p className="text-sm">
												Este investimento resultou em prejuízo.
											</p>
										</InfoBoxCard>
									)}
								</div>
							</div>
						)}
					</CardContent>
				</Card>
			</section>

			<section className="space-y-4">
				<Title variant="h2">Interpretando o ROI</Title>

				<div className="grid md:grid-cols-3 gap-4">
					<Card className="border-success/40">
						<CardHeader>
							<CardTitle className="text-success">ROI Positivo</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-text">
								Indica que o investimento gerou lucro. Quanto maior o
								percentual, melhor foi o retorno.
							</p>
						</CardContent>
					</Card>

					<Card className="border-warning/40">
						<CardHeader>
							<CardTitle className="text-warning">ROI Zero</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-text">
								O investimento não gerou lucro nem prejuízo. Você recuperou
								exatamente o que investiu.
							</p>
						</CardContent>
					</Card>

					<Card className="border-error/40">
						<CardHeader>
							<CardTitle className="text-error">ROI Negativo</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-text">
								O investimento resultou em prejuízo. Você recuperou menos do que
								investiu.
							</p>
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	);
};

export default ROI;
