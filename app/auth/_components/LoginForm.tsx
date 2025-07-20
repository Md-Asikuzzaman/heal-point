"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import z from "zod";
import SubmitButton from "./SubmitButton";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, setIsPending] = useState<boolean>(false);
  // const router = useRouter();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsPending(true);

    try {
      const { email, password } = values;
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl,
      });

      if (result?.error) {
        toast.error("Invalid credentials");
      } else if (result?.ok && result.url) {
        toast.success("Login successful!");
        form.reset();
        // router.push(result.url);
        window.location.href = result.url;
      } else {
        toast.error("Unknown error occurred");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsPending(false);
    }
  }

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Login to your account</h2>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to continue
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative flex items-center rounded-md border px-2 focus-within:ring-1 focus-within:ring-ring">
                      <MailIcon className="h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="Email"
                        type="text"
                        className="border-0 focus-visible:ring-0 shadow-none"
                        {...field}
                      />
                    </div>
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
                  <FormControl>
                    <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring px-2">
                      <LockIcon className="h-5 w-5 text-muted-foreground" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="border-0 focus-visible:ring-0 shadow-none"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="ml-2"
                      >
                        {showPassword ? (
                          <EyeOffIcon className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <EyeIcon className="h-5 w-5 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SubmitButton
              text="Log In"
              loadingText="Logging in..."
              isPending={isPending}
            />
          </form>
        </Form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-sm uppercase text-muted-foreground">
            <span className="bg-white px-2">or</span>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full flex items-center gap-2 justify-center"
          onClick={handleGoogleLogin}
          type="button"
        >
          <FcGoogle size={18} />
          Login with Google
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
