export default function Profile({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen container flex flex-col bg-background">
      <h1 className=" text-5xl font-bold mt-12">
        Issues - Details Page ({params.id})
      </h1>
    </main>
  );
}
