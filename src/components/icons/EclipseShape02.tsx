import React from "react";

interface Props {
    size?: string;
}

export default function EclipseShape02({ size }: Readonly<Props>) {
	return (
		<svg
			width={size ?? "1.9rem"}
			height={size ?? "2rem"}
			viewBox="0 0 36 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M36 18.5C36 27.0604 24.0604 34 15.5 34C6.93959 34 0 27.0604 0 18.5C0 9.93959 2.93959 0.5 11.5 0.5C20.0604 0.5 36 9.93959 36 18.5Z"
				fill="#5D98F3"
			/>
		</svg>
	);
}
