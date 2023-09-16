type Colum = "TODO" | "ROING" | "DONE"

type Card = {
  _id: string;
  title: string;
  content: string;
  column: Colum;
};
