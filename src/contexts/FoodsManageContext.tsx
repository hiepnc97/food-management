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

const FoodsManageContextDefaultValues: FoodsManageContext = {
  foods: [],
  visibleItems: 9,
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
  const [visibleItems, setVisibleItems] = useState<number>(9);
  const [text, setText] = useState<string>("");
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  const { data } = useFoods();
  const [activeTab, setActiveTab] = useState<string>("");
  const foodsByCategory = useMemo(() => {
    return (
      data?.foods
        .filter((item) => {
          if (!activeTab) return item;
          return item.categoryId === activeTab;
        })
        .filter((item) => {
          if (!text) return item;
          return item.restaurant.includes(text);
        }) || []
    );
  }, [activeTab, data?.foods, text]);

  const availableFoodsList = useMemo(() => {
    return foodsByCategory.slice(0, visibleItems) || [];
  }, [foodsByCategory, visibleItems]);

  useEffect(() => {
    if (data?.foods) {
      if (visibleItems < foodsByCategory.length) setIsShowMore(true);
      else setIsShowMore(false);
    }
  }, [data, foodsByCategory.length, visibleItems]);

  const value = {
    foods: availableFoodsList,
    isShowMore,
    visibleItems,
    setVisibleItems,
    setActiveTab,
    activeTab,
    setText,
  };

  return (
    <FoodsManageContext.Provider value={value}>
      {children}
    </FoodsManageContext.Provider>
  );
};
