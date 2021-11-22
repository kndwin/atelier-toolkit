import { styled } from "stitches.config";

const LogoWrapper = styled("div", {
  cursor: "pointer",
  position: "absolute",
  height: "2em",
  width: "2em",
  top: "3em",
  left: "1.25em",
  transition: "all 1s ease",
  svg: {
    rect: {
      fill: "$primary",
      transition: "fill .5s ease",
    },
    g: {
      path: {
        fill: "$light",
        transition: "fill .5s ease",
      },
    },
  },
  variants: {
    reversed: {
      true: {
        transition: "all 1s ease",
        top: "1em",
        right: "1em",
        svg: {
          rect: {
            fill: "$light",
            transition: "fill .5s ease",
          },
          g: {
            path: {
              transition: "fill .5s ease",
              fill: "$primary",
            },
          },
        },
      },
    },
  },
});

export const Logo = ({ reversed, ...props }) => {
  return (
    <LogoWrapper {...props} reversed={reversed}>
      <svg
        id="ATELIER_LOGO"
        data-name="ATELIER LOGO"
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
      >
        <rect
          id="Rectangle_11"
          data-name="Rectangle 11"
          width="35"
          height="35"
          rx="3"
        />
        <g
          id="Group_3"
          data-name="Group 3"
          transform="translate(11.585 12.413)"
        >
          <path
            id="Path_1"
            data-name="Path 1"
            d="M35.951,36.347,31,35.018,29.89,36.347l-1.56-.413L34.713,28.3l1.393.361,1.7,9.813-1.547-.426Zm-.271-1.6-.774-4.41-2.876,3.43Z"
            transform="translate(-28.33 -28.3)"
          />
        </g>
      </svg>
    </LogoWrapper>
  );
};
