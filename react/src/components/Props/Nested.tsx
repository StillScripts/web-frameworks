interface NestedProps {
  answer?: number | string;
}

const Nested: React.FC<NestedProps> = ({ answer = "a mystery" }) => (
  <p>The answer is {answer}</p>
);

export default Nested;
