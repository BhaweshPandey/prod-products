import { Box, Flex, Text, useMantineColorScheme } from '@mantine/core'
import React from 'react'
import style from '../Card/Card.module.css'
import { Images } from '@/public'

interface CardTypes {
    title: string,
    description: string,
    image: string,
    link?: string
  
}

export default function Card({image, title, description}:CardTypes) {
  const {colorScheme, setColorScheme } = useMantineColorScheme();


  return (
  <Box className= {`${style.cardContainer} ${colorScheme ==="dark"? style.darkContainer:style.lightContainer}`} >
    <Flex justify={"center"} align={"center"} >
    <img src={image} className={style.cardImage} alt = "card_image"/> 
    </Flex>
    <Text className= {`${style.cardTitle} ${colorScheme === "dark" ? style.darkTitle: style.lightTitle}`}>{title}</Text>
    <Text className= {style.cardDescription}>
      {description}
  </Text>
  </Box>

  )
}
