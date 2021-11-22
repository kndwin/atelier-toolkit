import { Box, Text, Input, Button } from "components";
import { useReactiveVar } from "@apollo/client";
import { customerVar } from "apollo/reactiveVar/customer";
import { layoutVar } from "apollo/reactiveVar/layout";
import { useReactToPrint } from "react-to-print";
import {useState} from "react";

const Form = (props) => {
  const [error, setError] = useState();
  const { customer } = useReactiveVar(customerVar);
  const { printRef } = useReactiveVar(layoutVar);
  const print = useReactToPrint({
    content: () => printRef.current,
  });

  const handlePrint = () => {
    if (customer.length == 0) {
      setError("Please enter a customer name!");
    } else {
      print();
    }
  };

  return (
    <Box
      css={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <Box>
        <Text as="h2">Fill out the details below to get started</Text>
				{error && <Text css={{ color: "$red"}}>{error}</Text>}
        <Box css={{ marginTop: "1em" }}>
          <Text css={{ fontWeight: "bold" }}>CLIENT DETAILS</Text>
          <Input
            value={customer}
            onChange={(e) =>
              customerVar({ ...customerVar(), customer: e.target.value })
            }
            type="text"
            placeholder="Company Name"
            css={{ width: "100%" }}
          />
          <Input placeholder="Client/Contact Name" css={{ width: "100%" }} />
        </Box>
        <Box css={{ marginTop: "1em" }}>
          <Text css={{ fontWeight: "bold" }}>PRODUCTS AND PRICING</Text>
          <Box
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridGap: "1em",
            }}
          >
            <Input
              placeholder="How many products are there?"
              css={{ width: "100%" }}
            />
            <Input placeholder="Currency" css={{ width: "100%" }} />
          </Box>
        </Box>
      </Box>
      <Box css={{ display: "flex", justifyContent: "flex-end" }}>
        <Button css={{ width: "fit-content" }} onClick={() => handlePrint()}>
          Export PDF
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
