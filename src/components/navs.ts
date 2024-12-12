
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { ElementType } from "react";
  
  export type NavInfo = {
    label: string;
    path: string;
  };

  export type SocialInfo = {
    href: string;
    icon: ElementType;
    label: string;
  };

  export type footerIcon = {
    href: string;
    icon: ElementType;
    label: string;
  };
  
  /*export type TContactItem = {
    info: string;
    icon: ElementType;
    type: "tel" | "addr" | "email";
  };*/
  
  export const navInfos: NavInfo[] = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];
  
  /*export const footerNavItems: TNavItem[] = [
    { label: "Home", path: "/" },
    { label: "About GIGREE", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Blog", path: "/blog" },
    { label: "Contact Us", path: "/contact" },
  ];*/
  
  /*export const footerContactItems: TContactItem[] = [
    {
      info: "30A Environmental Crescent, UniLag Estate, Magodo Isheri, Lagos",
      icon: MapPinIcon,
      type: "addr",
    },
    { info: "+234-803-591-8770", icon: PhoneIcon, type: "tel" },
    { info: "gigreenig@gmail.com", icon: EnvelopeIcon, type: "email" },
  ];*/
  export const socialInfos: SocialInfo[] = [
    { href: "https://www.linkedin.com", icon: FaLinkedinIn, label: "LinkedIn" },
    { href: "https://twitter.com", icon: FaXTwitter, label: "Twitter" },
  ]

  export const footerIcons: footerIcon[] = [
    { href: "https://www.linkedin.com", icon: FaLinkedinIn, label: "LinkedIn" },
    { href: "https://twitter.com", icon: FaXTwitter, label: "Twitter" },
    {href: "https://www.instagram.com", icon: IoLogoInstagram, label: "Instagram"},
    {href: "https://www.facebook.com", icon: TiSocialFacebook, label: "Facebook"},
  ]