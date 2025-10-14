// biome-ignore-all lint: shadcn component

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
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
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../../components/ui/form";
import { useLoginUserMutation, useUserDataQuery } from "../api/login";
import { type LoginFormData, loginFormSchema } from "../types/login";

const useLoginForm = (onLoginFinish: () => void) => {
	const form = useForm<LoginFormData>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const loginUserMutation = useLoginUserMutation();
	const userDataQuery = useUserDataQuery();

	const onSubmit = async (values: LoginFormData) => {
		try {
			await loginUserMutation.mutateAsync(values);
			toast.success("Login realizado com sucesso!");
		} catch (error) {
			toast.error("Erro ao realizar login. Tente novamente.");
			console.error("Login error:", error);
		}
	};

	useEffect(() => {
		if (userDataQuery.isSuccess) {
			onLoginFinish();
		}
	}, [userDataQuery.isSuccess]);

	return {
		form,
		onSubmit,
		isPending: loginUserMutation.isPending || userDataQuery.isLoading,
	};
};

interface LoginFormProps extends React.ComponentProps<"div"> {
	onSignUpClick: () => void;
	onLoginFinish: () => void;
}

export function LoginForm({
	onSignUpClick,
	onLoginFinish,
	...props
}: LoginFormProps) {
	const { form, onSubmit, isPending } = useLoginForm(onLoginFinish);

	return (
		<Card className="bg-transparent border-none shadow-none p-0" {...props}>
			<CardHeader>
				<CardTitle>Faça login</CardTitle>
				<CardDescription>
					Insira seu e-mail e senha para acessar sua conta
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FieldGroup>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="email">Email</FormLabel>
										<FormControl>
											<Input
												{...field}
												type="email"
												placeholder="m@exemplo.com"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<div className="flex items-center">
											<FormLabel htmlFor="password">Senha</FormLabel>
											<a
												href="#"
												className="text-text ml-auto inline-block text-sm underline-offset-4 hover:underline"
											>
												Esqueceu sua senha?
											</a>
										</div>
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
										Login
									</Button>
									{/*<Button variant="outline" type="button">
										Login with Google
									</Button>*/}
									<FieldDescription className="px-6 text-center">
										Não tem uma conta?{" "}
										<Button
											variant="link"
											className="p-0"
											onClick={onSignUpClick}
										>
											Registre-se
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
