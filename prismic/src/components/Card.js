import { Link } from "react-router-dom";
import moment from "moment";

const Card = ({ document }) => {
  const today = moment().format("DD-MM-YYYY");
  const heure = moment().format("HH:mm");

  return (
    <article className="card">
      <Link to={`/${document.id}`}>
        <h1>{document.data.article1[0].text}</h1>
      </Link>
      <img src={document.data.image.url} alt="" />
      <p>{document.data.content1[0].text}</p>
      <p>
        Posté le {today}
        {""} à {heure}
      </p>
    </article>
  );
};

export default Card;
