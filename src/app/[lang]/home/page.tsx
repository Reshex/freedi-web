import React from "react";

// Styles
import "./home.scss";

// Custom Components
import VideoSection from "@/components/Pages/HomeSections/videoSection/VideoSection";
import HomeFooter from "@/components/Pages/HomeSections/footer/HomeFooter";
import HeroSection from "@/components/Pages/HomeSections/heroSection/HeroSection";
import WhoAreWeSection from "@/components/Pages/HomeSections/whoAreWe/WhoAreWeSection";
import WhyUsSection from "@/components/Pages/HomeSections/whyUs/WhyUsSection";

// Helpers
import { getLanguageData } from "@/helpers/languages";
import FeaturesSection from "@/components/Pages/HomeSections/featuresSection/FeaturesSection";

export default async function Home({
	params,
}: Readonly<{
	params: { lang: "he" | "en" | "ar" };
}>) {
	const langs = await getLanguageData();

	const currentLang = langs[params.lang] || "en";

	const direction =
		params.lang === "he" || params.lang === "ar" ? "rtl" : "ltr";

	const isHebrew = params.lang === "he";

	return (
		<main className={isHebrew ? "main he" : "main en"}>
			<div className="main__body">
				<HeroSection currentLang={currentLang} direction={direction}/>

				<WhoAreWeSection currentLang={currentLang} direction={direction}/>

				<WhyUsSection currentLang={currentLang} direction={direction} />

				<VideoSection currentLang={currentLang} direction={direction} />

				<FeaturesSection currentLang={currentLang} direction={direction}/>
			</div>

			<HomeFooter currentLang={currentLang} direction={direction}/>
		</main>
	);
}
