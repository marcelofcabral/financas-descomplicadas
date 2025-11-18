import { Link } from "react-router";
import ReadingProgress from "@/components/reading-progress";
import Title from "@/components/title";
import { useUserDataQuery } from "@/features/auth/api/login";
import { ARTICLE_ID_TO_TITLE_MAP } from "@/utils/constants";

const ContinuarAprendendo: React.FC = () => {
	const { data: userData } = useUserDataQuery();

	return (
		<div className="space-y-8">
			<div className="space-y-2">
				<Title>Continuar Aprendendo</Title>
				<p className="text-muted-foreground text-lg">
					Veja seu próximo artigo sugerido
				</p>
			</div>
			<p className="text-lg">
				O conhecimento é construído continuamente. Pequenas sessões de
				aprendizado realizadas com constância são fundamentais para a retenção
				do conhecimento.
			</p>
			<div>
				<Title variant="h3" className="mb-4">
					Parabéns! Veja quanto conteúdo você já completou:
				</Title>
				<ReadingProgress />
			</div>
			<p className="text-2xl mt-16 text-center">
				Continue aprendendo! Este é seu próximo artigo:
			</p>

			<Link
				to={`/financas-descomplicadas/modulos/conceitos-basicos/${userData?.next_article || "taxas-e-juros"}`}
				className="flex items-center gap-2 p-3 rounded-lg border border-border/80 hover:border-primary hover:bg-primary/5 transition-all justify-center text-xl font-medium mx-auto w-[30%] text-center"
			>
				<span className="text-text">
					{ARTICLE_ID_TO_TITLE_MAP[userData?.next_article || "taxas-e-juros"]}
				</span>
			</Link>
		</div>
	);
};

export default ContinuarAprendendo;
