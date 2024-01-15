import { Chat } from "@/components/chat/chat";
import { getProducts } from "@/services/shopify/products";
import createAgent from "@/utils/ia/createAgent";

export default async function ChatPage() {
  const products = await getProducts();
  const productTitles = products?.map((p) => p.title);
  const flatProductTitles = productTitles?.join(",");
  const agent = createAgent(flatProductTitles || "");

  return <Chat agent={agent} />;
}
