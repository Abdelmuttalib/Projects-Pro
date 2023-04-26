import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, FC, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import cn from "@/utils/cn";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TAuthType } from "./AuthContainer";

const CreateAccountForm: FC<{
  setAuthType: Dispatch<SetStateAction<TAuthType>>;
}> = ({ setAuthType }) => {
  const signUpValidationSchema = z
    .object({
      email: z
        .string()
        .min(1, { message: "kindly enter your email" })
        .email({ message: "kindly enter a valid email" }),
      password: z
        .string()
        .min(4, { message: "password must be at least 4 characters" }),
      confirmPassword: z
        .string()
        .min(4, { message: "password must be at least 4 characters" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "passwords do not match",
    });

  type TSignUpFormFields = z.infer<typeof signUpValidationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpFormFields>({
    resolver: zodResolver(signUpValidationSchema),
  });

  const onSubmit: SubmitHandler<TSignUpFormFields> = async (data) => {
    // onCreateAccount
    // toast.success("User created successfully");
    setAuthType("sign-in");
  };

  return (
    <div className="w-full max-w-md bg-white py-4 px-6">
      <h1 className="h3">Get Started</h1>
      <p className="text-gray-700">get started by creating your account</p>

      <form
        className="mt-10 flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <Input
            id="email"
            type="email"
            {...register("email", { required: true })}
            placeholder="e-mail address"
            autoComplete="email"
            className={cn("mt-0.5", { "border-red-500": errors.email })}
          />
          {errors.email && (
            <p className="mt-0.5 text-sm text-red-500">
              {errors.email?.message}
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
            className={cn("mt-0.5", { "border-red-500": errors.password })}
          />
          {errors.password && (
            <p className="mt-0.5 text-sm text-red-500">
              {errors.password?.message}
            </p>
          )}
        </div>

        {/* <div>
            <label htmlFor='password' className='block text-gray-600'>
              Password
            </label>
            <input
              id='password'
              type='password'
              {...register('password', { required: true })}
              placeholder='password'
              className={cn('input-2 mt-0.5', {
                'border-red-500': errors.password,
              })}
            />
            {errors.password && (
              <p className='mt-0.5 text-sm text-red-500'>
                {errors.password?.message}
              </p>
            )}
          </div> */}

        {/* Confirm Password Input */}
        <div>
          <label htmlFor="confirmPassword" className="block text-gray-600">
            Confirm Password
          </label>
          <Input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", { required: true })}
            placeholder="confirm password"
            className={cn("mt-0.5", {
              "border-red-500": errors.confirmPassword,
            })}
          />
          {errors.confirmPassword && (
            <p className="mt-0.5 text-sm text-red-500">
              {errors.confirmPassword?.message}
            </p>
          )}
        </div>

        {/* Auth Buttton */}
        <Button
          type="submit"
          disabled={Object.keys(errors).length > 0}
          className="mt-2 w-full"
        >
          Create Account
        </Button>

        {/* Another Auth Routes */}

        <div className="text-center text-sm font-medium text-gray-700 sm:mb-4 sm:flex sm:items-center sm:gap-1">
          <span>Already have an account?</span>
          <button
            onClick={() => setAuthType("sign-in")}
            className="flex-2 text-primary underline"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccountForm;
