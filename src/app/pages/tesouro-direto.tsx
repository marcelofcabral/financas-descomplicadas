import { DollarSign, Shield, Sparkles, TrendingUp } from "lucide-react";
import { ColoredBorderCard } from "@/components/colored-border-card";
import { InfoBoxCard } from "@/components/info-box-card";
import Title from "@/components/title";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const Table = () => {
	return (
		<table className="table-auto border border-border/40 w-full text-left text-sm rounded-lg overflow-hidden col-span-2">
			<thead>
				<tr className="bg-primary text-white">
					<th className="border border-border/40 px-4 py-2 w-1/2 font-semibold">
						Nome do título
					</th>
					<th className="border border-border/40 px-4 py-2 w-1/2 font-semibold">
						Rendimento
					</th>
				</tr>
			</thead>
			<tbody>
				<tr className="bg-muted/30">
					<td className="border border-border/40 px-4 py-2 text-text">
						Tesouro Prefixado 20XX (LTN)
					</td>
					<td className="border border-border/40 px-4 py-2 text-text">
						Prefixado, com rentabilidade definida no momento da compra.
					</td>
				</tr>
				<tr>
					<td className="border border-border/40 px-4 py-2 text-text">
						Tesouro Prefixado com Juros Semestrais 20XX (NTN-F)
					</td>
					<td className="border border-border/40 px-4 py-2 text-text">
						Prefixado, com rentabilidade definida no momento da compra e com
						pagamento de juros semestrais.
					</td>
				</tr>
				<tr className="bg-muted/30">
					<td className="border border-border/40 px-4 py-2 text-text">
						Tesouro Selic 20XX (LFT)
					</td>
					<td className="border border-border/40 px-4 py-2 text-text">
						Pós-fixado, com rentabilidade vinculada à variação da Taxa de Juros
						Selic.
					</td>
				</tr>
				<tr>
					<td className="border border-border/40 px-4 py-2 text-text">
						Tesouro IPCA+ Juros Semestrais 20XX (NTN-B)
					</td>
					<td className="border border-border/40 px-4 py-2 text-text">
						Pós-fixado, com rentabilidade vinculada à variação da inflação
						medida pelo IPCA, acrescida dos juros definidos no momento da compra
						e com pagamento de juros semestrais.
					</td>
				</tr>
				<tr className="bg-muted/30">
					<td className="border border-border/40 px-4 py-2 text-text">
						Tesouro IPCA+ 20XX (NTN-B Principal)
					</td>
					<td className="border border-border/40 px-4 py-2 text-text">
						Pós-fixado, com rentabilidade vinculada à variação da inflação
						medida pelo IPCA, acrescida dos juros definidos no momento da
						compra, sem pagamento de juros periódico.
					</td>
				</tr>
			</tbody>
		</table>
	);
};

