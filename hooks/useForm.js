import { makeVar, useReactiveVar } from "@apollo/client";

const formVar = makeVar({
  pricing: [],
  currency: "AUD",
  error: "",
});

export const useForm = () => {
  const { pricing, currency, error } = useReactiveVar(formVar);
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

  const setError = (error) => {
    formVar({ ...formVar(), error });
  };

  return {
    pricing,
    setPricing,
    currency,
    setCurrency,
    error,
    setError,
    setPrice,
		removeProduct,
    addPriceToProduct,
    removePriceFromProduct,
    updatePriceInProduct,
  };
};
