import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/api-client";

const insertUserArticleCompletion = async (articleId: string) => {
	const { data } = await supabase.auth.getUser();

	if (data.user?.id) {
		const { data: resData, error } = await supabase
			.from("user_article_completions")
			.insert([{ user_id: data.user.id, article_id: articleId }]);

		if (error) {
			console.error("Error inserting article completion:", error.message);
		} else {
			console.log("Article completion inserted successfully:", resData);
		}

		return resData;
	}

	return null;
};

export const useInsertUserArticleCompletionMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: insertUserArticleCompletion,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["userData"] });
		},
	});
};
