import { createClient, type SanityClient } from "@sanity/client";
import { createImageUrlBuilder as imageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

export const client: SanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "dkp9nx8s",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function fetchFromSanity<T>(
  query: string,
  params?: Record<string, unknown>
): Promise<T | null> {
  try {
    return await client.fetch<T>(query, params ?? {});
  } catch {
    return null;
  }
}
