import { Suspense } from "react";
import RegisterForm from "../_components/RegisterForm";

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="text-center py-2">Register Form Loading...</div>
      }
    >
      <RegisterForm />
    </Suspense>
  );
}
