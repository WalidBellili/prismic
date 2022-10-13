import { useParams } from "react-router-dom";
import { useAllPrismicDocumentsByType } from "@prismicio/react";

const Article = () => {
  const params = useParams();
  // console.log(params.id);

  const [documents] = useAllPrismicDocumentsByType("getarticles");
  // console.log(document);

  return (
    <section>
      {documents ? (
        documents.map((document) => {
          return (
            document.id === params.id && (
              <>
                <h1>{document.data.article1[0].text}</h1>

                <h2>{document.data.content1[0].text}</h2>
              </>
            )
          );
        })
      ) : (
        <p>error</p>
      )}
    </section>
  );
};
// document.id == params.id && console.log(document)
export default Article;
