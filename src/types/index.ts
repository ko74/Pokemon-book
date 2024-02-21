import { ReactElement, ReactNode } from "react"

export interface ThemeButtonProps {
    onClick?: () => void
    color: string | null
}
export interface TopbarProps {
    themeButtonOnClick?: () => void
    getSearchString?: (param: string) => void
    className?: string
}
export interface IModalProps {
    show: boolean;
    children?: JSX.Element | ReactElement | ReactNode | null;
    onClose: () => void | undefined;
    title?: string;
    backdrop?: boolean;
    size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "screen-xl"
    | "screen-2xl"
    | "fullscreen";
    scrollable?: boolean;
    showCloseButton?: boolean;
    staticMode?: boolean;
    autoCloseAfter?: number; // Param in milliseconds
    showBackButton?: boolean;
    onBack?: () => void;
    classes?: string;
    showTitleSection?: boolean;
}
export interface CardProps {
    name: string;
    img: string;
    typeIcon?: string;
    typeText?: string;
    hoverColor?: string | null;
    className?: string;
    showHover?: boolean;
    onView?: () => void

}
export interface SearchProps {
    prepend?: React.ReactNode;
    append?: React.ReactNode;
    showBorder?: boolean;
    classes?: string;
    onSubmit?: (param: string) => void
    onChange?: (param: string) => void
}
export interface IPokemonRequest {
    count?: number;
    next?: string
    previous?: string;
    results?: any[]
}
export interface DataProviderProps {
    children: ReactNode;
}
export interface PokemonContextProps {
    pokemonRequest: IPokemonRequest | null;
}
export interface ThemeContextProps {
    color: string | null;
    setThemeColor: (color: string) => void;
}

export interface CardTypeProps {
    text?: string;
    icon?: string;
}
export interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
}
export interface IPaginationData {
    total: number;
    per_page: number;
    totalPages: number;
    from?: number;
    to?: number;
    initialPage?: number;
}
export interface PaginationProps {
    paginationData?: IPaginationData;
}
export interface IModalStates {
};
export interface TabsProps {
    tabs: string[];
    activeTab: number;
    setActiveTab: React.Dispatch<React.SetStateAction<number>>;
};
export interface PokemonDetailsProps {
    data: any
    onBack: () => void
};
export interface PokemonStatsProps {
    data: any
};
export interface PokemonDetailsAboutProps {
    height: number
    weight: number
    abilities: string[]
};
export interface PokemonDetailsSimilarProps {
    data: any
};
export interface BackButtonProps {
    onClick: () => void
};
export interface ThemeModalProps {
    getThemeColor?: (color: string | null) => void
    closeModal: () => void
};
