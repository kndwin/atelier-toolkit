import { Box } from "components";
import { useCustomer, useForm, useLayout } from "hooks";
import { useRouter } from "next/dist/client/router";
import { useEffect,} from "react";
import { notion } from "utils/notion/client";
import { ProposalTemplates } from ".";

const ProposalPreview = ({ notionDatabase }) => {
  const router = useRouter();
  const { customer } = router?.query;
  const { setCustomer } = useCustomer();
  const { setDisableEdit } = useLayout();
  const { setPrice } = useForm();

  useEffect(() => {
    const pricingArr = notionDatabase?.map(({ properties }) => {
      return {
        customer: properties?.Customer?.title[0]?.plain_text,
        pricing: properties?.Pricing?.rich_text[0]?.plain_text,
      };
    });

    const pricing = JSON.parse(
      pricingArr.find(
        ({ customer: customerWithPrice }) => customerWithPrice === customer
      )?.pricing
    );

    setPrice(pricing);
  }, [notionDatabase]);

  useEffect(() => {
    setCustomer(customer);
    setDisableEdit(true);
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
