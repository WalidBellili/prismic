import { Link } from "react-router-dom";

const Card = ({ document }) => {
  return (
    <article className="card">
      <Link to={`/${document.id}`}>
        <h1>{document.data.article1[0].text}</h1>
      </Link>
      <p>{document.data.content1[0].text}</p>
    </article>
  );
};

export default Card;
