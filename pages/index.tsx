import React, { useContext, useEffect, useState } from "react";
import "swiper/swiper-bundle.css";

import I18nContext from "@/context/i18nContext";
import dynamic from "next/dynamic";
const Header = dynamic(() => import('@/components/modules/Header/Header'));
const TeamSection = dynamic(() => import('@/components/modules/TeamSection/TeamSection'));
const PortfolioSection = dynamic(() => import('@/components/modules/PortfolioSection/PortfolioSection'));
const ExpertiseSection = dynamic(() => import('@/components/modules/ExpertiseSection/ExpertiseSection'));
const ContactSection = dynamic(() => import('@/components/modules/ContactSection/ContactSection'));
const FooterSection = dynamic(() => import('@/components/modules/FooterSection/FooterSection'));


export default function ProductLandingPage() {

  const context = useContext<any>(I18nContext);
  const { language, changeLanguage } = context;  
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() =>{
    setIsClient(true);
  },[])
  

  if (!context) {
    throw new Error("LanguageSelector must be used within an I18nProvider");
  }
  
  if(!isClient){
    return null
  }

  
  return (
    <div  dir={language === "ar" ? "rtl" : "ltl"}>
      <Header/>
      <ExpertiseSection/>
     <TeamSection/>
      <PortfolioSection/>
     <ContactSection/>
    <FooterSection/>
    </div>
  );
}
