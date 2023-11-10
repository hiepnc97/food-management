import { ReactNode } from "react";

export interface IContainer {
    children: ReactNode;
}

export interface ICardItemProps {
  data: ICardItem;
}

export interface ICardItem {
  id: string;
  index: number;
  rating: number;
  promotion?: string | null;
  isNew: boolean;
  categoryId: string;
  minCookTime: number;
  maxCookTime: number;
  restaurant: string;
  name: string;
  imageUrl: string;
}

export interface TabProps {
  id: string;
  name: string;
}

export interface IFoods {
  foods: ICardItem[]
}

