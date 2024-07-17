import React from "react";

type Props = {
    color:string;
    width?:string;
    height?:string;
	strokeColor?:string;
};

const MinusIcon = ({color, width, height, strokeColor}: Props) => {
	return (
		<svg
			width={width ? width : "26"}
			height={height ? height : "25"}
			viewBox="0 0 26 25"
			fill={color}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M20.4922 12.3555L5.50872 12.3555"
				stroke={strokeColor ? strokeColor : "#759FE3"}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default MinusIcon;
