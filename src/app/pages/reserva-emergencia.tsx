import {
	AlertTriangle,
	BookOpen,
	Calculator,
	CheckCircle2,
	DollarSign,
	ExternalLink,
	LineChart,
	PiggyBank,
	ShieldCheck,
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
import useRegisterWhenArticleFullyRead from "@/hooks/use-register-when-article-fully-read";

const ReservaEmergencia: React.FC = () => {
	useRegisterWhenArticleFullyRead();

	return (
		<div className="space-y-12">
			{/* Introdução */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-3 rounded-lg">
						<ShieldCheck className="w-6 h-6" />
					</div>
					<Title variant="h1">Reserva de Emergência</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<CardTitle>O que é Reserva de Emergência?</CardTitle>
						<CardDescription>
							Seu colchão financeiro para situações inesperadas
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							Reserva de Emergência é um conceito financeiro fundamental que se
							refere a uma quantia de dinheiro que uma pessoa ou família mantém
							disponível e acessível de forma imediata para ser utilizada em
							situações de imprevistos ou emergências financeiras.
						</p>
						<p className="text-text leading-relaxed">
							A principal função dessa reserva é proporcionar{" "}
							<strong>segurança financeira</strong> para enfrentar gastos
							inesperados sem recorrer a empréstimos, comprometer investimentos
							de longo prazo ou recorrer ao crédito de alto custo, como cartões
							de crédito.
						</p>
					</CardContent>
				</Card>
			</section>

			{/* Quanto Guardar */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-secondary/10 text-secondary p-3 rounded-lg">
						<Calculator className="w-6 h-6" />
					</div>
					<Title variant="h2">Quanto devo ter na reserva de emergência?</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6 space-y-4">
						<p className="text-text leading-relaxed">
							Isso vai depender muito de pessoa para pessoa e de seu padrão de
							vida. Na média, a conta básica é de{" "}
							<strong>seis meses de despesas</strong> cobertas por esse
							montante.
						</p>

						<div className="grid md:grid-cols-2 gap-4 mt-4">
							<InfoBoxCard color="primary" title="Exemplo 1:">
								<div className="space-y-2">
									<p className="text-sm">
										Despesas mensais: <strong>R$ 5.000,00</strong>
									</p>
									<p className="text-sm">
										Reserva necessária:{" "}
										<strong className="text-primary">R$ 30.000,00</strong>
									</p>
									<p className="text-xs text-muted-foreground">
										(6 meses × R$ 5.000)
									</p>
								</div>
							</InfoBoxCard>

							<InfoBoxCard color="secondary" title="Exemplo 2:">
								<div className="space-y-2">
									<p className="text-sm">
										Despesas mensais: <strong>R$ 10.000,00</strong>
									</p>
									<p className="text-sm">
										Reserva necessária:{" "}
										<strong className="text-secondary">R$ 60.000,00</strong>
									</p>
									<p className="text-xs text-muted-foreground">
										(6 meses × R$ 10.000)
									</p>
								</div>
							</InfoBoxCard>
						</div>

						<InfoBoxCard color="warning" borderColor="warning" titleIcon="⚠️">
							Porém, esse é apenas um arredondamento e varia bastante em cada
							caso.
						</InfoBoxCard>
					</CardContent>
				</Card>
			</section>

			{/* Variações por Perfil */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-accent/10 text-accent p-3 rounded-lg">
						<PiggyBank className="w-6 h-6" />
					</div>
					<Title variant="h2">Variações por perfil profissional</Title>
				</div>

				<div className="grid md:grid-cols-2 gap-4">
					<ColoredBorderCard
						title="Funcionários Públicos / CLT"
						color="success"
					>
						<div className="space-y-3">
							<div className="flex items-start gap-3">
								<CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" />
								<div>
									<p className="text-text text-sm leading-relaxed">
										Contam com estabilidade maior no emprego
									</p>
								</div>
							</div>
							<div className="bg-success/10 p-3 rounded-lg">
								<p className="text-sm font-medium text-success">
									Reserva recomendada:
								</p>
								<p className="text-sm text-text mt-1">
									<strong>3 a 4 meses</strong> de despesas
								</p>
							</div>
							<p className="text-xs text-muted-foreground">
								Benefícios como FGTS e aviso prévio oferecem proteção adicional
							</p>
						</div>
					</ColoredBorderCard>

					<ColoredBorderCard title="Profissionais Autônomos" color="warning">
						<div className="space-y-3">
							<div className="flex items-start gap-3">
								<AlertTriangle className="w-5 h-5 text-warning mt-1 flex-shrink-0" />
								<div>
									<p className="text-text text-sm leading-relaxed">
										Não contam com benefícios do regime CLT
									</p>
								</div>
							</div>
							<div className="bg-warning/10 p-3 rounded-lg">
								<p className="text-sm font-medium text-warning">
									Reserva recomendada:
								</p>
								<p className="text-sm text-text mt-1">
									<strong>9 a 12 meses</strong> de despesas
								</p>
							</div>
							<p className="text-xs text-muted-foreground">
								Exemplos: médicos, dentistas, prestadores de serviço
							</p>
						</div>
					</ColoredBorderCard>
				</div>
			</section>

			{/* Aplicações para Reserva */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-3 rounded-lg">
						<TrendingUp className="w-6 h-6" />
					</div>
					<Title variant="h2">Onde investir sua reserva de emergência</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<CardTitle>Critérios essenciais</CardTitle>
						<CardDescription>
							Os investimentos para reserva de emergência devem seguir estes
							critérios
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="grid md:grid-cols-3 gap-4">
							<ColoredBorderCard title="Resgate Imediato" color="primary">
								<div className="flex items-start gap-3">
									<DollarSign className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
									<p className="text-text text-sm leading-relaxed">
										O ideal é que permita resgate no mesmo dia (D+0), ou no
										máximo, 1 dia útil (D+1)
									</p>
								</div>
							</ColoredBorderCard>

							<ColoredBorderCard title="Baixa Volatilidade" color="success">
								<div className="flex items-start gap-3">
									<LineChart className="w-5 h-5 text-success mt-1 flex-shrink-0" />
									<p className="text-text text-sm leading-relaxed">
										Deve estar em investimentos seguros, conservadores e com
										rentabilidade previsível
									</p>
								</div>
							</ColoredBorderCard>

							<ColoredBorderCard title="Custos Baixos" color="accent">
								<div className="flex items-start gap-3">
									<TrendingUp className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
									<p className="text-text text-sm leading-relaxed">
										Evite fundos com altas taxas de administração ou custódia
									</p>
								</div>
							</ColoredBorderCard>
						</div>
					</CardContent>
				</Card>
			</section>

			{/* Opções de Investimento */}
			<section className="space-y-4">
				<Title variant="h2">Opções de investimento recomendadas</Title>

				<div className="space-y-4">
					{/* Tesouro Selic */}
					<Card className="border-border/40 shadow-sm">
						<CardHeader>
							<div className="flex items-center gap-2">
								<div className="bg-primary/10 text-primary p-2 rounded">
									<ShieldCheck className="w-5 h-5" />
								</div>
								<div>
									<CardTitle>Tesouro Selic</CardTitle>
									<CardDescription>Título do Governo Federal</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<div className="space-y-3">
								<div className="grid md:grid-cols-2 gap-4">
									<div>
										<p className="text-sm font-medium text-muted-foreground mb-2">
											Características:
										</p>
										<ul className="space-y-1 text-sm">
											<li className="flex gap-2 items-start">
												<CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
												<span>Seguro</span>
											</li>
											<li className="flex gap-2 items-start">
												<CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
												<span>Baixo custo</span>
											</li>
											<li className="flex gap-2 items-start">
												<CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
												<span>Rendimento previsível (atrelado à Selic)</span>
											</li>
											<li className="flex gap-2 items-start">
												<CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
												<span>Liquidez D+1</span>
											</li>
										</ul>
									</div>
									<InfoBoxCard
										color="primary"
										borderColor="primary"
										className="col-span-2"
									>
										<p className="text-sm">
											Mais informações no site do{" "}
											<a
												href="https://www.tesourodireto.com.br"
												target="_blank"
												rel="noopener noreferrer"
												className="text-primary hover:underline"
											>
												Tesouro Direto
											</a>
										</p>
									</InfoBoxCard>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Fundos DI */}
					<Card className="border-border/40 shadow-sm">
						<CardHeader>
							<div className="flex items-center gap-2">
								<div className="bg-secondary/10 text-secondary p-2 rounded">
									<LineChart className="w-5 h-5" />
								</div>
								<div>
									<CardTitle>Fundos DI</CardTitle>
									<CardDescription>Investimentos privados</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<div className="space-y-3">
								<ul className="space-y-1 text-sm">
									<li className="flex gap-2 items-start">
										<CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
										<span>Seguros</span>
									</li>
									<li className="flex gap-2 items-start">
										<CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
										<span>
											Custos variáveis (verificar taxa de administração)
										</span>
									</li>
									<li className="flex gap-2 items-start">
										<CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
										<span>Rendimento próximo ao CDI</span>
									</li>
									<li className="flex gap-2 items-start">
										<CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
										<span>Liquidez geralmente D+0 ou D+1</span>
									</li>
								</ul>
							</div>
						</CardContent>
					</Card>

					{/* CDB */}
					<Card className="border-border/40 shadow-sm">
						<CardHeader>
							<div className="flex items-center gap-2">
								<div className="bg-accent/10 text-accent p-2 rounded">
									<TrendingUp className="w-5 h-5" />
								</div>
								<div>
									<CardTitle>CDB - Certificado de Depósito Bancário</CardTitle>
									<CardDescription>Títulos de renda fixa</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<div className="space-y-3">
								<ul className="space-y-1 text-sm">
									<li className="flex gap-2 items-start">
										<CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
										<span>Seguros (protegidos pelo FGC até R$ 250 mil)</span>
									</li>
									<li className="flex gap-2 items-start">
										<CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
										<span>Custos variáveis</span>
									</li>
									<li className="flex gap-2 items-start">
										<CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
										<span>Rendimento atrelado ao CDI</span>
									</li>
								</ul>
								<InfoBoxCard
									color="warning"
									borderColor="warning"
									titleIcon="⚠️"
								>
									<p className="text-sm">
										Atenção: Verifique se o CDB tem liquidez diária antes de
										investir
									</p>
								</InfoBoxCard>
							</div>
						</CardContent>
					</Card>

					{/* Poupança */}
					<Card className="border-border/40 shadow-sm">
						<CardHeader>
							<div className="flex items-center gap-2">
								<div className="bg-success/10 text-success p-2 rounded">
									<PiggyBank className="w-5 h-5" />
								</div>
								<div>
									<CardTitle>Poupança</CardTitle>
									<CardDescription>
										Opção tradicional e acessível
									</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<div className="space-y-3">
								<div className="grid md:grid-cols-2 gap-4">
									<div>
										<p className="text-sm font-medium text-success mb-2">
											Vantagens:
										</p>
										<ul className="space-y-1 text-sm">
											<li className="flex gap-2 items-start">
												<CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
												<span>Liquidez imediata</span>
											</li>
											<li className="flex gap-2 items-start">
												<CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
												<span>Segurança (protegida pelo FGC)</span>
											</li>
											<li className="flex gap-2 items-start">
												<CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
												<span>Sem taxas</span>
											</li>
										</ul>
									</div>
									<InfoBoxCard
										color="warning"
										borderColor="warning"
										className="col-span-2"
									>
										<p className="text-sm font-medium mb-1">Desvantagem:</p>
										<p className="text-sm">
											Rendimentos geralmente mais baixos que outras opções de
											investimento
										</p>
									</InfoBoxCard>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Recursos Adicionais */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-accent/10 text-accent p-3 rounded-lg">
						<BookOpen className="w-6 h-6" />
					</div>
					<Title variant="h2">Saiba mais</Title>
				</div>

				<div className="grid md:grid-cols-2 gap-3">
					<a
						href="https://borainvestir.b3.com.br/glossario/reserva-de-emergencia/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 p-3 rounded-lg border border-border/40 hover:border-primary hover:bg-primary/5 transition-all group"
					>
						<ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
						<span className="text-text">
							Glossário - Reserva de Emergência (B3)
						</span>
					</a>

					<a
						href="https://content.btgpactual.com/blog/financas/o-que-e-reserva-de-emergencia-e-como-planejar"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 p-3 rounded-lg border border-border/40 hover:border-primary hover:bg-primary/5 transition-all group"
					>
						<ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
						<span className="text-text">
							Como planejar sua reserva - BTG Pactual
						</span>
					</a>

					<a
						href="https://conteudos.xpi.com.br/aprenda-a-investir/relatorios/investimentos-para-reserva-de-emergencia/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 p-3 rounded-lg border border-border/40 hover:border-primary hover:bg-primary/5 transition-all group"
					>
						<ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
						<span className="text-text">
							Investimentos para Reserva de Emergência - XP
						</span>
					</a>
				</div>
			</section>
		</div>
	);
};

export default ReservaEmergencia;
