import {
	AlertCircle,
	BookOpen,
	CheckCircle2,
	CreditCard,
	ExternalLink,
	FileText,
	HandshakeIcon,
	Percent,
	TrendingDown,
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

const NegociacaoDividas: React.FC = () => {
	return (
		<div className="space-y-12">
			{/* Introdução */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-3 rounded-lg">
						<HandshakeIcon className="w-6 h-6" />
					</div>
					<Title variant="h1">Negociação de dívidas</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<CardTitle>O que é negociação de dívidas?</CardTitle>
						<CardDescription>
							Entenda como renegociar suas dívidas de forma estratégica
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							É o processo em que o devedor procura o credor e entram em acordo
							para ajustar o pagamento de um débito em aberto.
						</p>
					</CardContent>
				</Card>
			</section>

			{/* Benefícios da Negociação */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-success/10 text-success p-3 rounded-lg">
						<TrendingDown className="w-6 h-6" />
					</div>
					<Title variant="h2">O que a negociação pode resultar</Title>
				</div>

				<div className="grid md:grid-cols-3 gap-4">
					<ColoredBorderCard title="Alongar o prazo" color="primary">
						<div className="flex items-start gap-3">
							<FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
							<p className="text-text text-sm leading-relaxed">
								Aumentar o número de parcelas para pagamento da dívida, tornando
								as prestações mais acessíveis.
							</p>
						</div>
					</ColoredBorderCard>

					<ColoredBorderCard title="Reduzir taxas" color="warning">
						<div className="flex items-start gap-3">
							<Percent className="w-5 h-5 text-warning mt-1 flex-shrink-0" />
							<p className="text-text text-sm leading-relaxed">
								Diminuir os juros e multas aplicados sobre o valor devido,
								reduzindo o montante total.
							</p>
						</div>
					</ColoredBorderCard>

					<ColoredBorderCard title="Conseguir descontos" color="success">
						<div className="flex items-start gap-3">
							<TrendingDown className="w-5 h-5 text-success mt-1 flex-shrink-0" />
							<p className="text-text text-sm leading-relaxed">
								Obter descontos na quitação da dívida, especialmente em
								pagamentos à vista.
							</p>
						</div>
					</ColoredBorderCard>
				</div>
			</section>

			{/* Como Negociar */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-3 rounded-lg">
						<CreditCard className="w-6 h-6" />
					</div>
					<Title variant="h2">Como negociar suas dívidas</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							Após a realização do seu planejamento financeiro e ter uma visão
							detalhada da situação financeira, é hora de procurar os credores e
							negociar as dívidas.
						</p>

						<InfoBoxCard color="warning" borderColor="warning" titleIcon="⚠️">
							É importante que o parcelamento para pagar as dívidas não
							ultrapasse <strong>30% da renda mensal disponível</strong> (o que
							resta após gastos essenciais).
						</InfoBoxCard>

						<div className="space-y-3 mt-4">
							<div className="flex gap-3 items-start">
								<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
								<p className="text-text leading-relaxed">
									Avalie diferentes propostas dos credores e escolha a que
									melhor se encaixa em sua realidade.
								</p>
							</div>
							<div className="flex gap-3 items-start">
								<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
								<p className="text-text leading-relaxed">
									O intuito é liquidar a dívida, então nem sempre a que possui
									mais desconto é a que você consegue pagar.
								</p>
							</div>
							<div className="flex gap-3 items-start">
								<CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
								<p className="text-text leading-relaxed">
									Use plataformas confiáveis como bancos, financeiras e
									empresas.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</section>

			{/* Serasa Limpa Nome */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-accent/10 text-accent p-3 rounded-lg">
						<AlertCircle className="w-6 h-6" />
					</div>
					<Title variant="h2">Serasa Limpa Nome</Title>
				</div>

				<Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-border/40 shadow-sm">
					<CardHeader>
						<CardTitle>Plataforma para renegociação de dívidas</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							A plataforma do Serasa Limpa Nome reúne todas as ofertas em um só
							lugar, é uma das principais ferramentas para quem deseja
							renegociar dívidas de forma prática e segura.
						</p>

						<div className="grid md:grid-cols-2 gap-4">
							<InfoBoxCard color="primary" title="Funcionalidades:">
								<ul className="space-y-2 text-sm">
									<li className="flex gap-2 items-start">
										<CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
										<span>Consulta todas as dívidas vinculadas ao CPF</span>
									</li>
									<li className="flex gap-2 items-start">
										<CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
										<span>
											Ver ofertas de descontos feitas diretamente pelos credores
										</span>
									</li>
									<li className="flex gap-2 items-start">
										<CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
										<span>Fechar acordos online, sem burocracia</span>
									</li>
									<li className="flex gap-2 items-start">
										<CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
										<span>
											Emitir boletos e acompanhar o status do pagamento
										</span>
									</li>
								</ul>
							</InfoBoxCard>

							<InfoBoxCard
								color="accent"
								borderColor="accent"
								title="Vantagens:"
							>
								<ul className="space-y-2 text-sm">
									<li className="flex gap-2 items-start">
										<span className="text-accent">•</span>
										<span>Praticidade e segurança na negociação</span>
									</li>
									<li className="flex gap-2 items-start">
										<span className="text-accent">•</span>
										<span>Todas as dívidas em um único lugar</span>
									</li>
									<li className="flex gap-2 items-start">
										<span className="text-accent">•</span>
										<span>Negociação direta com os credores</span>
									</li>
									<li className="flex gap-2 items-start">
										<span className="text-accent">•</span>
										<span>Acompanhamento em tempo real</span>
									</li>
								</ul>
							</InfoBoxCard>
						</div>
					</CardContent>
				</Card>
			</section>

			{/* Recursos Adicionais */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-accent/10 text-accent p-3 rounded-lg">
						<BookOpen className="w-6 h-6" />
					</div>
					<Title variant="h2">Saiba Mais</Title>
				</div>

				<a
					href="https://www.serasa.com.br/limpa-nome-online/blog/juntar-divida-numa-so/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 p-3 rounded-lg border border-border/40 hover:border-primary hover:bg-primary/5 transition-all group"
				>
					<ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
					<span className="text-text">
						Como juntar dívida numa só? - Serasa Limpa Nome
					</span>
				</a>
			</section>
		</div>
	);
};

export default NegociacaoDividas;
