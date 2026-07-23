import { notFound } from "next/navigation";
import { products } from "@/data/products";

import Gallery from "./Gallery";
import Details from "./Details";
import RelatedProducts from "./RelatedProducts";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | Disquietude Vengeance",
    };
  }

  return {
    title: `${product.title} | Vengeance House`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts =
    products.filter((item) => item.id !== product.id)
      .slice(0, 4);


  return (
    <main className="relative overflow-hidden bg-[#050505] text-white">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute inset-0 bg-[#050505]" />

        <div className="absolute left-1/2 top-[25%] h-[900px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(52,37,25,0.55)_0%,rgba(179,153,119,0.15)_38%,transparent_78%)] blur-[170px]" />

        <div className="absolute -left-60 top-60 h-[520px] w-[520px] rounded-full bg-[var(--bistre)]/15 blur-[180px]" />

        <div className="absolute -right-60 bottom-20 h-[520px] w-[520px] rounded-full bg-[var(--camel)]/10 blur-[180px]" />

        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:90px_90px]" />

      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-32 lg:px-8">

        {/* Breadcrumb */}

        <div className="mb-10 flex flex-wrap items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-zinc-500">

          <span>Home</span>

          <span>/</span>

          <span>Merchandise</span>

          <span>/</span>

          <span className="text-[var(--camel)]">
            {product.title}
          </span>

        </div>

        {/* Main Grid */}

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] xl:gap-20">
          <Gallery product={product} />

          <Details product={product} />
        </div>

      </section>

      <RelatedProducts
        currentProduct={product}
        products={relatedProducts}
      />

    </main>
  );
}