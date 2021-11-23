import { Box, Text, Input, Button } from "components";
import { useReactToPrint } from "react-to-print";
import { useState } from "react";
import { useCustomer, useForm, useLayout } from "hooks";
import { v4 } from "uuid";

const Form = (props) => {
  const [error, setError] = useState();
  const { customer, setCustomer, setContactName, contactName } = useCustomer();
  const { pricing, setPricing, setPrice } = useForm();
  const { printRef } = useLayout();
  const print = useReactToPrint({
    content: () => printRef.current,
  });

  const handlePrint = () => {
    if (customer.length == 0) {
      setError("Please enter a customer name");
    } else {
      print();
    }
  };

  const setNumberOfPrices = (arrayLength) => {
    const defaultPrice = {
      id: v4(),
      name: "",
      description: "",
      volume: "",
      cost: "",
      rrp: "",
      moq: "",
    };
    let newPricing;
    let currPricing = pricing;
    if (pricing?.length == 0) {
      newPricing = new Array(arrayLength).fill(defaultPrice);
    } else if (pricing.length < arrayLength) {
      const diff = arrayLength - pricing.length;
      newPricing = currPricing.concat(new Array(diff).fill(defaultPrice));
    } else {
      newPricing = currPricing.slice(0, arrayLength);
    }
    setPricing(newPricing);
  };

  return (
    <Box
      css={{
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2em",
      }}
    >
      <Box>
        <Box>
          <Text as="h2">Fill out the details below to get started</Text>
          {error && (
            <Text
              css={{
                color: "$red",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              {error}
            </Text>
          )}
          <Box css={{ marginTop: "1em" }}>
            <Text css={{ fontWeight: "bold" }}>CLIENT DETAILS</Text>
            <Input
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              type="text"
              placeholder="Company Name"
              css={{ width: "100%" }}
            />
            <Input
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              type="text"
              placeholder="Client/Contact Name"
              css={{ width: "100%" }}
            />
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
                onChange={(e) => setNumberOfPrices(Number(e.target.value))}
                placeholder="How many products are there?"
                css={{ width: "100%" }}
                type="number"
                min="0"
              />
              <Input placeholder="Currency" css={{ width: "100%" }} />
            </Box>
          </Box>
        </Box>
        <Box css={{ marginTop: "1em" }}>
          <Text css={{ fontWeight: "bold" }}>PRODUCTS </Text>
          {pricing?.map(({ id, name, description, volume, cost, rrp, moq }) => (
            <Box
              key={id}
              css={{
                display: "flex",
                flexDirection: "column",
                borderBottom: "1px solid black",
                padding: "2em 0",
              }}
            >
              <Input
                css={{ width: "100%" }}
                value={name}
                placeholder="Product Name"
                onChange={(e) =>
                  setPrice({ id, value: e.target.value, type: "name" })
                }
              />
							<Box css={{ display: "flex"}}>
                <Input
									css={{ width: "33%", marginRight: "0.25em" }}
                  value={volume}
                  placeholder="Volume"
                  onChange={(e) =>
                    setPrice({ id, value: e.target.value, type: "volume" })
                  }
                />
                <Input
                  css={{ width: "66%" }}
                  value={description}
                  placeholder="Additional Description (optional)"
                  onChange={(e) =>
                    setPrice({ id, value: e.target.value, type: "description" })
                  }
                />
              </Box>
              <Box
                css={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gridGap: ".25em",
                }}
              >
                <Input
                  css={{ width: "100%" }}
                  value={moq}
                  placeholder="MOQ"
                  onChange={(e) =>
                    setPrice({ id, value: e.target.value, type: "moq" })
                  }
                />
                <Input
                  css={{ width: "100%" }}
                  value={cost}
                  placeholder="Cost"
                  onChange={(e) =>
                    setPrice({ id, value: e.target.value, type: "cost" })
                  }
                />
                <Input
                  css={{ width: "100%" }}
                  value={rrp}
                  placeholder="RRP"
                  onChange={(e) =>
                    setPrice({ id, value: e.target.value, type: "rrp" })
                  }
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        css={{
          display: "flex",
          justifyContent: "flex-end",
          justifySelf: "flex-end",
        }}
      >
        <Button
          css={{ width: "fit-content", marginTop: "2em" }}
          onClick={() => handlePrint()}
        >
          Export PDF
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
