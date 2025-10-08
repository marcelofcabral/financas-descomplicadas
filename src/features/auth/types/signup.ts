import z from "zod";

export const signupFormSchema = z
	.object({
		email: z.email({
			error: "Por favor, insira um endereço de e-mail válido.",
		}),
		fullName: z.string().min(2, {
			message: "O nome deve ter pelo menos 2 caracteres.",
		}),
		password: z.string().min(8, {
			error: "A senha deve ter pelo menos 8 caracteres.",
		}),
		confirmPassword: z.string().min(8, {
			message: "A confirmação de senha deve ter pelo menos 8 caracteres.",
		}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "As senhas não coincidem.",
		path: ["confirmPassword"],
	});

export type SignUpFormData = z.infer<typeof signupFormSchema>;

export type SignUpRequestData = Omit<SignUpFormData, "confirmPassword">;

export type SignUpResponseData = {};
