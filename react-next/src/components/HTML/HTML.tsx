const string = `here's some <strong>HTML!!!</strong>`;

const HTML: React.FC = () => (
  <p dangerouslySetInnerHTML={{ __html: string }}></p>
);

export default HTML;
