import { Link } from "react-router-dom";
import moment from "moment";

const Card = ({ document }) => {
  const dateToStore = document.last_publication_date;
  const momentDate = moment(dateToStore).format("DD-MMM-YYYY HH:ss");
  console.log(momentDate);

  return (
    <article className="card">
      <Link to={`/${document.id}`}>
        <h1>{document.data.article1[0].text}</h1>
      </Link>
      <img src={document.data.image.url} alt="" />
      <p>{document.data.content1[0].text}</p>
      <p>Posté le {momentDate}</p>
    </article>
  );
};

export default Card;
