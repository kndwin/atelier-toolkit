import { makeVar, useReactiveVar } from "@apollo/client";

const formVar = makeVar({
  pricing: []
});


export const useForm = () => {

	const { pricing } = useReactiveVar(formVar);
	const setPricing = (pricing) => {
    formVar({ ...formVar(), pricing });
  };
	const setPrice = ({ id, value, type}) => {
		const newPricing = [...pricing];
		const index = pricing.findIndex(({ id: priceId }) => priceId === id);
		newPricing[index][type] = value
		setPricing(newPricing);
	}

  return {
		pricing,
		setPrice,
		setPricing,
  };
};
