import { db } from "@/db";
import { categories } from "@/db/schema";

const categoriesNames = [
  "Cars and vehicles",
  "Comedy",
  "Education",
  "Gaming",
  "Entertainment",
  "Film and animation",
  "How-to and style",
  "Music",
  "News and politics",
  "People and blogs",
  "Pets and animals",
  "Science and technology",
  "Sports",
  "Travel and events",
];
async function main() {
  console.log("Seeding categories...");
  try {
    const values = categoriesNames.map((name) => ({
      name,
      description: `Category for ${name}`,
    }));
    await db.insert(categories).values(values);
  } catch (error) {
    console.log("Error seeding categories:", error);
    process.exit(1);
  }
}
main();
