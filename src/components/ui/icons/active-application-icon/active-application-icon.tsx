import { TIconProps, getIconColor } from "../utils"

export const ActiveApplicationIcon = ({ type, className }: TIconProps) => {
    return (
        <svg className={className} width="43" height="height" viewBox={`0 0 43 50`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.589 25.3604C5.56822 25.3604 0 19.63 0 12.6803C0 5.6086 5.68927 0 12.589 0C19.6097 0 25.178 5.73053 25.178 12.6803C25.299 19.752 19.6097 25.3604 12.589 25.3604ZM12.589 0.609627C6.05241 0.609627 0.605238 5.97438 0.605238 12.6803C0.605238 19.2643 5.93136 24.7508 12.589 24.7508C19.1256 24.7508 24.5727 19.3862 24.5727 12.6803C24.5727 6.0963 19.2466 0.609627 12.589 0.609627Z" fill={getIconColor(type)} />
            <path d="M8.71546 16.8254C8.59442 16.8254 8.47335 16.8254 8.47335 16.7035C8.35231 16.5816 8.35231 16.3377 8.47335 16.2158L11.4995 13.2897C11.6206 13.1678 11.8627 13.1678 11.9838 13.2897C12.1048 13.4116 12.1048 13.6553 11.9838 13.7773L8.95757 16.7035C8.83653 16.8254 8.83651 16.8254 8.71546 16.8254Z" fill={getIconColor(type)} />
            <path d="M12.589 11.8264C12.3469 11.8264 12.2258 11.7045 12.2258 11.4607V3.53551C12.2258 3.29166 12.3469 3.16968 12.589 3.16968C12.8311 3.16968 12.9521 3.29166 12.9521 3.53551V11.4607C12.9521 11.7045 12.8311 11.8264 12.589 11.8264Z" fill={getIconColor(type)} />
            <path d="M12.5893 14.0213C11.863 14.0213 11.2578 13.4117 11.2578 12.6802C11.2578 11.9486 11.863 11.3389 12.5893 11.3389C13.3156 11.3389 13.9208 11.9486 13.9208 12.6802C13.9208 13.4117 13.4366 14.0213 12.5893 14.0213ZM12.5893 11.9485C12.2262 11.9485 11.8631 12.3144 11.8631 12.6802C11.8631 13.0459 12.2262 13.4117 12.5893 13.4117C12.9525 13.4117 13.3156 13.0459 13.3156 12.6802C13.3156 12.3144 13.0735 11.9485 12.5893 11.9485Z" fill={getIconColor(type)} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0284 49.9999H42.5614C42.7076 49.9999 42.8538 49.8189 43 49.4566V13.2245C43 12.8622 42.8538 12.6809 42.5614 12.6809H24.8553V13.7678H42.1228V48.913H13.3209V25.3621H12.5898V49.4566C12.5898 49.8189 12.736 49.9999 13.0284 49.9999Z" fill={getIconColor(type)} />
            <path d="M38.4676 26.9927H16.5372C16.2448 26.9927 16.0986 26.8114 16.0986 26.4491C16.0986 26.0868 16.2448 25.9058 16.5372 25.9058H38.4676C38.76 25.9058 38.9062 26.0868 38.9062 26.4491C38.9062 26.6303 38.76 26.9927 38.4676 26.9927Z" fill={getIconColor(type)} />
            <path d="M27.6486 31.522H16.5372C16.2448 31.522 16.0986 31.3407 16.0986 30.9784C16.0986 30.6161 16.2448 30.4351 16.5372 30.4351H27.6486C27.941 30.4351 28.0872 30.6161 28.0872 30.9784C28.0872 31.3407 27.941 31.522 27.6486 31.522Z" fill={getIconColor(type)} />
            <path d="M27.6486 40.7612H16.5372C16.2448 40.7612 16.0986 40.58 16.0986 40.2177C16.0986 39.8553 16.2448 39.6743 16.5372 39.6743H27.6486C27.941 39.6743 28.0872 39.8553 28.0872 40.2177C28.0872 40.58 27.941 40.7612 27.6486 40.7612Z" fill={getIconColor(type)} />
            <path d="M38.4676 36.2322H16.5372C16.2448 36.2322 16.0986 36.0509 16.0986 35.6886C16.0986 35.3263 16.2448 35.1453 16.5372 35.1453H38.4676C38.76 35.1453 38.9062 35.3263 38.9062 35.6886C38.9062 35.8698 38.76 36.2322 38.4676 36.2322Z" fill={getIconColor(type)} />
        </svg>
    )
}