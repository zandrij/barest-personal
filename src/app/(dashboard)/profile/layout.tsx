import { ProfileSidebar } from "@/presentation";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="flex">
      <ProfileSidebar />
      {children}
    </article>
  );
}
