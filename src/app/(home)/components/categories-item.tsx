import { Category } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icons";
import Link from "next/link";

interface CategoriesItemProps {
  category: Category;
}

const CategoriesItem = ({ category }: CategoriesItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <Badge
        variant="outline"
        className="flex justify-center gap-2 rounded-lg py-3"
      >
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </Link>
  );
};

export default CategoriesItem;
