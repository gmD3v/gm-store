import { env } from "@/config/env";
import { SHOPIFY_URLS } from "./urls";

export const getProducts = async (
  id?: string
): Promise<ProductType[] | undefined> => {
  try {
    const apiUrl = id
      ? `${SHOPIFY_URLS.products.all}?ids=${id}`
      : SHOPIFY_URLS.products.all;
    const response = await fetch(apiUrl, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });
    const { products } = await response.json();

    const transformedProducts = products.map((product: any) => {
      return {
        id: product.id,
        gql_id: product.variants[0].admin_graphql_api_id,
        title: product.title,
        description: product.body_html,
        price: product.variants[0].price,
        image: product.images[0].src,
        quantity: product.variants[0].inventory_quantity,
        handle: product.handle,
        tags: product.tags,
      };
    });
    return transformedProducts || [];
  } catch (error) {
    console.log(error);
  }
};
export const getMainProducts = async (): Promise<ProductType[] | undefined> => {
  try {
    const apiUrl = SHOPIFY_URLS.products.mainProducts;
    const response = await fetch(apiUrl, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
      // cache: "force-cache",
      next: {
        revalidate: 60,
        tags: ["main-products"],
      },
    });
    const { products } = await response.json();

    return products || [];
  } catch (error) {
    console.log(error);
  }
};
