import React, { useState, useEffect } from "react";
import getCampaignsService from "../services/getAllCampaignsComponent";

const Browse = () => {
  const [campaignsData, setCampaignsData] = useState([]);

  useEffect(() => {
    getCampaignsService()
      .then(([status, data]) => {
        status ? setCampaignsData(data) : setCampaignsData([]);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(campaignsData);

  return (
    <div>
      <h1>Browse</h1>
    </div>
  );
};

export default Browse;
