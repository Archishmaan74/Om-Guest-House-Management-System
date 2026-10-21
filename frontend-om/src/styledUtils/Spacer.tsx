import Box from "@mui/material/Box";

interface SpacerProps {
  height?: number;
  heightMd?: number;
}

const DEFAULT_SPACER_HEIGHT = 0.5;

const Spacer = ({ height = 0, heightMd = 0 }: SpacerProps) => {
  return (
    <Box
      sx={{
        height: {
          xs: `${DEFAULT_SPACER_HEIGHT + height * 0.5}rem`,
          md: `${DEFAULT_SPACER_HEIGHT + heightMd * 0.5}rem`,
        },
      }}
    />
  );
};

export default Spacer;
