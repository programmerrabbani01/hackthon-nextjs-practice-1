import axios from "axios";

// get all Developers

export async function GET(req) {
  // query all Developers

  const queryParams = req.nextUrl.searchParams;

  const name = queryParams.get("name");
  const age = queryParams.get("age");
  const skill = queryParams.get("skill");

  console.log({ name, age, skill });

  // or fetch data with next.js data fetching API
  const response = await fetch("http://localhost:5050/deVs", {
    next: {
      revalidate: 15,
    },
    next: {
      tags: ["devsData"],
    },
  });

  const data = await response.json();

  return Response.json(data);
}

// create a new Developer

// export async function POST(req) {
//   const data = await req.json();

//   const response = await axios.post("http://localhost:5050/deVs", data);

//   return Response.json(response.data);
// }

// create a new Developer with form data
export async function POST(req) {
  const formData = await req.formData();

  const name = formData.get("name");
  const age = formData.get("age");
  const skill = formData.get("skill");

  const response = await axios.post("http://localhost:5050/deVs", {
    name,
    age,
    skill,
  });

  return Response.json(response.data);
}
