import { Award, Building2, Sparkles, TrendingUp } from "lucide-react";
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
					<th className="border border-border/40 px-4 py-2 w-1/3 font-semibold text-primary">
						Código de negociação
					</th>
					<td className="border border-border/40 px-4 py-2 text-text">
						<span className="font-mono">XXXXY</span>
						<br />
						<span className="text-sm">
							<strong>XXXX</strong> = 04 letras maiúsculas que representam o
							nome do emissor
						</span>
						<br />
						<span className="text-sm">
							<strong>Y</strong> = 01 número que representa o tipo da ação,
							adotado 3 para ordinária; 4 para preferencial; 5, 6, 7, 8 para
							preferenciais classes A, B, C e D, respectivamente
						</span>
					</td>
				</tr>
				<tr>
					<th className="border border-border/40 px-4 py-2 font-semibold text-primary">
						Cotação
					</th>
					<td className="border border-border/40 px-4 py-2 text-text text-sm">
						Reais por Ação, com 02 casas decimais. A forma de cotação poderá ser
						alterada em função de eventos corporativos ou necessidades de
						mercado mediante comunicação, pela B3, por meio de Ofício Circular.
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
						Determinado pelo emissor, sendo geralmente igual a 100. No mercado
						fracionário é possível negociar quantidades inferiores ao lote
						padrão.
					</td>
				</tr>
			</tbody>
		</table>
	);
};

