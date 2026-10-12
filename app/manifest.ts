import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} Portfolio`,
    short_name: profile.name,
    description: profile.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f3ee",
    theme_color: "#15171c",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
