import { Box, Text, Page, Span } from "components";
import { useCustomer } from "hooks";

export const MUATemplates = (props) => {
  return (
    <>
      <FrontPage />
      <AgreementOne />
    </>
  );
};

const TopTitle = ({ withSubtext }) => {
  return (
    <Box
      css={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text
        css={{
          fontFamily: "Orelo",
          fontSize: "5em",
          fontWeight: "bold",
          letterSpacing: "30px",
        }}
      >
        ATELIER
      </Text>
      {withSubtext && (
        <Text
          css={{
            fontFamily: "Arktiv Grotesk",
          }}
        >
          Mutual <br />
          Confidentiality <br />
          Agreement <br />
        </Text>
      )}
    </Box>
  );
};

const FrontPage = () => {
  const { customer } = useCustomer();
  return (
    <Page orientation="portrait" aspectRatio="A4" withBorder>
      <Box
        css={{
          padding: "4em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
        }}
      >
        <TopTitle />
        <Text
          css={{
            fontFamily: "Arktiv Grotesk",
            fontSize: "$6",
            margin: "0 30% 0 40%",
            lineHeight: "1em",
            width: "100%",
          }}
        >
          Mutual <br />
          Confidentiality <br />
          Agreement <br />
        </Text>

				<Box css={{ display: "grid", grid: "2em 1fr / 1fr 1fr", marginBottom: "5em" }}>
          <Text bold css={{ gridColumn: "span 2" }}>
            PARTIES
          </Text>
          <Box>{customer}</Box>
          <Text>
            E XD PTY LTD <br />
            85 WILLIAM STREET <br />
            DARLINGHURST <br />
            SYDNEY NSW 2000
          </Text>
        </Box>
      </Box>
    </Page>
  );
};

const AgreementOne = () => {
  return (
    <Page orientation="portrait" aspectRatio="A4" withBorder>
      <Box
        css={{
          padding: "4em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          height: "100%",
          width: "100%",
        }}
      >
        <TopTitle withSubtext />
        <Box
          css={{
            display: "grid",
            grid: "1fr 1fr / 1fr 5em 4fr 1fr",
            margin: "6em 0 4em 0",
            gridGap: "2em",
          }}
        >
          <Text bold css={{ gridColumnStart: "2" }}>
            PARTY A
          </Text>
          <Box css={{ p: { fontSize: "14px" } }}>
            <Text>
              <Span bold>1 -- </Span>
              EXD PTY LTD (ABN 516 627 664 162) OF WILLIAM ST, DARLINGHURST,
              NSW, AUSTRALIA (THE ASSIGNEE) AUTHORISED OFFICER NICK HUDSON
            </Text>
            <Text css={{ marginTop: "1em" }}>
              <Span bold>2 -- </Span>
              EXD PTY LTD (ABN 516 627 664 162) OF WILLIAM ST, DARLINGHURST,
              NSW, AUSTRALIA (THE ASSIGNEE) AUTHORISED OFFICER NICK HUDSON
            </Text>
          </Box>
          <Text bold css={{ gridColumnStart: "2" }}>
            BACKGROUND
          </Text>
          <Box css={{ p: { fontSize: "14px" } }}>
            <Text>
              <Span bold>1 -- </Span>
              EXD PTY LTD (ABN 516 627 664 162) OF WILLIAM ST, DARLINGHURST,
              NSW, AUSTRALIA (THE ASSIGNEE) AUTHORISED OFFICER NICK HUDSON
            </Text>
            <Text css={{ marginTop: "1em" }}>
              <Span bold>2 -- </Span>
              EXD PTY LTD (ABN 516 627 664 162) OF WILLIAM ST, DARLINGHURST,
              NSW, AUSTRALIA (THE ASSIGNEE) AUTHORISED OFFICER NICK HUDSON
            </Text>
          </Box>
        </Box>
        <Box>
          <Text bold css={{ my: ".5em" }}>
            THE PARTIES ACKNOWLEDGE AND AGREE:
          </Text>
          <Text css={{ marginTop: ".5em", marginBottom: "1em" }}>
            In consideration of, among other things, the mutual promises
            contained in this agreement:
          </Text>
          <Box css={{ display: "grid", gridTemplateColumns: "6em 1fr" }}>
            <Text bold>1 ---</Text>
            <Box css={{ p: { fontSize: "14px" } }}>
              <Text bold>DEFINITIONS</Text>
              <Text css={{ my: ".5em" }}>In this agreement:</Text>
              <Text>
                <Span bold>Business Day </Span>
                means 9.00am to 5.00pm on a day that is not a Saturday, Sunday,
                public holiday or bank holiday in the place where the notice or
                other communication is received.
              </Text>
              <Text css={{ my: ".5em" }}>
                <Span bold>Confidential Information </Span>
                of a Disclosing Party means the following information,
                regardless of its form and whether the Recipient becomes aware
                of it before or after the date of this agreement:
              </Text>
              <Text css={{ my: ".5em" }}>
                <Span css={{ marginRight: "1em", my: ".5em" }}>(a)</Span>
                information that is by its nature confidential to the Disclosing
                Party;
              </Text>
              <Text css={{ my: ".5em" }}>
                <Span css={{ marginRight: "1em" }}>(b)</Span>
                information that is designated by the Disclosing Party as
                confidential; or
              </Text>
              <Text css={{ my: ".5em" }}>
                <Span css={{ marginRight: "1em" }}>(c)</Span>
                information the Recipient knows, or ought to know, is
                confidential to the Disclosing Party,
              </Text>
              <Text css={{ my: ".5em" }}>
                and includes: all information of, related to or connected with
                the Permitted Purpose, the Disclosing Party or any of its
                related bodies corporate or their transactions, operations and
                affairs (including all past, current and prospective financial,
                accounting, trading, marketing, technical and business
                information, product formulations, trade secrets and know-how
                and all customer and other Personal Information) directly or
                indirectly disclosed by or on behalf of the Disclosing Party to
                the Recipient or any Related Person, whether before or after
                execution of this deed and whether through any officers,
                employees, agents, or advisers of Disclosing Party but does not
                include Excepted Information.
              </Text>
              <Text css={{ my: ".5em" }}>
                <Span bold>Corporations Act </Span>
                means the Corporations Act 2001 (Cth).
              </Text>
              <Text css={{ my: ".5em" }}>
                <Span bold>Disclosing Party </Span>
                means a party to this agreement who discloses Confidential
                Information to a Recipient.
              </Text>
              <Text css={{ my: ".5em" }}>
                <Span bold>Effective Date </Span>
                means
                <Span bold> 2 September 2021.</Span>
              </Text>
              <Text css={{ my: ".5em" }}>
                <Span bold> Excepted Information means </Span>
                information which:
              </Text>
              <Text>
                <Span css={{ marginRight: "1em" }}>(a)</Span>
                is, or becomes available, in the public domain, other than by
                breach of this agreement;
              </Text>
              <Text>
                <Span css={{ marginRight: "1em" }}>(b)</Span>
                is known to the Recipient before receiving it from the
                Disclosing Party and is not subject to an existing obligation of
                confidence between the parties;
              </Text>
              <Text>
                <Span css={{ marginRight: "1em" }}>(c)</Span>
                the Recipient proves beyond reasonable doubt has been developed
                independently by the Recipient or a Related Person who has not
                had access to any of the Confidential Information;
              </Text>
              <Text css={{ my: ".5em", marginLeft: "2em" }}>OR</Text>
              <Text>
                <Span css={{ marginRight: "1em" }}>(d)</Span>
                is provided to the Recipient by a third party whose use and
                disclosure of the Confidential Information is not subject to any
                restrictions.
              </Text>
              <Text css={{ my: ".5em" }}>
                <Span bold>Permitted Purpose </Span>
                means a Recipient or a Related Person using the Confidential
                Information to do business with the Disclosing Party including
                but not limited to quoting for and/or supplying goods or
                services to the other party.
              </Text>
              <Text css={{ my: ".5em" }}>
                <Span bold>Personal Information </Span>
                has the meaning given to that term in the Privacy Act 1988
                (Cth).
              </Text>
              <Text css={{ my: ".5em" }}>
                <Span bold>Recipient </Span>
                means a party who obtains Confidential Information of the other
                party.
              </Text>
              <Text css={{ my: ".5em" }}>
                <Span bold>Related Bodies Corporate </Span>
                has the meaning given to that term in the Corporations Act.
              </Text>
              <Text css={{ my: ".5em" }}>
                <Span bold>Related Person </Span>
                means a director, officer, employee, agent, contractor or
                professional adviser of a Recipient or of any of its Related
                Bodies Corporate
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};

export { Form } from "./Form";
