import {
	BookOpen,
	CheckCircle2,
	CircleDollarSign,
	ExternalLink,
	Sparkles,
	Target,
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

const GerenciarDinheiro: React.FC = () => {
	return (
		<div className="space-y-12">
			{/* Introdução */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-3 rounded-lg">
						<CircleDollarSign className="w-6 h-6" />
					</div>
					<Title variant="h1">Como gerenciar seu dinheiro</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<CardTitle>Administração Financeira</CardTitle>
						<CardDescription>
							Construindo um futuro seguro e confortável
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							Administrar bem o seu dinheiro é fundamental para garantir sua
							estabilidade financeira e um futuro seguro e confortável.
						</p>
					</CardContent>
				</Card>
			</section>

			{/* Benefícios */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-success/10 text-success p-3 rounded-lg">
						<Sparkles className="w-6 h-6" />
					</div>
					<Title variant="h2">
						O que uma boa administração pode proporcionar
					</Title>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
					<ColoredBorderCard title="Tranquilidade Financeira" color="success">
						<p className="text-text text-sm leading-relaxed">
							Maior paz de espírito ao saber que suas contas estão em ordem e
							você tem controle sobre suas finanças.
						</p>
					</ColoredBorderCard>

					<ColoredBorderCard title="Realização de Objetivos" color="primary">
						<p className="text-text text-sm leading-relaxed">
							Capacidade de planejar e alcançar seus sonhos, como comprar uma
							casa, viajar ou investir em educação.
						</p>
					</ColoredBorderCard>

					<ColoredBorderCard
						title="Preparação para Imprevistos"
						color="warning"
					>
						<p className="text-text text-sm leading-relaxed">
							Segurança para enfrentar emergências financeiras sem comprometer
							seu padrão de vida.
						</p>
					</ColoredBorderCard>

					<ColoredBorderCard title="Qualidade de Vida" color="accent">
						<p className="text-text text-sm leading-relaxed">
							Melhor aproveitamento dos recursos disponíveis para viver bem no
							presente e planejar o futuro.
						</p>
					</ColoredBorderCard>

					<ColoredBorderCard title="Independência Financeira" color="secondary">
						<p className="text-text text-sm leading-relaxed">
							Liberdade para tomar decisões sem depender de terceiros ou de
							crédito constante.
						</p>
					</ColoredBorderCard>
				</div>
			</section>

			{/* Passos para Saúde Financeira */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-3 rounded-lg">
						<Target className="w-6 h-6" />
					</div>
					<Title variant="h2">Passos para uma saúde financeira estável</Title>
				</div>

				<p className="text-text leading-relaxed">
					Existem diversas maneiras para conquistar uma saúde financeira
					estável. Vamos indicar alguns passos essenciais para este objetivo:
				</p>

				{/* Passo 1 */}
				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<div className="flex items-start gap-3">
							<div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
								1
							</div>
							<div>
								<CardTitle>Faça um diagnóstico financeiro</CardTitle>
								<CardDescription>
									Entenda sua situação financeira atual
								</CardDescription>
							</div>
						</div>
					</CardHeader>
					<CardContent>
						<ul className="space-y-2">
							<li className="flex gap-2 items-start">
								<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
								<span className="text-text leading-relaxed">
									Levante todas as receitas e despesas
								</span>
							</li>
							<li className="flex gap-2 items-start">
								<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
								<span className="text-text leading-relaxed">
									Anote todos os gastos de pelo menos um mês
								</span>
							</li>
							<li className="flex gap-2 items-start">
								<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
								<span className="text-text leading-relaxed">
									Liste todas as dívidas e bens (ativos)
								</span>
							</li>
						</ul>
					</CardContent>
				</Card>

				{/* Passo 2 */}
				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<div className="flex items-start gap-3">
							<div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
								2
							</div>
							<div>
								<CardTitle>Estabeleça metas financeiras claras</CardTitle>
								<CardDescription>
									Defina objetivos específicos e alcançáveis
								</CardDescription>
							</div>
						</div>
					</CardHeader>
					<CardContent className="space-y-4">
						<ul className="space-y-2">
							<li className="flex gap-2 items-start">
								<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
								<span className="text-text leading-relaxed">
									Liste o que deseja alcançar a curto, médio e longo prazo
								</span>
							</li>
							<li className="flex gap-2 items-start">
								<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
								<span className="text-text leading-relaxed">
									As metas têm que ser específicas, mensuráveis, alcançáveis,
									relevantes e com prazo definido
								</span>
							</li>
						</ul>
					</CardContent>
				</Card>

				{/* Passo 3 */}
				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<div className="flex items-start gap-3">
							<div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
								3
							</div>
							<div>
								<CardTitle>Defina um orçamento realista</CardTitle>
								<CardDescription>
									Organize sua renda de forma estratégica
								</CardDescription>
							</div>
						</div>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							Distribua sua renda entre gastos essenciais (50%), não essenciais
							(30%) e economias/investimentos (20%).
						</p>
						<InfoBoxCard color="warning" borderColor="warning" titleIcon="⚠️">
							Essas taxas podem variar de acordo com a realidade de cada um, mas
							é importante ter essa divisão definida.
						</InfoBoxCard>
					</CardContent>
				</Card>

				{/* Passo 4 */}
				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<div className="flex items-start gap-3">
							<div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
								4
							</div>
							<div>
								<CardTitle>Corte gastos desnecessários</CardTitle>
								<CardDescription>Otimize suas despesas</CardDescription>
							</div>
						</div>
					</CardHeader>
					<CardContent>
						<ul className="space-y-2">
							<li className="flex gap-2 items-start">
								<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
								<span className="text-text leading-relaxed">
									Analise seu orçamento e veja onde você pode reduzir despesas
								</span>
							</li>
							<li className="flex gap-2 items-start">
								<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
								<span className="text-text leading-relaxed">
									Procure por opções mais em conta das despesas regulares
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
								<CardTitle>Pague suas dívidas</CardTitle>
								<CardDescription>
									Estratégias para se livrar das dívidas
								</CardDescription>
							</div>
						</div>
					</CardHeader>
					<CardContent>
						<ul className="space-y-2">
							<li className="flex gap-2 items-start">
								<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
								<span className="text-text leading-relaxed">
									Estabeleça um plano para quitar suas dívidas
								</span>
							</li>
							<li className="flex gap-2 items-start">
								<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
								<span className="text-text leading-relaxed">
									Procure renegociar as dívidas de juros altos
								</span>
							</li>
							<li className="flex gap-2 items-start">
								<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
								<span className="text-text leading-relaxed">
									Procure quitar dívidas de baixo valor ou de juros altos, o que
									for mais viável
								</span>
							</li>
						</ul>
					</CardContent>
				</Card>

				{/* Passo 6 */}
				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<div className="flex items-start gap-3">
							<div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
								6
							</div>
							<div>
								<CardTitle>Monte sua reserva de emergência</CardTitle>
								<CardDescription>
									Proteja-se contra imprevistos financeiros
								</CardDescription>
							</div>
						</div>
					</CardHeader>
					<CardContent>
						<p className="text-text leading-relaxed">
							Procure investimentos de liquidez diária, que rendam mais que a
							poupança, e guarde pelo menos seis meses do seu custo fixo.
						</p>
					</CardContent>
				</Card>

				{/* Passo 7 */}
				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<div className="flex items-start gap-3">
							<div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
								7
							</div>
							<div>
								<CardTitle>Comece a investir</CardTitle>
								<CardDescription>
									Faça seu dinheiro trabalhar para você
								</CardDescription>
							</div>
						</div>
					</CardHeader>
					<CardContent>
						<ul className="space-y-2">
							<li className="flex gap-2 items-start">
								<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
								<span className="text-text leading-relaxed">
									Após montar sua reserva de emergência, estude as
									possibilidades de investimentos no mercado
								</span>
							</li>
							<li className="flex gap-2 items-start">
								<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
								<span className="text-text leading-relaxed">
									Faça uma avaliação do seu perfil de investidor
								</span>
							</li>
							<li className="flex gap-2 items-start">
								<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
								<span className="text-text leading-relaxed">
									Abra uma conta em uma corretora e comece a investir
								</span>
							</li>
						</ul>
					</CardContent>
				</Card>

				{/* Passo 8 */}
				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<div className="flex items-start gap-3">
							<div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
								8
							</div>
							<div>
								<CardTitle>Utilize a tecnologia para gestão</CardTitle>
								<CardDescription>
									Ferramentas para organizar suas finanças
								</CardDescription>
							</div>
						</div>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							É importante o uso de tecnologias para gestão das suas
							receitas/despesas e dos seus ativos.
						</p>
						<InfoBoxCard color="accent" borderColor="accent" titleIcon="💡">
							Utilize ferramentas como Excel e aplicativos de gestão de ativos
							para manter o controle financeiro.
						</InfoBoxCard>
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
								<CardTitle>Sempre revise o planejamento</CardTitle>
								<CardDescription>
									Mantenha suas finanças atualizadas
								</CardDescription>
							</div>
						</div>
					</CardHeader>
					<CardContent>
						<p className="text-text leading-relaxed">
							É importante sempre revisar seu orçamento pessoal, seus ativos e
							seu perfil de investidor, para buscar melhores oportunidades e
							obter resultados crescentes.
						</p>
					</CardContent>
				</Card>
			</section>

			{/* Recursos Adicionais */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-accent/10 text-accent p-3 rounded-lg">
						<BookOpen className="w-6 h-6" />
					</div>
					<Title variant="h2">Saiba mais</Title>
				</div>

				<a
					href="https://blog.avantiopenbanking.com.br/como-administrar-meu-dinheiro/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 p-3 rounded-lg border border-border/40 hover:border-primary hover:bg-primary/5 transition-all group"
				>
					<ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
					<span className="text-text">
						Como administrar meu dinheiro? - Avanti Open Banking
					</span>
				</a>
			</section>
		</div>
	);
};

export default GerenciarDinheiro;
