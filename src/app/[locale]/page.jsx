import React from "react";
import Slider from "@/app/components/Slider";
import DisplayCategoryCard from "@/app/components/DisplayCategoryCard";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export default function HomePage({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");
  return (
    <div>
      <Slider />
      <div style={containerStyles}>
        <DisplayCategoryCard />
      </div>
    </div>
  );
}

const containerStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)", // 4 columns for 4 boxes in a row
  gap: "20px",
  marginTop: "40px",
  maxWidth: "1800px", // Adjust the max width if needed
  margin: "0 auto",
};
