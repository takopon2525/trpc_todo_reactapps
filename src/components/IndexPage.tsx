import { trpc } from "../utils/trpc";

function IndexPage() {
  const hello = trpc.hello.useQuery({ msg: "world!" });
  
  if (!hello.data) return <div>Loading...</div>;
  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  );
}

export default IndexPage;
