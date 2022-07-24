interface NestedProps {
  answer?: number | string;
}

const Nested = ({ answer = "a mystery" }: NestedProps) => (
  <p>The answer is {answer}</p>
);

const Props = () => (
  <>
    <Nested answer={42} />
    <Nested />
  </>
);

export default Props;
