import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import cn from "@/utils/cn";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TAuthType } from "./AuthContainer";

const SignInForm: FC<{
  setAuthType: Dispatch<SetStateAction<TAuthType>>;
}> = ({ setAuthType }) => {
  const { push } = useRouter();
  const signInValidationSchema = z.object({
    email: z
      .string()
      .email({ message: "kindly enter a valid email address" })
      .nonempty(),
    password: z
      .string()
      .min(8, { message: "password must be at least 8 characters" })
      .max(50)
      .nonempty(),
  });

  type TSignInFormFields = z.infer<typeof signInValidationSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignInFormFields>({
    resolver: zodResolver(signInValidationSchema),
  });

  const onSubmit: SubmitHandler<TSignInFormFields> = async (data) => {
    // onSignIn
    console.log(data);
  };

  return (
    <div className="w-full max-w-md bg-white py-4 px-6">
      <h1 className="h3 text-gray-800">Sign in</h1>
      <p className="text-gray-700">
        enter your credentials to access your account
      </p>

      <form
        className="mt-10 flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Email Input */}
        <div>
          <label htmlFor="email">Email</label>
          <div className="relative flex">
            <Input
              id="email"
              {...register("email")}
              type="tel"
              placeholder="email"
              className={cn("mt-1", { "border-red-500": errors.password })}
            />
          </div>
          {errors.email && (
            <p className="mt-0.5 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <Input
            id="password"
            type="password"
            {...register("password", { required: true })}
            placeholder="password"
            className={cn("mt-1", { "border-red-500": errors.password })}
          />
          {errors.password && (
            <p className="mt-0.5 text-sm text-red-500">
              {errors.password?.message}
            </p>
          )}
        </div>

        {/* Auth Buttton */}
        <Button
          type="submit"
          disabled={Object.keys(errors).length > 0}
          className="mt-2 w-full"
        >
          Sign in
        </Button>

        {/* Another Auth Routes */}
        <div className="text-center text-sm font-medium text-gray-700 sm:mb-4 sm:flex sm:items-center sm:gap-1">
          <span>Don&apos;t have an account?</span>
          <button
            onClick={() => setAuthType("create-account")}
            className="flex-2 text-primary underline"
          >
            Create an account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
