import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";

interface FlipCardProps {
  title: string;
  links: string[];
}

export default function FlipCard({ title, links }: FlipCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <Box
      sx={{
        perspective: 1000,
        width: 300,
        height: 400,
        cursor: "pointer",
        borderRadius: "1rem",
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
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "1rem",
            bgcolor: "#76A86F",
            color: "white",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              textAlign="center"
              fontWeight="bold"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              textAlign="center"
              color="text.secondary"
            >
              Hover to flip
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
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "1rem",
            bgcolor: "#1a1a1a",
            color: "white",
          }}
        >
          <CardContent>
            <List>
              {links.map((link, index) => (
                <ListItem key={index}>
                  <Link
                    href={link}
                    color="inherit"
                    underline="hover"
                    sx={{ fontSize: "1rem" }}
                  >
                    {link}
                  </Link>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
