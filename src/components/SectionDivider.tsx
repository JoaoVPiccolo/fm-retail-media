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
        gap: { xs: 2, sm: 3, md: 4, lg: 5 },
        width: "100%",
        justifyContent: "center",
        px: { xs: 1, md: 2 },
      }}
    >
      <Divider
        sx={{
          borderBottom: { xs: "2px solid #76A86F", md: "3px solid #76A86F" },
          width: dividerWidth,
          flex: 1,
        }}
      />
      <Typography
        variant="h3"
        sx={{
          color: "white",
          fontWeight: 700,
          textAlign: "center",
          fontFamily: "'Montserrat', sans-serif",
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </Typography>
      <Divider
        sx={{
          borderBottom: { xs: "2px solid #76A86F", md: "3px solid #76A86F" },
          width: dividerWidth,
          flex: 1,
        }}
      />
    </Box>
  );
}

export default SectionDivider;
