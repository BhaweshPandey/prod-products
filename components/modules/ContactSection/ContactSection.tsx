import Input from '@/components/Elements/Input/Input'
import { TextArea } from '@/components/Elements/TextArea/TextArea'
import React, { useContext } from 'react'
import I18nContext from '@/context/i18nContext'
import { translate } from '@/i18n'
import { Images } from '@/public'
import { Box, Container, Flex, Text, useMantineColorScheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import style from "@/pages/index.module.css"
import Button from '@/components/Elements/Button/Button'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Card from '../Card/Card'

const ContactSection = () => {
    const context = useContext<any>(I18nContext);
    const { language, changeLanguage } = context;
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const [opened, { toggle }] = useDisclosure();

  return (
    <Container size={"lg"} mt="100px" p = "xl">
    <Text className={`${style.contactStyle} ${colorScheme === "dark" ? style.darkStrategy: style.lightStrategy}`}>
      {translate("productLandingPage.contactUs")}
    </Text>
    <Box className={style.contactGridBox}>
      <div className={style.itemOne}>
        <Input
          placeholder={translate("productLandingPage.enterEmail") as string}
          label={translate("productLandingPage.email") as string}
          type="email"
          className={`${style.inputStyle}  ${colorScheme ==='dark'? style.darkPlaceholder:style.lightPlacehodoler}`}
        />
      </div>

      <div className={style.itemTwo}>
        <Input
          placeholder={translate("productLandingPage.enterPhoneNumber") as string}
          label={translate("productLandingPage.phoneNumber") as string}
          type="number"
          className={`${style.inputStyle}  ${colorScheme ==='dark'? style.darkPlaceholder:style.lightPlacehodoler}`}
        />
      </div>

      <div className={style.itemOne}>
        <TextArea
          placeholder={translate("productLandingPage.enterMessage") as string}
          label={translate("productLandingPage.message") as string}
          className={`${style.textareaStyle} ${colorScheme ==='dark'? style.darkPlaceholder:style.lightPlacehodoler}`}
        />
      </div>

      <div className={style.itemThree}>
        <Input
          placeholder={translate("productLandingPage.enterTitle") as string}
          label={translate("productLandingPage.title") as string}
          className={`${style.inputStyle}  ${colorScheme ==='dark'? style.darkPlaceholder:style.lightPlacehodoler}`}
        />
      </div>

      <div className={style.itemFour}>
        <Button className={style.btnStyle} onClick={() => {}}>
          {translate("productLandingPage.submit")}
        </Button>
      </div>
    </Box>
  </Container>
  )
}

export default ContactSection