import { Box, Container, Typography,} from "@mui/material";

interface CaseProps {
  name: string;
  image: string;
  title: string;
  impactPhrase: string;
  description_1: string;
  description_2: string;
}

function SwiperComponent({name, image, impactPhrase, title, description_1, description_2}: CaseProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        maxWidth:"80%",
        gap: { xs: 4, md: 8 },
        alignItems: "center",
        justifyContent: "center",
        minHeight: { md: "500px" },
        paddingBottom: { xs: "3rem", md: "0px" },
        paddingTop: { xs: "2rem", md: "60px" },
        mb: { xs: 0, md: 5 },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: { xs: "250px", md: "500px" },
          width: "100%",
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
            maxWidth: { xs: "90%", md: "80%", lg: "100%" },
            width: "auto", // Garante que a proporção se mantenha
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
          paddingLeft: { md: "3rem", xs: "0" },
          paddingBottom: { xs: "1.5rem", md: "0" },
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontFamily: "montserrat",
            textAlign: { md: "left", xs: "center" },
            fontSize: { xs: "1.8rem", md: "2.4rem" },
            color: "white",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: "montserrat",
            textAlign: { md: "left", xs: "center" },
            fontSize: { xs: "1rem", md: "1.4rem" },
            color: "#80ad79",
            fontWeight: "500",
          }}
        >
          {impactPhrase}
        </Typography>

        <Typography
          sx={{
            fontFamily: "inter",
            textAlign: { md: "left", xs: "justify" },
            fontSize: { xs: "1rem", md: "1.4rem" },
            color: "white",
            lineHeight: 1.6,
          }}
        >
          {description_1}
        </Typography>

        <Typography
          sx={{
            fontFamily: "inter",
            textAlign: { md: "left", xs: "justify" },
            fontSize: { xs: "1rem", md: "1.4rem" },
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
