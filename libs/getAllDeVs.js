import axios from "axios";

const getAllDeVs = async () => {
  // fetch data
  const response = await fetch("http://localhost:5050/deVs", {
    // cache: "no-store",
    // next: {
    //   revalidate: 15,
    // },
    next: {
      tags: ["devsData"],
    },
  });

  // check error
  if (!response.ok) {
    throw new Error(`DeVs Data Not Found`);
  }

  // return data
  return response.json();
};

// export

export default getAllDeVs;
