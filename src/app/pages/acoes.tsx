import {
	AlertTriangle,
	Award,
	Building2,
	CheckCircle2,
	Lightbulb,
	Sparkles,
	Target,
	TrendingUp,
} from "lucide-react";
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

			{/* Como Começar a Investir */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-3 rounded-lg">
						<Target className="w-6 h-6" />
					</div>
					<Title variant="h2">Como começar a investir em ações</Title>
				</div>

				<InfoBoxCard
					color="warning"
					borderColor="warning"
					titleIcon="⚠️"
					title="Lembre-se sempre..."
				>
					<p className="text-text leading-relaxed">
						Ações são para <strong>longo prazo</strong>. Sempre utilize valores
						que podem ficar "presos", e não necessite de resgate no curto prazo.
						O mercado de renda variável pode tanto valorizar quanto
						desvalorizar, por isso, estude bem as empresas, se são empresas
						lucrativas, estude o mercado no qual a empresa está inserida,
						acompanhe e analise os balanços que são disponibilizados de forma
						trimestral.
					</p>
				</InfoBoxCard>

				<div className="space-y-4">
					{/* Passo 1 */}
					<Card className="border-border/40 shadow-sm">
						<CardHeader>
							<div className="flex items-start gap-3">
								<div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
									1
								</div>
								<div>
									<CardTitle>
										Defina seus objetivos e perfil de investidor
									</CardTitle>
									<CardDescription>
										Entenda suas metas e tolerância ao risco
									</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Estabeleça metas claras: para que você está investindo
										(aposentadoria, compra de imóvel, geração de renda,
										independência financeira, etc.)
									</span>
								</li>
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Verifique seu horizonte de tempo (curto, médio ou longo
										prazo) e sua tolerância ao risco (ações são renda variável,
										variam tanto para mais, quanto para menos)
									</span>
								</li>
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Entenda a importância de manter uma reserva de emergência
										antes de investir montantes maiores em ações
									</span>
								</li>
							</ul>
						</CardContent>
					</Card>

					{/* Passo 2 */}
					<Card className="border-border/40 shadow-sm">
						<CardHeader>
							<div className="flex items-start gap-3">
								<div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
									2
								</div>
								<div>
									<CardTitle>Organize sua situação financeira</CardTitle>
									<CardDescription>
										Estabilidade financeira é fundamental
									</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent className="space-y-4">
							<ul className="space-y-2">
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Quite ou controle dívidas de altos juros, pois investir em
										ações com juros altos correndo não costuma fazer sentido
									</span>
								</li>
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Garanta que suas finanças pessoais estejam equilibradas:
										fluxo de caixa, gastos controlados, reserva de emergência
										estabelecida
									</span>
								</li>
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Determine quanto você pode investir regularmente, sem
										comprometer seu padrão de vida
									</span>
								</li>
							</ul>
							<InfoBoxCard color="warning" borderColor="warning" titleIcon="🚫">
								<strong>Importante:</strong> Não faça dívidas para investir em
								ações.
							</InfoBoxCard>
						</CardContent>
					</Card>

					{/* Passo 3 */}
					<Card className="border-border/40 shadow-sm">
						<CardHeader>
							<div className="flex items-start gap-3">
								<div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
									3
								</div>
								<div>
									<CardTitle>Escolha uma corretora ou intermediário</CardTitle>
									<CardDescription>
										Selecione uma plataforma confiável e regulada
									</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										No Brasil, selecione uma corretora regulada pela Comissão de
										Valores Mobiliários (CVM)
									</span>
								</li>
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Compare taxas, plataforma de negociação, qualidade do
										atendimento, ferramentas de análise disponíveis. Dê
										preferência às corretoras que não cobram taxas de corretagem
									</span>
								</li>
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Abra sua conta: inclua preenchimento de questionário de
										perfil de investidor, envio de documentos, ativação da conta
									</span>
								</li>
							</ul>
						</CardContent>
					</Card>

					{/* Passo 4 */}
					<Card className="border-border/40 shadow-sm">
						<CardHeader>
							<div className="flex items-start gap-3">
								<div className="bg-success text-success-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
									4
								</div>
								<div>
									<CardTitle>Transfira os recursos para a corretora</CardTitle>
									<CardDescription>
										Comece com o que é confortável
									</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Após aprovação da corretora, deposite fundos via
										transferência bancária, PIX ou outro método disponível
									</span>
								</li>
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Determine um valor que você se sente confortável em
										investir. Pode começar pequeno e aumentar gradualmente
									</span>
								</li>
							</ul>
						</CardContent>
					</Card>

					{/* Passo 5 */}
					<Card className="border-border/40 shadow-sm">
						<CardHeader>
							<div className="flex items-start gap-3">
								<div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
									5
								</div>
								<div>
									<CardTitle>Eduque-se sobre investimentos em ações</CardTitle>
									<CardDescription>
										Conhecimento é fundamental para o sucesso
									</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent className="space-y-4">
							<ul className="space-y-2">
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Entenda conceitos básicos: o que são ações, como funciona
										uma bolsa de valores, o que significa dividendos,
										valorização, risco, liquidez
									</span>
								</li>
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Aprenda sobre análise de empresas (fundamentalista) e
										análise de mercado, bem como estratégias de diversificação
									</span>
								</li>
							</ul>
							<InfoBoxCard color="warning" borderColor="warning" titleIcon="⚠️">
								Evite entrar "de cabeça" sem conhecer o que está fazendo —
								especialmente não "apostar" tudo em uma única ação sem avaliar.
							</InfoBoxCard>
						</CardContent>
					</Card>

					{/* Passo 6 */}
					<Card className="border-border/40 shadow-sm">
						<CardHeader>
							<div className="flex items-start gap-3">
								<div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
									6
								</div>
								<div>
									<CardTitle>Defina sua estratégia de investimento</CardTitle>
									<CardDescription>
										Escolha uma abordagem alinhada aos seus objetivos
									</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Você vai comprar empresas individuais, ETFs ou fundos de
										ações? Qual será o seu critério de seleção?
									</span>
								</li>
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Determine se você vai investir de forma ativa (escolhendo
										ações) ou passiva (por meio de ETFs ou fundos)
									</span>
								</li>
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Aplique o método de "dollar-cost averaging" (investir um
										valor fixo periodicamente) para reduzir risco de "acertar o
										timing" errado
									</span>
								</li>
							</ul>
						</CardContent>
					</Card>

					{/* Passo 7 */}
					<Card className="border-border/40 shadow-sm">
						<CardHeader>
							<div className="flex items-start gap-3">
								<div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
									7
								</div>
								<div>
									<CardTitle>Escolha as ações ou ativos para começar</CardTitle>
									<CardDescription>
										Análise cuidadosa é essencial
									</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Para iniciantes, pode fazer sentido começar com empresas
										mais consolidadas ou ETFs que proporcionem diversificação
									</span>
								</li>
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Analise empresa por empresa: negócios, setor, perspectivas,
										balanço financeiro, endividamento, vantagens competitivas
									</span>
								</li>
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Avalie também riscos: mercado, setor, regulatórios,
										macroeconômicos
									</span>
								</li>
							</ul>
						</CardContent>
					</Card>

					{/* Passo 8 */}
					<Card className="border-border/40 shadow-sm">
						<CardHeader>
							<div className="flex items-start gap-3">
								<div className="bg-success text-success-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
									8
								</div>
								<div>
									<CardTitle>Realize sua primeira compra</CardTitle>
									<CardDescription>
										Execute sua estratégia com atenção
									</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										No sistema da corretora, localize o ativo, defina quantas
										ações ou valor investir, escolha tipo de ordem (ex: ordem a
										mercado, limite)
									</span>
								</li>
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Revise taxas envolvidas, custos de corretagem, impostos na
										venda ou dividendos (no Brasil existem regras específicas)
									</span>
								</li>
							</ul>
						</CardContent>
					</Card>

					{/* Passo 9 */}
					<Card className="border-border/40 shadow-sm">
						<CardHeader>
							<div className="flex items-start gap-3">
								<div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
									9
								</div>
								<div>
									<CardTitle>
										Monitore e revise seu portfólio regularmente
									</CardTitle>
									<CardDescription>
										Acompanhamento constante é importante
									</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Verifique periodicamente se as empresas ainda se mantêm com
										fundamentos sólidos, se a alocação está de acordo com seus
										objetivos
									</span>
								</li>
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Rebalanceie se necessário (realocar entre ativos para manter
										o perfil de risco)
									</span>
								</li>
								<li className="flex gap-2 items-start">
									<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Não reaja de forma exagerada a oscilações de curto prazo —
										manter o foco no longo prazo geralmente traz melhores
										resultados
									</span>
								</li>
							</ul>
						</CardContent>
					</Card>

					{/* Passo 10 */}
					<Card className="border-border/40 shadow-sm">
						<CardHeader>
							<div className="flex items-start gap-3">
								<div className="bg-warning text-warning-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
									10
								</div>
								<div>
									<CardTitle>
										Evite erros comuns e mantenha disciplina
									</CardTitle>
									<CardDescription>
										Consistência é chave para o sucesso
									</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent className="space-y-4">
							<ul className="space-y-2">
								<li className="flex gap-2 items-start">
									<AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Evite "seguir o hype" sem analisar — investir apenas porque
										"todo mundo está fazendo" pode levar a perdas
									</span>
								</li>
								<li className="flex gap-2 items-start">
									<AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Cuidado com investir dinheiro que você pode precisar em
										curto prazo
									</span>
								</li>
								<li className="flex gap-2 items-start">
									<AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Mantenha custos baixos, entenda impostos, taxas e custos de
										corretagem
									</span>
								</li>
								<li className="flex gap-2 items-start">
									<Lightbulb className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
									<span className="text-text leading-relaxed">
										Mantenha a educação continuada: o mercado muda, novas
										estratégias surgem, esteja sempre aprendendo
									</span>
								</li>
							</ul>
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	);
};

export default Acoes;
