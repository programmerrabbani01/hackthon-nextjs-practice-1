import getAllDeVs from "@/libs/getAllDeVs.js";

export default async function Home() {
  const devs = await getAllDeVs();
  return (
    <>
      <div className="container w-4/5 mx-auto">
        <h1 className="text-3xl font-bold">Our Developers</h1>
        <ul>
          {devs.map((item)=>{
            return <li key={item.id}>{item.name}</li>
          })}
        </ul>
      </div>
    </>
  );
}
