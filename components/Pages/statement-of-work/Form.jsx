import { Box, Text, Input } from "components";
import { useCustomer, useForm } from "hooks";

export const Form = (props) => {
  const { customer, setCustomer } = useCustomer();
  const partyName = (
    <Box>
      <Box css={{ display: "flex", flexDirection: "column" }}>
        <Text css={{ fontWeight: "bold" }}>PARTY NAME</Text>
        <Input
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          css={{ width: "100%" }}
          placeholder="Enter company name or individual's name here."
        />
      </Box>
    </Box>
  );
  return (
    <Box
      css={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2em",
      }}
    >
      <Text as="h2">Statement of Work</Text>
      {partyName}
    </Box>
  );
};
