import Nested from "./Nested";

const Props: React.FC = () => (
  <>
    <Nested answer={42} />
    <Nested />
  </>
);

export default Props;
