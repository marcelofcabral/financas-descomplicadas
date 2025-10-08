import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/api-client";
import type { SignUpRequestData } from "../types/signup";

const signUpUser = async (data: SignUpRequestData) => {
	const { password, email, fullName } = data;

	return (
		await supabase.auth.signUp({
			email,
			password,
			options: {
				data: { full_name: fullName, email },
			},
		})
	).data;
};

export const useSignUpUser = () => {
	return useMutation({ mutationFn: signUpUser });
};
