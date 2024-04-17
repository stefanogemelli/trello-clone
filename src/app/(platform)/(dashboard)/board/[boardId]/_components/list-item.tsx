"use client";

import { ListWithCards } from "@/types";

interface ListItemProps {
  key: string;
  index: number;
  data: ListWithCards;
}

export const ListItem = ({ key, index, data }: ListItemProps) => {
  return <div>ListItem</div>;
};
