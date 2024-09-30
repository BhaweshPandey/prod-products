import { translate } from "@/i18n";
import { Images } from "@/public";
import { Box, HoverCard, Center, Flex, Burger, Drawer, Container, Button, Text, useMantineColorScheme } from "@mantine/core";
import { IconChevronDown, IconLanguage, IconBrightnessDown } from "@tabler/icons-react";
import style from "@/pages/index.module.css"


import React, { useContext } from 'react'
import I18nContext from "@/context/i18nContext";
import { useDisclosure } from "@mantine/hooks";



export default function Header() {

    const context = useContext<any>(I18nContext);
    const { language, changeLanguage } = context;
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const [opened, { toggle }] = useDisclosure();

      
  const ToggleColor = () =>{
    return(  <Flex gap = "52px" direction={"column"} align={"center"}>
    <IconLanguage  color={colorScheme ==="dark"?"white":"black"} onClick={() => changeLanguage()} cursor={"pointer"} />
    <IconBrightnessDown color={colorScheme ==="dark"?"white":"black"}  cursor={"pointer"}  onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')} />
    </Flex>)
  }


  return (<Box className={`${style.imageContainer} ${colorScheme == "dark"? style.darkBackground:style.lightBackground}`} >
    <Box className={`${style.header} ${colorScheme == "dark"? style.darkHeader:style.lightHeader}`} >
      <Text className={style.headerText} mr = {language ==="ar"?"calc(11vw)": "0"}  ml = {language ==="en"?"calc(11vw)": "0"}  >
        {translate("productLandingPage.heading")}
      </Text>
    
      <HoverCard
        width={"auto"}
        position="bottom"
        radius="md"
        shadow="md"
        withinPortal
      >
        <HoverCard.Target>
          <a href="#" className={style.hoverCardLink}>
            <Center inline>
              <Box component="span" mr={5} className=  {colorScheme == "dark"? style.darkTagline:style.lightTagline}>
                {translate("productLandingPage.theme")}
              </Box>
              <IconChevronDown color={colorScheme ==="dark"?"white":"black"} size={"18px"} />
            </Center>
          </a>
        </HoverCard.Target>
    
        <HoverCard.Dropdown style={{ overflow: "hidden" }} >
          <div>
            <div>
              <Text fw={500} fz="sm">
                {translate("productLandingPage.getStarted")}
              </Text>
            </div>
          </div>
        </HoverCard.Dropdown>
      </HoverCard>
      <Flex visibleFrom="md" gap = "52px" style={{
        marginLeft: "auto",
        marginRight:"auto"
      }} >
      <IconLanguage  color={colorScheme ==="dark"?"white":"black"} onClick={() => changeLanguage()} cursor={"pointer"} />
      <IconBrightnessDown color={colorScheme ==="dark"?"white":"black"}  cursor={"pointer"}  onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')} />
      </Flex>
      <Burger style={{
        marginLeft: "auto",
        marginRight:"auto"
      }} hiddenFrom="md"  size={"xs"}  opened={opened} onClick={toggle} aria-label="Toggle navigation" />
      <Drawer opened={opened} onClose={toggle} >
    <Box>
    <ToggleColor/>
    </Box>  
    </Drawer>
    
    </Box>
    
    <Box>
    
      <Container maw={"4000px"} mt="50px" >
        <Flex
          align={"center"}
          justify={"space-evenly"}
          wrap={"wrap"}
          gap="12px"
        >
          <img  loading="lazy"  src={Images.startImage} className={style.starImage} alt = {"star_img"}  />
    
          <Box className={style.boxStyle}>
    
            <img
            loading="lazy" 
              src={Images.gradientCircle}
              className={style.smallGradient}
              alt = "gradient_circle"
            />
    
            <Text className={`${style.taglineText} ${colorScheme == "dark"? style.darkTagline:style.lightTagline}`}>
              {translate(
                "productLandingPage.weCreatePowerfulDigitalProducts"
              )}
    
              <span className={style.spanStyle}>
                {" "}
                {translate("productLandingPage.product")}
              </span>
              {/* <img  loading="lazy"  src={Images.pinkCircle} className={style.pinkCircle} alt = "circle" /> */}
            </Text>
    
            <Text className={colorScheme == "dark"? style.darkDescription:style.lightDescription}>
              {translate("productLandingPage.loremIpsum4")}
            </Text>
            <img
            loading="lazy" 
              src={Images.triangleImage}
              className={style.triangleImage}
              alt = "triangle"
            />
            <Button className={style.btnStyle} onClick={() => {}}>
              {translate("productLandingPage.getStarted")}
            </Button>
          </Box>
          <img  loading="lazy"  src={Images.gradientCircle} className={style.circleTwo} alt= "circle" />
          <Box className={style.mobileSection}>
            <img
            loading="lazy" 
              src={Images.mobileSection}
              alt="mobile_image"
              className={style.mobile}
            />
    
            <img
            loading="lazy" 
              src={Images.gradientCircle}
              className={style.gradientCircle}
              alt="gradient_circle"
            />
            <img  loading="lazy"  src={Images.startImage} className={style.leftStarImage} alt = "star_img" />
    
            <img  loading="lazy"  src={Images.blueCircle} className={style.blueCircle} alt = "blue_ball" />
          </Box>
          <div className={`${language =="ar"?"rlt-gradient":"gradient-bg"}`} />
        </Flex>
      </Container>
    </Box>
    </Box>
  )
}


