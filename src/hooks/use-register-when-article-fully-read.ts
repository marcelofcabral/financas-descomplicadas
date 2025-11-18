import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { useLocation } from "react-router";
import { useUserDataQuery } from "@/features/auth/api/login";
import { SUGGESTED_ARTICLE_ORDER } from "@/utils/constants";
import { useInsertUserArticleCompletionMutation } from "./use-insert-user-article-completion";
import useOnPageEndReached from "./use-on-page-end-reached";
import { useUpdateUserNextArticleSuggestionMutation } from "./use-update-next-article-suggestion";

const useRegisterWhenArticleFullyRead = () => {
	const queryClient = useQueryClient();

	const { pathname } = useLocation();
	const splitPath = pathname.split("/");
	const articleId = splitPath[splitPath.length - 1];

	const { mutateAsync: insertArticleCompletion } =
		useInsertUserArticleCompletionMutation();
	const { mutateAsync: updateNextArticle } =
		useUpdateUserNextArticleSuggestionMutation();

	const { data } = useUserDataQuery();

	// biome-ignore lint/correctness/useExhaustiveDependencies: mutate and find have stable references
	const insertNewArticleCompletion = useCallback(async () => {
		const mutationPromises = [];

		if (
			data?.user_article_completions &&
			!data.user_article_completions.find(
				({ article_id }) => article_id === articleId,
			)
		) {
			mutationPromises.push(insertArticleCompletion(articleId));

			if (data.next_article === articleId) {
				const nextArticleIdx =
					(SUGGESTED_ARTICLE_ORDER.indexOf(articleId) + 1) %
					SUGGESTED_ARTICLE_ORDER.length;

				const nextArticleId = SUGGESTED_ARTICLE_ORDER[nextArticleIdx];

				mutationPromises.push(updateNextArticle(nextArticleId));
			}

			await Promise.all(mutationPromises);
			await queryClient.invalidateQueries({ queryKey: ["userData"] });
		}
	}, [articleId, data]);

	useOnPageEndReached(insertNewArticleCompletion);
};

export default useRegisterWhenArticleFullyRead;
