import { HeadFilterMarketplace, HeaderLayout } from "@/presentation";

export default function MarketplaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
        <HeaderLayout title="Marketplace" visibleSearch={false} />

        <article className="px-8">
            <HeadFilterMarketplace />
        </article>
        
        {children}
    </section>
  );
}