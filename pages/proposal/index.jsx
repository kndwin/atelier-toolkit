import { styled } from "@stitches/react";
import { Box, Layout } from "components";
import { ProposalTemplatesContent, Form } from "components/Pages/proposals";

const Proposals = (props) => {
  return (
    <Layout sidedraw={<Form />} printContent pushContent>
      <ProposalTemplates />
    </Layout>
  );
};

export default Proposals;

const ProposalTemplatesWrapper = styled(Box, {
  "@media print": {
    position: "absolute",
    top: "0",
    left: "0",
    background: "white",
    zIndex: "10",
    height: "100vh",
    width: "100vw",
  },
});

export const ProposalTemplates = () => {
  return (
    <ProposalTemplatesWrapper>
      {ProposalTemplatesContent.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
    </ProposalTemplatesWrapper>
  );
};
