import { Box, Divider, Typography } from "@mui/material";

type SectionDividerProps = {
  title: string;
  dividerWidth?: string; // Optional prop to customize divider width
};

function SectionDivider({ title, dividerWidth = "25%" }: SectionDividerProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Divider
        sx={{
          borderBottom: "2px solid #76A86F",
          width: dividerWidth,
        }}
      />
      <Typography
        sx={{
          color: "white",
          fontSize: "2.5vmax",
          fontWeight: "600",
          textAlign: "center",
          fontFamily: "popper,sans-serif",
        }}
      >
        {title}
      </Typography>
      <Divider
        sx={{
          borderBottom: "2px solid #76A86F",
          width: dividerWidth,
        }}
      />
    </Box>
  );
}

export default SectionDivider;
