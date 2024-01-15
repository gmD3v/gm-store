import { env } from "@/config/env";
import { SHOPIFY_URLS } from "./urls";

export const getCollections = async () => {
  try {
    const response = await fetch(SHOPIFY_URLS.collections.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });
    const { smart_collections } = await response.json();
    return smart_collections;
  } catch (error) {
    console.log(error);
  }
};

export const getCollectionProducts = async (id: string) => {
  try {
    const response = await fetch(SHOPIFY_URLS.collections.producs(id), {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });
    const { products } = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};
