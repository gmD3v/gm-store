import { ProductView } from "@/components/product/ProductView";
import { getProducts } from "@/services/shopify/products";
import { redirect } from "next/navigation";

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export async function generateMetadata({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const products = await getProducts(id);
  const product = products?.[0];

  return {
    title: product?.title,
    description: product?.description,
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const products = await getProducts(id);
  const product = products?.[0];

  if (!id) {
    redirect("/store");
  }

  return product ? <ProductView product={product} /> : <div></div>;
}