const Acoes: React.FC = () => {
	return (
		<div className="space-y-12">
			{/* Introdução */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-3 rounded-lg">
						<TrendingUp className="w-6 h-6" />
					</div>
					<Title variant="h1">Ações</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<CardTitle>O que são Ações?</CardTitle>
						<CardDescription>
							Entenda como funciona a propriedade de empresas
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							Ações são{" "}
							<strong>
								valores mobiliários emitidos por sociedades anônimas
							</strong>{" "}
							representativos de uma parcela do seu capital social. Em outras
							palavras, são títulos de propriedade que conferem a seus
							detentores (investidores) a participação na sociedade da empresa.
						</p>
						<p className="text-text leading-relaxed">
							Elas são emitidas por empresas que desejam principalmente{" "}
							<strong>captar recursos para desenvolver projetos</strong> que
							viabilizem o seu crescimento.
						</p>
					</CardContent>
				</Card>
			</section>

			{/* Tipos de Ações */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-secondary/10 text-secondary p-3 rounded-lg">
						<Building2 className="w-6 h-6" />
					</div>
					<Title variant="h2">Tipos de Ações</Title>
				</div>

				<div className="grid md:grid-cols-2 gap-4">
					<ColoredBorderCard title="Ações Ordinárias" color="primary">
						<p className="text-text text-sm leading-relaxed">
							Conferem ao seu detentor{" "}
							<strong>direito de voto nas assembleias de acionistas</strong>,
							permitindo participar das decisões estratégicas da empresa.
						</p>
					</ColoredBorderCard>

					<ColoredBorderCard title="Ações Preferenciais" color="accent">
						<p className="text-text text-sm leading-relaxed">
							Permitem o{" "}
							<strong>recebimento de dividendos em valor superior</strong> ao
							das ações ordinárias, bem como a{" "}
							<strong>prioridade no recebimento de reembolso do capital</strong>
							.
						</p>
					</ColoredBorderCard>
				</div>
			</section>

			{/* Ofertas Públicas */}
			<section className="space-y-4">
				<Title variant="h2">Ofertas Públicas</Title>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6 space-y-4">
						<div>
							<h3 className="text-lg font-semibold text-primary mb-2">
								IPO - Oferta Pública Inicial
							</h3>
							<p className="text-text leading-relaxed">
								O primeiro lançamento de ações no mercado é chamado de{" "}
								<strong>Oferta Pública Inicial</strong> (também conhecido pela
								sigla em inglês IPO – Initial Public Offer). Após a abertura de
								capital e a oferta inicial, a empresa poderá realizar outras
								ofertas públicas, conhecidas como <strong>"Follow on"</strong>.
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-4 mt-4">
							<InfoBoxCard color="primary" title="Ofertas Primárias">
								A empresa capta recursos novos para investimento e
								reestruturação de passivos, ou seja, ocorre efetivamente um{" "}
								<strong>aumento de capital da empresa</strong>.
							</InfoBoxCard>

							<InfoBoxCard color="accent" title="Ofertas Secundárias">
								Proporcionam liquidez aos empreendedores, que vendem parte de
								suas ações. O capital da empresa permanece o mesmo, porém ocorre
								um <strong>aumento na base de sócios</strong>.
							</InfoBoxCard>
						</div>
					</CardContent>
				</Card>
			</section>

			{/* Governança Corporativa */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-success/10 text-success p-3 rounded-lg">
						<Award className="w-6 h-6" />
					</div>
					<Title variant="h2">Segmentos de Listagem B3</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6 space-y-4">
						<p className="text-text leading-relaxed">
							A B3 criou <strong>segmentos especiais de listagem</strong> das
							companhias – Bovespa Mais, Bovespa Mais Nível 2, Novo Mercado,
							Nível 2 e Nível 1. Todos os segmentos prezam por rígidas regras de
							governança corporativa.
						</p>
						<p className="text-text leading-relaxed">
							Essas regras vão além das obrigações que as companhias têm perante
							a Lei das Sociedades por Ações e têm como objetivo melhorar a
							avaliação das companhias que decidem aderir, voluntariamente, a um
							desses níveis de listagem.
						</p>
						<InfoBoxCard color="accent" borderColor="accent" titleIcon="💡">
							Tais regras atraem os investidores. Ao assegurar direitos e
							garantias aos acionistas, bem como a divulgação de informações
							mais completas para controladores, gestores da companhia e
							participantes do mercado, <strong>o risco é reduzido</strong>.
						</InfoBoxCard>
					</CardContent>
				</Card>
			</section>

			{/* Vantagens */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-warning/10 text-warning p-3 rounded-lg">
						<Sparkles className="w-6 h-6" />
					</div>
					<Title variant="h2">Vantagens</Title>
				</div>

				<div className="grid md:grid-cols-2 gap-4">
					{/* Vantagens para Empresas */}
					<ColoredBorderCard title="Para as Empresas" color="warning">
						<ul className="space-y-3 text-sm">
							<li className="flex gap-2">
								<span className="text-warning mt-0.5">•</span>
								<span className="text-text leading-relaxed">
									Tende a ter um <strong>diferencial competitivo</strong>, tendo
									em vista a transparência e a confiabilidade necessárias nas
									informações fornecidas ao mercado
								</span>
							</li>
							<li className="flex gap-2">
								<span className="text-warning mt-0.5">•</span>
								<span className="text-text leading-relaxed">
									A abertura de capital pode solucionar diversos problemas
									relativos a{" "}
									<strong>
										processos sucessórios, heranças e estratégias empresariais
									</strong>
								</span>
							</li>
							<li className="flex gap-2">
								<span className="text-warning mt-0.5">•</span>
								<span className="text-text leading-relaxed">
									As companhias listadas nos segmentos diferenciados da B3
									recebem um <strong>Selo de Governança Corporativa</strong>{" "}
									reconhecido internacionalmente
								</span>
							</li>
							<li className="flex gap-2">
								<span className="text-warning mt-0.5">•</span>
								<span className="text-text leading-relaxed">
									As ações negociadas podem integrar os{" "}
									<strong>índices da B3</strong>, proporcionando visibilidade e
									maior demanda pelos papéis
								</span>
							</li>
						</ul>
					</ColoredBorderCard>

					{/* Vantagens para Investidores */}
					<ColoredBorderCard title="Para os Investidores" color="success">
						<ul className="space-y-3 text-sm">
							<li className="flex gap-2">
								<span className="text-success mt-0.5">•</span>
								<span className="text-text leading-relaxed">
									<strong>Potencial de boa rentabilidade</strong> no longo prazo
								</span>
							</li>
							<li className="flex gap-2">
								<span className="text-success mt-0.5">•</span>
								<span className="text-text leading-relaxed">
									Recebe <strong>dividendos periodicamente</strong>
								</span>
							</li>
							<li className="flex gap-2">
								<span className="text-success mt-0.5">•</span>
								<span className="text-text leading-relaxed">
									Não precisa de muito dinheiro para investir
								</span>
							</li>
							<li className="flex gap-2">
								<span className="text-success mt-0.5">•</span>
								<span className="text-text leading-relaxed">
									Pode <strong>comprar ou vender suas ações</strong> no momento
									em que desejar
								</span>
							</li>
							<li className="flex gap-2">
								<span className="text-success mt-0.5">•</span>
								<span className="text-text leading-relaxed">
									É possível <strong>emprestar suas ações</strong> e ganhar um
									rendimento extra
								</span>
							</li>
						</ul>
					</ColoredBorderCard>
				</div>
			</section>

			{/* Especificações Técnicas */}
			<section className="space-y-4">
				<Title variant="h2">Detalhes de uma ação</Title>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6">
						<Table />
					</CardContent>
				</Card>
			</section>
		</div>
	);
};

export default Acoes;
