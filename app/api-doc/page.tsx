import { getApiDocs } from "@/lib/swagger";
import ReactSwagger from "./react-swagger";

async function IndexPage() {
  const spec = await getApiDocs();
  return (
    <section className="container mx-auto" dir="ltr">
      <ReactSwagger spec={spec} />
    </section>
  );
}
IndexPage.Layout = () => {}
export default IndexPage;