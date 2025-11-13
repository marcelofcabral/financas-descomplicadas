// biome-ignore-all lint/correctness/useUniqueElementIds: allow arbitrary ids

import { Calendar, PiggyBank } from "lucide-react";
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

const Aposentadoria: React.FC = () => {
	const [idadeAtual, setIdadeAtual] = useState<string>("");
	const [idadeAposentadoria, setIdadeAposentadoria] = useState<string>("");
	const [rendaMensal, setRendaMensal] = useState<string>("");
	const [patrimonioAtual, setPatrimonioAtual] = useState<string>("");
	const [aportesMensais, setAportesMensais] = useState<string>("");
	const [rentabilidade, setRentabilidade] = useState<string>("");
	const [resultado, setResultado] = useState<{
		patrimonioFinal: number;
		totalInvestido: number;
		rendimentoTotal: number;
		rendaMensalVitalicia: number;
		anosVida: number;
	} | null>(null);

	const calcular = () => {
		const idade = Number.parseFloat(idadeAtual);
		const idadeApos = Number.parseFloat(idadeAposentadoria);
		const renda = Number.parseFloat(rendaMensal);
		const patInicial = Number.parseFloat(patrimonioAtual) || 0;
		const aporte = Number.parseFloat(aportesMensais);
		const taxa = Number.parseFloat(rentabilidade) / 100;

		if (
			idade <= 0 ||
			idadeApos <= idade ||
			renda <= 0 ||
			aporte <= 0 ||
			taxa <= 0
		) {
			alert("Preencha todos os campos com valores válidos");
			return;
		}

		const mesesAteAposentadoria = (idadeApos - idade) * 12;

		// Acumulação: FV = PV(1+i)^n + PMT[((1+i)^n - 1)/i]
		const montantePatrimonioInicial =
			patInicial * (1 + taxa) ** mesesAteAposentadoria;
		const montanteAportes =
			aporte * (((1 + taxa) ** mesesAteAposentadoria - 1) / taxa);
		const patrimonioFinal = montantePatrimonioInicial + montanteAportes;

		const totalInvestido = patInicial + aporte * mesesAteAposentadoria;
		const rendimentoTotal = patrimonioFinal - totalInvestido;

		// Renda mensal vitalícia (4% rule - retirada sustentável)
		const rendaMensalVitalicia = (patrimonioFinal * 0.04) / 12;

		// Anos de vida estimados baseado na expectativa de vida brasileira (~80 anos)
		const anosVida = 80 - idadeApos;

		setResultado({
			patrimonioFinal,
			totalInvestido,
			rendimentoTotal,
			rendaMensalVitalicia,
			anosVida,
		});
	};

	const limpar = () => {
		setIdadeAtual("");
		setIdadeAposentadoria("");
		setRendaMensal("");
		setPatrimonioAtual("");
		setAportesMensais("");
		setRentabilidade("");
		setResultado(null);
	};

	return (
		<div className="space-y-12">
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-3 rounded-lg">
						<PiggyBank className="w-6 h-6" />
					</div>
					<Title variant="h1">Calculadora de Aposentadoria</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<CardTitle>Planeje sua aposentadoria</CardTitle>
						<CardDescription>
							Calcule quanto você precisa poupar para se aposentar
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							Esta calculadora ajuda você a planejar sua aposentadoria
							considerando seus aportes mensais e a rentabilidade esperada dos
							seus investimentos. O resultado mostra quanto patrimônio você terá
							acumulado e qual renda mensal você poderá ter.
						</p>
						<InfoBoxCard color="accent" borderColor="accent" titleIcon="💡">
							A "Regra dos 4%" sugere que você pode retirar 4% do seu patrimônio
							anualmente de forma sustentável, mantendo o principal ao longo do
							tempo. Esta calculadora usa esse princípio para estimar sua renda
							mensal.
						</InfoBoxCard>
						<InfoBoxCard color="warning" borderColor="warning" titleIcon="⚠️">
							Lembre-se de considerar a inflação e revisar seu planejamento
							periodicamente. Estes são valores estimados e não garantem
							resultados futuros.
						</InfoBoxCard>
					</CardContent>
				</Card>
			</section>

			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-secondary/10 text-secondary p-3 rounded-lg">
						<Calendar className="w-6 h-6" />
					</div>
					<Title variant="h2">Calcular</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6 space-y-6">
						<div className="grid md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<Label htmlFor="idadeAtual">Idade Atual (anos)</Label>
								<Input
									id="idadeAtual"
									type="number"
									placeholder="0"
									value={idadeAtual}
									onChange={(e) => setIdadeAtual(e.target.value)}
									min="18"
									max="100"
									step="1"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="idadeApos">
									Idade para Aposentadoria (anos)
								</Label>
								<Input
									id="idadeApos"
									type="number"
									placeholder="0"
									value={idadeAposentadoria}
									onChange={(e) => setIdadeAposentadoria(e.target.value)}
									min="18"
									max="100"
									step="1"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="renda">Renda Mensal Desejada (R$)</Label>
								<Input
									id="renda"
									type="number"
									placeholder="0.00"
									value={rendaMensal}
									onChange={(e) => setRendaMensal(e.target.value)}
									min="0"
									step="100"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="patrimonio">Patrimônio Atual (R$)</Label>
								<Input
									id="patrimonio"
									type="number"
									placeholder="0.00"
									value={patrimonioAtual}
									onChange={(e) => setPatrimonioAtual(e.target.value)}
									min="0"
									step="1000"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="aportes">Aportes Mensais (R$)</Label>
								<Input
									id="aportes"
									type="number"
									placeholder="0.00"
									value={aportesMensais}
									onChange={(e) => setAportesMensais(e.target.value)}
									min="0"
									step="100"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="rentabilidade">Rentabilidade (% ao mês)</Label>
								<Input
									id="rentabilidade"
									type="number"
									placeholder="0.00"
									value={rentabilidade}
									onChange={(e) => setRentabilidade(e.target.value)}
									min="0"
									step="0.01"
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
												Patrimônio Acumulado:
											</span>
											<span className="text-2xl font-bold text-primary">
												{resultado.patrimonioFinal.toLocaleString("pt-BR", {
													style: "currency",
													currency: "BRL",
												})}
											</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="text-muted-foreground">
												Total Investido:
											</span>
											<span className="text-lg font-semibold">
												{resultado.totalInvestido.toLocaleString("pt-BR", {
													style: "currency",
													currency: "BRL",
												})}
											</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="text-muted-foreground">
												Rendimento Total:
											</span>
											<span className="text-lg font-semibold text-success">
												{resultado.rendimentoTotal.toLocaleString("pt-BR", {
													style: "currency",
													currency: "BRL",
												})}
											</span>
										</div>
										<div className="flex justify-between items-center pt-3 border-t border-border/40">
											<span className="text-muted-foreground">
												Renda Mensal Vitalícia:
											</span>
											<span className="text-xl font-bold text-accent">
												{resultado.rendaMensalVitalicia.toLocaleString(
													"pt-BR",
													{
														style: "currency",
														currency: "BRL",
													},
												)}
											</span>
										</div>
										<div className="text-xs text-muted-foreground text-center mt-2">
											Baseado na regra dos 4% (retirada sustentável anual)
										</div>
									</div>
								</div>

								{resultado.rendaMensalVitalicia <
									Number.parseFloat(rendaMensal) && (
									<InfoBoxCard
										color="warning"
										borderColor="warning"
										titleIcon="⚠️"
									>
										A renda mensal vitalícia estimada é menor que sua meta.
										Considere aumentar seus aportes mensais ou o tempo até a
										aposentadoria.
									</InfoBoxCard>
								)}
							</div>
						)}
					</CardContent>
				</Card>
			</section>
		</div>
	);
};

export default Aposentadoria;
