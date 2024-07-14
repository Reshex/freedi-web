import React from "react";

export default function BellSlashIcon({
	color = "#4E88C7",
}: {
    color: string;
}) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_1066_229)">
				<path
					d="M13.73 21C13.5542 21.3028 13.3019 21.5542 12.9982 21.7289C12.6946 21.9037 12.3504 21.9956 12 21.9956C11.6496 21.9956 11.3054 21.9037 11.0018 21.7289C10.6982 21.5542 10.4458 21.3028 10.27 21"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M18.6293 13C18.1848 11.3714 17.9729 9.68804 17.9998 8"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M6.26 6.25977C6.08627 6.82338 5.99861 7.40999 6 7.99977C6 14.9998 3 16.9998 3 16.9998H17"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M17.9999 8.00012C18.0015 6.91318 17.7079 5.84622 17.1503 4.91321C16.5927 3.98019 15.7921 3.21617 14.834 2.70275C13.876 2.18934 12.7965 1.94581 11.7108 1.99818C10.6251 2.05056 9.57409 2.39686 8.66992 3.00011"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M1 1L23 23"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_1066_229">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}
