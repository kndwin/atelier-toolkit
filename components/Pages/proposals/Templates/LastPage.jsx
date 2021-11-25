import { styled } from "@stitches/react";

import { Box, Text, Img, Page } from "components";
import { useCustomer } from "hooks";
import Star from "public/svg/star.svg";
import HappyCloud from "public/svg/happy-cloud.svg";

const GreenStar = styled(Star, {
  g: {
    path: {
      fill: "$green",
    },
  },
});

export const LastPageTemplate = () => {
  const { customer } = useCustomer();
  const payload = {
    description: `This document is a proposal, prepared witha sense of wonder and an analytical mind, the purpose is to illustrate the way atelier can develop a range of beatiful products coneptuslised with scientific rigor for ${customer}`,
    image: `/images/intro-1.png`,
  };

  return (
    <Page>
      <Box
        css={{
          width: "30em",
          height: "100%",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%",
          margin: "0 auto",
        }}
      >
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "2em",
          }}
        >
          <Text
            css={{
              marginBottom: "5px",
              fontSize: "$2",
              fontFamily: "News Cycle",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            From your friends at
          </Text>
          <Text
            css={{
              marginTop: "5px",
              textTransform: "uppercase",
              fontFamily: "Orelo",
              fontSize: "32px",
            }}
          >
            Atelier
          </Text>
        </Box>
        <Box css={{ position: "relative", width: "100%" }}>
          <Img
            css={{ height: "20em", width: "100%" }}
            src={payload?.image}
            alt=""
          />
          <GreenStar
            style={{
              position: "absolute",
              left: "-80px",
              top: "-80px",
              transform: "scale(.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          <Text
            css={{
              fontSize: "24px",
              fontFamily: "News Cycle",
              transform: "rotate(15deg)",
              color: "$light",
              width: "fit-content",
              position: "absolute",
              left: "-31px",
              textAlign: "center",
              top: "-24px",
							textTransform: "uppercase",
							fontWeight: "bold"
            }}
          >
            Thank <br />
            you!
          </Text>
          <Box
            css={{
              position: "absolute",
              right: "-80px",
              bottom: "-80px",
            }}
          >
            <Box
              css={{
                right: "-30px",
                top: "-30px",
                transform: "rotate(-15deg)",
                background: "$primary",
                height: "fit-content",
                width: "16em",
                padding: "0",
                display: "flex",
                justifyContent: "center",
                borderTopLeftRadius: "60% 60%",
                borderTopRightRadius: "60% 60%",
                borderBottomRightRadius: "60% 60%",
                borderBottomLeftRadius: "60% 60%",
              }}
            >
              <Text
                css={{
                  color: "white",
                  textAlign: "center",
                  fontFamily: "Arktiv Grotesk",
                  fontSize: "$5",
                  lineHeight: "1em",
                  margin: "9px 0",
                  padding: "10px 25px",
                }}
              >
                This is a
                <br />
                Proposal For
                <br />
                {customer}
              </Text>
            </Box>
            <HappyCloud
              style={{
								position: "absolute",
								top: "70%",
								right: "2em", 
                transform: "scale(.8)",
              }}
            />
          </Box>
        </Box>
        <Text
          css={{
            textAlign: "center",
            marginBottom: "2em",
            fontWeight: "bold",
            fontFamily: "News Cycle",
            size: "$6",
            lineHeight: "1em",
          }}
        >
          {payload?.description}
        </Text>
      </Box>
    </Page>
  );
};
