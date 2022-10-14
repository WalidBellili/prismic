import { Link } from "react-router-dom";
import moment from "moment";

const Card = ({ document }) => {
  const momentDate = moment(document.last_publication_date).format(
    "DD-MMM-YYYY HH:ss"
  );

  const lastPublication = moment().format("DD-MMM-YYYY HH:ss");

  let momentArticle = moment().subtract(1, "Year").format("DD-MMM-YYYY HH:ss");

  const verif = () => {
    if (momentDate < momentArticle) {
      momentArticle = momentDate;
    }
  };
  verif();

  return (
    <article className="card">
      <Link to={`/${document.id}`}>
        <h1>{document.data.article1[0].text}</h1>
      </Link>
      <img src={document.data.image.url} alt="" />
      <p>{document.data.content1[0].text}</p>

      
    </article>
  );
};

export default Card;
