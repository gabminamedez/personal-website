export type UptoItem = {
  title: string;
  content: string;
};

type IntoItem = {
  title: string;
  url: string;
};

export type Media = {
  type: string;
} & IntoItem;

export type Book = {
  author: string;
} & IntoItem;

export type Song = {
  artist: string;
} & IntoItem;
