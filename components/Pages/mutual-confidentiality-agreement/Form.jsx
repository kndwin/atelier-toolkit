import { Box, Text, Input } from "components";
import { useCustomer, useForm } from "hooks";

export const Form = (props) => {
  const { customer, setCustomer } = useCustomer();
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
      <Box>
        <Text as="h2">Fill out da form yo!</Text>
        <Box>
          <Input
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            placeholder="Customer"
          />
        </Box>
      </Box>
    </Box>
  );
};
