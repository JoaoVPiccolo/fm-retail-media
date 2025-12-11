import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { Container, Divider, Box, Typography } from "@mui/material";

function WhyBuy() {
  return (
    <Container
      maxWidth={false}
      sx={{
        color: "white",
        padding: "2rem",
        textAlign: "center",
        maxWidth: "80%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          marginBottom: "3rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: "2rem",
            fontSize: "3vmax",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Por que investir em Sinalização Digital?
        </Typography>

        <Divider sx={{ borderBottom: "6px solid #76A86F", width: "10%" }} />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
        }}
      >
        {/* Item 1 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PointOfSaleIcon sx={{ fontSize: "8rem", color: "#7ADAA6" }} />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.6vmax",
            }}
          >
            Até
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#7ADAA6",
              fontSize: "5rem",
            }}
          >
            60%
          </Typography>
          <Typography
            sx={{
              fontSize: "1.6vmax",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            mais retenção de conteúdo
          </Typography>
        </Box>

        {/* Item 2 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <EmojiEventsIcon sx={{ fontSize: "8rem", color: "#7ADAA6" }} />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.6vmax",
            }}
          >
            Até
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#7ADAA6",
              fontSize: "5rem",
            }}
          >
            46%
          </Typography>
          <Typography
            sx={{
              fontSize: "1.6vmax",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            mais satisfação do consumidor
          </Typography>
        </Box>

        {/* Item 3 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <RemoveRedEyeIcon sx={{ fontSize: "8rem", color: "#7ADAA6" }} />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.6vmax",
            }}
          >
            Até
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#7ADAA6",
              fontSize: "5rem",
            }}
          >
            400%
          </Typography>
          <Typography
            sx={{
              fontSize: "1.6vmax",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            mais views que displays estáticos
          </Typography>
        </Box>

        {/* Item 4 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CurrencyExchangeIcon sx={{ fontSize: "8rem", color: "#7ADAA6" }} />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.6vmax",
            }}
          >
            Até
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#7ADAA6",
              fontSize: "5rem",
            }}
          >
            50%
          </Typography>
          <Typography
            sx={{
              fontSize: "1.6vmax",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            redução de custos de impressão
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default WhyBuy;
