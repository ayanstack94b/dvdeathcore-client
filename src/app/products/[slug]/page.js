export default async function ProductPage({ params }) {
  return (
    <div className="min-h-screen text-white p-10 py-20">
      <pre>{JSON.stringify(await params, null, 2)}</pre>
      
    </div>
  );
}
