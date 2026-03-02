import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { Container, Divider, Box, Typography, Grid } from "@mui/material";

// Tipagem simples para os itens
interface FeatureItemProps {
  icon: React.ReactNode;
  value: string;
  description: string;
}

const FeatureItem = ({ icon, value, description }: FeatureItemProps) => (
  // Updated to use the MUI v6 compatible 'size' prop instead of 'item'
  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        height: "100%",
        px: { xs: 1.5, sm: 2, md: 2.5 },
        py: { xs: 2, md: 3 },
      }}
    >
      <Box
        sx={{
          color: "#7ADAA6",
          mb: { xs: 1.5, md: 2 },
          "& svg": {
            fontSize: {
              xs: "clamp(3rem, 8vw, 4rem)",
              md: "clamp(3.5rem, 5vw, 5rem)",
            },
          },
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: "white",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Até
      </Typography>
      <Typography
        component="h3"
        sx={{
          fontWeight: 700,
          color: "#7ADAA6",
          fontSize: {
            xs: "clamp(2.25rem, 6vw, 3rem)",
            md: "clamp(2.5rem, 5vw, 4rem)",
          },
          lineHeight: 1.1,
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        {value}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontFamily: "'Poppins', sans-serif",
          color: "white",
          mt: { xs: 1, md: 1.5 },
        }}
      >
        {description}
      </Typography>
    </Box>
  </Grid>
);

function WhyBuy() {
  return (
    <Container
      maxWidth={false}
      sx={{
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        color: "white",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: { xs: 4, md: 6, lg: 8 },
          gap: { xs: 2, md: 3 },
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 700,
            fontFamily: "'Montserrat', sans-serif",
            textAlign: "center",
          }}
        >
          Por que investir em Sinalização Digital?
        </Typography>
        <Divider
          sx={{
            borderBottom: { xs: "4px solid #76A86F", md: "6px solid #76A86F" },
            width: { xs: "60px", md: "80px" },
          }}
        />
      </Box>

      {/* Grid de Itens */}
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
        <FeatureItem
          icon={<PointOfSaleIcon />}
          value="60%"
          description="mais retenção de conteúdo"
        />
        <FeatureItem
          icon={<EmojiEventsIcon />}
          value="46%"
          description="mais satisfação do consumidor"
        />
        <FeatureItem
          icon={<RemoveRedEyeIcon />}
          value="400%"
          description="mais views que displays estáticos"
        />
        <FeatureItem
          icon={<CurrencyExchangeIcon />}
          value="50%"
          description="redução de custos de impressão"
        />
      </Grid>
    </Container>
  );
}

export default WhyBuy;
