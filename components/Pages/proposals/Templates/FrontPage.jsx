import { Box, Text, Img, Page } from "components";
import { useCustomer } from "hooks";

import Star from "public/svg/star.svg";
import HappyCloud from "public/svg/happy-cloud.svg";

export const FrontPageTemplate = () => {
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
          <Box
            css={{
              position: "absolute",
              left: "-80px",
              top: "-80px",
              height: "170px",
              width: "170px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              css={{
                fontSize: "$2",
                fontFamily: "News Cycle",
                fontWeight: "bold",
                color: "$light",
                width: "fit-content",
                position: "absolute",
                left: "60px",
                top: "75px",
                transform: "rotate(15deg)",
                zIndex: "10",
              }}
            >
              HELLO !
            </Text>
            <Star
              style={{
                transform: "scale(.6)",
              }}
            />
          </Box>
          <Box
            css={{
              position: "absolute",
              right: "-80px",
              bottom: "-80px",
              height: "100px",
              width: "200px",
              display: "relative",
            }}
          >
            <Box
              css={{
                position: "absolute",
                right: "-30px",
                top: "-50px",
                transform: "rotate(-15deg)",
                background: "$primary",
                height: "fit-content",
                width: "16em",
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
                  fontFamily: "News Cycle",
                  textTransform: "uppercase",
                  fontSize: "$2",
                  fontWeight: "bold",
                  lineHeight: "1em",
                  margin: "9px 0",
                  padding: "10px 25px",
                }}
              >
                This is a Proposal For
                <br />
                {customer}
              </Text>
              <HappyCloud
                style={{
                  position: "absolute",
                  bottom: "-70px",
                  right: "60px",
                  transform: "scale(.75)",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Text
          css={{
            textAlign: "center",
            margin: "4em 0 2em 0",
            fontWeight: "bold",
            fontFamily: "News Cycle",
            size: "$6",
						textTransform: "uppercase",
            lineHeight: "1em",
          }}
        >
          {payload?.description}
        </Text>
      </Box>
    </Page>
  );
};
