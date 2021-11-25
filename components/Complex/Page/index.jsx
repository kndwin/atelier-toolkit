import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { styled } from "@stitches/react";

const AspectRatio = AspectRatioPrimitive;

const PageWrapper = styled("div", {
  background: "$light",
  margin: "3em auto",
  height: "100%",
  width: "100%",
  zoom: "100%",
  variants: {
    withBorder: {
      true: {
        border: "1px solid $dark",
      },
    },
  },
  "@media print": {
    height: "125vh",
    width: "125vw",
    zoom: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@page": {
      size: "landscape",
    },
    margin: "0",
  },
});

export const Page = ({
  children,
  orientation = "landscape",
  aspectRatio = 16 / 9,
  withBorder = false,
}) => {
  const getRatioAspect = (aspectRatio) => {
    if (aspectRatio === "A4") {
      if (orientation === "landscape") {
        return 10000 / 14142;
      } else {
        // orientation === "portrait"
        return 14142 / 10000;
      }
    } else {
      return aspectRatio;
    }
  };

  return (
    <PageWrapper withBorder={withBorder}>
      <AspectRatio.Root ratio={getRatioAspect(aspectRatio)}>
        {children}
      </AspectRatio.Root>
    </PageWrapper>
  );
};
