"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./accordion.module.scss";
import MinusIcon from "../icons/MinusIcon";
import PlusIconLight from "../icons/PlusIconLight";
import { FeaturesData } from "./model/accordionModel";
import useWindowSizeFixed from "@/hooks/useWindowSizeFixed";

interface Props {
	features: FeaturesData;
	accordionOpen: boolean;
	setAccordionOpen: () => void;
}

const Accordion = ({ features, accordionOpen, setAccordionOpen }: Props) => {
	const [height, setHeight] = useState("0px");
	const contentRef = useRef<HTMLDivElement>(null);

	const { width } = useWindowSizeFixed();

	useEffect(() => {
		setHeight(
			accordionOpen ? `200px` : "0px",
		);
	}, [accordionOpen]);

	if (width === undefined) {
		return <section className={styles.wrapper}></section>;
	}

	let borderBottomStyle;
	if (accordionOpen && width > 1919) {
		borderBottomStyle = { borderBottom: "0px" };
	} else {
		borderBottomStyle = { borderBottom: "1px solid var(--card-stroke)" };
	}

	return (
		<div
			className={styles.wrapper}
			style={borderBottomStyle}
		>
			<button
				className={styles.wrapper__button}
				onClick={setAccordionOpen}
			>
				{width > 1919 ? (
					<>
						<span className={styles.wrapper__button__title}>
							<span
								className={
									styles.wrapper__button__title__number
								}
							>
								{features.number}
							</span>
							<MinusIcon
								color="var(--dark-text)"
								width="1.51rem"
								height="1.41rem"
								strokeColor="var(--dark-text)"
							/>
							{features.title}
							<span
								className={`${styles.wrapper__button__title__number} ${styles.wrapper__button__title__cloneNumber}`}
							>
								{features.number}
							</span>
						</span>
						<span>
							<PlusIconLight
								width="1.51rem"
								height="1.41rem"
								open={accordionOpen}
							/>
						</span>
					</>
				) : (
					<>
						<div className={styles.wrapper__button__numberWrapper}>
							<span
								className={
									styles.wrapper__button__numberWrapper__number
								}
							>
								{features.number}
							</span>
							<span
								className={`${styles.wrapper__button__numberWrapper__number} ${styles.wrapper__button__numberWrapper__cloneNumber}`}
							>
								{features.number}
							</span>
							<span>
								<PlusIconLight
									width="1.51rem"
									height="1.41rem"
									open={accordionOpen}
								/>
							</span>
						</div>
						<span className={styles.wrapper__button__title}>
							{features.title}
						</span>
					</>
				)}
			</button>
			<div
				ref={contentRef}
				className={`${styles.wrapper__descriptionWrapper} ${accordionOpen ? styles.open : ""}`}
				style={{ maxHeight: height }}
			>
				<span
					className={styles.wrapper__descriptionWrapper__description}
				>
					{features.description}
				</span>
			</div>
		</div>
	);
};

export default Accordion;
