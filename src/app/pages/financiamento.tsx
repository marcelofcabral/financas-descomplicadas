// biome-ignore-all lint/correctness/useUniqueElementIds: allow arbitrary ids

import { Building, Calculator } from "lucide-react";
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

const Financiamento: React.FC = () => {
	const [valorImovel, setValorImovel] = useState<string>("");
	const [entrada, setEntrada] = useState<string>("");
	const [taxaJuros, setTaxaJuros] = useState<string>("");
	const [prazo, setPrazo] = useState<string>("");
	const [resultado, setResultado] = useState<{
		parcela: number;
		valorFinanciado: number;
		totalPago: number;
		totalJuros: number;
	} | null>(null);

	const calcular = () => {
		const valor = Number.parseFloat(valorImovel);
		const ent = Number.parseFloat(entrada) || 0;
		const taxa = Number.parseFloat(taxaJuros) / 100;
		const n = Number.parseFloat(prazo);

		if (valor <= 0 || taxa <= 0 || n <= 0) {
			alert("Preencha todos os campos com valores válidos");
			return;
		}

		if (ent >= valor) {
			alert("O valor da entrada deve ser menor que o valor do imóvel");
			return;
		}

		const valorFinanciado = valor - ent;

		// Sistema Price: PMT = PV × [i(1+i)^n] / [(1+i)^n - 1]
		const parcela =
			valorFinanciado * ((taxa * (1 + taxa) ** n) / ((1 + taxa) ** n - 1));
		const totalPago = parcela * n + ent;
		const totalJuros = totalPago - valor;

		setResultado({
			parcela,
			valorFinanciado,
			totalPago,
			totalJuros,
		});
	};

	const limpar = () => {
		setValorImovel("");
		setEntrada("");
		setTaxaJuros("");
		setPrazo("");
		setResultado(null);
	};

	return (
		<div className="space-y-12">
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-3 rounded-lg">
						<Building className="w-6 h-6" />
					</div>
					<Title variant="h1">Calculadora de Financiamento</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<CardTitle>Sistema Price (Tabela Price)</CardTitle>
						<CardDescription>
							Parcelas fixas ao longo do financiamento
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							O Sistema Price é o método mais utilizado em financiamentos
							imobiliários no Brasil. As parcelas são fixas durante todo o
							período, sendo que no início você paga mais juros e menos
							amortização, e ao final essa proporção se inverte.
						</p>
						<InfoBoxCard color="primary" title="Fórmula utilizada:">
							<div className="font-mono text-sm">
								<p>PMT = PV × [i(1+i)ⁿ] / [(1+i)ⁿ - 1]</p>
								<div className="mt-2 text-xs space-y-1">
									<p>PMT = Valor da parcela</p>
									<p>PV = Valor financiado</p>
									<p>i = Taxa de juros mensal</p>
									<p>n = Número de parcelas</p>
								</div>
							</div>
						</InfoBoxCard>
					</CardContent>
				</Card>
			</section>

			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-secondary/10 text-secondary p-3 rounded-lg">
						<Calculator className="w-6 h-6" />
					</div>
					<Title variant="h2">Calcular</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6 space-y-6">
						<div className="grid md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<Label htmlFor="valor">Valor do Imóvel (R$)</Label>
								<Input
									id="valor"
									type="number"
									placeholder="0.00"
									value={valorImovel}
									onChange={(e) => setValorImovel(e.target.value)}
									min="0"
									step="1000"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="entrada">Valor da Entrada (R$)</Label>
								<Input
									id="entrada"
									type="number"
									placeholder="0.00"
									value={entrada}
									onChange={(e) => setEntrada(e.target.value)}
									min="0"
									step="1000"
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
								<Label htmlFor="prazo">Prazo (meses)</Label>
								<Input
									id="prazo"
									type="number"
									placeholder="0"
									value={prazo}
									onChange={(e) => setPrazo(e.target.value)}
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
												Valor da Parcela:
											</span>
											<span className="text-2xl font-bold text-primary">
												{resultado.parcela.toLocaleString("pt-BR", {
													style: "currency",
													currency: "BRL",
												})}
											</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="text-muted-foreground">
												Valor Financiado:
											</span>
											<span className="text-lg font-semibold">
												{resultado.valorFinanciado.toLocaleString("pt-BR", {
													style: "currency",
													currency: "BRL",
												})}
											</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="text-muted-foreground">
												Total a Pagar:
											</span>
											<span className="text-lg font-semibold">
												{resultado.totalPago.toLocaleString("pt-BR", {
													style: "currency",
													currency: "BRL",
												})}
											</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="text-muted-foreground">
												Total de Juros:
											</span>
											<span className="text-lg font-semibold text-warning">
												{resultado.totalJuros.toLocaleString("pt-BR", {
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

export default Financiamento;
