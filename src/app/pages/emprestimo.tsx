// biome-ignore-all lint/correctness/useUniqueElementIds: allow arbitrary ids

import { Banknote, Calculator } from "lucide-react";
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

const Emprestimo: React.FC = () => {
	const [valorEmprestimo, setValorEmprestimo] = useState<string>("");
	const [taxaJuros, setTaxaJuros] = useState<string>("");
	const [numeroParcelas, setNumeroParcelas] = useState<string>("");
	const [resultado, setResultado] = useState<{
		parcela: number;
		totalPago: number;
		totalJuros: number;
		custoEfetivo: number;
	} | null>(null);

	const calcular = () => {
		const valor = Number.parseFloat(valorEmprestimo);
		const taxa = Number.parseFloat(taxaJuros) / 100;
		const n = Number.parseFloat(numeroParcelas);

		if (valor <= 0 || taxa <= 0 || n <= 0) {
			alert("Preencha todos os campos com valores válidos");
			return;
		}

		// Parcela = P × [i(1+i)^n] / [(1+i)^n - 1]
		const parcela = valor * ((taxa * (1 + taxa) ** n) / ((1 + taxa) ** n - 1));
		const totalPago = parcela * n;
		const totalJuros = totalPago - valor;
		const custoEfetivo = (totalJuros / valor) * 100;

		setResultado({
			parcela,
			totalPago,
			totalJuros,
			custoEfetivo,
		});
	};

	const limpar = () => {
		setValorEmprestimo("");
		setTaxaJuros("");
		setNumeroParcelas("");
		setResultado(null);
	};

	return (
		<div className="space-y-12">
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-3 rounded-lg">
						<Banknote className="w-6 h-6" />
					</div>
					<Title variant="h1">Calculadora de Empréstimo</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<CardTitle>Como funciona?</CardTitle>
						<CardDescription>
							Calcule as parcelas do seu empréstimo pessoal
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							Esta calculadora utiliza o sistema de amortização constante
							(Tabela Price) para calcular o valor das parcelas do empréstimo.
							Você verá o valor da parcela mensal, o total a ser pago e quanto
							será gasto em juros.
						</p>
						<InfoBoxCard color="warning" borderColor="warning" titleIcon="⚠️">
							Antes de contratar um empréstimo, compare as taxas de juros de
							diferentes instituições financeiras e avalie se realmente é
							necessário. Evite se endividar desnecessariamente.
						</InfoBoxCard>
						<InfoBoxCard color="primary" title="Fórmula utilizada:">
							<div className="font-mono text-sm">
								<p>PMT = P × [i(1+i)ⁿ] / [(1+i)ⁿ - 1]</p>
								<div className="mt-2 text-xs space-y-1">
									<p>PMT = Valor da parcela</p>
									<p>P = Valor do empréstimo</p>
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
								<Label htmlFor="valor">Valor do Empréstimo (R$)</Label>
								<Input
									id="valor"
									type="number"
									placeholder="0.00"
									value={valorEmprestimo}
									onChange={(e) => setValorEmprestimo(e.target.value)}
									min="0"
									step="100"
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

							<div className="space-y-2 md:col-span-2">
								<Label htmlFor="parcelas">Número de Parcelas</Label>
								<Input
									id="parcelas"
									type="number"
									placeholder="0"
									value={numeroParcelas}
									onChange={(e) => setNumeroParcelas(e.target.value)}
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
										<div className="flex justify-between items-center">
											<span className="text-muted-foreground">
												Custo Efetivo Total:
											</span>
											<span className="text-lg font-semibold text-warning">
												{resultado.custoEfetivo.toFixed(2)}%
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

export default Emprestimo;
