import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nuttapol Phomthon - Personal Website",
    short_name: "Nuttapol Phomthon",
    description: "Nuttapol Phomthon Personal Website",
    start_url: "/",
    display: "standalone",
    background_color: "#e0e7ff",
    theme_color: "#0f0f0f",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
