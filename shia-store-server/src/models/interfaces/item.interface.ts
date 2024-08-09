export interface IItem {
    _id: string;
    mkt: string;
    name: string;
    price: number;
    description: string;
    images: { alt: string, src: string }[];
    ingredients: string[];
    colorSet?: string[];
    quantity: number;
    usageDescription: string,
    tag: string;
    createAt: Date;
    updatedAt: Date;
    isActive: boolean;
}