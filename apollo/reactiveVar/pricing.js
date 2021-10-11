import { makeVar } from "@apollo/client";

export const pricingVar = makeVar([
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
