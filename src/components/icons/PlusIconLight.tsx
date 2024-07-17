import React from "react";

type Props = {
	width?: string;
	height?: string;
	open?: boolean;
};

const PlusIconLight = ({width, height, open}: Props) => {
	return (
		<svg
			width={width ? width : "26"}
			height={height ? height : "25"}
			viewBox="0 0 26 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{
				transform: open ? "rotate(180deg)" : "rotate(0deg)",
				transition: "transform 0.3s ease",
			}}
		>
			<path
				d="M13 19.8428V5.84277"
				stroke="#759FE3"
				strokeLinecap="round"
				strokeLinejoin="round"
				style={{
					transition: "all 0.3s ease",
					opacity: open ? 0 : 1,
				}}
			/>
			<path
				d="M20.4922 12.8428H5.50872"
				stroke="#759FE3"
				strokeLinecap="round"
				strokeLinejoin="round"
				style={{
					transition: "all 0.3s ease",
				}}
			/>
		</svg>
	);
};

export default PlusIconLight;
