import { useLoaderData } from "react-router-dom";

const Price = (props) => {
  // get the data fetched by our loader
  const coin = useLoaderData();

  return (
    <div>
      <h1>
        {coin.asset_id_base}/{coin.asset_id_quote}
      </h1>
      <h2>{coin.rate}</h2>
    </div>
  );
};

export default Price;