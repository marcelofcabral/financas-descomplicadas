// biome-ignore-all lint/correctness/useUniqueElementIds: allow arbitrary ids

import { Calculator, TrendingUp } from "lucide-react";
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

const JurosCompostos: React.FC = () => {
	const [capitalInicial, setCapitalInicial] = useState<string>("");
	const [taxaJuros, setTaxaJuros] = useState<string>("");
	const [periodo, setPeriodo] = useState<string>("");
	const [aportesMensais, setAportesMensais] = useState<string>("");
	const [resultado, setResultado] = useState<{
		montante: number;
		juros: number;
		totalInvestido: number;
	} | null>(null);

	const calcular = () => {
		const c = Number.parseFloat(capitalInicial) || 0;
		const i = Number.parseFloat(taxaJuros) / 100;
		const n = Number.parseFloat(periodo);
		const pmt = Number.parseFloat(aportesMensais) || 0;

		if (c <= 0 && pmt <= 0) {
			alert("Informe o capital inicial ou aportes mensais");
			return;
		}
		if (i <= 0 || n <= 0) {
			alert("Taxa de juros e período devem ser maiores que zero");
			return;
		}

		// Montante final: M = C(1+i)^n + PMT[((1+i)^n - 1)/i]
		const montanteCapitalInicial = c * (1 + i) ** n;
		const montanteAportes = pmt * (((1 + i) ** n - 1) / i);
		const montanteFinal = montanteCapitalInicial + montanteAportes;

		const totalInvestido = c + pmt * n;
		const jurosGanhos = montanteFinal - totalInvestido;

		setResultado({
			montante: montanteFinal,
			juros: jurosGanhos,
			totalInvestido: totalInvestido,
		});
	};

	const limpar = () => {
		setCapitalInicial("");
		setTaxaJuros("");
		setPeriodo("");
		setAportesMensais("");
		setResultado(null);
	};

	return (
		<div className="space-y-12">
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-3 rounded-lg">
						<Calculator className="w-6 h-6" />
					</div>
					<Title variant="h1">Calculadora de Juros Compostos</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<CardTitle>Como funciona?</CardTitle>
						<CardDescription>
							Os juros compostos são calculados sobre o montante atualizado
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							Juros compostos são os "juros sobre juros". A cada período, os
							juros ganhos são somados ao capital, e no próximo período os juros
							são calculados sobre esse novo montante.
						</p>
						<InfoBoxCard color="primary" title="Fórmula utilizada:">
							<div className="font-mono text-sm">
								<p>M = C × (1 + i)ⁿ + PMT × [((1 + i)ⁿ - 1) / i]</p>
								<div className="mt-2 text-xs space-y-1">
									<p>M = Montante final</p>
									<p>C = Capital inicial</p>
									<p>i = Taxa de juros (decimal)</p>
									<p>n = Número de períodos</p>
									<p>PMT = Aportes mensais</p>
								</div>
							</div>
						</InfoBoxCard>
					</CardContent>
				</Card>
			</section>

			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-secondary/10 text-secondary p-3 rounded-lg">
						<TrendingUp className="w-6 h-6" />
					</div>
					<Title variant="h2">Calcular</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6 space-y-6">
						<div className="grid md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<Label htmlFor="capital">Capital Inicial (R$)</Label>
								<Input
									id="capital"
									type="number"
									placeholder="0.00"
									value={capitalInicial}
									onChange={(e) => setCapitalInicial(e.target.value)}
									min="0"
									step="0.01"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="taxa">Taxa de Juros (% ao mês)</Label>
								<Input
									id="taxa"
									type="number"
									placeholder="0.00"
									value={taxaJuros}
									onChange={(e) => setTaxaJuros(e.target.value)}
									min="0"
									step="0.01"
								/>
							</div>

							<div className="space-y-2">
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

							<div className="space-y-2">
								<Label htmlFor="aportes">Aportes Mensais (R$)</Label>
								<Input
									id="aportes"
									type="number"
									placeholder="0.00"
									value={aportesMensais}
									onChange={(e) => setAportesMensais(e.target.value)}
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
												Montante Final:
											</span>
											<span className="text-2xl font-bold text-primary">
												{resultado.montante.toLocaleString("pt-BR", {
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
												Juros Ganhos:
											</span>
											<span className="text-lg font-semibold text-success">
												{resultado.juros.toLocaleString("pt-BR", {
													style: "currency",
													currency: "BRL",
												})}
											</span>
										</div>
									</div>
								</div>
							</div>
						)}
					</CardContent>
				</Card>
			</section>
		</div>
	);
};

export default JurosCompostos;
