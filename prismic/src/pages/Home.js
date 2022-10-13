import { useAllPrismicDocumentsByType } from "@prismicio/react";
import Card from "../components/Card";

const Home = () => {
  const [documents] = useAllPrismicDocumentsByType("getarticles");
  //   console.log(documents);

  return (
    <div className="flex">
      <section className="mainContainer">
        {documents &&
          documents.map((document) => {
            return <Card document={document} />;
          })}
      </section>
    </div>
  );
};

export default Home;
