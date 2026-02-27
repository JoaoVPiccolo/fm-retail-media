import { Swiper, SwiperSlide } from 'swiper/react';
import {Button, Container, Box } from '@mui/material';
import { casesMock } from '../generic_components/utils/casesMock';
import { useCategories } from '../shared/store';
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import {IconButton} from '@mui/material';
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useRef, useCallback} from 'react';
import "swiper/css"

export function CategorySwiper (){

  const swiperRef = useRef<SwiperType | null>(null);
  const categorie =   useCategories((state) => state.categorie)
  const setNewCategory = useCategories((state) => state.setNewCategory);
  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);
  const categories = [
    "Todos",
    ...new Set(casesMock.map((item) => item.categoria)),
  ];

  const categoryDictionary = {
    Todos: "Todos",
    digital_signage: "Sinalização Digital",
    comunicacao_corporativa: "Comunicação Corporativa",
    gestao_de_conteudo: "Gestão de Conteúdo",
    inovacao: "Inovação",
    producao_de_video: "Produção de Vídeo",
  };
    return(
        <Container>
            <Box
                sx={{
                    display:"flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    maxWidth:"90vw",
                    alignItems: "center"
                }}
            >
                <IconButton
                onClick={handlePrev}
                sx={{
                    display: { xs: "none", sm: "flex" },
                    color: "white",
                    bgcolor: "transparent",
                    "&:hover": { bgcolor: "gray", color: "white" },
                }}
                >
                <ArrowBack sx={{}} />
                </IconButton>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3}
                    loop={false}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    style={{ 
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "24px 0", width: "100%", display: "flex", flexDirection:"row"}}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                >
                    {categories.map((category, i) => (
                        <SwiperSlide key={i}
                            style={{
                                display: "flex",
                                flexDirection: "row", 
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Button
                                key={i}
                                variant={categorie == category ? "contained" : "outlined"}
                                onClick={() => setNewCategory(category)}
                                sx={{
                                minWidth: "70%",
                                color: "white",
                                borderColor: "transparent",
                                borderRadius: "4px",
                                border: "1px solid white",
                                backgroundColor:
                                    categorie == category ? "#76a86fa8" : "transparent",
                                fontWeight: "bold",
                                fontSize: ".9vmax",
                                textTransform: "none",
                                ":hover": {
                                    backgroundColor: "#ffffff31",
                                },
                                }}
                            >
                                {categoryDictionary[category as keyof typeof categoryDictionary]}
                            </Button>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <IconButton
                onClick={handleNext}
                sx={{
                    display: { xs: "none", sm: "flex" },
                    color: "white",
                    bgcolor: "transparent",
                    "&:hover": { bgcolor: "gray", color: "white" },
                }}
                >
                <ArrowForward sx={{}} />
                </IconButton>
            </Box>
        </Container>
    )
} 
