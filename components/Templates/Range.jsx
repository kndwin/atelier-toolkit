import { styled } from "@stitches/react";
import { Box, Text, Img, Input } from "components";
import { useState, useEffect } from "react";
import { Page } from "components/Page";

const Header = styled(Text, {
  margin: "0",
  textTransform: "uppercase",
  fontSize: "12px",
  fontWeight: "bold",
});
const Row = styled(Box, {
  display: "flex",
  width: "100%",
  height: "6.5em",
  alignItems: "center",
});
const PricingRow = styled(Box, {
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  width: "100%",
  height: "fit-content",
});
const Cell = styled(Box, {
  fontFamily: "News Cycle",
  height: "fit-content",
  fontSize: "12px",
});

const InputCell = styled(Input, {
  width: "5em",
  padding: "0",
});

const AddRow = styled(Box, {
  background: "transparent",
  width: "100%",
  height: "3em",
  border: "1px solid transparent",
  borderRadius: "10px",
  margin: ".5em 0",
  cursor: "pointer",
  "&:hover": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    background: "black",
    "&::after": {
      textTransform: "uppercase",
      fontFamily: "Arktiv Grotesk",
      content: "Add a product",
      color: "white",
    },
  },
});

const RangeTemplate = (props) => {
  const [payload, setPayload] = useState([
    {
      title: "Multi-Purpose Spray 1",
      caption: "500ML",
      image: "/svg/spray-bottle.svg",
      pricing: [
        { qty: 1000, cost: 5.2, rrp: 14 },
        { qty: 1000, cost: 5.2, rrp: 14 },
      ],
    },
    {
      title: "Multi-Purpose Spray 2",
      caption: "500ML",
      image: "/svg/soap-bottle.svg",
      pricing: [
        { qty: 1000, cost: 5.2, rrp: 14 },
        { qty: 1000, cost: 5.2, rrp: 14 },
      ],
    },
  ]);

  const updatePrice =
    ({ index, type, priceIndex }) =>
    (e) => {
      let newPayload = [...payload];
      newPayload[index]["pricing"][priceIndex][type] = e?.target?.value;
      console.log({ index, payload, newPayload });
      setPayload(newPayload);
    };

  const updateText =
    ({ index, type }) =>
    (e) => {
      let newPayload = [...payload];
      newPayload[index][type] = e?.target?.value;
      setPayload(newPayload);
    };

  const addProduct = () => {
    let newProduct = {
      title: "Multi-Purpose Spray 2",
      caption: "500ML",
      image: "/svg/soap-bottle.svg",
      pricing: [
        { qty: 1000, cost: 5.2, rrp: 14 },
        { qty: 1000, cost: 5.2, rrp: 14 },
      ],
    };
    setPayload([...payload, newProduct]);
  };

  const deleteRow = (index) => {
    let newPayload = payload.filter((load, i) => i !== index);
    console.log({ index, payload, newPayload });
    setPayload([...newPayload]);
  };

  return (
    <>
      <Page
        css={{
          padding: "3em",
        }}
      >
        <Text
          css={{
            fontFamily: "Arktiv Grotesk",
            fontSize: "24px",
            lineHeight: "1em",
            letterSpacing: "1px",
          }}
        >
          The Range:
        </Text>
        <Box
          css={{
            display: "grid",
            width: "100%",
            gridTemplateColumns: "16.7em 1fr",
          }}
        >
          <Header>Product</Header>
          <Header>Pricing</Header>
        </Box>
        {payload?.slice(0, 5)?.map((load, index) => (
          <ProductRow
            index={index}
            updatePrice={updatePrice}
            updateText={updateText}
            deleteRow={deleteRow}
            key={`${load?.title} ${index}`}
            noBorder={
              (index + 1) % (payload.length < 5 ? payload.length : 5) === 0
            }
            payload={load}
          />
        ))}
        {payload?.length <= 5 && <AddRow onClick={() => addProduct()} />}
      </Page>
      {payload?.length > 5 && (
        <Page
          css={{
            padding: "1em",
          }}
        >
          <Text
            css={{
              fontFamily: "Arktiv Grotesk",
              fontSize: "24px",
              lineHeight: "1em",
              letterSpacing: "1px",
            }}
          >
            The Range:
          </Text>
          <Box
            css={{
              display: "grid",
              width: "100%",
              gridTemplateColumns: "16.7em 1fr",
            }}
          >
            <Header>Product</Header>
            <Header>Pricing</Header>
          </Box>
          {payload?.slice(5, 11)?.map((load, index) => (
            <ProductRow
              index={index + 5}
              updatePrice={updatePrice}
              updateText={updateText}
              deleteRow={deleteRow}
              key={`${load?.title} ${index}`}
              noBorder={(index + 1) % (payload?.length - 5) === 0}
              payload={load}
            />
          ))}
          {payload?.length < 11 && <AddRow onClick={() => addProduct()} />}
        </Page>
      )}
    </>
  );
};

export default RangeTemplate;

const ImageOptions = styled(Box, {
  position: "absolute",
  background: "white",
  flexWrap: "wrap",
  display: "flex",
  objectFit: "scale-down",
  border: "1px solid black",
  width: "29em",
  height: "29em",
  padding: "1em",
  borderRadius: "10px",
  zIndex: "5",
});

