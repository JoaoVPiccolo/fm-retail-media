import { Box, Container, Typography } from "@mui/material";

interface CaseProps {
  name: string;
  image: string;
  title: string;
  impactPhrase: string;
  description_1: string;
  description_2: string;
}

function SwiperComponent({
  name,
  image,
  impactPhrase,
  title,
  description_1,
  description_2,
}: CaseProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        maxWidth: { xs: "95%", sm: "90%", md: "85%", lg: "80%" },
        gap: { xs: 3, sm: 4, md: 6, lg: 8 },
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: "auto", md: "500px" },
        py: { xs: 3, sm: 4, md: 8 },
        mb: { xs: 2, md: 5 },
        mx: "auto",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: { xs: "250px", sm: "350px", md: "500px" },
          width: "100%",
          minWidth: 0,
        }}
      >
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            height: "100%",
            objectFit: "contain",
            borderRadius: "8px",
            maxWidth: { xs: "90%", md: "90%", lg: "100%" },
            width: "auto",
          }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          borderLeft: {
            md: `4px solid #51724C`,
            xs: "none",
          },
          borderBottom: {
            md: "none",
            xs: `4px solid #51724C`,
          },
          pl: { md: 4, xs: 0 },
          pb: { xs: 3, md: 0 },
          gap: { xs: 2, md: 3 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontFamily: "'Montserrat', sans-serif",
            textAlign: { md: "left", xs: "center" },
            color: "white",
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            textAlign: { md: "left", xs: "center" },
            color: "#80ad79",
            fontWeight: 500,
          }}
        >
          {impactPhrase}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Inter', sans-serif",
            textAlign: { md: "left", xs: "justify" },
            color: "white",
            lineHeight: 1.6,
          }}
        >
          {description_1}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Inter', sans-serif",
            textAlign: { md: "left", xs: "justify" },
            color: "white",
            lineHeight: 1.6,
          }}
        >
          {description_2}
        </Typography>
      </Box>
    </Container>
  );
}

export default SwiperComponent;
