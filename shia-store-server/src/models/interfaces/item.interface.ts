export interface IItem {
    _id: string;
    name: string;
    price: number;
    description: string;
    images: { alt: string, src: string }[];
    ingredients: string[];
    colorSet: string[];
    inStock: number;
    tag: string;
    createAt: Date;
    updatedAt: Date;
    isActive: boolean;
}