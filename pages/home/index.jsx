import { Layout } from "components";
import { Welcome, ProposalLink } from "components/Pages/home";

export default function Home() {
  return (
    <Layout sidedraw={<Welcome />} pushContent printContent>
      <ProposalLink />
    </Layout>
  );
}
