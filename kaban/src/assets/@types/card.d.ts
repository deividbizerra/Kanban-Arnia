type Colum = "TODO" | "DOING" | "DONE"

type Card = {
  _id: string;
  title: string;
  content: string;
  column: Colum;
};

interface NewCardData {
  title: string;
  content: string;
}

