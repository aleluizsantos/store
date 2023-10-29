import { Category } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";

interface CategoriesItemProps {
  category: Category;
}

const CategoriesItem = ({ category }: CategoriesItemProps) => {
  const cateroryIcon = {
    keyboards: <KeyboardIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
    mouses: <MouseIcon size={16} />,
  };
  return (
    <Badge
      variant="outline"
      className="flex justify-center gap-2 rounded-lg py-3"
    >
      {cateroryIcon[category.slug as keyof typeof cateroryIcon]}
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  );
};

export default CategoriesItem;
