export type User = {
  id: string;
  name: string;
  email: string;
  password?: string;
  token: string;
  friendsIds: string[];
};

export type StoredUser = {
  userId: string;
  token: string;
};

export type Comment = {
  id: string;
  userId: string;
  text: string;
};

export type Post = {
  id: string;
  userId: string;
  text: string;
  imageUri: string;
  comments: Comment[];
  publicationDate: string;
};
