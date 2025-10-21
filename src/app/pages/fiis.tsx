import { Building, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
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
							<span className="font-mono">XXXX11B</span>
						</p>
						<p className="text-sm mb-1">
							<strong>XXXX</strong> = 04 letras maiúsculas que representam o
							nome do fundo
						</p>
						<p className="text-sm mb-1">
							<strong>11</strong> = número que representa, dentre outros ativos,
							cotas de fundo
						</p>
						<p className="text-sm">
							<strong>B</strong> = indicativo de negociação em mercado de balcão
							organizado (quando aplicável)
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
						01 cota
					</td>
				</tr>
			</tbody>
		</table>
	);
};

const FIIs: React.FC = () => {
	return (
		<div className="space-y-12">
			{/* Introdução */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-3 rounded-lg">
						<Building className="w-6 h-6" />
					</div>
					<Title variant="h1">FIIs</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<CardTitle>Fundos de Investimento Imobiliário</CardTitle>
						<CardDescription>
							Invista no mercado imobiliário através de cotas
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							O <strong>Fundo de Investimento Imobiliário (FII)</strong> é uma
							comunhão de recursos destinados à aplicação em ativos relacionados
							ao mercado imobiliário. Cabe ao administrador, uma instituição
							financeira específica, constituir o fundo e realizar o processo de{" "}
							<strong>
								captação de recursos junto aos investidores através da venda de
								cotas
							</strong>
							.
						</p>
					</CardContent>
				</Card>
			</section>

			{/* Aplicação dos Recursos */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-secondary/10 text-secondary p-3 rounded-lg">
						<TrendingUp className="w-6 h-6" />
					</div>
					<Title variant="h2">Aplicação dos Recursos</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6 space-y-4">
						<p className="text-text leading-relaxed">
							Os recursos captados na venda das cotas poderão ser utilizados
							para a aquisição de:
						</p>

						<div className="grid md:grid-cols-2 gap-4">
							<InfoBoxCard color="primary" title="Imóveis">
								<ul className="space-y-2 text-sm">
									<li className="flex gap-2">
										<span className="text-primary mt-0.5">•</span>
										<span>
											Imóveis <strong>rurais ou urbanos</strong>
										</span>
									</li>
									<li className="flex gap-2">
										<span className="text-primary mt-0.5">•</span>
										<span>
											<strong>Construídos ou em construção</strong>
										</span>
									</li>
									<li className="flex gap-2">
										<span className="text-primary mt-0.5">•</span>
										<span>
											Destinados a fins{" "}
											<strong>comerciais ou residenciais</strong>
										</span>
									</li>
								</ul>
							</InfoBoxCard>

							<InfoBoxCard color="accent" title="Títulos e Valores Mobiliários">
								<ul className="space-y-2 text-sm">
									<li className="flex gap-2">
										<span className="text-accent mt-0.5">•</span>
										<span>Cotas de outros FIIs</span>
									</li>
									<li className="flex gap-2">
										<span className="text-accent mt-0.5">•</span>
										<span>Letra de Crédito Imobiliário (LCI)</span>
									</li>
									<li className="flex gap-2">
										<span className="text-accent mt-0.5">•</span>
										<span>Certificado de Recebíveis Imobiliários (CRI)</span>
									</li>
									<li className="flex gap-2">
										<span className="text-accent mt-0.5">•</span>
										<span>Ações de companhias do setor imobiliário</span>
									</li>
								</ul>
							</InfoBoxCard>
						</div>
					</CardContent>
				</Card>
			</section>

			{/* Política de Investimento */}
			<section className="space-y-4">
				<Title variant="h2">Política de Investimento</Title>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6 space-y-4">
						<p className="text-text leading-relaxed">
							Todo FII possui um <strong>regulamento</strong> que, dentre outras
							disposições, determina a política de investimento do fundo. A
							política pode ser:
						</p>

						<div className="grid md:grid-cols-2 gap-4">
							<ColoredBorderCard title="Política Específica" color="success">
								<p className="text-text text-sm leading-relaxed">
									Estabelece que o FII invista apenas em um tipo específico de
									ativo. <strong>Exemplo:</strong> apenas imóveis prontos
									destinados ao aluguel de salas comerciais.
								</p>
							</ColoredBorderCard>

							<ColoredBorderCard title="Política Genérica" color="warning">
								<p className="text-text text-sm leading-relaxed">
									Permite ao fundo adquirir{" "}
									<strong>imóveis prontos em geral ou em construção</strong>, os
									quais poderão ser alugados ou vendidos.
								</p>
							</ColoredBorderCard>
						</div>
					</CardContent>
				</Card>
			</section>

			{/* Geração de Renda */}
			<section className="space-y-4">
				<Title variant="h2">Como o FII Gera Renda</Title>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6 space-y-4">
						<p className="text-text leading-relaxed">
							Com a aquisição dos imóveis, o fundo obterá renda através de:
						</p>
						<div className="grid md:grid-cols-3 gap-4">
							<InfoBoxCard color="primary" title="Locação" titleColor="primary">
								Receita gerada pelo <strong>aluguel de imóveis</strong>
							</InfoBoxCard>

							<InfoBoxCard color="accent" title="Venda" titleColor="accent">
								Ganho obtido com a <strong>venda de imóveis</strong>
							</InfoBoxCard>

							<InfoBoxCard
								color="secondary"
								title="Arrendamento"
								titleColor="secondary"
							>
								Renda proveniente de <strong>contratos de arrendamento</strong>
							</InfoBoxCard>
						</div>{" "}
						<InfoBoxCard color="warning" borderColor="warning" titleIcon="💰">
							Caso aplique em títulos e valores mobiliários, a renda se
							originará dos{" "}
							<strong>rendimentos distribuídos por esses ativos</strong> ou
							ainda pela diferença entre o seu preço de compra e de venda (ganho
							de capital). Os rendimentos auferidos pelo FII são{" "}
							<strong>distribuídos periodicamente aos seus cotistas</strong>.
						</InfoBoxCard>
					</CardContent>
				</Card>
			</section>

			{/* Condomínio Fechado */}
			<section className="space-y-4">
				<Title variant="h2">Condomínio Fechado</Title>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6 space-y-4">
						<p className="text-text leading-relaxed">
							O FII é constituído sob a forma de{" "}
							<strong>condomínio fechado</strong>, em que não é permitido ao
							investidor resgatar as cotas antes de decorrido o prazo de duração
							do fundo.
						</p>
						<InfoBoxCard color="accent" borderColor="accent" titleIcon="⏰">
							A maior parte dos FIIs tem{" "}
							<strong>prazo de duração indeterminado</strong>, ou seja, não é
							estabelecida uma data para a sua liquidação. Nesse caso, se o
							investidor decidir sair do investimento, somente poderá fazê-lo
							através da{" "}
							<strong>venda de suas cotas no mercado secundário</strong>.
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
					<ColoredBorderCard
						title="Acesso ao Mercado Imobiliário"
						color="success"
					>
						<p className="text-text text-sm leading-relaxed">
							Permite ao investidor aplicar em ativos relacionados ao mercado
							imobiliário{" "}
							<strong>sem, de fato, precisar comprar um imóvel</strong>. Não há
							a necessidade de desembolsar todo o valor normalmente exigido para
							investimento em um imóvel.
						</p>
					</ColoredBorderCard>

					<ColoredBorderCard title="Diversificação" color="primary">
						<p className="text-text text-sm leading-relaxed">
							Diversificação em diferentes tipos de ativos do mercado
							imobiliário (ex.:{" "}
							<strong>shopping centers, hotéis, residências</strong> etc.).
						</p>
					</ColoredBorderCard>

					<ColoredBorderCard title="Renda Periódica" color="accent">
						<p className="text-text text-sm leading-relaxed">
							As receitas geradas pelos imóveis ou ativos detidos pelo fundo são{" "}
							<strong>periodicamente distribuídas para os cotistas</strong>.
						</p>
					</ColoredBorderCard>

					<ColoredBorderCard title="Valorização Patrimonial" color="warning">
						<p className="text-text text-sm leading-relaxed">
							Aumento nos preços dos imóveis do fundo gera{" "}
							<strong>aumento do patrimônio do fundo</strong> e,
							consequentemente,{" "}
							<strong>valorização do valor das suas cotas</strong>.
						</p>
					</ColoredBorderCard>

					<ColoredBorderCard title="Gestão Profissional" color="secondary">
						<p className="text-text text-sm leading-relaxed">
							Todo o conjunto de tarefas ligadas à administração de um imóvel
							fica a cargo dos{" "}
							<strong>profissionais responsáveis pelo fundo</strong>: busca dos
							imóveis, trâmites de compra e venda, procura de inquilinos,
							manutenção, impostos etc.
						</p>
					</ColoredBorderCard>
				</div>
			</section>

			{/* Isenção de IR */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-success/10 text-success p-3 rounded-lg">
						<ShieldCheck className="w-6 h-6" />
					</div>
					<Title variant="h2">Isenção de Imposto de Renda</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6 space-y-4">
						<p className="text-text leading-relaxed">
							As{" "}
							<strong>pessoas físicas estão isentas de imposto de renda</strong>{" "}
							sobre os rendimentos distribuídos pelo FII, desde que atendidos os
							seguintes requisitos:
						</p>

						<div className="space-y-3">
							<InfoBoxCard
								color="primary"
								title="I - Negociação em Bolsa"
								titleColor="primary"
							>
								As cotas do Fundo de Investimento Imobiliário sejam{" "}
								<strong>
									admitidas à negociação exclusivamente em bolsas de valores ou
									no mercado de balcão organizado
								</strong>
								.
							</InfoBoxCard>

							<InfoBoxCard
								color="accent"
								title="II - Quantidade Mínima de Cotistas"
								titleColor="accent"
							>
								O Fundo de Investimento Imobiliário possua, no mínimo,{" "}
								<strong>50 (cinquenta) quotistas</strong>.
							</InfoBoxCard>

							<InfoBoxCard
								color="secondary"
								title="III - Limite de Concentração"
								titleColor="secondary"
							>
								Não será concedido ao quotista pessoa física titular de quotas
								que representem{" "}
								<strong>
									10% (dez por cento) ou mais da totalidade das quotas emitidas
								</strong>{" "}
								pelo Fundo de Investimento Imobiliário ou cujas quotas lhe derem
								direito ao recebimento de rendimento superior a{" "}
								<strong>
									10% (dez por cento) do total de rendimentos auferidos pelo
									fundo
								</strong>
								.
							</InfoBoxCard>
						</div>
					</CardContent>
				</Card>
			</section>

			{/* Especificações Técnicas */}
			<section className="space-y-4">
				<Title variant="h2">Detalhes de um FII</Title>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6">
						<Table />
					</CardContent>
				</Card>
			</section>
		</div>
	);
};

export default FIIs;
