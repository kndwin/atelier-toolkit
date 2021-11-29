import { Button, Box, Text, Input, TextArea } from "components";
import { useCustomer, useForm } from "hooks";
import Cross from "public/svg/cross.svg";
import { v4 } from "uuid";

export const Form = (props) => {
  const { customer, setCustomer } = useCustomer();
  const {
    setSOWPriceAndRange,
    SOWPriceAndRange,
    address,
    setAddress,
    SOWDevelopmentFee,
    setSOWDevelopmentFee,
		SOWOrderQuantity,
		setSOWOrderQuantity,
  } = useForm();

  const addPriceAndRange = (e) => {
    const newPriceAndRange = [...SOWPriceAndRange];
    if (SOWPriceAndRange.length == 0) {
      newPriceAndRange.push({
        id: v4(),
        price: "Test Product",
        range: "$10.00 - $12.00",
      });
    } else {
      newPriceAndRange.push({
        ...SOWPriceAndRange[SOWPriceAndRange.length - 1],
        id: v4(),
      });
    }
    setSOWPriceAndRange(newPriceAndRange);
  };

  const party = (
    <Box css={{ display: "flex", flexDirection: "column" }}>
      <Text css={{ fontWeight: "bold" }}>PARTY NAME</Text>
      <Input
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
        css={{ width: "100%" }}
        placeholder="Enter company name or individual's name here."
      />
      <Text css={{ fontWeight: "bold", marginTop: "1em" }}>PARTY ADDRESS</Text>
      <TextArea
        onChange={(e) => setAddress(e.target.value)}
        value={address}
        css={{ width: "100%", height: "10em" }}
        placeholder="Enter company's address here."
      />
    </Box>
  );

  const updatePrice = ({ price, index }) => {
    const newPriceAndRange = [...SOWPriceAndRange];
    newPriceAndRange[index].price = price;
    setSOWPriceAndRange(newPriceAndRange);
  };

  const updateRange = ({ range, index }) => {
    const newPriceAndRange = [...SOWPriceAndRange];
    newPriceAndRange[index].range = range;
    setSOWPriceAndRange(newPriceAndRange);
  };

  const removePriceAndRange = ({ id }) => {
    const newPriceAndRange = SOWPriceAndRange.filter(
      (priceAndRange) => priceAndRange.id !== id
    );
    setSOWPriceAndRange(newPriceAndRange);
  };

  const pricingAndRange = (
    <Box>
      <Text css={{ fontWeight: "bold", marginTop: "1em" }}>
        PRICES AND RANGE
      </Text>
      {SOWPriceAndRange?.map(({ id, price, range }, index) => (
        <Box
          key={id}
          css={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 2em",
            gridGap: "1em",
          }}
        >
          <Input
            css={{ width: "100%" }}
            value={price}
            onChange={(e) => updatePrice({ price: e.target.value, index })}
          />
          <Input
            css={{ width: "100%" }}
            value={range}
            onChange={(e) => updateRange({ range: e.target.value, index })}
          />
          <Cross
            onClick={() => removePriceAndRange({ id })}
            style={{ cursor: "pointer", margin: "auto 0" }}
          />
        </Box>
      ))}
      <Button
        onClick={() => addPriceAndRange()}
        css={{ width: "100%", marginTop: "1em" }}
      >
        Add price and range
      </Button>
    </Box>
  );

  const orderQuantity = (
		<Box css={{ display: "flex", flexDirection: "column", marginTop: "1em" }}>
      <Text css={{ fontWeight: "bold" }}>ORDER QUANTITY</Text>
      <Input
				min={0}
				type="number"
        value={SOWOrderQuantity}
        onChange={(e) => setSOWOrderQuantity(e.target.value)}
        css={{ width: "100%" }}
        placeholder="Enter the order quantity here"
      />
    </Box>
  );
  const developmentFee = (
		<Box css={{ display: "flex", flexDirection: "column", marginTop: "1em" }}>
      <Text css={{ fontWeight: "bold" }}>DEVELOPMENT FEE</Text>
      <Input
				min={0}
				type="number"
        value={SOWDevelopmentFee}
        onChange={(e) => setSOWDevelopmentFee(e.target.value)}
        css={{ width: "100%" }}
        placeholder="Enter the development fee here"
      />
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
      {party}
			{orderQuantity}
			{developmentFee}
      {pricingAndRange}
    </Box>
  );
};
