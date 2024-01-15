import { env } from "@/config/env";

export const SHOPIFY_URLS = {
  products: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
    mainProducts: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/269295747135/products.json`,
  },
  collections: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/smart_collections.json`,
    producs: (id: string) =>
      `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/${id}/products.json`,
  },
};
