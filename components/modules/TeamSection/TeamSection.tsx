import I18nContext from '@/context/i18nContext'
import { translate } from '@/i18n'
import { Images } from '@/public'
import { Box, Container, Flex, Text, useMantineColorScheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { useContext } from 'react'
import style from "@/pages/index.module.css"

export default function TeamSection() {

    const context = useContext<any>(I18nContext);
    const { language, changeLanguage } = context;
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const [opened, { toggle }] = useDisclosure();
  return (
    <Box className={colorScheme === "dark" ? style.teamContainerDark : style.teamContainerLight}>
    <Container size={"xl"}  p  = "xl">
      <Flex
        mt="100px"
        align={"center"}
        justify={"space-between"}
        wrap={"wrap"}
      >
        <Box
          style={{
            flex: "1 1 45%",
          }}
        >
          
          <p className={`${style.strategy} ${colorScheme === "dark" ? style.darkStrategy: style.lightStrategy}`}>{translate("productLandingPage.weWorkWithTheGreatTeam")}</p>
          <Text className={`${style.strategyDescription} ${colorScheme === "dark" ? style.darkDescription: style.lightDescription} `}>
            {translate("productLandingPage.loremIpsum6")}
          </Text>
        </Box>

        <Box>
          <img
          loading="lazy"
            src={Images.personImage}
            alt="globe_img"
            className={style.globeImage}
          />
        </Box>
      </Flex>
    </Container>
  </Box>
  )
}
