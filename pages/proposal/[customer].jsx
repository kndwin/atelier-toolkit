import { customerVar } from "apollo/reactiveVar/customer";
import { Box } from "components";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { notion } from "utils/notion/client";
import { ProposalTemplates } from ".";

const ProposalPreview = ({ notionDatabase }) => {
  const router = useRouter();
  const { customer } = router?.query;

  useEffect(() => {
    customerVar({ ...customerVar(), customer: customer });
  }, []);

  return (
    <Box css={{ paddingY: "$3" }}>
      <ProposalTemplates />
    </Box>
  );
};

export default ProposalPreview;

export const getServerSideProps = async () => {
  const res = await notion.search({ query: "Proposal" });
  const databaseId = res?.results[0].id;

  const database = await notion.databases.query({
    database_id: databaseId,
  });

  return { props: { notionDatabase: database.results } };
};
