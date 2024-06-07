import type { Metadata } from "next";
import "../../presentation/styles/root.scss";
import { Sidebar } from "@/presentation";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex">
          <Sidebar />
          <div style={{ width: 'calc(100% - 304px)' }}>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
