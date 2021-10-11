import { styled } from "@stitches/react";
import { layoutVar } from "apollo/reactiveVar/layout";
import { Box, Text } from "components";
import Layout from "components/Layout";
import React, { useEffect } from "react";
import {WhoWeAreTemplate} from "components/Templates/WhoWeAre";
import {ImagineAPlatform} from "components/Templates/ImagineAPlatform";
import {FrontPageTemplate} from "components/Templates/FrontPage";
import Templates from "components/Templates";

const Page = styled(Box, {
  border: "1px solid $dark",
  borderRadius: "15px",
  margin: "$3",
  height: "40em",
  background: "$light",
  width: "66em",
  margin: "3em auto",
});

const Proposals = (props) => {
  useEffect(() => {
    layoutVar({ ...layoutVar(), isDrawerOpen: true });
  }, []);
  return (
    <Layout>
      <ProposalTemplates />
    </Layout>
  );
};

export default Proposals;

const ProposalTemplatesWrapper = styled(Box, {
  variants: {
    minimap: {
      true: {
        height: "1em",
      },
    },
  },
});


export const ProposalTemplates = ({ minimap }) => {
  return (
		<ProposalTemplatesWrapper minimap={minimap}>
			{Templates.map((component, key) => (
				<Page key={key}>
					{component}
				</Page>
			))}
		</ProposalTemplatesWrapper>
	);
};

