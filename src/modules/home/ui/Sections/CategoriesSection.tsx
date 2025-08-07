"use client";

import { trpc } from "@/trpc/client";

interface CategoriesSectionProps {
  catergoryId?: string;
}

function CategoriesSection({ catergoryId }: CategoriesSectionProps) {
  const [categories] = trpc.categories.getMany.useSuspenseQuery();
  console.log(
    "CategoriesSection rendered with categoryId:",
    catergoryId,
    categories
  );
  return <div>CategoriesSection</div>;
}

export default CategoriesSection;
