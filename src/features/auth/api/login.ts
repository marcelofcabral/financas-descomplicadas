import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { supabase } from "@/api-client";
import type { LoginRequestData } from "../types/login";

const loginUser = async (data: LoginRequestData) => {
	return (await supabase.auth.signInWithPassword(data)).data;
};

const logoutUser = async () => {
	return await supabase.auth.signOut();
};

const fetchUserData = async () => {
	const { data } = await supabase.auth.getUser();

	if (data.user?.id) {
		const { data: userData } = await supabase
			.from("users")
			.select("*, user_article_completions(article_id)")
			.eq("id", data.user.id)
			.single();

		console.log("userData:", userData);

		return userData;
	}

	return null;
};

export const useLoginUserMutation = () => {
	return useMutation({ mutationFn: loginUser });
};

export const useLogoutUserMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: logoutUser,
		onSuccess: () => {
			queryClient.removeQueries({ queryKey: ["userData"] });
		},
	});
};

export const useUserDataQuery = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_, session) => {
			setIsAuthenticated(!!session);
		});

		return () => subscription.unsubscribe();
	}, []);

	return useQuery({
		queryKey: ["userData"],
		queryFn: fetchUserData,
		enabled: isAuthenticated,
		staleTime: 5 * 60 * 1000,
	});
};
