import { useFoods } from "@/query/foods";
import { ICardItem } from "@/types";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
  useEffect,
} from "react";

interface FoodsManageContext {
  foods: ICardItem[];
  isShowMore: boolean;
  activeTab: string;
  visibleItems: number;
  setVisibleItems: (visibleItems: number) => void;
  setActiveTab: (id: string) => void;
  setText: (value: string) => void;
}

type Props = {
  children: ReactNode;
};

export const DEFAULT_ITEMS = 9;

const FoodsManageContextDefaultValues: FoodsManageContext = {
  foods: [],
  visibleItems: DEFAULT_ITEMS,
  activeTab: "",
  isShowMore: false,
  setVisibleItems: () => {},
  setActiveTab: () => {},
  setText: () => {},
};

export const FoodsManageContext = createContext<FoodsManageContext>(
  FoodsManageContextDefaultValues
);

export const useFoodsManageContext = () => useContext(FoodsManageContext);

export const FoodsManageProvider = ({ children }: Props) => {
  const [visibleItems, setVisibleItems] = useState(DEFAULT_ITEMS);
  const [text, setText] = useState("");
  const [isShowMore, setIsShowMore] = useState(false);
  const { data: foods } = useFoods();
  const [activeTab, setActiveTab] = useState("");

  const foodsByCategory = useMemo(() => {
    if (!foods) return [];
    return (
      foods.filter((item) => {
        return (
          (!activeTab || item.categoryId === activeTab) &&
          (!text ||
            item.restaurant
              ?.toLocaleLowerCase()
              .includes(text.toLocaleLowerCase()))
        );
      }) || []
    );
  }, [activeTab, foods, text]);

  const availableFoodsList = useMemo(() => {
    return foodsByCategory.slice(0, visibleItems) || [];
  }, [foodsByCategory, visibleItems]);

  useEffect(() => {
    if (foods) {
      if (visibleItems < foodsByCategory.length) setIsShowMore(true);
      else setIsShowMore(false);
    }
  }, [foods, foodsByCategory.length, visibleItems]);

  const value = {
    foods: availableFoodsList,
    isShowMore,
    visibleItems,
    activeTab,
    setVisibleItems,
    setActiveTab,
    setText,
  };

  return (
    <FoodsManageContext.Provider value={value}>
      {children}
    </FoodsManageContext.Provider>
  );
};
