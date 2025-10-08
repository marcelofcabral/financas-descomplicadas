import { useMutation, useQuery } from "@tanstack/react-query";
import { supabase } from "@/api-client";
import type { LoginRequestData } from "../types/login";

const loginUser = async (data: LoginRequestData) => {
	return (await supabase.auth.signInWithPassword(data)).data;
};

const fetchUserData = async () => {
	const { data } = await supabase.auth.getUser();

	if (data.user?.id) {
		const { data: userData } = await supabase
			.from("users")
			.select("*")
			.eq("id", data.user.id)
			.single();

		return userData;
	}

	return null;
};

export const useLoginUser = () => {
	return useMutation({ mutationFn: loginUser });
};

export const useUserData = () => {
	return useQuery({
		queryKey: ["userData"],
		queryFn: fetchUserData,
		enabled: false,
	});
};
