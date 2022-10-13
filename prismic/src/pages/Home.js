import { useAllPrismicDocumentsByType } from "@prismicio/react";

const Home = () => {
  const [documents] = useAllPrismicDocumentsByType("getarticles");
//   console.log(documents);

  return (
    <>
      {documents &&
        documents.map((document) => {
          return (
            <section>
              <h1>{document.data.article1[0].text}</h1>
              <h2>{document.data.content1[0].text}</h2>
            </section>
          );
        })}
    </>
  );
};

export default Home;
