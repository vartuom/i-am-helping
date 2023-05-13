import { EPageTitleFilterKind } from "../PageTitleFilter/types";

export type TSideNavigation = {
    items: EPageTitleFilterKind[];
    onClick?: ((viewType: EPageTitleFilterKind) => void);
    activeLink: EPageTitleFilterKind,
    map?: string,
    active?: string,
    completed?: string,
}