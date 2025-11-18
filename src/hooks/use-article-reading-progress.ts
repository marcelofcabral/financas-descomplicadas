import { useUserDataQuery } from "@/features/auth/api/login";
import { NUMBER_OF_ARTICLES } from "@/utils/constants";

const useArticleReadingProgress = () => {
	const { data: user } = useUserDataQuery();

	const articleReadingProgress =
		((user?.user_article_completions.length ?? 0) / NUMBER_OF_ARTICLES) * 100;

	return articleReadingProgress;
};

export default useArticleReadingProgress;
