"use client";

import React, { useState } from "react";

import styles from "./videoSectionStyle.module.scss";
import FreediLogoIcon from "@/components/icons/FreediLogoIcon";
import FreediIcon from "@/components/icons/FreediIcon";
import videoSectionImage from "@/assets/Images/VideoSectionImage.png";
import videoSectionPeopleImage from "@/assets/Images/VideoSectionPeople.png";
import Image from "next/image";
import useWindowSizeFixed from "@/hooks/useWindowSizeFixed";

export default function VideoSection({
	currentLang,
	direction,
}: Readonly<{
    currentLang: Record<string, string>;
    direction: "rtl" | "ltr";
}>) {
	const { width } = useWindowSizeFixed();
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    

	const handlePlayVideo = () => {
		setIsVideoPlaying(true);
	};

	if (width == undefined) {
		return (
			<section className={styles.videoSection}></section>
		)
	}

	return (
		<section className={styles.videoSection} style={{direction}}>
			{width! > 1200 ? (
				<div
					className={styles.videoWrapper}
				>
					<iframe
						src={`https://www.youtube.com/embed/qLznfpgj1E4?wmode=transparent&autoplay=1`}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						loading="lazy"
						allowFullScreen
						className={
							isVideoPlaying
								? `${styles.videoPlayer} ${styles.videoImage}`
								: styles.none
						}
					></iframe>
					<Image
						alt="videoImage"
						src={videoSectionImage}
						quality={100}
						className={
							isVideoPlaying ? styles.none : styles.videoImage
						}
						onClick={() => handlePlayVideo()}
					/>
					<div
						className={
							isVideoPlaying
								? styles.none
								: styles.textWrapper
						}
					>
						<p className={styles.timerP}>
							{currentLang["explained in 90 second"]}
						</p>
						<h1 className={styles.header}>
							{currentLang["How does FreeDi work?"]}
						</h1>
						<p className={styles.underHeaderP}>
							{currentLang["Let us walk you through how our app works"]}
						</p>
					</div>
					<div
						className={
							isVideoPlaying
								? styles.none
								: styles.logoWrapper
						}
					>
						<FreediLogoIcon size={"1.9rem"} color={"white"} />
						<FreediIcon
							height="1.9rem"
							width="4.1rem"
							freeColor="var(--freedi-yellow)"
							diColor="white"
						/>
					</div>
					<Image
						alt="videoPeopleImage"
						src={videoSectionPeopleImage}
						quality={100}
						className={styles.videoPeopleImage}
					/>
				</div>
			) : (
				<>
					<div className={styles.textWrapper}>
						<h1 className={styles.header}>{currentLang["How does FreeDi work?"]}</h1>
						<p className={styles.underHeaderP}>
							{currentLang["Let us walk you through how our app works"]}
						</p>
					</div>
					<div
						className={styles.videoWrapper}
					>
						<iframe
							src={`https://www.youtube.com/embed/qLznfpgj1E4?wmode=transparent&autoplay=1`}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							loading="lazy"
							allowFullScreen
							className={
								isVideoPlaying
									? `${styles.videoPlayer} ${styles.videoImage}`
									: styles.none
							}
						></iframe>
						<Image
							alt="videoImage"
							src={videoSectionImage}
							quality={100}
							className={
								isVideoPlaying ? styles.none : styles.videoImage
							}
							onClick={() => handlePlayVideo()}
						/>
						<p
							className={
								isVideoPlaying ? styles.none : styles.timerP
							}
						>
							{currentLang["explained in 90 second"]}
						</p>
						<div
							className={
								isVideoPlaying
									? styles.none
									: styles.logoWrapper
							}
						>
							<FreediLogoIcon size={"1.459rem"} color={"white"} />
							<FreediIcon
								height="1rem"
								width="3.22rem"
								freeColor="var(--freedi-yellow)"
								diColor="white"
							/>
						</div>
						<Image
							alt="videoPeopleImage"
							src={videoSectionPeopleImage}
							quality={100}
							className={styles.videoPeopleImage}
						/>
					</div>
				</>
			)}
		</section>
	);
}
