export interface IPost {
    id: string;
    title: string;
    status: "published" | "draft" | "rejected";
    category: { id: string };
    createdAt: string;
}
export interface UserLoginModel {
    username: string;
    password: string;
    remember: boolean;
}
export interface ICategory {
    id: string;
    title: string;
}
export interface ILayer {
    id: string;
    name: string;
    alias: string;
    style_id: number;
}