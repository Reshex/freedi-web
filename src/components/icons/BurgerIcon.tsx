export default function BurgerIcon({ color }: { color: string }) {
	return (
		<svg
			width="1.3rem"
			height="1.3rem"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5 12H20"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				d="M5 17H20"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				d="M5 7H20"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
}
