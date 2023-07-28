export interface postsType {
    id: number;
    title: string;
    imageUrl: string;
    body: string;
}

export interface commentsType {
    id: number;
    postId: number;
    email: string;
    body: string;
}
