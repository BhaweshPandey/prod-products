import I18nContext from '@/context/i18nContext'
import { translate } from '@/i18n'
import { Images } from '@/public'
import { Box, Container, Flex, Text, useMantineColorScheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { Fragment, useContext } from 'react'
import style from "@/pages/index.module.css"
import Button from '@/components/Elements/Button/Button'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Card from '../Card/Card'

const CardData = [
    {
      image: Images.cardOne,
      title: { en: "Mobile Apps", ar: "تطبيقات الجوال" },
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum mauris non pellentesque accumsan. Nec pellentesque eget.",
        ar: "لوريم إيبسوم دولور سيت أميت ، كونسيكتيتور أديبيسيسنغ إيليت. في ديكتوم مورس نون بينتيسكوي أككومسان. نيك بينتيسكوي إيget.",
      },
    },
    {
      image: Images.cardTwo,
      title: { en: "Website Apps", ar: "تطبيقات الويب" },
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum mauris non pellentesque accumsan. Nec pellentesque eget.",
        ar: "لوريم إيبسوم دولور سيت أميت ، كونسيكتيتور أديبيسيسنغ إيليت. في ديكتوم مورس نون بينتيسكوي أككومسان. نيك بينتيسكوي إيget.",
      },
    },
    {
      image: Images.cardThree,
      title: { en: "UI UX Design", ar: "تصميم UI UX" },
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum mauris non pellentesque accumsan. Nec pellentesque eget.",
        ar: "لوريم إيبسوم دولور سيت أميت ، كونسيكتيتور أديبيسيسنغ إيليت. في ديكتوم مورس نون بينتيسكوي أككومسان. نيك بينتيسكوي إيget.",
      },
    },
  ];
  
const ExpertiseSection = () => {
    const context = useContext<any>(I18nContext);
    const { language, changeLanguage } = context;
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const [opened, { toggle }] = useDisclosure();

  return (
    <Container  maw={"1800px"}  className={style.secondContainer} p = "xl">
        <Box className={`${style.expertiseBox} ${colorScheme == "dark"? style.darkTagline:style.lightTagline}`}>
          <p className={style.expertise}>
            {translate("productLandingPage.specialExpertiseFromUs")}
          </p>
          <Text className={`${style.expertiseDescription} ${colorScheme == "dark"? style.darkDescription:style.lightDescription} `}>
            {translate("productLandingPage.loremIpsum4")}
          </Text>
        </Box>

        <Box className={style.gridBox} >
          {CardData.map((item) => (
            <Fragment key={item.title.en}>
              <Card
                {...{
                  ...item,
                  title: item.title[language as "en" | "ar"],
                  description: item.description[language as "en" | "ar"],
                }}
              />
            </Fragment>
          ))}
        </Box>

        <Flex
          gap="100px"
          mt="100px"
          align={"center"}
          justify={"space-evenly"}
          wrap="wrap"
        >
          <Box>
            <img
            loading="lazy" 
              src={Images.globeImage}
              alt="globe_img"
              className={style.globeImage}
            />
          </Box>

          <Box
          className={style.flexBasic}
          >
            <p  className={`${style.strategy} ${colorScheme === "dark" ? style.darkStrategy: style.lightStrategy}`}>
              {translate("productLandingPage.strategic2")}
            </p>
            <Text className={`${style.strategyDescription} ${colorScheme === "dark" ? style.darkDescription: style.lightDescription} `}>
              {translate("productLandingPage.loremIpsum5")}
            </Text>
          </Box>
        </Flex>
      </Container>
  )
}

export default ExpertiseSection