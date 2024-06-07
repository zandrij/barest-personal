import { ProfileSidebar } from "@/presentation";

export default function ProfileLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
          <ProfileSidebar />
          {children}
      </div>
    );
  }
  