// get a single Developer

export async function GET({ params }) {
  const response = await fetch(`http://localhost:5050/deVs/${params.id}`);

  return Response.json(response.data);
}

// delete a single Developer

export async function DELETE({ params }) {
  const response = await fetch(`http://localhost:5050/deVs/${params.id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Delete Devs Failed`);
  }

  return Response.json(response.data);
}

// update a single Developer

export async function PATCH(req, { params }) {
  const data = await req.json();

  const response = await fetch(`http://localhost:5050/deVs/${params.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Update Devs Failed`);
  }

  return Response.json(response.data);
}
