export default function BellIcon({ color }: { color: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1.5rem"
			height="1.5rem"
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				d="M18.0002 8C18.0002 6.4087 17.3681 4.88258 16.2429 3.75736C15.1177 2.63214 13.5915 2 12.0002 2C10.4089 2 8.88282 2.63214 7.7576 3.75736C6.63239 4.88258 6.00024 6.4087 6.00024 8C6.00024 15 3.00024 17 3.00024 17H21.0002C21.0002 17 18.0002 15 18.0002 8Z"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.7303 21C13.5545 21.3028 13.3021 21.5542 12.9985 21.7289C12.6949 21.9037 12.3506 21.9956 12.0003 21.9956C11.6499 21.9956 11.3057 21.9037 11.002 21.7289C10.6984 21.5542 10.4461 21.3028 10.2703 21"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
