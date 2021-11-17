export interface IPost {
    id: string;
    title: string;
    status: "published" | "draft" | "rejected";
    category: { id: string };
    createdAt: string;
}
export interface ILayer {
    id: string;
    name: string;
    alias: string;
    style_id: number;
}

export interface ICategory {
    id: string;
    title: string;
}