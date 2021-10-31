import { styled } from "@stitches/react";
import { Box, Text, Img, Input } from "components";
import { useState, useEffect } from "react";
import { Page } from "components/Page";
import { useReactiveVar } from "@apollo/client";
import { pricingVar } from "apollo/reactiveVar/pricing";
import { layoutVar } from "apollo/reactiveVar/layout";

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
	fontFamily: "News Cycle",
  width: "5em",
  padding: "0",
	"&:disabled": {
		background: "transparent"
	}
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
  const payload = useReactiveVar(pricingVar);
	const { disableEdit } = useReactiveVar(layoutVar)

  const updatePrice =
    ({ index, type, priceIndex }) =>
    (e) => {
      let newPayload = [...payload];
      newPayload[index]["pricing"][priceIndex][type] = e?.target?.value;
      pricingVar(newPayload);
    };

  const updateTitle = ({ index, type, title }) => {
    let newPayload = [...payload];
    newPayload[index][type] = title;
    pricingVar(newPayload);
  };

  const updateText =
    ({ index, type }) =>
    (e) => {
      let newPayload = [...payload];
      if (type === "title") {
        newPayload[index][type] = e?.currentTarget?.textContent;
      } else {
        newPayload[index][type] = e?.target?.value;
      }
      pricingVar(newPayload);
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
    pricingVar([...payload, newProduct]);
  };

  const deleteRow = (index) => {
    payload.splice(index, 1);
    pricingVar([...payload]);
  };

  const updateImage = ({ index, image }) => {
    let newPayload = [...payload];
    newPayload[index].image = image;
    pricingVar(newPayload);
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
            updateImage={updateImage}
            index={index}
            updatePrice={updatePrice}
            updateTitle={updateTitle}
            updateText={updateText}
            deleteRow={deleteRow}
            key={`${load?.title} ${index}`}
            noBorder={
              (index + 1) % (payload.length < 5 ? payload.length : 5) === 0
            }
            payload={load}
          />
        ))}
        {payload?.length <= 5 && !disableEdit && <AddRow onClick={() => addProduct()} />}
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
              updateImage={updateImage}
              index={index + 5}
              updatePrice={updatePrice}
              updateTitle={updateTitle}
              updateText={updateText}
              deleteRow={deleteRow}
              key={`${load?.title} ${index}`}
              noBorder={(index + 1) % (payload?.length - 5) === 0}
              payload={load}
            />
          ))}
          {payload?.length < 11 && !disableEdit && <AddRow onClick={() => addProduct()} />}
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

const DropdownImages = ({ index, updateImage, defaultImage }) => {
  const images = [
    "/svg/soap-bottle.svg",
    "/svg/soap-bottle-2.svg",
    "/svg/soap-box.svg",
    "/svg/dishwashing-bottle.svg",
    "/svg/laundry-box.svg",
    "/svg/spray-bottle.svg",
    "/svg/toilet-bottle.svg",
  ];

  const [image, setImage] = useState();
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    setImage(defaultImage);
  }, []);

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
                updateImage({ index, image });
              }}
              src={image}
            />
          ))}
        </ImageOptions>
      )}
    </Box>
  );
};

// Using div because textarea doesn't have value = can't
// print values
const Textarea = styled("div", {
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

const TitleInput = ({ defaultValue, updateText, index, disableEdit }) => {
  return (
    <>
      <Textarea
        onBlur={updateText({ index, type: "title" })}
        defaultValue={defaultValue}
        contentEditable={!disableEdit}
      >
        {defaultValue}
      </Textarea>
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
  updateImage,
  updateTitle,
  deleteRow,
  updateText,
  index,
}) => {
  const { disableEdit } = useReactiveVar(layoutVar);
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
        <DropdownImages
          defaultImage={payload?.image}
          index={index}
          updateImage={updateImage}
        />
        <Box>
          <TitleInput
            disableEdit={disableEdit}
            index={index}
            defaultValue={payload?.title}
            updateText={updateText}
          />
          <Input
            disabled={disableEdit}
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
								disabled={disableEdit}
                onChange={updatePrice({ index, type: "qty", priceIndex })}
                defaultValue={parseFloat(qty).toLocaleString()}
              />
              <InputCell
								disabled={disableEdit}
                onChange={updatePrice({ index, type: "cost", priceIndex })}
                defaultValue={parseFloat(cost).toFixed(2)}
              />
              <InputCell
								disabled={disableEdit}
                onChange={updatePrice({ index, type: "rrp", priceIndex })}
                defaultValue={parseFloat(rrp).toFixed(2)}
              />
              <Cell>{parseFloat((cost / rrp) * 100).toFixed(2)}%</Cell>
              <Cell>{parseFloat((rrp / cost) * 100).toFixed(2)}%</Cell>
              <Cell>
                $
                {parseFloat(
                  parseFloat(rrp) * parseInt(`${qty}`.replace(/,/g, ""))
                ).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </Cell>
              <Cell>{parseInt((cost * qty) / rrp)}</Cell>
            </PricingRow>
          ))}
        </Box>
      </Box>
			{!disableEdit &&
				<DeleteCol onClick={() => deleteRow(index)} />
			}
    </Row>
  );
};
