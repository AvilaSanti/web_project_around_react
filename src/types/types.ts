export type PopupConfig = {
  title: string;
  children: React.ReactNode;
};

export interface ApiOptions {
  baseUrl: string;
  headers: HeadersInit;
}

export interface UserData {
  _id: string;
  name: string;
  about: string;
  avatar: string;
}

export interface CardData {
  _id: string;
  name: string;
  link: string;
  owner: string;
  createdAt: string;
  isLiked: boolean;
}

export interface CurrentUserContextType {
  currentUser: UserData | null;
}