const TesouroDireto: React.FC = () => {
	return (
		<div className="space-y-12">
			{/* Introdução */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-3 rounded-lg">
						<Shield className="w-6 h-6" />
					</div>
					<Title variant="h1">Tesouro Direto</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<CardTitle>Investimento Seguro e Acessível</CardTitle>
						<CardDescription>
							Títulos públicos com rentabilidade previsível
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							O <strong>Tesouro Direto</strong> é uma alternativa de
							investimento em que o investidor sabe, no momento da aplicação,{" "}
							<strong>quanto o seu dinheiro vai render no futuro</strong>. Além
							de ser um produto simples de investir e possibilitar a escolha por
							títulos que rendam algum dinheiro ao investidor no curto, no médio
							e no longo prazos, é extremamente seguro e permite{" "}
							<strong>aplicações iniciais a partir de R$30</strong>.
						</p>
						<InfoBoxCard color="primary" borderColor="primary" titleIcon="🔒">
							Ao investir no Tesouro Direto, o interessado adquire um título com
							a <strong>segurança do Tesouro Nacional</strong>. Cada título tem
							a sua própria data de vencimento definida, mas é possível
							resgatá-lo antes do prazo final contratado.
						</InfoBoxCard>
					</CardContent>
				</Card>
			</section>

			{/* Tipos de Títulos */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-secondary/10 text-secondary p-3 rounded-lg">
						<TrendingUp className="w-6 h-6" />
					</div>
					<Title variant="h2">Tipos de Títulos</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6 space-y-4">
						<p className="text-text leading-relaxed">
							Existem <strong>dois tipos de títulos públicos</strong>, de acordo
							com a rentabilidade oferecida:
						</p>

						<div className="grid md:grid-cols-2 gap-4">
							<ColoredBorderCard title="Prefixados" color="primary">
								<p className="text-text text-sm leading-relaxed">
									Os títulos prefixados possuem{" "}
									<strong>
										rentabilidade definida no momento do investimento
									</strong>
									. Ou seja, o investidor sabe exatamente o valor que irá
									receber se ficar com o título até a data do vencimento.
								</p>
							</ColoredBorderCard>

							<ColoredBorderCard title="Pós-fixados" color="accent">
								<p className="text-text text-sm leading-relaxed">
									Os títulos pós-fixados possuem seu valor{" "}
									<strong>corrigido por um indexador</strong>. Assim, a
									rentabilidade da aplicação depende do desempenho deste
									indexador (inflação ou juros, por exemplo), e da taxa
									contratada no momento da compra.
								</p>
							</ColoredBorderCard>

							<Table />
						</div>
					</CardContent>
				</Card>
			</section>

			{/* Vantagens */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-success/10 text-success p-3 rounded-lg">
						<Sparkles className="w-6 h-6" />
					</div>
					<Title variant="h2">Vantagens</Title>
				</div>

				<div className="grid gap-4">
					<ColoredBorderCard title="Baixo Risco e Menor Custo" color="success">
						<p className="text-text text-sm leading-relaxed">
							Por ser uma aplicação honrada pelo{" "}
							<strong>Governo Federal</strong>, tem baixo risco se comparada às
							outras alternativas de investimento oferecidas no mercado. Além
							disso, as aplicações em títulos públicos, geralmente, têm{" "}
							<strong>menor custo na comparação com os fundos</strong>.
						</p>
					</ColoredBorderCard>

					<ColoredBorderCard title="Flexibilidade" color="primary">
						<p className="text-text text-sm leading-relaxed">
							É uma aplicação versátil. Ou seja, que permite{" "}
							<strong>aplicações de grandes ou pequenos valores</strong>, com
							diversas datas de vencimento e modalidades de pagamento,
							possibilitando que o investidor programe seus resgates
							financeiros, de acordo com a sua conveniência.
						</p>
					</ColoredBorderCard>

					<ColoredBorderCard title="Liquidez" color="accent">
						<p className="text-text text-sm leading-relaxed">
							É possível{" "}
							<strong>resgatar a aplicação antes do vencimento</strong>. O
							Tesouro Nacional garante a recompra dos títulos, diariamente.
						</p>
					</ColoredBorderCard>

					<ColoredBorderCard title="Diversificação" color="warning">
						<p className="text-text text-sm leading-relaxed">
							Como existem dois tipos de títulos,{" "}
							<strong>prefixados e pós-fixados</strong>, o Tesouro Direto
							permite que o investidor diversifique suas aplicações,
							contemplando cenários de{" "}
							<strong>alta ou baixa de juros e variação da inflação</strong>.
						</p>
					</ColoredBorderCard>

					<ColoredBorderCard title="Acessibilidade" color="secondary">
						<div className="space-y-2">
							<p className="text-text text-sm leading-relaxed">
								Com <strong className="text-primary">R$30</strong> já é possível
								iniciar uma aplicação. Qualquer pessoa física com CPF e conta em
								uma instituição financeira habilitada pode se tornar um
								investidor do Tesouro Direto.
							</p>
						</div>
					</ColoredBorderCard>

					<ColoredBorderCard title="Comodidade" color="primary">
						<p className="text-text text-sm leading-relaxed">
							Investir no Tesouro Direto é muito fácil!{" "}
							<strong>Você não precisa nem sair de casa</strong>, pois todas as
							transações são feitas pela Internet.
						</p>
					</ColoredBorderCard>
				</div>
			</section>

			{/* Vantagem Tributária */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-accent/10 text-accent p-3 rounded-lg">
						<DollarSign className="w-6 h-6" />
					</div>
					<Title variant="h2">Vantagem Tributária</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6 space-y-4">
						<p className="text-text leading-relaxed">
							O <strong>Imposto de Renda (IR)</strong> só é cobrado do
							investidor no momento do vencimento do título ou do seu resgate
							antecipado, ou no recebimento das parcelas semestrais, dependendo
							do tipo do título.
						</p>

						<InfoBoxCard color="accent" borderColor="accent" titleIcon="💰">
							Nos fundos de investimentos de renda fixa, por outro lado, o
							imposto é recolhido semestralmente, pelo mecanismo conhecido como{" "}
							<strong>"come-cotas"</strong>. Como a parcela do IR permanece na
							carteira do investidor do Tesouro Direto até o resgate,{" "}
							<strong>continua a render juros</strong>.
						</InfoBoxCard>
					</CardContent>
				</Card>
			</section>
		</div>
	);
};

export default TesouroDireto;