const ImageSelected = styled(Img, {
  width: "5em",
  height: "5em",
  objectFit: "scale-down",
  marginRight: "1em",
  cursor: "pointer",
  "&:hover": {
    transition: ".5s ease",
    transform: "scale(1.2)",
  },
});

const DropdownImages = () => {
  const images = [
    "/svg/soap-bottle.svg",
    "/svg/soap-bottle-2.svg",
    "/svg/soap-box.svg",
    "/svg/dishwashing-bottle.svg",
    "/svg/laundry-box.svg",
    "/svg/spray-bottle.svg",
    "/svg/toilet-bottle.svg",
  ];

  const [image, setImage] = useState(images[0]);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <Box css={{ position: "relative" }}>
      <ImageSelected onClick={() => setShowOptions(!showOptions)} src={image} />
      {showOptions && (
        <ImageOptions>
          {images.map((image) => (
            <Img
              css={{
                margin: "1em",
                zIndex: "10",
                cursor: "pointer",
                objectFit: "scale-down",
                "&:hover": {
                  transition: ".5s ease",
                  transform: "scale(1.2)",
                },
              }}
              onClick={() => {
                setImage(image);
                setShowOptions(false);
              }}
              src={image}
            />
          ))}
        </ImageOptions>
      )}
    </Box>
  );
};

const Textarea = styled("textarea", {
  width: "100%",
  fontFamily: "Arktiv Grotesk",
  letterSpacing: "0.9px",
  padding: "0",
  marginBottom: "0",
  fontSize: "16px",
  resize: "none",
  border: "none",
  height: "fit-content",
});

const PrintTextarea = styled("div", {
  display: "none",
  "@media print": {
    display: "block",
  },
});
const TitleInput = ({ defaultValue, updateText, index }) => {
  const [title, setTitle] = useState();
  useEffect(() => {
    setTitle(defaultValue);
  }, []);

  return (
    <>
      <Textarea
        onBlur={updateText({ index, type: "title" })}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="textarea"
        name="textarea"
        cols="40"
        rows="2"
      />
      <PrintTextarea>
        <Text>{title}</Text>
      </PrintTextarea>
    </>
  );
};

const DeleteCol = styled("div", {
  background: "transparent",
  height: "100%",
  width: "1em",
  border: "1px solid transparent",
  borderRadius: "5px",
  margin: ".5em 0",
  cursor: "pointer",
  "&:hover": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
    background: "red",
    "&::after": {
      fontSize: "10px",
      textTransform: "uppercase",
      fontFamily: "Arktiv Grotesk",
      content: "Delete",
      transform: "rotate(90deg)",
      color: "white",
    },
  },
});

const ProductRow = ({
  payload,
  noBorder,
  updatePrice,
  deleteRow,
  updateText,
  index,
}) => {
  return (
    <Row key={index}>
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          borderBottom: `${noBorder ? "0" : "1"}px solid black`,
          width: "20em",
          marginRight: "3em",
          height: "100%",
        }}
      >
        <DropdownImages />
        <Box>
          <TitleInput
            index={index}
            defaultValue={payload?.title}
            type="text"
            cols="40"
            rows="2"
            updateText={updateText}
          />
          <Input
            defaultValue={payload?.caption}
            css={{ fontSize: "12px", padding: "0" }}
            onBlur={updateText({ index, type: "caption" })}
          />
        </Box>
      </Box>
      <Box
        css={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          borderBottom: `${noBorder ? "0" : "1"}px solid black`,
        }}
      >
        <Box
          css={{
            height: "fit-content",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <PricingRow>
            <Header>QTY</Header>
            <Header>COST</Header>
            <Header>RRP</Header>
            <Header>MARGIN</Header>
            <Header>MARK UP</Header>
            <Header>TOTAL REV</Header>
            <Header>UNITS SOLD TO BREAK EVEN</Header>
          </PricingRow>
          {payload.pricing.map(({ qty, cost, rrp }, priceIndex) => (
            <PricingRow key={index}>
              <InputCell
                onChange={updatePrice({ index, type: "qty", priceIndex })}
                defaultValue={parseFloat(qty).toLocaleString()}
              />
              <InputCell
                onChange={updatePrice({ index, type: "cost", priceIndex })}
                defaultValue={parseFloat(cost).toFixed(2)}
              />
              <InputCell
                onChange={updatePrice({ index, type: "rrp", priceIndex })}
                defaultValue={parseFloat(rrp).toFixed(2)}
              />
              <Cell>{parseFloat((cost / rrp) * 100).toFixed(2)}%</Cell>
              <Cell>{parseFloat((rrp / cost) * 100).toFixed(2)}%</Cell>
              <Cell>
                $
                {parseFloat(
                  parseFloat(rrp) * parseInt(`${qty}`.replace(/,/g, "")) * 100
                ).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </Cell>
              <Cell>{parseInt(8000 / (rrp - cost))}</Cell>
            </PricingRow>
          ))}
        </Box>
      </Box>
      <DeleteCol onClick={() => deleteRow(index)} />
    </Row>
  );
};
