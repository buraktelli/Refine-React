export interface IPost {
    id: string;
    title: string;
    status: "published" | "draft" | "rejected";
    category: { id: string };
    createdAt: string;
}

export interface ICategory {
    id: string;
    title: string;
}