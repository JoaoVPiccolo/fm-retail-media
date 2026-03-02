import { Container, Box, Typography } from "@mui/material";
import { useEffect } from "react";

function LetsTalk() {
  useEffect(() => {
    // Reinicia o HubSpot form quando o componente monta
    if (window.hbspt) {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "43643994",
        formId: "4072a956-e5c1-46ff-87fa-04467ad369ff",
      });
    }
  }, []);

  declare global {
    interface Window {
      hbspt: any;
    }
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        color: "white",
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, md: 4, lg: 5 },
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 2, md: 3 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Vamos conversar
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            color: "#A2FFA8",
          }}
        >
          Projetos novos e desafiadores são com a gente!
        </Typography>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          borderBottom: { xs: "4px solid #76A86F", md: "6px solid #76A86F" },
          width: { xs: "60px", md: "80px" },
          mb: { xs: 1, md: 2 },
        }}
      ></Box>

      {/* Form and Contact Section */}
      <Box
        sx={{
          background:'white',
          width: "100%",
          maxWidth: { xs: "100%", sm: "500px", md: "600px" },
          "& .hs-form": {
            color: "white",
            "& .hs-form-field": {
              marginBottom: { xs: "1rem", md: "1.5rem" },
            },
            "& .hs-form-field label": {
              color: "white",
              fontSize: "clamp(0.875rem, 1vw, 1rem)",
              fontFamily: "'Montserrat', sans-serif",
            },
            "& .hs-input": {
              backgroundColor: "transparent",
              borderColor: "#76A86F",
              borderRadius: "6px",
              color: "white",
              fontSize: "clamp(0.875rem, 1vw, 1rem)",
              padding: "0.75rem",
              fontFamily: "'Inter', sans-serif",
              transition: "all 300ms ease-in-out",
              "&:focus": {
                borderColor: "#A2FFA8",
                boxShadow: "0 0 0 3px rgba(162, 255, 168, 0.1)",
              },
            },
            "& input::placeholder": {
              color: "rgba(255, 255, 255, 0.5)",
            },
            "& textarea": {
              backgroundColor: "transparent",
              borderColor: "#76A86F",
              borderRadius: "6px",
              color: "white",
              fontSize: "clamp(0.875rem, 1vw, 1rem)",
              padding: "0.75rem",
              fontFamily: "'Inter', sans-serif",
              transition: "all 300ms ease-in-out",
              "&:focus": {
                borderColor: "#A2FFA8",
                boxShadow: "0 0 0 3px rgba(162, 255, 168, 0.1)",
              },
            },
            "& textarea::placeholder": {
              color: "rgba(255, 255, 255, 0.5)",
            },
            "& .hs-button": {
              backgroundColor: "#76A86F",
              borderColor: "#76A86F",
              borderRadius: "6px",
              color: "white",
              fontSize: "clamp(0.875rem, 1.2vw, 1.125rem)",
              fontWeight: 700,
              fontFamily: "'Montserrat', sans-serif",
              padding: "0.75rem 2rem",
              transition: "all 300ms ease-in-out",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#A2FFA8",
                borderColor: "#A2FFA8",
                color: "#0a0a0a",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 16px rgba(118, 168, 111, 0.3)",
              },
            },
          },
        }}
      >
        <div 
          className="hs-form-frame" 
          data-region="na1" 
          data-form-id="4072a956-e5c1-46ff-87fa-04467ad369ff" 
          data-portal-id="43643994"
        ></div>
      </Box>
    </Container>
  );
}

export default LetsTalk;
