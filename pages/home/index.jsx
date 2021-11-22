import Layout from "components/Layout";
import Welcome from "./Welcome";
import ProposalLink from "./ProposalLink";

export default function Home() {

  return (
		<Layout isOpen={true} sidedraw={<Welcome />}>
			<ProposalLink />
    </Layout>
  );
}
