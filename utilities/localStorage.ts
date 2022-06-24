export const search =
    typeof window !== 'undefined' ? localStorage?.getItem('search') : null;

export const category = typeof window !== 'undefined' ? localStorage?.getItem('category') : null

export const error =
    typeof window !== 'undefined' ? localStorage?.getItem('placeError') : null;

export const profile = typeof window !== 'undefined' ? localStorage?.getItem('profile') : null
