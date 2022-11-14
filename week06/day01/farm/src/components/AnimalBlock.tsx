import { Animal, animalToName } from "../farm";

interface AnimalBlockProps {
  animal: Animal;
}

const AnimalBlock = ({ animal }: AnimalBlockProps) => {
  return (
    <div>
      <p>{animalToName(animal)}</p>
    </div>
  );
};

export default AnimalBlock;
