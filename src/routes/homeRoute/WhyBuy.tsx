import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloudSyncOutlinedIcon from "@mui/icons-material/CloudSyncOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import { Container, Divider, Box, Typography, Grid } from "@mui/material";

// Tipagem para os itens
interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => (
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
          color: "#70E0A3",
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
        component="h3"
        sx={{
          fontWeight: 700,
          color: "#70E0A3",
          fontSize: {
            xs: "clamp(1.25rem, 4vw, 1.5rem)",
            md: "clamp(1.5rem, 2.5vw, 1.75rem)",
          },
          lineHeight: 1.2,
          fontFamily: "'Montserrat', sans-serif",
          mb: { xs: 1, md: 1.5 },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontFamily: "'Poppins', sans-serif",
          color: "rgba(255, 255, 255, 0.85)",
          lineHeight: 1.6,
          maxWidth: "280px",
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
            borderBottom: { xs: "4px solid #70E0A3", md: "6px solid #70E0A3" },
            width: { xs: "60px", md: "80px" },
          }}
        />
      </Box>

      {/* Grid de 4 colunas */}
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
        <FeatureItem
          icon={<AutoAwesomeOutlinedIcon />}
          title="Experiência Moderna"
          description="Crie ambientes atrativos com vídeos e animações que reforçam a identidade da sua marca."
        />
        <FeatureItem
          icon={<ShoppingCartOutlinedIcon />}
          title="Impulso nas Vendas"
          description="Destaque produtos estrategicamente e aumente as compras por impulso no ponto de venda."
        />
        <FeatureItem
          icon={<CloudSyncOutlinedIcon />}
          title="Gestão Centralizada"
          description="Controle todas as telas em tempo real e agende campanhas sazonais com apenas alguns cliques."
        />
        <FeatureItem
          icon={<CurrencyExchangeOutlinedIcon />}
          title="Eficiência e Economia"
          description="Elimine custos com impressões e logística, atualizando promoções instantaneamente em todas as lojas."
        />
      </Grid>
    </Container>
  );
}

export default WhyBuy;
