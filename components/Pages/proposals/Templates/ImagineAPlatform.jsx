import { Box, Img, Page } from "components";

export const ImagineAPlatform = () => {
  const payload = {
    image: `/images/tagline-1.png`,
  };
  return (
    <Page>
      <Box
        css={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Img css={{ width: "90%", margin: "auto" }} src={payload?.image} />
      </Box>
    </Page>
  );
};
