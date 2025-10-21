import { Building2, PieChart, Sparkles, TrendingUp } from "lucide-react";
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
		<table className="table-auto border border-border/40 w-full text-left text-sm rounded-lg overflow-hidden">
			<tbody>
				<tr className="bg-muted/30">
					<th className="border border-border/40 px-4 py-2 w-1/3 align-top font-semibold text-primary">
						Código de negociação
					</th>
					<td className="border border-border/40 px-4 py-2 text-text">
						<p className="mb-2">
							<span className="font-mono">XXXX11</span>
						</p>
						<p className="text-sm mb-1">
							<strong>XXXX</strong> = 04 letras maiúsculas que representam o
							nome do fundo
						</p>
						<p className="text-sm">
							<strong>11</strong> = número que representa, dentre outros ativos,
							cotas de fundo
						</p>
					</td>
				</tr>
				<tr>
					<th className="border border-border/40 px-4 py-2 font-semibold text-primary">
						Cotação
					</th>
					<td className="border border-border/40 px-4 py-2 text-text text-sm">
						Reais por cota, com 02 casas decimais
					</td>
				</tr>
				<tr className="bg-muted/30">
					<th className="border border-border/40 px-4 py-2 font-semibold text-primary">
						Liquidação
					</th>
					<td className="border border-border/40 px-4 py-2 text-text">
						Física e Financeira
					</td>
				</tr>
				<tr>
					<th className="border border-border/40 px-4 py-2 font-semibold text-primary">
						Prazo de liquidação
					</th>
					<td className="border border-border/40 px-4 py-2 text-text">
						D+2, a partir da data de negociação
					</td>
				</tr>
				<tr className="bg-muted/30">
					<th className="border border-border/40 px-4 py-2 font-semibold text-primary">
						Mercado
					</th>
					<td className="border border-border/40 px-4 py-2 text-text">
						À vista
					</td>
				</tr>
				<tr>
					<th className="border border-border/40 px-4 py-2 font-semibold text-primary">
						Lote padrão
					</th>
					<td className="border border-border/40 px-4 py-2 text-text text-sm">
						<p className="mb-1">Mercado primário: determinado pelo emissor</p>
						<p>Mercado secundário: 1 cota</p>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

