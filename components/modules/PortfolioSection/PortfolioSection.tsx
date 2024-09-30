import I18nContext from '@/context/i18nContext'
import { translate } from '@/i18n'
import { Images } from '@/public'
import { Box, Container, Flex, Text, useMantineColorScheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { useContext } from 'react'
import style from "@/pages/index.module.css"
import Button from '@/components/Elements/Button/Button'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";


const CarouselImages = [
  { src: Images.carouselImage, alt: "image1" },
  { src: Images.carouselImage, alt: "image2" },
  { src: Images.carouselImage, alt: "image3" },
];



export default function PortfolioSection() {
    const context = useContext<any>(I18nContext);
    const { language, changeLanguage } = context;
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const [opened, { toggle }] = useDisclosure();

  return (
     <Container size={"xl"} p = "xl">
        <Flex
          align={"center"}
          gap={"50px"}
          mt="100px"
          justify={"space-evenly"}
          wrap={"wrap"}
        >
          <Swiper
            spaceBetween={20}
            navigation
            slidesPerView={1}
            className= {style.swiperStyle}
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation, Pagination, Autoplay]}
          >
            {CarouselImages.map((item) => (
              <SwiperSlide key={item.alt}>
                <img  loading="lazy"  {...item} className={style.carouselImage} alt = {item.alt} />
              </SwiperSlide>
            ))}
            ...
          </Swiper>

          <Box
            style={{
              flex: "1 1 40%",
            }}
          >
            <p className={`${style.strategy} ${colorScheme === "dark" ? style.darkStrategy: style.lightStrategy}`}>
              {translate("productLandingPage.portfolio")}
            </p>
            <Text className={`${style.strategyDescription} ${colorScheme === "dark" ? style.darkDescription: style.lightDescription} `}>
              {translate("productLandingPage.loremIpsum7")}
            </Text>
            <Button
              style={{ marginTop: "18px" }}
              className={style.btnStyle}
              onClick={() => {}}
            >
              {translate("productLandingPage.viewAll")}
            </Button>
          </Box>
        </Flex>
      </Container>
  )
}
