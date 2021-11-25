import { Text, Box, Img, Page } from "components";

export const ProductGeeksTemplate = (props) => {
  const payload = {
    description: `think of us as product geeks who love beautiful design & supply chains that sings.`,
    image: "/images/product-geeks.png",
  };
  return (
    <Page>
      <Box
        css={{
          height: "100%",
          width: "100%",
					padding: "5em",
          display: "flex",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <Text
          css={{
            fontFamily: "Orelo",
            fontSize: "$6",
            textTransform: "uppercase",
          }}
        >
          {payload?.description}
        </Text>
        <Img css={{ height: "80%" }} src={payload?.image} />
      </Box>
    </Page>
  );
};
