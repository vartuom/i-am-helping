import { TIconProps, getIconColor } from "../utils"

export const EmptyMessageIcon = ({type}: TIconProps) => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.59781 18H4.50001C4.40218 18 4.30434 17.9021 4.30434 17.7065V13.9892H0.293466C0.0978142 13.9892 0 13.8913 0 13.6956V0.293526C0 0.0978737 0.0978142 0 0.293466 0H17.7065C17.9022 0 18 0.0978737 18 0.293526V13.6956C18 13.8913 17.9022 13.9892 17.7065 13.9892H9.09782L4.79347 17.9022C4.69565 17.9022 4.59781 18 4.59781 18ZM0.489131 13.4022H4.50001C4.69566 13.4022 4.79347 13.5 4.79347 13.6956V17.1195L8.70652 13.5C8.80434 13.5 8.80436 13.4022 8.90218 13.4022H17.3152V0.586932H0.489131V13.4022Z" fill={getIconColor(type)} />
        </svg>

    )
}