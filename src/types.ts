export type Genre =
  | "FICTION"
  | "NON_FICTION"
  | "SCIENCE"
  | "HISTORY"
  | "BIOGRAPHY"
  | "FANTASY"
  | "";

export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: Genre;
  isbn: string;
  description: string;
  copies: number;
  available?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBorrow {
  _id: string;
  book: string;
  quantity: number;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
