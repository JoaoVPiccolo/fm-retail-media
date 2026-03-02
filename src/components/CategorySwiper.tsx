import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Container, Box } from "@mui/material";
import { casesMock } from "../generic_components/utils/casesMock";
import { useCategories } from "../shared/store";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useRef, useCallback } from "react";
import "swiper/css";

export function CategorySwiper() {
  const swiperRef = useRef<SwiperType | null>(null);
  const categorie = useCategories((state) => state.categorie);
  const setNewCategory = useCategories((state) => state.setNewCategory);
  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);
  const categories = [...new Set(casesMock.map((item) => item.categoria))];

  const categoryDictionary = {
    Todos: "Todos",
    digital_signage: "Sinalização Digital",
    comunicacao_corporativa: "Comunicação Corporativa",
    gestao_de_conteudo: "Gestão de Conteúdo",
    inovacao: "Inovação",
    producao_de_video: "Produção de Vídeo",
  };
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        maxWidth: { xs: "95%", sm: "85%", md: "75%", lg: "68%" },
        mx: "auto",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 0.5, sm: 1, md: 2 },
          width: "100%",
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            display: "flex",
            color: "white",
            bgcolor: "transparent",
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            padding: { xs: "0.5rem", md: "0.75rem" },
            flexShrink: 0,
            transition: "all 300ms ease-in-out",
            "&:hover": {
              bgcolor: "rgba(255, 255, 255, 0.1)",
              color: "#76A86F",
              transform: "scale(1.1)",
            },
          }}
        >
          <ArrowBack />
        </IconButton>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 8 },
            640: { slidesPerView: 2, spaceBetween: 12 },
            1024: { slidesPerView: 3, spaceBetween: 16 },
          }}
          direction="horizontal"
          loop={false}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          style={{
            width: "100%",
            padding: "clamp(1rem, 2vw, 1.5rem) 0",
          }}
        >
          {categories.map((category, i) => (
            <SwiperSlide
              key={i}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
              }}
            >
              <Button
                key={i}
                variant={categorie == category ? "contained" : "outlined"}
                onClick={() => setNewCategory(category)}
                sx={{
                  minWidth: {
                    xs: "clamp(100px, 70vw, 180px)",
                    md: "clamp(130px, 50vw, 200px)",
                  },
                  minHeight: { xs: "clamp(40px, 10vw, 50px)", md: "auto" },
                  color: "white",
                  borderColor: "white",
                  borderRadius: "6px",
                  border: "2px solid white",
                  backgroundColor:
                    categorie == category ? "#76a86fa8" : "transparent",
                  fontWeight: 700,
                  fontSize: "clamp(0.7rem, 1.8vw, 1rem)",
                  textTransform: "none",
                  fontFamily: "'Montserrat', sans-serif",
                  padding: { xs: "0.4rem 0.8rem", md: "0.75rem 1.5rem" },
                  transition: "all 300ms ease-in-out",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  ":hover": {
                    backgroundColor: "#ffffff31",
                    borderColor: "#76A86F",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {
                  categoryDictionary[
                    category as keyof typeof categoryDictionary
                  ]
                }
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
        <IconButton
          onClick={handleNext}
          sx={{
            display: "flex",
            color: "white",
            bgcolor: "transparent",
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            padding: { xs: "0.5rem", md: "0.75rem" },
            flexShrink: 0,
            transition: "all 300ms ease-in-out",
            "&:hover": {
              bgcolor: "rgba(255, 255, 255, 0.1)",
              color: "#76A86F",
              transform: "scale(1.1)",
            },
          }}
        >
          <ArrowForward />
        </IconButton>
      </Box>
    </Container>
  );
}