const ETFs: React.FC = () => {
	return (
		<div className="space-y-12">
			{/* Introdução */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-3 rounded-lg">
						<PieChart className="w-6 h-6" />
					</div>
					<Title variant="h1">ETFs</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<CardTitle>Exchange Traded Funds</CardTitle>
						<CardDescription>
							Fundos negociados em Bolsa que replicam índices de mercado
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							Os <strong>ETFs</strong>, também conhecidos como{" "}
							<strong>Exchange Traded Fund (ETF)</strong>, são fundos negociados
							em Bolsa que representam uma comunhão de recursos destinados à
							aplicação em uma carteira de ativos que buscam retornos que
							correspondam, de forma geral, à performance, antes de taxas e
							despesas, de um índice de referência.
						</p>
						<InfoBoxCard color="primary" borderColor="primary" titleIcon="📊">
							Como índice de referência dos ETFs de Renda Variável admite-se
							qualquer índice reconhecido pela{" "}
							<strong>Comissão de Valores Mobiliários (CVM)</strong>.
						</InfoBoxCard>
					</CardContent>
				</Card>
			</section>

			{/* Índices */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-secondary/10 text-secondary p-3 rounded-lg">
						<TrendingUp className="w-6 h-6" />
					</div>
					<Title variant="h2">Como Funcionam os Índices</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6 space-y-4">
						<p className="text-text leading-relaxed">
							Os índices permitem ao investidor avaliar como um grupo específico
							de ativos, podendo ser estes{" "}
							<strong>
								ações, FIIs (Fundos de Investimento Imobiliário), cripto ativos,
								entre outros
							</strong>
							, se comportou em relação a um outro grupo ou à sua própria
							carteira de referência.
						</p>
						<InfoBoxCard color="accent" title="Carteira Teórica">
							Os índices são calculados a partir de uma{" "}
							<strong>carteira teórica</strong>, criada apenas para medir o
							desempenho desses ativos.
						</InfoBoxCard>
					</CardContent>
				</Card>
			</section>

			{/* Mercado Primário */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-accent/10 text-accent p-3 rounded-lg">
						<Building2 className="w-6 h-6" />
					</div>
					<Title variant="h2">Mercado Primário</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6 space-y-4">
						<p className="text-text leading-relaxed">
							A B3 oferece ambiente para{" "}
							<strong>emissão e resgate das cotas</strong>, que caracterizam o
							mercado primário de um ETF. Os processos de integralização e de
							resgate das cotas permitem que o ETF aumente ou reduza seu
							patrimônio através da emissão de novas cotas ou cancelamento das
							cotas existentes pelo administrador do ETF.
						</p>

						<div className="grid md:grid-cols-2 gap-4 mt-4">
							<ColoredBorderCard
								title="Integralização de Cotas"
								color="success"
							>
								<p className="text-text text-sm leading-relaxed mb-3">
									O processo requer a{" "}
									<strong>entrega da cesta de ativos ao administrador</strong>{" "}
									em troca do lote mínimo de cotas do ETF (modelo In Kind).
								</p>
								<p className="text-xs text-muted-foreground">
									O lote mínimo e máximo de ativos financeiros para emissão e
									resgate das cotas são estabelecidos no regulamento do Fundo.
								</p>
							</ColoredBorderCard>

							<ColoredBorderCard title="Resgate das Cotas" color="warning">
								<p className="text-text text-sm leading-relaxed">
									Requer a{" "}
									<strong>
										entrega de pelo menos um lote mínimo de cotas do ETF ao
										administrador
									</strong>{" "}
									em troca da cesta de ativos (modelo In Kind).
								</p>
							</ColoredBorderCard>
						</div>

						<InfoBoxCard color="primary" title="Valor Patrimonial">
							Tanto na emissão quanto no resgate das cotas deve ser utilizado o{" "}
							<strong>valor patrimonial apurado no fechamento do dia</strong> da
							solicitação. O valor patrimonial da cota é o resultante da divisão
							do valor do patrimônio líquido do fundo pelo número das cotas
							existentes no encerramento do dia.
						</InfoBoxCard>

						<InfoBoxCard color="muted">
							Os investidores que desejam investir em um ETF através deste
							processo no mercado primário devem fazê-lo por meio dos{" "}
							<strong>agentes autorizados pelo fundo</strong>, que são as
							corretoras ou distribuidoras de títulos e valores mobiliários.
						</InfoBoxCard>
					</CardContent>
				</Card>
			</section>

			{/* Negociação */}
			<section className="space-y-4">
				<Title variant="h2">Negociação no Mercado Secundário</Title>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6 space-y-4">
						<p className="text-text leading-relaxed">
							As cotas do ETF são{" "}
							<strong>negociadas na B3 de forma semelhante às ações</strong>. Ao
							adquirir tais cotas, o investidor, indiretamente, passa a deter
							todas as ações da carteira teórica do índice, sem ter que
							comprá-las separadamente no mercado.
						</p>
						<InfoBoxCard color="accent" borderColor="accent" titleIcon="⚡">
							Dessa forma, o ETF pode proporcionar mais{" "}
							<strong>rapidez e eficiência</strong> no momento de diversificar
							seus investimentos.
						</InfoBoxCard>
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
					<ColoredBorderCard title="Taxas Menores" color="success">
						<p className="text-text text-sm leading-relaxed">
							Quando comparado com fundos de ações tradicionais, os ETFs
							costumam ter uma <strong>taxa de administração menor</strong>. O
							investidor somente será cobrado pelos dias em que ficar com as
							cotas em sua carteira, como ocorre nos fundos de ações
							tradicionais.
						</p>
					</ColoredBorderCard>

					<ColoredBorderCard title="Diversificação Instantânea" color="primary">
						<p className="text-text text-sm leading-relaxed">
							Com apenas uma transação, os ETFs proporcionam o{" "}
							<strong>
								investimento em uma carteira diversificada de ações
							</strong>
							. Em outras palavras, os ETFs permitem a exposição do investidor
							em todas as ações que integrem a carteira do seu índice de
							referência,{" "}
							<strong>reduzindo, assim, o risco de concentração</strong>.
						</p>
					</ColoredBorderCard>

					<ColoredBorderCard title="Liquidez" color="accent">
						<p className="text-text text-sm leading-relaxed">
							É possível{" "}
							<strong>
								comprar e vender cotas do ETF no mercado secundário
							</strong>{" "}
							como se fosse uma ação.
						</p>
					</ColoredBorderCard>

					<ColoredBorderCard
						title="Transparência e Acompanhamento"
						color="warning"
					>
						<div className="space-y-3 text-sm">
							<p className="text-text leading-relaxed">
								Possibilita que o investidor acompanhe as alterações na
								composição ou proporção da carteira teórica de ações do índice
								de referência{" "}
								<strong>sem ter que comprar ou vender todos os ativos</strong>{" "}
								que estiverem na referida carteira. A qualquer momento é
								possível saber a composição do ETF.
							</p>
							<ul className="space-y-2 ml-4">
								<li className="flex gap-2">
									<span className="text-warning mt-0.5">•</span>
									<span className="text-text leading-relaxed">
										Todas as informações sobre as negociações com as cotas dos
										ETFs no mercado secundário da B3 são divulgadas
									</span>
								</li>
								<li className="flex gap-2">
									<span className="text-warning mt-0.5">•</span>
									<span className="text-text leading-relaxed">
										A disponibilidade de informações permite a{" "}
										<strong>comparação imediata</strong> entre o valor de um ETF
										e seu respectivo índice de referência
									</span>
								</li>
							</ul>
						</div>
					</ColoredBorderCard>
				</div>
			</section>

			{/* Especificações Técnicas */}
			<section className="space-y-4">
				<Title variant="h2">Detalhes de um ETF</Title>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6">
						<Table />
					</CardContent>
				</Card>
			</section>
		</div>
	);
};

export default ETFs;
