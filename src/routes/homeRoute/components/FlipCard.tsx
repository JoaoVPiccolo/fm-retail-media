import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface FlipCardProps {
  title: string; // Categoria
  cases: { nome: string; slug: string }[];
  image: string;
}

export default function FlipCard({ title, cases, image }: FlipCardProps) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        flex: 1,
        height: 300,
        cursor: "pointer",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box
        component={motion.div}
        animate={{ rotateY: hover ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT */}
        <Card
          elevation={6}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            display: "flex",
            justifyContent: "start",
            alignItems: "end",
            bgcolor: "",
            color: "white",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0, 0, 0, 0.62)), url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              textAlign="start"
              fontWeight={700}
              fontSize="2rem"
              gutterBottom
              color="#9cca95ff"
            >
              {title}
            </Typography>
          </CardContent>
        </Card>

        {/* BACK */}
        <Card
          elevation={6}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            bgcolor: "#f3f3f3",
            color: "#222",
            padding: "1.5rem 1rem 1rem 1rem",
            boxSizing: "border-box",
          }}
        >
          <List
            sx={{
              width: "100%",
              mb: 2,
              p: 0,
              flex: 1,
              overflow: "auto",
            }}
          >
            {cases.map((c, _) => (
              <ListItem
                key={c.slug}
                disablePadding
                sx={{
                  justifyContent: "center",
                  p: 0,
                  mb: 1,
                }}
              >
                <Button
                  onClick={() => navigate(c.slug)}
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#222",
                    background: "none",
                    textTransform: "none",
                    width: "100%",
                    justifyContent: "center",
                    borderRadius: 0,
                    ":hover": {
                      background: "#f3f3f3",
                      color: "#76A86F",
                    },
                  }}
                >
                  {c.nome}
                </Button>
              </ListItem>
            ))}
          </List>
          <Box sx={{ flexGrow: 0 }} />
          <Box
            sx={{
              width: "100%",
              position: "absolute",
              left: 0,
              bottom: 20,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              onClick={() => navigate("/cases")}
              sx={{
                color: "#222",
                fontWeight: 700,
                borderRadius: "2rem",
                background: "#94fd8a",
                px: 4,
                py: 1.2,
                fontSize: "1rem",
                boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)",
                textTransform: "none",
                minWidth: 160,
                ":hover": {
                  background: "transparent",
                  color: "#222",
                },
              }}
            >
              Veja os cases
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
