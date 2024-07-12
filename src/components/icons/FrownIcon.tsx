import React, { FC } from "react";



interface Props {
    active?: boolean;
}
const FrownIcon: FC<Props> = ({ active = true }) => {
	if (active) {
		return (
			<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
				<g filter="url(#filter0_d_1061_7347)">
					<path fillRule="evenodd" clipRule="evenodd" d="M15 1C21.6274 1 27 6.37258 27 13C27 19.6274 21.6274 25 15 25C8.37258 25 3 19.6274 3 13C3 6.37258 8.37258 1 15 1ZM11.3756 20.2111C12.2939 19.0625 13.4801 18.5024 15 18.5024C16.5199 18.5024 17.7061 19.0625 18.6244 20.2111C18.8859 20.5381 19.3693 20.5962 19.7041 20.3409C20.039 20.0855 20.0985 19.6135 19.837 19.2865C18.6259 17.7716 16.9916 17 15 17C13.0084 17 11.3741 17.7716 10.163 19.2865C9.90151 19.6135 9.96101 20.0855 10.2959 20.3409C10.6307 20.5962 11.1141 20.5381 11.3756 20.2111ZM11.0001 8.99935C10.1717 8.99935 9.50008 9.89478 9.50008 10.9993C9.50008 12.1039 10.1717 12.9993 11.0001 12.9993C11.8285 12.9993 12.5001 12.1039 12.5001 10.9993C12.5001 9.89478 11.8285 8.99935 11.0001 8.99935ZM18.9999 8.99935C18.1715 8.99935 17.4999 9.89478 17.4999 10.9993C17.4999 12.1039 18.1715 12.9993 18.9999 12.9993C19.8283 12.9993 20.4999 12.1039 20.4999 10.9993C20.4999 9.89478 19.8283 8.99935 18.9999 8.99935Z" fill="#F57DA8"/>
				</g>
				<defs>
					<filter id="filter0_d_1061_7347" x="0" y="0" width="30" height="30" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="2"/>
						<feGaussianBlur stdDeviation="1.5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.858458 0 0 0 0 0.754687 0 0 0 0 0.791871 0 0 0 1 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1061_7347"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1061_7347" result="shape"/>
					</filter>
				</defs>
			</svg>




		);
	} else {
		return (
			<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_d_1066_3526)">
					<path fillRule="evenodd" clipRule="evenodd" d="M15 1C21.6274 1 27 6.37258 27 13C27 19.6274 21.6274 25 15 25C8.37258 25 3 19.6274 3 13C3 6.37258 8.37258 1 15 1ZM11.3756 20.2111C12.2939 19.0625 13.4801 18.5024 15 18.5024C16.5199 18.5024 17.7061 19.0625 18.6244 20.2111C18.8859 20.5381 19.3693 20.5962 19.7041 20.3409C20.039 20.0855 20.0985 19.6135 19.837 19.2865C18.6259 17.7716 16.9916 17 15 17C13.0084 17 11.3741 17.7716 10.163 19.2865C9.90151 19.6135 9.96101 20.0855 10.2959 20.3409C10.6307 20.5962 11.1141 20.5381 11.3756 20.2111ZM11.0001 8.99935C10.1717 8.99935 9.50008 9.89478 9.50008 10.9993C9.50008 12.1039 10.1717 12.9993 11.0001 12.9993C11.8285 12.9993 12.5001 12.1039 12.5001 10.9993C12.5001 9.89478 11.8285 8.99935 11.0001 8.99935ZM18.9999 8.99935C18.1715 8.99935 17.4999 9.89478 17.4999 10.9993C17.4999 12.1039 18.1715 12.9993 18.9999 12.9993C19.8283 12.9993 20.4999 12.1039 20.4999 10.9993C20.4999 9.89478 19.8283 8.99935 18.9999 8.99935Z" fill="#F57DA8"/>
					<path fillRule="evenodd" clipRule="evenodd" d="M15 1C21.6274 1 27 6.37258 27 13C27 19.6274 21.6274 25 15 25C8.37258 25 3 19.6274 3 13C3 6.37258 8.37258 1 15 1ZM11.3756 20.2111C12.2939 19.0625 13.4801 18.5024 15 18.5024C16.5199 18.5024 17.7061 19.0625 18.6244 20.2111C18.8859 20.5381 19.3693 20.5962 19.7041 20.3409C20.039 20.0855 20.0985 19.6135 19.837 19.2865C18.6259 17.7716 16.9916 17 15 17C13.0084 17 11.3741 17.7716 10.163 19.2865C9.90151 19.6135 9.96101 20.0855 10.2959 20.3409C10.6307 20.5962 11.1141 20.5381 11.3756 20.2111ZM11.0001 8.99935C10.1717 8.99935 9.50008 9.89478 9.50008 10.9993C9.50008 12.1039 10.1717 12.9993 11.0001 12.9993C11.8285 12.9993 12.5001 12.1039 12.5001 10.9993C12.5001 9.89478 11.8285 8.99935 11.0001 8.99935ZM18.9999 8.99935C18.1715 8.99935 17.4999 9.89478 17.4999 10.9993C17.4999 12.1039 18.1715 12.9993 18.9999 12.9993C19.8283 12.9993 20.4999 12.1039 20.4999 10.9993C20.4999 9.89478 19.8283 8.99935 18.9999 8.99935Z" fill="white" fillOpacity="0.6"/>
				</g>
				<defs>
					<filter id="filter0_d_1066_3526" x="0" y="0" width="30" height="30" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="2"/>
						<feGaussianBlur stdDeviation="1.5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.858458 0 0 0 0 0.754687 0 0 0 0 0.791871 0 0 0 0.5 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1066_3526"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1066_3526" result="shape"/>
					</filter>
				</defs>
			</svg>

            
		);
	}
};
export default FrownIcon;
