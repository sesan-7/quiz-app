export type Option = {
    id: string;
    text: string;
    correct?: boolean;
  };
  
  export type Question = {
    id: string;
    text: string;
    options: Option[];
  };
  