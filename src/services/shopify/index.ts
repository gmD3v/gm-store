import { env } from "@/config/env";
import { SHOPIFY_URLS } from "./urls";

export const getProducts = async () => {
  try {
    const response = await fetch(SHOPIFY_URLS.products.all, {
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
