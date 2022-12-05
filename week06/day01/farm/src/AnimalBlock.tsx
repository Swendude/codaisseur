type AnimalBlockProps = {
  name: string;
  food: string[];
  children?: React.ReactNode;
};

const AnimalBlock = ({ name, food, children }: AnimalBlockProps) => {
  return (
    <div>
      <h2>Animal</h2>
      <p>{name}</p>
      <h4>{children}</h4>
    </div>
  );
};

export default AnimalBlock;
