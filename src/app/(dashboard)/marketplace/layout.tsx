import { HeaderLayout } from "@/presentation";

export default function MarketplaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <article>
            <HeaderLayout title="Marketplace" />
        </article>
        {children}
    </div>
  );
}
