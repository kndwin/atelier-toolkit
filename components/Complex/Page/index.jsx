import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { styled } from "@stitches/react";

const AspectRatio = AspectRatioPrimitive;

const PageWrapper = styled("div", {
  background: "$light",
  margin: "3em auto",
  height: "100%",
  width: "100%",
  zoom: "100%",
  "@media print": {
    display: "flex",
    height: "125vh",
    width: "125vw",
    zoom: "80%",
    alignItems: "center",
    justifyContent: "center",
    margin: "0",
    padding: "0",
    border: "0",
    overflow: "hidden",
    "html,body": {
      height: "100%",
      overflow: "hidden",
    },
  },
  variants: {
    withBorder: {
      true: {
        border: "1px solid $dark",
        maxWidth: "60em",
        "@media print": {
					border: "0",
          height: "121.5vh",
          zoom: "80%",
        },
      },
    },
    orientation: {
      landscape: {
        "@media print": {
          "@page": {
            size: "landscape",
          },
        },
      },
      portrait: {
        "@media print": {
          "@page": {
            size: "portrait",
          },
        },
      },
    },
  },
});

export const Page = ({
  children,
  orientation = "landscape",
  aspectRatio = 16 / 9,
  withBorder = false,
  restrictToPage = false,
}) => {
  const getRatioAspect = (aspectRatio) => {
    if (aspectRatio === "A4") {
      if (orientation === "landscape") {
        return 14142 / 10000;
      } else if (orientation === "portrait") {
        return 10000 / 14142;
      } else {
        return 1;
      }
    } else {
      return aspectRatio;
    }
  };

  return (
    <PageWrapper
      withBorder={withBorder}
      restrictToPage={restrictToPage}
      orientation={orientation}
    >
      <AspectRatio.Root ratio={getRatioAspect(aspectRatio)}>
        {children}
      </AspectRatio.Root>
    </PageWrapper>
  );
};
