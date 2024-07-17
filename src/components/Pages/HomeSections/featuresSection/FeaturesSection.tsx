"use client";

import React, { useState } from "react";
import styles from "./featuresSection.module.scss";
import Accordion from "@/components/accordion/Accordion";
import { accordionData } from "@/components/accordion/data/accordionData";
import useWindowSizeFixed from "@/hooks/useWindowSizeFixed";
import ImageSlider from "@/components/imageSlider/ImageSlider";

export default function FeaturesSection({
	currentLang,
	direction,
}: Readonly<{
	currentLang: Record<string, string>;
	direction: "rtl" | "ltr";
}>) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const { width } = useWindowSizeFixed();

	const handleAccordionToggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	if (width === undefined) {
		return <section className={styles.wrapper}></section>;
	}
	return (
		<section style={{ direction }} className={styles.wrapper}>
			{width > 1024 ? (
				<>
					<div className={styles.wrapper__features}>
						<h1 className={styles.wrapper__features__header}>
							Our Features
						</h1>
						<div className={styles.wrapper__features__main}>
							{accordionData.map((features, index) => {
								return (
									<Accordion
										features={features}
										key={index}
										accordionOpen={openIndex === index}
										setAccordionOpen={() =>
											handleAccordionToggle(index)
										}
									/>
								);
							})}
						</div>
					</div>
					<div className={styles.wrapper__imageSlider}>
						{/* <ImageSlider/> */}
					</div>
				</>
			) : (
				<>
					<h1 className={styles.wrapper__header}>Our Features</h1>
					<div className={styles.wrapper__mainWrapper}>
						<div
							className={styles.wrapper__mainWrapper__imageSlider}
						>
							{/* <img src="" alt="" /> */}
						</div>
						<div className={styles.wrapper__mainWrapper__features}>
							<div
								className={
									styles.wrapper__mainWrapper__features__main
								}
							>
								{accordionData.map((features, index) => {
									return (
										<Accordion
											features={features}
											key={index}
											accordionOpen={openIndex === index}
											setAccordionOpen={() =>
												handleAccordionToggle(index)
											}
										/>
									);
								})}
							</div>
						</div>
					</div>
				</>
			)}
		</section>
	);
}
