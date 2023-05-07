import { EPageTitleFilterKind } from "../page-title-filter/types";

export type TSideNavigation = {
    items: EPageTitleFilterKind[];
    onClick?: ((viewType: EPageTitleFilterKind) => void);
    activeLink: EPageTitleFilterKind
}