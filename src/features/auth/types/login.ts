import z from "zod";

export const loginFormSchema = z.object({
	email: z.email({
		message: "Por favor, insira um endereço de e-mail válido.",
	}),
	password: z.string().min(8, {
		message: "A senha deve ter pelo menos 8 caracteres.",
	}),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;

export type LoginRequestData = z.infer<typeof loginFormSchema>;
