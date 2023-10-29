import { prismaClient } from "@/lib/prisma";
import CategoriesItem from "./categories-item";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 py-3">
      {categories.map((category) => (
        <CategoriesItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
