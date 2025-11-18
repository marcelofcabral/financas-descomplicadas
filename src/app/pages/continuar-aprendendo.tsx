import { Link } from "react-router";
import ReadingProgress from "@/components/reading-progress";
import Title from "@/components/title";
import { useUserDataQuery } from "@/features/auth/api/login";
import {
	ARTICLE_ID_TO_TITLE_MAP,
	SUGGESTED_ARTICLE_ORDER,
} from "@/utils/constants";

const findFirstUnreadArticle = (
	userArticleCompletions: { article_id: string }[],
) => {
	if (userArticleCompletions.length === 0)
		return [
			SUGGESTED_ARTICLE_ORDER[0],
			ARTICLE_ID_TO_TITLE_MAP[SUGGESTED_ARTICLE_ORDER[0]],
		];

	if (userArticleCompletions.length === SUGGESTED_ARTICLE_ORDER.length)
		return [
			SUGGESTED_ARTICLE_ORDER[0],
			ARTICLE_ID_TO_TITLE_MAP[SUGGESTED_ARTICLE_ORDER[0]],
		];

	for (let i = 0; i < userArticleCompletions.length; i++) {
		if (userArticleCompletions[i].article_id !== SUGGESTED_ARTICLE_ORDER[i]) {
			return [
				SUGGESTED_ARTICLE_ORDER[i],
				ARTICLE_ID_TO_TITLE_MAP[SUGGESTED_ARTICLE_ORDER[i]],
			];
		}
	}
};

const ContinuarAprendendo: React.FC = () => {
	const { data: userData } = useUserDataQuery();

	const firstUnreadArticle = findFirstUnreadArticle(
		userData?.user_article_completions || [],
	);

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
				to={`/financas-descomplicadas/modulos/conceitos-basicos/${firstUnreadArticle?.[0]}`}
				className="flex items-center gap-2 p-3 rounded-lg border border-border/80 hover:border-primary hover:bg-primary/5 transition-all justify-center text-xl font-medium mx-auto w-[30%] text-center"
			>
				<span className="text-text">{firstUnreadArticle?.[1]}</span>
			</Link>
		</div>
	);
};

export default ContinuarAprendendo;
