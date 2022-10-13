import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { Link } from "react-router-dom";

const Home = () => {
  const [documents] = useAllPrismicDocumentsByType("getarticles");
  console.log(documents);

  return (
    <>
      {documents &&
        documents.map((document) => {
          return (
            <section>
              <Link to={`/${document.id}`}>
                <h1>{document.data.article1[0].text}</h1>
              </Link>
              <h2>{document.data.content1[0].text}</h2>
            </section>
          );
        })}
    </>
  );
};

export default Home;
