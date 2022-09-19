interface StudentProps {
  name: string;
  age: number;
}

const StudentCard = ({ name, age }: StudentProps) => {
  return (
    <div>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </div>
  );
};

export default StudentCard;
