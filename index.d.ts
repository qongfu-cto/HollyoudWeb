type response = {
    status: number;
    data: string | any;
};

type ApiResponse<DataType> = {
    status: number;
    data?: DataType;
    error?: any;
};

type stepperFlow = {
    title: string;
    subTitle: string;
    component:
        | React.ReactElement[]
        | JSX.Element[]
        | React.ReactElement
        | JSX.Element;
    headerButton: "closeButton" | "backButton" | undefined;
    height?: number | string;
    direction?: "column";
    onClick?: () => void;
    onSkip?: () => void;
    error?: string;
    next?: boolean
};

type SearchTypes = "place" | "property";

type categoryObject = {
    _id: string;
    name: string;
    displayName: string;
    level: number;
    icons: {
        iconId: {
          _id: string;
          name: string;
          svgData: string;
        };
        type: string;
        _id: string;
      }[];
    children: categoryObject[];
    types: string[];
    tags: string[];
    __v: number;
    parents: string[];
};

interface NavItemProps {
    data: categoryObject;
    isNested?: boolean;
    onClick: (id: string, isSubMenu: boolean, parentId?: string) => void;
    selectedId: number | string;
    isSubMenuSelected?: boolean;
    isLast?: boolean;
    activeId?: null | string| number;
    setActiveId: (id:  string|null|number) => void;
    nestedMenu?: any[];
    subMenuParent?:string
    category?:LocaleStorageCategory
}

interface NestedToolTipProps extends NavItemProps {
    selected?: boolean;
    mouseLeave: () => void;

}


interface NavToolTipProps extends NavItemProps {
    selected?: boolean;
    mouseLeave?: () => void;
    isNested?: boolean;
    isLast?: boolean;
}

interface searchResultsProps {
    _id: string;
    name: string;
    official: boolean;
    users: [];
    displayName:string
    taglinkType: string;
    tagLinkId: string;
    tagLink: {
        location:string
        name: string;
        image: string;
        type: string;
        level: number;
        parents: { parentId: string; level: number }[];
    };
    tags: [];
}

type SideBarData = { id: number; title: string; activeLogo: string; inactiveLogo: string; }

type navListObject = {
    id: number;
    label: string;
    title: string;
    description: string;
    tabPage: boolean;
    route: string
    component: React.ReactElement;
};

interface LocaleStorageCategory{
        id: string;
        subCategory: string;
        subCategoryId: string;
        topCategory: string;
        topCategoryName: string;
        topCategoryIcon:string,
        type:"places" |"properties"
}

interface localStorageSearch{
    id: string;
    searchText: string;
    category: string;
    type: string;
    mainCategoryType: string;
    myPlace?:boolean
  };