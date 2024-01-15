import { ProductsWrapper } from "@/components/Store/ProductsWrapper";
import { getProducts } from "@/services/shopify";
import {
  getCollectionProducts,
  getCollections,
} from "@/services/shopify/collections";

interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams?: string;
}

export default async function Category(props: CategoryProps) {
  const { categories } = props.params;
  const collections = await getCollections();
  let products = [];
  const selectedCollectionId = collections?.find(
    (collection: any) => collection.handle === categories?.[0]
  )?.id;

  if (selectedCollectionId) {
    products = await getCollectionProducts(selectedCollectionId);
  } else {
    products = await getProducts();
  }

  return <ProductsWrapper products={products} />;
}
