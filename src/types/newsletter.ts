export type Newsletter = {
  id: string;
  title: string;
  description: string;
  site: string;
  image?: string;
  subscriptions: string[];
};

export type User = {
  subscriptions: string[];
};
