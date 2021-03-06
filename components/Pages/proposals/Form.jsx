import { Box, Text, Input, Dropdown, Button } from "components";
import { useCustomer, useForm } from "hooks";
import { v4 } from "uuid";
import Cross from "public/svg/cross.svg";

export const Form = (props) => {
  const { customer, setCustomer, setContactName, contactName } = useCustomer();
  const { pricing, currency, setCurrency, setNumberOfPrices } = useForm();

  const clientDetailsAndProductPricing = (
    <Box>
      <Text as="h2">Fill out the details below to get started</Text>
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
      <Box css={{ display: "flex", flexDirection: "column", marginTop: "1em" }}>
        <Text css={{ fontWeight: "bold" }}>PRODUCTS AND PRICING</Text>
        <Box
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "1em",
						justifyItems: "end"
          }}
        >
          <Input
            value={pricing.length}
            onChange={(e) => setNumberOfPrices(Number(e.target.value))}
            placeholder="How many products are there?"
						css={{ width: "100%", height: "40px"  }}
            type="number"
            min="0"
          />
          <Dropdown
            placeholder="Select Currency"
            value={currency}
            onChange={(value) => setCurrency(value)}
            options={[
              {
                value: "USD",
                label: "USD",
              },
              {
                value: "AUD",
                label: "AUD",
              },
            ]}
          />
        </Box>
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
      <Box>
        {clientDetailsAndProductPricing}
        <ProductPricingDetail />
      </Box>
    </Box>
  );
};

export const ProductPricingDetail = (props) => {
  const {
    pricing,
    setPricing,
    removeProduct,
    addPriceToProduct,
    updatePriceInProduct,
    removePriceFromProduct,
    setNumberOfPrices,
  } = useForm();

  const handleUpdateProduct = ({ index, type, payload }) => {
    const newPricing = [...pricing];
    newPricing[index][type] = payload;
    setPricing(newPricing);
  };

  return (
    <Box css={{ marginTop: "1em" }}>
      <Text css={{ fontWeight: "bold" }}>PRODUCTS </Text>
      {pricing?.map(
        (
          { id: productId, name, description, volume, prices },
          productIndex
        ) => (
          <Box
            key={productId}
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
                handleUpdateProduct({
                  index: productIndex,
                  type: "name",
                  payload: e.target.value,
                })
              }
            />
            <Box css={{ display: "flex" }}>
              <Input
                css={{ width: "33%", marginRight: "0.25em" }}
                value={volume}
                placeholder="Volume"
                onChange={(e) =>
                  handleUpdateProduct({
                    index: productIndex,
                    type: "volume",
                    payload: e.target.value,
                  })
                }
              />
              <Input
                css={{ width: "66%" }}
                value={description}
                placeholder="Additional Description (optional)"
                onChange={(e) =>
                  handleUpdateProduct({
                    index: productIndex,
                    type: "description",
                    payload: e.target.value,
                  })
                }
              />
            </Box>
            {prices?.map(({ id: priceId, moq, cost, rrp }, index) => (
              <Box
                css={{
                  display: "grid",
                  gridTemplateColumns: `33% repeat(2, 1fr) ${
                    index == 0 ? "" : "2em"
                  }`,
                  gridGap: ".25em",
                }}
              >
                <Input
                  min={0}
                  type="number"
                  css={{ width: "100%" }}
                  value={moq}
                  placeholder="MOQ"
                  onChange={(e) =>
                    updatePriceInProduct({
                      id: productId,
                      priceId,
                      type: "moq",
                      payload: e.target.value,
                    })
                  }
                />
                <Input
                  min={0}
                  type="number"
                  css={{ width: "100%" }}
                  value={cost}
                  placeholder="Cost"
                  onChange={(e) =>
                    updatePriceInProduct({
                      id: productId,
                      priceId,
                      type: "cost",
                      payload: e.target.value,
                    })
                  }
                />
                <Input
                  min={0}
                  type="number"
                  css={{ width: "100%" }}
                  value={rrp}
                  placeholder="RRP"
                  onChange={(e) =>
                    updatePriceInProduct({
                      id: productId,
                      priceId,
                      type: "rrp",
                      payload: e.target.value,
                    })
                  }
                />
                {index != 0 && (
                  <Cross
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      removePriceFromProduct({ id: productId, priceId });
                    }}
                  />
                )}
              </Box>
            ))}
            <Box
              css={{
                display: "grid",
                width: "100%",
                marginTop: "1em",
                gridTemplateColumns: "1fr 1fr",
                gridGap: "1em",
              }}
            >
              <Button
                onClick={() => {
                  const lastPrice = pricing[productIndex].prices.length - 1;
                  const newPrice = {
                    ...pricing[productIndex].prices[lastPrice],
                    id: v4(),
                  };
                  addPriceToProduct({
                    id: productId,
                    price: newPrice,
                  });
                }}
                css={{ width: "100%" }}
              >
                Add more prices
              </Button>
              <Button
                onClick={() => removeProduct({ id: productId })}
                css={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                Remove product
              </Button>
            </Box>
          </Box>
        )
      )}
      <Button
        onClick={() => setNumberOfPrices(pricing?.length + 1)}
        css={{ width: "100%", margin: "1em 0" }}
      >
        Add more products
      </Button>
    </Box>
  );
};
