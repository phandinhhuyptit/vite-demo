import { Button, Card, FormControl, Input } from "@components/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { ValidationLoginSchema, validationLoginSchema } from "@schema/login";
import { useMutation } from "@tanstack/react-query";
import { UserForm } from "@type/user";
import { AxiosError } from "axios";
import { useAuthContext } from "provider/AuthorProvider";
import { SubmitHandler, useForm } from "react-hook-form";
import { login } from "services/user.service";

function Login() {
  const { signIn } = useAuthContext();
  const { isLoading, mutate: loginPost } = useMutation(
    (body: UserForm) => login(body),
    {
      onSuccess(data) {
        const jwt = data?.jwt;
        signIn(jwt);
      },
      onError(error) {
        if (error instanceof AxiosError) {
          const messages = error?.response?.data?.error?.message;
          setError("submit", {
            type: "submitError",
            message: messages,
          });
        }
      },
    }
  );
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationLoginSchema>({
    resolver: zodResolver(validationLoginSchema),
  });

  const onSubmit: SubmitHandler<ValidationLoginSchema> = (data) => {
    const body = {
      identifier: data.username,
      password: data.password,
    };
    loginPost(body);
  };

  return (
    <div className="flex items-center justify-center flex-col h-full">
      <h1 className="text-2xl mb-6">Login</h1>

      <Card
        size={"small"}
        className="w-[320px] flex flex-col gap-6"
        type="default"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <FormControl
            error={
              errors?.username?.message && <p>{errors?.username?.message}</p>
            }
            label="Username"
            htmlFor="username"
          >
            <Input
              error={!!errors?.username?.message}
              type="username"
              {...register("username")}
            />
          </FormControl>
          <FormControl
            label="Password"
            htmlFor="password"
            error={
              errors?.password?.message && <p>{errors?.password?.message}</p>
            }
          >
            <Input
              error={!!errors?.password?.message}
              type="password"
              {...register("password")}
            />
          </FormControl>
          {errors?.submit?.message && (
            <p className="text-xs mt-1 mb-0 text-[color:var(--color-ec5956)]">
              {errors?.submit?.message}
            </p>
          )}

          <Button
            disabled={isLoading}
            type="submit"
            className="!text-lg"
            variant="primary"
          >
            Login
          </Button>
        </form>

        <p>
          Don’t have account?{" "}
          <a className="text-sky-500 cursor-pointer">Create new account</a>
        </p>
      </Card>
    </div>
  );
}

export default Login;
