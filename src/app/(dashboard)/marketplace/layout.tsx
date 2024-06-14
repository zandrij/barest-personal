import { HeadFilterMarketplace, HeaderLayout } from "@/presentation";
import { Suspense } from 'react';

export default function MarketplaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
        <HeaderLayout title="Marketplace" visibleSearch={false} />

        <article className="px-8">
            <Suspense>
            <HeadFilterMarketplace />
            </Suspense>
        </article>
        
        {children}
    </section>
  );
}