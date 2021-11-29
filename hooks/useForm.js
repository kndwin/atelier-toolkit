import { makeVar, useReactiveVar } from "@apollo/client";
import { v4 } from "uuid";

const formVar = makeVar({
  pricing: [],
  currency: "AUD",
  error: "",
  address: "",
  SOWPriceAndRange: [],
  SOWDevelopmentFee: 1500,
  SOWOrderQuantity: 1000,
  doubleChecked: false,
});

export const useForm = () => {
  const {
    pricing,
    currency,
    error,
    address,
    SOWPriceAndRange,
    doubleChecked,
    SOWDevelopmentFee,
    SOWOrderQuantity,
  } = useReactiveVar(formVar);
  const setAddress = (address) => {
    formVar({ ...formVar(), address });
  };
  const setCurrency = (currency) => {
    formVar({ ...formVar(), currency });
  };
  const setPricing = (pricing) => {
    formVar({ ...formVar(), pricing });
  };
  const setPrice = ({ id, value, type }) => {
    const newPricing = [...pricing];
    const index = pricing.findIndex(({ id: priceId }) => priceId === id);
    newPricing[index][type] = value;
    setPricing(newPricing);
  };

  const removeProduct = ({ id }) => {
    setPricing(pricing.filter(({ id: productId }) => id != productId));
  };

  const addPriceToProduct = ({ id, price }) => {
    const newPricing = [...pricing];
    const index = pricing.findIndex(({ id: priceId }) => priceId === id);
    newPricing[index].prices.push(price);
    setPricing(newPricing);
  };

  const removePriceFromProduct = ({ id, priceId }) => {
    const newPricing = [...pricing];
    const index = pricing.findIndex(({ id: productId }) => productId === id);
    newPricing[index].prices = newPricing[index].prices.filter(
      ({ id }) => id !== priceId
    );
    setPricing(newPricing);
  };

  const updatePriceInProduct = ({ id, priceId, type, payload }) => {
    const newPricing = [...pricing];
    const index = pricing.findIndex(({ id: productId }) => productId === id);
    const priceIndex = newPricing[index].prices.findIndex(
      ({ id }) => id === priceId
    );

    if (type === "rrp") {
      newPricing[index].prices = pricing[index].prices?.map((price) => ({
        ...price,
        rrp: payload,
      }));
    } else {
      newPricing[index].prices[priceIndex][type] = payload;
    }
    setPricing(newPricing);
  };

  const setNumberOfPrices = (arrayLength) => {
    const defaultPrice = {
      id: v4(),
      name: "",
      description: "",
      volume: "",
      prices: [
        {
          id: v4(),
          cost: "",
          rrp: "",
          moq: "",
        },
      ],
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

  const setSOWPriceAndRange = (SOWPriceAndRange) => {
    formVar({ ...formVar(), SOWPriceAndRange });
  };

  const setSOWDevelopmentFee = (SOWDevelopmentFee) => {
    formVar({ ...formVar(), SOWDevelopmentFee });
  };

  const setSOWOrderQuantity = (SOWOrderQuantity) => {
    formVar({ ...formVar(), SOWOrderQuantity });
  };

  const setError = (error) => {
    formVar({ ...formVar(), error });
  };

  const setDoubleChecked = (doubleChecked) => {
    formVar({ ...formVar(), doubleChecked });
  };

  return {
    pricing,
    setPricing,
    currency,
    setCurrency,
    error,
    setError,
    address,
    setAddress,
    setPrice,
    setNumberOfPrices,
    removeProduct,
    addPriceToProduct,
    removePriceFromProduct,
    updatePriceInProduct,
    doubleChecked,
    setDoubleChecked,
    SOWPriceAndRange,
    setSOWPriceAndRange,
    SOWDevelopmentFee,
    setSOWDevelopmentFee,
		SOWOrderQuantity,
		setSOWOrderQuantity
  };
};
