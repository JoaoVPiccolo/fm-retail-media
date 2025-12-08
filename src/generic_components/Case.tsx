import { Divider } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface CaseProps {
  name: string;
  image: string;
  route: string;
}

export default function Case({ name, image, route }: CaseProps) {
  return (
    <Link to={route} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          width: "100%",
          height: "35vh",
          position: "relative",
          overflow: "hidden", // impede vazamento da animação
          cursor: "pointer",
          // Quando o card é hover → anima o box cinza
          "&:hover .hover-box": {
            transform: "translateY(0%)",
          },
        }}
      >
        {/* Box verde (fica sempre estático no topo) */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        ></Box>

        {/* Box cinza (começa escondido embaixo e sobe no hover) */}
        <Box
          className="hover-box"
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(24, 24, 24, 0.7)",
            position: "absolute",
            left: 0,
            top: 0,
            transform: "translateY(100%)", // escondido abaixo do card
            transition: "transform .4s ease",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "1.6vmax",
              }}
            >
              {name}
            </Typography>
            <Divider
              sx={{
                borderBottom: ".25rem solid #77c96cff",
                width: "2rem",
                margin: "0 auto",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
