export default function ProfileLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
          <div>layout profile </div>
          {children}
      </div>
    );
  }
  