import { Suspense } from "react";
import LoginForm from "../_components/LoginForm";

export default function LoginPage() {
  return (
    <Suspense
      fallback={<div className="text-center py-2">Login Form Loading...</div>}
    >
      <LoginForm />
    </Suspense>
  );
}
