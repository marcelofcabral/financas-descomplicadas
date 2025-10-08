// biome-ignore-all lint: shadcn component

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../../components/ui/form";
import { useSignUpUser } from "../api/signup";
import {
	type SignUpFormData,
	type SignUpRequestData,
	signupFormSchema,
} from "../types/signup";

const useSignupForm = () => {
	const form = useForm<SignUpFormData>({
		resolver: zodResolver(signupFormSchema),
		defaultValues: {
			email: "",
			fullName: "",
			password: "",
			confirmPassword: "",
		},
	});

	const signUpUserMutation = useSignUpUser();

	const onSubmit = async (values: SignUpFormData) => {
		try {
			await signUpUserMutation.mutateAsync(values);
			toast.success("Conta criada com sucesso! Verifique seu e-mail.");
			form.reset();
		} catch (error) {
			toast.error("Erro ao criar conta. Tente novamente.");
			console.error("Signup error:", error);
		}
	};

	return { form, onSubmit, isPending: signUpUserMutation.isPending };
};

interface SignupFormProps extends React.ComponentProps<"div"> {
	onLoginClick?: () => void;
}

export function SignupForm({ onLoginClick, ...props }: SignupFormProps) {
	const { form, onSubmit, isPending } = useSignupForm();

	return (
		<Card className="bg-transparent border-none shadow-none p-0" {...props}>
			<CardHeader>
				<CardTitle>Crie uma conta</CardTitle>
				<CardDescription>
					Insira suas informações abaixo para criar sua conta
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FieldGroup>
							<FormField
								control={form.control}
								name="fullName"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="fullName">Nome Completo</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="email">Email</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormDescription>
											Usaremos isso para entrar em contato com você. Não
											compartilharemos seu e-mail com mais ninguém.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="password">Senha</FormLabel>
										<FormControl>
											<Input {...field} type="password" />
										</FormControl>
										<FormDescription>
											A senha deve ter pelo menos 8 caracteres.
										</FormDescription>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="confirmPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="confirmPassword">
											Confirmar Senha
										</FormLabel>
										<FormControl>
											<Input {...field} type="password" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FieldGroup>
								<Field>
									<Button type="submit" isLoading={isPending}>
										Criar Conta
									</Button>
									{/*<Button variant="outline" type="button">
										Criar conta com Google
									</Button>*/}
									<FieldDescription className="px-6 text-center">
										Já tem uma conta?{" "}
										<Button
											variant="link"
											className="p-0"
											onClick={onLoginClick}
										>
											Faça login
										</Button>
									</FieldDescription>
								</Field>
							</FieldGroup>
						</FieldGroup>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
