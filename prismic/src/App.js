import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await fetch(
      `https://blog-konexio.prismic.io/api/v2/documents/search?ref=Y0fjEBAAACgAmIJ8`
    );
    const response = await request.json();
    console.log(response.results);
  };
  return <></>;
};

export default App;
