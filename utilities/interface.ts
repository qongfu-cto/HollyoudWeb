export type status = 'ACTIVE' | 'OFFLINE';

export interface userData {
    name: string,
    status: status
    avatar?: string,
}

export type Sizes = "small" | "medium" | "large";

export interface RatingProps {
    size: Sizes;
    rating?: number
    color?: string;
}

export type RatingStylesProps = Pick<RatingProps, "color" | "size">;
