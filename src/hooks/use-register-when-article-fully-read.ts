import { useCallback, useEffect } from "react";
import { useLocation } from "react-router";
import { useUserDataQuery } from "@/features/auth/api/login";
import { useInsertUserArticleCompletionMutation } from "./use-insert-user-article-completion";
import useOnPageEndReached from "./use-on-page-end-reached";

const useRegisterWhenArticleFullyRead = () => {
	const { pathname } = useLocation();
	const splitPath = pathname.split("/");
	const articleId = splitPath[splitPath.length - 1];

	const { mutate } = useInsertUserArticleCompletionMutation();
	const { data } = useUserDataQuery();

	// biome-ignore lint/correctness/useExhaustiveDependencies: mutate and find have stable references
	const insertNewArticleCompletion = useCallback(() => {
		console.log("article id:", articleId);
		if (
			data?.user_article_completions &&
			!data.user_article_completions.find(
				({ article_id }) => article_id === articleId,
			)
		) {
			mutate(articleId);
		}
	}, [articleId, data]);

	useOnPageEndReached(insertNewArticleCompletion);
};

export default useRegisterWhenArticleFullyRead;
