import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function UserLogin() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Login to Your Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button className="w-full">Login</Button>
            <div className="text-center text-sm text-muted-foreground">or</div>
            <Button
              variant="outline"
              className="w-full flex items-center gap-2"
            >
              <FcGoogle size={18} />
              Login with Google
            </Button>

            <p className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/auth/sign-up" className='text-primary hover:underline'>Sign Up</Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
