import imageUrlBuilder from "@sanity/image-url";
import { sanity } from "@/lib/sanityClient";

const builder = imageUrlBuilder(sanity);

// necháme source ako `any`, aby to neriešilo typy medzi verziami balíka
export function urlFor(source: any) {
  return builder.image(source);
}