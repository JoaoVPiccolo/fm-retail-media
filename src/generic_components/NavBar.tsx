import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import { NavLink } from "react-router-dom";
// import styled from "@emotion/styled";
import logo from "./assets/icons/Logo_fundo escuro.png";
import logoSimbulo from "./assets/icons/Simbolo_fundo escuro.png";

// const ButtonNav = styled(NavLink)(() => ({
//    color: "white",
//    fontFamily: "poppins, sans-serif",
//    textDecoration: "none",
//    fontSize: "1rem",
//    transition: "all 0.3s ease-in-out",
//    padding: "8px 16px",
//    ":hover": {
//      color: "#98FF8E",
//    },
//    "&.active": {
//      color: "#98FF8E",
//      borderBottom: "2px solid #98FF8E",
//    },
// }));

function NavBar() {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          flexDirection: "row",
          width: "100%",
          minHeight: { xs: "56px", sm: "62px", md: "70px" },
          alignItems: "center",
          justifyContent: "space-between",
          top: 0,
          left: 0,
          zIndex: 1300,
          backgroundColor: "#111111",
          padding: { xs: "0 16px", sm: "0 24px", md: "0 32px" },
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "clamp(120px, 20%, 220px)",
            objectFit: "contain",
            height: "auto",
          }}
        />
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
            color: "white",
            fontSize: "clamp(1rem, 1.2vw, 1.25rem)",
            fontWeight: 600,
            width: "60%",
            gap: { xs: 2, md: 3 },
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 1, sm: 2 },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={logoSimbulo}
            alt="Simbolo"
            style={{
              width: "clamp(40px, 8%, 80px)",
              objectFit: "contain",
              height: "auto",
            }}
          />
          <Typography
            sx={{
              color: "white",
              fontSize: "clamp(0.875rem, 1.2vw, 1.125rem)",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
            }}
          >
            (11) 5535-0050
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default NavBar;
