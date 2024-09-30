import Input from '@/components/Elements/Input/Input'
import { TextArea } from '@/components/Elements/TextArea/TextArea'
import React, { useContext } from 'react'
import I18nContext from '@/context/i18nContext'
import { translate } from '@/i18n'
import { Images } from '@/public'
import { Box, Container, Flex, Text, useMantineColorScheme } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import style from "@/pages/index.module.css"
import Button from '@/components/Elements/Button/Button'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Card from '../Card/Card'
import { IconChevronsRight } from '@tabler/icons-react'
import Link from 'next/link'


const FooterData = [
    {
      title: { en: "Navigate", ar: "تصفح" },
      links: [
        { en: "Home", ar: "الرئيسية" },
        { en: "Portfolio", ar: "المحفظة" },
        { en: "Career", ar: "الوظيفة" },
        { en: "Contact Us", ar: "اتصل بنا" },
      ],
    },
    {
      title: { en: "Social Media", ar: "وسائل التواصل الاجتماعي" },
      links: [
        { en: "Facebook", ar: "فيسبوك" },
        { en: "Instagram", ar: "إنستغرام" },
        { en: "Linkedin", ar: "لينكدإن" },
      ],
    },
    {
      title: { en: "About", ar: "حول" },
      links: [
        { en: "Privacy Policy", ar: "سياسة الخصوصية" },
        { en: "Terms & Condition", ar: "الشروط والأحكام" },
      ],
    },
  ];

const FooterSection = () => {
    const context = useContext<any>(I18nContext);
    const { language, changeLanguage } = context;
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const [opened, { toggle }] = useDisclosure();
  const breakpoint1250 = useMediaQuery("(max-width: 1250px)");


  return (
    <Box mt="100px" className={`${style.footerContainer} ${colorScheme === 'dark' ? style.darkFooter: style.lightFooter}`}>
    <Container maw={"1350px"}>
      <Flex gap="140px" my="60px" wrap={breakpoint1250 ? "wrap" : "nowrap"}>
        <Flex w="100%" justify={"space-between"} gap="22px" wrap="wrap">
          {FooterData.map((data, index) => {
            return (
              <Flex direction={"column"} align={"baseline"} key={index}>
                <Box>
                  <p className={`${style.footerTitle} ${colorScheme === "dark" ? style.darkFooterTitle: style.lightFooterTitle}`}>
                    {data.title[language as "en" | "ar"]}
                  </p>
                </Box>
                <Flex direction={"column"} gap="10px" mt="xl">
                  {data.links.map((link, index) => (
                    <Link
                      key={index}
                      href="#"
                      className={`${style.footerLinks}  ${colorScheme === "dark" ? style.darkFooterTitle: style.lightFooterTitle}`}
                    >
                      <IconChevronsRight /> {link[language as "en" | "ar"]}
                    </Link>
                  ))}
                </Flex>
              </Flex>
            );
          })}
        </Flex>
        <Flex direction={"column"} gap="xl" mb="lg">
          <p className={`${style.footerLogoText}  ${colorScheme === "dark" ? style.darkFooterTitle: style.lightFooterTitle}`}>
            {translate("productLandingPage.techWorld")}{" "}
            <span className={`${style.copyright}  ${colorScheme === "dark" ? style.darkFooterTitle: style.lightFooterTitle}`}>
              {" "}
              {translate("productLandingPage.copyright")}
            </span>{" "}
          </p>
          <p className={`${style.footerDescription}  ${colorScheme === "dark" ? style.darkFooterTitle: style.lightFooterTitle}`}>
            {translate("productLandingPage.loremIpsum8")}
          </p>
        </Flex>
      </Flex>
    </Container>
  </Box>
  )
}

export default FooterSection