import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/app-sidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    return redirect("/api/auth/signin?callbackUrl=/admin");
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full p-4">
        <div className="bg-white shadow-md rounded-lg mb-4 inline-block">
          <SidebarTrigger />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
