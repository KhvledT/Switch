"use client";
import StaggeredMenu from "@/components/reactBits/StaggeredMenu";
import { useState } from "react";

export default function sidebar() {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "Websites", ariaLabel: "View our websites", link: "/websites" },
    {
      label: "Marketing",
      ariaLabel: "View our marketing plans",
      link: "/marketing",
    },
    {
      label: "AI Automation",
      ariaLabel: "Find out what is AI Automation",
      link: "/ai-automation",
    },
    { label: "About Us", ariaLabel: "Learn about us", link: "/aboutus" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    {
      label: "Instagram",
      link: "https://www.instagram.com/switch__media?igsh=MWV2ejQzbWhhbXd1ZA==",
    },
    { label: "WhatsApp_Software", link: "https://wa.me/201014108539" },
    { label: "WhatsApp_Marketing", link: "https://wa.me/201555022325" },
  ];
   
  const [open, setOpen] = useState(false)

  setTimeout(() => {
    setOpen(true)
  }, 50);
  return (
    <>
    
    <div>
      {open && <StaggeredMenu
        isFixed={true}
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={["#252526", "#636169"]}
        logoUrl="/path-to-your-logo.svg"
        accentColor="#ff6b6b"
      />}
    </div>
    </>

  );
}
