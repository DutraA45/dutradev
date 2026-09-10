export type SocialPlatform = "instagram" | "linkedin" | "github";

export type SocialLink = {
  platform: SocialPlatform;
  href: string;
  label: string;
};

export const socialLinks: SocialLink[] = [
  {
    platform: "instagram",
    href: "https://www.instagram.com/dutrajeffdutra/",
    label: "Instagram",
  },
  {
    platform: "linkedin",
    href: "https://www.linkedin.com/in/dutraa45",
    label: "LinkedIn",
  },
  {
    platform: "github",
    href: "https://github.com/DutraA45",
    label: "GitHub",
  },
];
