import { useParams } from "react-router-dom";
import { Box, Container, Typography, Divider } from "@mui/material";
import NavBar from "../../generic_components/NavBar";
import ReactPlayer from "react-player";
import { useState } from "react";
import { casesMock } from "../../generic_components/utils/casesMock";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Case from "../../generic_components/Case";

function CaseIndex() {
  const { slug } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSubDescription, setShowSubDescription] = useState(false);
  const caseData = casesMock.find((caseItem) => caseItem.slug === `/${slug}/`);
  const similarCases = casesMock
    .filter(
      (caseItem) =>
        caseItem.slug !== `/${slug}/` &&
        caseItem.categoria == caseData?.categoria
    )
    .slice(0, 3);

  if (!caseData) {
    return <div>Case not found</div>;
  }
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <NavBar />
      <Box
        sx={{
          width: "100%",
          marginTop: "12vh",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#2F2F2F",
        }}
      >
        <Box
          sx={{
            width: isPlaying ? "100%" : "70%",
            height: isPlaying ? "60vh" : "50vh",
            transition: "all 0.8s ease",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ReactPlayer
            src="https://www.youtube.com/watch?v=2YBtspm8j8M"
            playing={isPlaying}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            width="100%"
            height="100%"
            controls
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "3vmax",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            color: "white",
            marginTop: "2vh",
          }}
        >
          {caseData.empresa}
        </Typography>
        <Divider
          sx={{
            borderBottomWidth: 4,
            borderColor: "#76A86F",
            width: "10%",
            margin: "1rem auto",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          marginTop: "2vh",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5vmax",
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          {caseData.descricao}
        </Typography>
        <IconButton onClick={() => setShowSubDescription(!showSubDescription)}>
          <AddCircleOutlineIcon
            sx={{
              fontSize: "3vmax",
              color: "#76A86F",
            }}
          />
        </IconButton>
        <Typography
          sx={{
            fontSize: "1.2vmax",
            textAlign: "center",
            color: "white",
            maxHeight: showSubDescription ? "20vh" : "0px",
            overflow: "hidden",
            transition: "0.8s all",
          }}
        >
          {caseData.subdescricao}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "3vmax",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            color: "white",
            marginTop: "2vh",
          }}
        >
          Cases Similares
        </Typography>
        <Divider
          sx={{
            borderBottomWidth: 4,
            borderColor: "#76A86F",
            width: "10%",
            margin: "1rem auto",
          }}
        />
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {similarCases.map((caseItem) => (
          <Case
            key={caseItem.slug}
            name={caseItem.empresa}
            image={caseItem.imagem}
            route={caseItem.slug}
          />
        ))}
      </Box>
    </Container>
  );
}

export default CaseIndex;
