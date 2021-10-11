import { Box, Text } from "components";
import { styled } from "stitches.config";
import { Page } from "components/Page";

const Title = styled(Text, {
  fontFamily: "News Cycle",
  fontSize: "28px",
  letterSpacing: "1px",
  lineHeight: "1em",
  margin: ".3em 0 0 0",
});

const Tombstone = styled(Box, {
  transform: "rotate(-20deg)",
  padding: "2em 0 .5em 0",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bottom: "6em",
  right: "4em",
  height: "10em",
  width: "10em",
  borderTopLeftRadius: "50%",
  borderTopRightRadius: "50%",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
  background: "$orange",
});

const SustainabilityTemplate = () => {
  return (
    <Page
      css={{
        position: "relative",
      }}
    >
      <Box
        css={{
          display: "flex",
          width: "70%",
          height: "100%",
          margin: "0 auto",
          padding: "3em 0",
          alignItems: "center",
        }}
      >
        <Box>
          <Title>Our commitment to sustainability</Title>
          <Text>
            We offer the ability to carbon offset every product that moves
            through our supply chains. We will conduct a carbon impact study of
            each product across the supply chain from creation of components
            materials and shipping to your DC. We will then offer a carbon offet
            option to render the product carbon neutral.
            <br />
            <br />
            We do this by contributing to arbon extractive programs, globally.
          </Text>
        </Box>
        <Box>
          <Title>Our Pledge</Title>
          <Text>
            We will also donate 5% of our profit to each order to an
            environmental project of your choice. We do this on your behalf and
            are proud to help our customer contribute to making the world a
            better place. We call it 'making good by doing good' and we can't
            wait to see which one you choose!
          </Text>
        </Box>
      </Box>
      <Tombstone>
        <Text css={{ textAlign: "center", fontSize: "25px", color: "white" }}>
          Making <br />
          good, <br />
          By doing <br />
          good :)
        </Text>
      </Tombstone>
    </Page>
  );
};

export default SustainabilityTemplate;
