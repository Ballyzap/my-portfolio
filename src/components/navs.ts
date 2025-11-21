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

export const navInfos: NavInfo[] = [
  { label: "Home", path: "#home" },
  { label: "About", path: "#about" },
  { label: "Services", path: "#services" },
  { label: "Projects", path: "#projects" },
  { label: "Contact", path: "#contact" },
];

export const socialInfos: SocialInfo[] = [
  { href: "https://www.linkedin.com", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://twitter.com", icon: FaXTwitter, label: "Twitter" },
];

export const footerIcons: footerIcon[] = [
  { href: "https://www.linkedin.com", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://twitter.com", icon: FaXTwitter, label: "Twitter" },
  {
    href: "https://www.instagram.com",
    icon: IoLogoInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com",
    icon: TiSocialFacebook,
    label: "Facebook",
  },
];
