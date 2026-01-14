import { createClient } from "@sanity/client";

// Fallback to hardcoded values if env vars are not set
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || "banm5pq3";
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || "2024-01-01";

if (!import.meta.env.VITE_SANITY_PROJECT_ID) {
  console.warn("VITE_SANITY_PROJECT_ID not set, using fallback:", projectId);
}

console.log("Sanity client config:", { projectId, dataset, apiVersion });

export const sanity = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  // For public read access, token is optional
  // If your dataset is private, you'll need to add: token: import.meta.env.VITE_SANITY_TOKEN
});