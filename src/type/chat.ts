export type Author = "user" | "bot";

export type Chat = {
  author: Author;
  message: string;
};
