import { Box, Text, Page } from "components";
import { styled } from "stitches.config";

const Title = styled(Text, {
	fontFamily: "ITC Garamond",
  fontSize: "$6",
  letterSpacing: "1px",
  lineHeight: "1em",
  margin: ".3em 0 0 0",
	variants: {
		h2: {
			true: {
				fontSize: "45px",
			}
		}
	}
});

const Timeline = styled(Text, {
  margin: ".5em 0 1em 0",
  fontFamily: "News Cycle",
  fontWeight: "bold",
  letterSpacing: "1px",
  textTransform: "uppercase",
  fontSize: "$3",
});

const Description = styled(Text, {
  margin: ".3em 0 3em 0",
  fontFamily: "News Cycle",
  letterSpacing: "1px",
  lineHeight: "1em",
  fontSize: "$2",
});

const NeatO = styled('div', {
  position: "absolute",
  bottom: "3em",
  right: "3em",
  backgroundColor: "$green",
  transform: "rotate(-15deg)",
  height: "fit-content",
  width: "15em",
  padding: "2em",
  display: "flex",
  justifyContent: "center",
  borderTopLeftRadius: "60% 60%",
  borderTopRightRadius: "60% 60%",
  borderBottomRightRadius: "60% 60%",
  borderBottomLeftRadius: "60% 60%",
});

export const TimelineTemplate = () => {
  return (
    <Page css={{ position: "relative" }}>
      <Box
        css={{
          width: "100%",
          padding: "3em",
          margin: "auto",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          css={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
						gridGap: "3em", 
            height: "fit-content",
          }}
        >
          <Box css={{ borderRight: "1px solid black", paddingRight: "3em" }}>
            <Title>
              Timelines are variable and we want to be honest with you...
            </Title>
            <Description css={{ marginTop: "5em" }}>
              This page featuers the timeline form design and development to the
              pilot operation of supply chains to the delivery of the first
              products
              <br />
              <br />
              There are variables in this timeline that are out of our control,
              however, with our experience we think that this is a good guide.
              <br />
              <br />
              We'd love to keep this simple and say 'a firm 18 weeks' but we
              think honesty and transparency at the outset makes more sense :)
            </Description>
          </Box>
          <Box css={{ paddingLeft: "1em" }}>
            <Title h2>Brand Development</Title>
            <Timeline>Weeks 1-4</Timeline>
            <Description>
              Development of brand visuals, packaging direction, label/bottle
              printing concept, product naming and line concept development
            </Description>

            <Title h2>Packaging</Title>
            <Timeline>Weeks 2-10</Timeline>
            <Description>
              Packaging samples ordered and renders of packaging created. End of
              week 4 packaging decisions are made.
            </Description>

            <Title h2>Formulations</Title>
            <Timeline>Weeks 2-12</Timeline>
            <Description>
              Formulations brief is created and sb umitted to our chief chemist.
              Formulation is developed and revised until perfect product is
              created.
            </Description>
          </Box>
          <Box css={{ paddingLeft: "1em" }}>
            <Title h2>Production of Packaging</Title>
            <Timeline>Weeks 2-12</Timeline>
            <Description>Packaging is ordered and manufactured</Description>

            <Title h2>Filling and Packing</Title>
            <Timeline>Weeks 12-16</Timeline>
            <Description>
              Packaging is delievered to manufacturer, filled with final
              formulation, packed into cartons ready for shipping
            </Description>

            <Title h2>Shipping</Title>
            <Timeline>Weeks 16-17</Timeline>
            <Description>
              Shipping, post-manufacturing, to your distribution center.
            </Description>
          </Box>
        </Box>
      </Box>
      <NeatO>
        <Text
          css={{
            fontFamily: "News Cycle",
            fontWeight: "bold",
            color: "white",
            fontSize: "$3",
            textAlign: "center",
            letterSpacing: "1px",
            lineHeight: "1em",
						textTransform: "uppercase",
          }}
        >
          Sounds pretty
          <br />
          neat-o, right?
        </Text>
      </NeatO>
    </Page>
  );
};
