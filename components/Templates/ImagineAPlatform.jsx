import { Box, Img } from "components";
import { styled } from "@stitches/react";

export const ImagineAPlatform = () => {
  const payload = {
    image: `/images/tagline-1.png`,
  };
  return (
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
  );
};
