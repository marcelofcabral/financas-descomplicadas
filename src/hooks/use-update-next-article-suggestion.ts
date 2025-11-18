import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/api-client";

const updateUserNextArticleSuggestion = async (newNextArticleId: string) => {
	const { data } = await supabase.auth.getUser();

	if (data.user?.id) {
		const { data: resData, error } = await supabase
			.from("users")
			.update({ next_article: newNextArticleId })
			.eq("id", data.user.id);

		if (error) {
			console.error("Error updating next article suggestion:", error.message);
		} else {
			console.log("Next article suggestion updated successfully:", resData);
		}

		return resData;
	}

	return null;
};

export const useUpdateUserNextArticleSuggestionMutation = () => {
	return useMutation({
		mutationFn: updateUserNextArticleSuggestion,
	});
};
