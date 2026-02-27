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
        px: 2,
      }}
    >
      <Box sx={{ color: "#7ADAA6", mb: 1, "& svg": { fontSize: { xs: "4rem", md: "5rem" } } }}>
        {icon}
      </Box>
      <Typography sx={{ fontWeight: "bold", fontSize: "1rem", color: "white" }}>
        Até
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "#7ADAA6",
          fontSize: { xs: "3rem", md: "4rem" },
          lineHeight: 1.2,
        }}
      >
        {value}
      </Typography>
      <Typography
        sx={{
          fontSize: "1.1rem",
          fontFamily: "Poppins, sans-serif",
          color: "white",
          mt: 1,
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
        py: { xs: 4, md: 8 },
        color: "white",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 6,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            fontFamily: "Poppins, sans-serif",
            textAlign: "center",
            mb: 2,
          }}
        >
          Por que investir em Sinalização Digital?
        </Typography>
        <Divider sx={{ borderBottom: "6px solid #76A86F", width: "80px" }} />
      </Box>

      {/* Grid de Itens */}
      <Grid container spacing={4} justifyContent="center">
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
