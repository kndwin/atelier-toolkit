import { Box, Text, Img, Page } from "components";
import Bottle from "public/svg/bottle-1.svg";

export const WhoWeAreTemplate = () => {
  const payload = {
    title: "Atelier",
    description: `...is a product platform in the beauty and personal care space\n\nWe design, develop and manufacture innovation-forward beauty and personal care products`,
    image: `/images/who-we-are.png`,
  };

  return (
    <Page>
      <Box
        css={{
          margin: "auto",
          display: "flex",
          alignItems: "center",
          width: "50em",
          height: "100%",
          paddingLeft: "4em",
        }}
      >
        <Box col css={{ width: "50%", marginRight: "1em" }}>
          <Text
            css={{
              fontSize: "32px",
              letterSpacing: "1px",
              fontFamily: "Orelo",
              textTransform: "uppercase",
              marginBottom: "1.5em",
            }}
          >
            {payload?.title}
          </Text>
          <Text css={{ fontFamily: "Arktiv Grotesk", whiteSpace: "pre-wrap" }}>
            {payload?.description}
          </Text>
        </Box>
        <Box css={{ width: "fit-content", position: "relative" }}>
          <Img css={{ width: "25em" }} src={payload?.image} alt="" />
          <Bottle
            style={{
              position: "absolute",
              transform: "scale(.6)",
              right: "-50px",
              bottom: "-100px",
            }}
          />
        </Box>
      </Box>
    </Page>
  );
};
