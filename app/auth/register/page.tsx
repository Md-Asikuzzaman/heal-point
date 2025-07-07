"use client";

import { RegisterAction } from "@/app/actions/register";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EyeIcon,
  EyeOffIcon,
  Loader,
  LockIcon,
  MailIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import z from "zod";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, startTransition] = useTransition();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    try {
      startTransition(async () => {
        const res = await RegisterAction(values);
        if (res.success) {
          toast.success(res.message);
          form.reset();
        } else {
          alert(res.message);
        }
      });

      console.log(values);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  }

  const handleGoogleRegister = () => {
    // TODO: Trigger Google signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Create a new account</h2>
          <p className="text-sm text-muted-foreground">
            Enter your details to register
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative flex items-center rounded-md border px-2 focus-within:ring-1 focus-within:ring-ring">
                      <UserIcon className="h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="Username"
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

            <Button type="submit" className="w-full">
              {isPending ? (
                <span className="flex items-center gap-1.5">
                  <Loader className="animate-spin" />
                  Registering...
                </span>
              ) : (
                "Register"
              )}
            </Button>
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
          onClick={handleGoogleRegister}
          type="button"
        >
          <FcGoogle size={18} />
          Sign up with Google
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-primary hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
