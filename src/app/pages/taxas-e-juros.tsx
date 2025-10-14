import {
	BookOpen,
	Calculator,
	DollarSign,
	ExternalLink,
	TrendingUp,
} from "lucide-react";
import Title from "@/components/title";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const TaxasJuros: React.FC = () => {
	return (
		<div className="space-y-12">
			<div className="space-y-2">
				<Title>Conceitos Básicos</Title>
				<p className="text-muted-foreground text-lg">
					Entenda os fundamentos essenciais da educação financeira
				</p>
			</div>

			{/* Juros Section */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-3 rounded-lg">
						<DollarSign className="w-6 h-6" />
					</div>
					<Title variant="h2">Juros</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<CardTitle>O que são Juros?</CardTitle>
						<CardDescription>
							Compreenda o conceito fundamental dos juros na economia
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							De acordo com o <strong>Banco Central do Brasil</strong>, os juros
							são os valores que você paga ou recebe do dinheiro tomado
							emprestado ou emprestado, no tempo, como se fosse um aluguel.
						</p>
						<p className="text-text leading-relaxed">
							Através dos bancos as negociações são feitas entre o{" "}
							<span className="text-primary font-medium">
								poupador/investidor
							</span>{" "}
							e o{" "}
							<span className="text-secondary font-medium">
								tomador/devedor
							</span>
							. O tomador/devedor pega um dinheiro emprestado ao banco, a uma
							taxa de juros, o banco fica com uma parte deste juros e o restante
							é repassado ao poupador/investidor.
						</p>
					</CardContent>
				</Card>
			</section>

			{/* Taxa de Juros */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-secondary/10 text-secondary p-3 rounded-lg">
						<Calculator className="w-6 h-6" />
					</div>
					<Title variant="h2">Taxa de Juros</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<CardTitle>Definição</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							É um valor cobrado pelo empréstimo do dinheiro por um determinado
							tempo. Essa taxa é calculada pelo percentual da divisão dos juros
							contratados sobre o capital emprestado/poupado.
						</p>
						<div className="bg-accent/5 p-4 rounded-lg border-l-4 border-accent/40">
							<p className="text-sm font-medium text-accent mb-2">Exemplo:</p>
							<p className="text-text">
								Se os juros cobrado de um empréstimo de{" "}
								<strong>R$ 1.000,00</strong> for de <strong>R$ 100,00</strong>{" "}
								ao ano, significa que a taxa de juros é de{" "}
								<strong className="text-primary">10% a.a.</strong>
							</p>
						</div>
						<div className="bg-muted/50 p-4 rounded-lg">
							<p className="text-sm text-muted-foreground mb-2">
								💡 Saiba mais:
							</p>
							<p className="text-sm text-text">
								As taxas de juros médias aplicadas pelas instituições
								financeiras podem ser consultadas no site do Banco Central do
								Brasil.
							</p>
							<a
								href="https://www.bcb.gov.br/estatisticas/txjuros"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1 text-sm text-primary hover:text-secondary transition-colors mt-2"
							>
								Acessar BCB <ExternalLink className="w-3 h-3" />
							</a>
						</div>
					</CardContent>
				</Card>

				{/* Tipos de Juros */}
				<div className="grid md:grid-cols-2 gap-4">
					{/* Juros Simples */}
					<Card className="border-l-4 border-l-success/40 border-y-0 border-r-0 shadow-sm">
						<CardHeader>
							<CardTitle className="text-success">
								Taxa de Juros Simples
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<p className="text-text text-sm leading-relaxed">
								É a taxa cobrada/aplicada que é baseada sempre no capital
								inicial investido/emprestado, ou seja,{" "}
								<strong>não incide juros sobre juros</strong>.
							</p>
							<div className="bg-success/5 p-4 rounded-lg">
								<p className="text-xs font-medium text-success mb-2">
									Exemplo:
								</p>
								<p className="text-sm text-text">
									Se um valor de R$ 1.000,00 é aplicado a uma taxa de 10% a.a
									por dois anos, ao final o poupador/investidor receberá R$
									100,00 do primeiro ano e R$ 100,00 do segundo, totalizando{" "}
									<strong>R$ 1.200,00</strong>.
								</p>
							</div>
							<div className="bg-background p-4 rounded-lg border border-border/40">
								<p className="text-sm font-semibold text-primary mb-2">
									Fórmula:
								</p>
								<code className="text-sm font-mono bg-muted px-3 py-2 rounded block">
									J = C × i × t
								</code>
								<div className="mt-3 space-y-1 text-xs text-muted-foreground">
									<p>
										<strong>J</strong> = Juros simples
									</p>
									<p>
										<strong>C</strong> = Capital inicial
									</p>
									<p>
										<strong>i</strong> = Taxa de juros
									</p>
									<p>
										<strong>t</strong> = Tempo da operação
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Juros Compostos */}
					<Card className="border-l-4 border-l-warning/40 border-y-0 border-r-0 shadow-sm">
						<CardHeader>
							<CardTitle className="text-warning">
								Taxa de Juros Composta
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<p className="text-text text-sm leading-relaxed">
								É a taxa cobrada/aplicada por um período determinado que é
								somado a um novo capital ao decorrer do tempo -{" "}
								<strong>juros sobre juros</strong>.
							</p>
							<div className="bg-warning/5 p-4 rounded-lg">
								<p className="text-xs font-medium text-warning mb-2">
									Exemplo:
								</p>
								<p className="text-sm text-text">
									Se um valor de R$ 1.000,00 é aplicado a uma taxa de 10% a.a
									por dois anos, no primeiro ano receberá R$ 100,00. No segundo
									ano, receberá R$ 110,00 (juros sobre o novo capital de R$
									1.100,00). Resultado: <strong>R$ 1.210,00</strong>.
								</p>
							</div>
							<div className="bg-background p-4 rounded-lg border border-border/40">
								<p className="text-sm font-semibold text-primary mb-2">
									Fórmula:
								</p>
								<code className="text-sm font-mono bg-muted px-3 py-2 rounded block">
									M = C × (1 + i)ⁿ
								</code>
								<div className="mt-3 space-y-1 text-xs text-muted-foreground">
									<p>
										<strong>M</strong> = Montante do dinheiro
									</p>
									<p>
										<strong>C</strong> = Capital inicial
									</p>
									<p>
										<strong>i</strong> = Taxa de juros
									</p>
									<p>
										<strong>n</strong> = Períodos decorridos
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Juros Real */}
				<Card className="border-l-4 border-l-accent/40 border-y-0 border-r-0 shadow-sm">
					<CardHeader>
						<CardTitle className="text-accent">Taxa de Juros Real</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							É a taxa de juros nominal de determinada transação{" "}
							<strong>descontada da inflação</strong>.
						</p>
						<div className="bg-accent/5 p-4 rounded-lg">
							<p className="text-sm font-medium text-accent mb-2">Exemplo:</p>
							<p className="text-text text-sm">
								Uma taxa de juros nominal de <strong>10%</strong> descontada de
								uma inflação de <strong>2%</strong>, resultam em uma taxa de
								juros real de <strong className="text-primary">7,84%</strong>.
							</p>
							<code className="text-xs font-mono bg-background px-2 py-1 rounded mt-2 inline-block">
								Fórmula: (1,10 / 1,02 - 1) × 100
							</code>
						</div>
					</CardContent>
				</Card>
			</section>

			{/* Taxa Selic */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-3 rounded-lg">
						<TrendingUp className="w-6 h-6" />
					</div>
					<Title variant="h2">Taxa Selic</Title>
				</div>

				<Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-border/40 shadow-sm">
					<CardHeader>
						<CardTitle>A Taxa Básica de Juros da Economia</CardTitle>
						<CardDescription>
							Entenda o principal instrumento de política monetária do Brasil
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							A taxa Selic é a <strong>taxa básica de juros da economia</strong>
							, que influencia outras taxas de juros do país, como taxas de
							empréstimos, financiamentos e aplicações financeiras. A definição
							da taxa Selic é o principal instrumento de política monetária
							utilizado pelo <strong>Banco Central (BC)</strong> para controlar
							a inflação.
						</p>
						<p className="text-text leading-relaxed">
							A Selic é a taxa de juros média praticada nas operações
							compromissadas com títulos públicos federais com prazo de um dia
							útil. O BC realiza operações no mercado de títulos públicos para
							que a taxa Selic efetiva esteja em linha com a meta da taxa Selic,
							que é definida pelo{" "}
							<strong>Comitê de Política Monetária (Copom)</strong> do BC.
						</p>
					</CardContent>
				</Card>
			</section>

			{/* Inflação */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-error/10 text-error p-3 rounded-lg">
						<TrendingUp className="w-6 h-6" />
					</div>
					<Title variant="h2">Inflação</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<CardTitle>O que é Inflação?</CardTitle>
						<CardDescription>
							Compreenda o aumento generalizado de preços na economia
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							A inflação significa um{" "}
							<strong>aumento generalizado dos preços na economia</strong>. Para
							medi-la são construídos índices de preços, que tomam uma média de
							diversos preços de modo a resumi-los em um único número.
						</p>
						<p className="text-text leading-relaxed">
							Os índices de preços podem diferir de várias maneiras,
							destacando-se as diferenças na cesta de bens e serviços tomada
							como referência. Por exemplo, pode-se construir índices de preços
							ao consumidor, índices de preços ao produtor, índices de custos de
							produção, etc, a depender do objetivo.
						</p>
						<div className="bg-warning/5 p-4 rounded-lg border-l-4 border-warning/40">
							<p className="text-sm text-text">
								💡 <strong>Importante:</strong> Mesmo índices de preços ao
								consumidor podem diferir entre si, pois cada família tem sua
								própria cesta de consumo. Pode haver, por isso, percepções
								distintas entre o que o cidadão vê no seu orçamento e o que
								aparece em um dado índice.
							</p>
						</div>
					</CardContent>
				</Card>

				{/* IPCA */}
				<Card className="border-l-4 border-l-primary/40 border-y-0 border-r-0 shadow-sm">
					<CardHeader>
						<CardTitle className="text-primary">
							IPCA - Índice Nacional de Preços ao Consumidor Amplo
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							O IPCA é calculado pelo{" "}
							<strong>
								Instituto Brasileiro de Geografia e Estatística (IBGE)
							</strong>
							, com coleta, em geral, do dia 1 a 30 do mês de referência. O IPCA
							é o{" "}
							<strong>
								índice de referência do sistema de metas para a inflação
							</strong>
							.
						</p>
						<div className="bg-primary/5 p-4 rounded-lg">
							<p className="text-sm font-medium text-primary mb-2">
								Abrangência:
							</p>
							<p className="text-sm text-text mb-2">
								O IPCA mede o preço de uma cesta de consumo representativa para
								famílias com renda de
								<strong> 1 a 40 salários mínimos</strong>, em 16 áreas
								geográficas (regiões metropolitanas de Belém, Fortaleza, Recife,
								Salvador, Belo Horizonte, Vitória, Rio de Janeiro, São Paulo,
								Curitiba, Porto Alegre, além do Distrito Federal e dos
								municípios de de Goiânia, Campo Grande, Rio Branco, São Luís e
								Aracaju).
							</p>
						</div>
						<div className="bg-muted/50 p-4 rounded-lg">
							<p className="text-sm text-text">
								O Banco Central trabalha para que a inflação acumulada em doze
								meses, medida pelo IPCA, se situe em torno do centro da meta
								definida pelo <strong>Conselho Monetário Nacional (CMN)</strong>
								. O IPCA também é indexador para títulos do tesouro direto e
								renda fixa.
							</p>
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
					<Title variant="h2">Referências e informações adicionais</Title>
				</div>

				<div className="grid md:grid-cols-2 gap-3">
					<a
						href="https://www.bcb.gov.br/controleinflacao/indicepreco"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 p-3 rounded-lg border border-border/40 hover:border-primary hover:bg-primary/5 transition-all group"
					>
						<ExternalLink className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
						<span className="text-sm text-text">BCB - Índices de Preços</span>
					</a>
					<a
						href="https://www.bcb.gov.br/controleinflacao/taxaselic"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 p-3 rounded-lg border border-border/40 hover:border-primary hover:bg-primary/5 transition-all group"
					>
						<ExternalLink className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
						<span className="text-sm text-text">BCB - Taxa Selic</span>
					</a>
					<a
						href="https://www.bcb.gov.br/cidadaniafinanceira/entendajuro"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 p-3 rounded-lg border border-border/40 hover:border-primary hover:bg-primary/5 transition-all group"
					>
						<ExternalLink className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
						<span className="text-sm text-text">BCB - Entenda os Juros</span>
					</a>
					<a
						href="https://files.melvertech.com.br/file/b3/Ebook%20-%20Juros%20no%20seu%20dia%20a%20dia.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 p-3 rounded-lg border border-border/40 hover:border-accent hover:bg-accent/5 transition-all group"
					>
						<ExternalLink className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
						<span className="text-sm text-text">
							eBook - Juros no seu dia a dia
						</span>
					</a>
					<a
						href="https://files.melvertech.com.br/file/b3/Ebook-Inflacao-no-seu-dia-a-dia.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 p-3 rounded-lg border border-border/40 hover:border-accent hover:bg-accent/5 transition-all group"
					>
						<ExternalLink className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
						<span className="text-sm text-text">
							eBook - Inflação no seu dia a dia
						</span>
					</a>
				</div>
			</section>
		</div>
	);
};

export default TaxasJuros;
