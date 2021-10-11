import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { styled } from "@stitches/react";

const SCROLLBAR_WIDTH = 10;

const ScrollAreaRoot = styled(ScrollAreaPrimitive.Root, {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  variants: {
    content: {
      true: {
        height: "calc(100% - 40px)",
      },
    },
  },
});

const ScrollAreaViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: "100%",
  height: "100%",
});

const ScrollAreaThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  borderRadius: SCROLLBAR_WIDTH,
  background: "$primary",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    minWidth: 44,
    minHeight: 44,
  },
});

const ScrollAreaScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: "flex",
  // ensures no selection
  userSelect: "none",
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: "none",
  padding: "2px",
  background: "$light",
  transition: "background 160ms ease-out",
  "&:hover": { background: "$dark" },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_WIDTH },
  '&[data-orientation="horizontal"]': {
    flexDirection: "column",
    height: SCROLLBAR_WIDTH,
  },
});

export const ScrollArea = ({ children, content }) => {
  return (
    <ScrollAreaRoot content={content}>
      <ScrollAreaViewport>{children}</ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </ScrollAreaRoot>
  );
};
