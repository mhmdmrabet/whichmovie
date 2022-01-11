type MovieProps = {
  title: string;
};

export const Movie = ({ title }: MovieProps): JSX.Element => {
  return <li className="m-2 p-1 text-xl border-b-2 border-white">{title}</li>;
};
