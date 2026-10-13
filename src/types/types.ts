export type PopupConfig = {
  title: string;
  children: React.ReactNode;
};

export interface CardData {
  _id: string;
  name: string;
  link: string;
  owner: string;
  isLiked: boolean;
  createdAt: string;
};