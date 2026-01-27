// Quick test script to check if Sanity has data
// Run with: node test-sanity-query.js

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "banm5pq3",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});

async function testQuery() {
  console.log("Testing Sanity connection...\n");
  
  // Check categories
  const categories = await client.fetch(
    `*[_type == "serviceCategory"] {
      _id,
      title,
      "slug": slug.current,
      isActive
    }`
  );
  
  console.log("Service Categories found:", categories.length);
  categories.forEach(cat => {
    console.log(`  - ${cat.title} (${cat.slug}) - Active: ${cat.isActive}`);
  });
  
  // Check subcategories
  const subcategories = await client.fetch(
    `*[_type == "serviceSubcategory"] {
      _id,
      title,
      "slug": slug.current,
      "category": category->title,
      isActive,
      features,
      tags
    }`
  );
  
  console.log("\nService Subcategories found:", subcategories.length);
  subcategories.forEach(sub => {
    console.log(`  - ${sub.title} (Category: ${sub.category}) - Active: ${sub.isActive}`);
    if (sub.features) console.log(`    Features: ${sub.features.length}`);
    if (sub.tags) console.log(`    Tags: ${sub.tags.length}`);
  });
}

testQuery().catch(console.error);


