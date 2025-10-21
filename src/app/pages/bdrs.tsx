import { Building2, Globe, Sparkles, TrendingUp } from "lucide-react";
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
							<span className="font-mono">XXXXYY</span>
						</p>
						<p className="text-sm mb-1">
							<strong>XXXX</strong> = 04 letras maiúsculas que representam o
							nome da empresa
						</p>
						<p className="text-sm mb-3">
							<strong>YY</strong> = número que representa o BDR P Nível I
						</p>
						<p className="mb-2">
							<span className="font-mono">XXXX32</span>
						</p>
						<p className="text-sm mb-1">
							<strong>XXXX</strong> = 04 letras maiúsculas que representam o
							nome da empresa
						</p>
						<p className="text-sm mb-3">
							<strong>32</strong> = número que representa o BDR P Nível II
						</p>
						<p className="mb-2">
							<span className="font-mono">XXXX33</span>
						</p>
						<p className="text-sm mb-1">
							<strong>XXXX</strong> = 04 letras maiúsculas que representam o
							nome da empresa
						</p>
						<p className="text-sm">
							<strong>33</strong> = número que representa o BDR P Nível III
						</p>
					</td>
				</tr>
				<tr>
					<th className="border border-border/40 px-4 py-2 font-semibold text-primary">
						Cotação
					</th>
					<td className="border border-border/40 px-4 py-2 text-text text-sm">
						Reais por BDR P, com 02 casas decimais
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
						1 BDR
					</td>
				</tr>
			</tbody>
		</table>
	);
};

const BDRs: React.FC = () => {
	return (
		<div className="space-y-12">
			{/* Introdução */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-3 rounded-lg">
						<Globe className="w-6 h-6" />
					</div>
					<Title variant="h1">BDRs</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardHeader>
						<CardTitle>Brazilian Depositary Receipts</CardTitle>
						<CardDescription>
							Invista em empresas estrangeiras negociando no Brasil
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-text leading-relaxed">
							Os{" "}
							<strong>Brazilian Depositary Receipts Patrocinados (BDR)</strong>{" "}
							são valores mobiliários emitidos no Brasil, que possuem como
							lastro ativos, geralmente ações, emitidos no Exterior. Para
							emissão do BDR Patrocinado, a companhia emissora dos valores
							mobiliários no Exterior deve contratar no Brasil uma instituição
							depositária, a qual será responsável por emitir os BDRs.
						</p>
					</CardContent>
				</Card>
			</section>

			{/* Instituição Depositária */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-secondary/10 text-secondary p-3 rounded-lg">
						<Building2 className="w-6 h-6" />
					</div>
					<Title variant="h2">Como Funciona</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6 space-y-4">
						<div>
							<h3 className="text-lg font-semibold text-primary mb-3">
								Papel da Instituição Depositária
							</h3>
							<p className="text-text leading-relaxed mb-4">
								A instituição depositária tem como responsabilidade{" "}
								<strong>
									garantir que os BDRs Patrocinados emitidos no Brasil de fato
									estejam lastreados
								</strong>{" "}
								nos valores mobiliários emitidos no Exterior. Desta forma, a
								instituição depositária mantém uma conta em um custodiante no
								Exterior onde permanecem depositados e bloqueados os respectivos
								valores mobiliários utilizados como lastro dos BDRs
								Patrocinados.
							</p>
							<InfoBoxCard color="primary" borderColor="primary" titleIcon="🔒">
								A instituição depositária deve garantir que não haja qualquer
								descasamento entre o saldo dos valores mobiliários no Exterior e
								dos BDRs emitidos.
							</InfoBoxCard>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-accent mb-3">
								Emissão e Cancelamento
							</h3>
							<p className="text-text leading-relaxed">
								As instituições depositárias podem{" "}
								<strong>emitir ou cancelar os BDRs Patrocinados</strong>{" "}
								conforme a demanda dos investidores locais no mercado primário.
								Por exemplo, se um investidor solicitar a emissão de um BDR
								Patrocinado de uma companhia estrangeira, o mesmo deverá
								transferir os valores mobiliários que detém desta companhia no
								Exterior para a conta da instituição depositária também no
								Exterior. Após esta transferência, e verificando que o saldo do
								lastro é suficiente, a instituição depositária emitirá os
								respectivos BDRs no Brasil.
							</p>
						</div>
					</CardContent>
				</Card>
			</section>

			{/* Negociação */}
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="bg-accent/10 text-accent p-3 rounded-lg">
						<TrendingUp className="w-6 h-6" />
					</div>
					<Title variant="h2">Negociação</Title>
				</div>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6 space-y-4">
						<p className="text-text leading-relaxed">
							Os BDRs Patrocinados, após emitidos, podem ser{" "}
							<strong>
								negociados no mercado secundário através da plataforma da B3
							</strong>{" "}
							de forma semelhante às ações. Um investidor, ao adquirir BDR,
							indiretamente passa a deter ações da companhia com sede em outro
							país, sem que para isso tenha que abrir uma conta em uma corretora
							estrangeira e tampouco realizar os trâmites de um investimento
							internacional.
						</p>
						<InfoBoxCard color="accent" title="B3 - Única Plataforma">
							A B3 é a{" "}
							<strong>única entidade administradora de mercados</strong> que
							oferece todos os processos de negociação, liquidação e custódia
							dos BDRs Patrocinados no Brasil.
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

				<div className="grid md:grid-cols-3 gap-4">
					<ColoredBorderCard title="Acesso Facilitado" color="success">
						<p className="text-text text-sm leading-relaxed">
							Acesso facilitado aos valores mobiliários de companhias
							estrangeiras{" "}
							<strong>
								sem ter que pagar os custos relacionados à remessa de recursos
								para o Exterior
							</strong>
							.
						</p>
					</ColoredBorderCard>

					<ColoredBorderCard title="Diversificação" color="primary">
						<p className="text-text text-sm leading-relaxed">
							Possibilidade de elaboração de estratégias,{" "}
							<strong>diversificação de investimentos e arbitragem</strong> com
							ativos locais e estrangeiros.
						</p>
					</ColoredBorderCard>

					<ColoredBorderCard title="Liquidação em Reais" color="accent">
						<p className="text-text text-sm leading-relaxed">
							Apesar de o investidor ficar exposto às variações de preços de um
							ativo estrangeiro, as operações são realizadas no Brasil e a{" "}
							<strong>liquidação é feita em reais</strong>.
						</p>
					</ColoredBorderCard>
				</div>
			</section>

			{/* Especificações Técnicas */}
			<section className="space-y-4">
				<Title variant="h2">Detalhes de um BDR</Title>

				<Card className="border-border/40 shadow-sm">
					<CardContent className="pt-6">
						<Table />
					</CardContent>
				</Card>
			</section>
		</div>
	);
};

export default BDRs;
