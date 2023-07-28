import { postsType, commentsType } from "./dataInterface"

// lista de posts
export const posts: postsType[] = [
    {
        id: 1,
        title: "Novo smartphone XYZ lançado com tecnologia inovadora",
        imageUrl: "https://source.unsplash.com/409x273/?technology",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius, dui sit amet cursus scelerisque, felis ligula suscipit velit, vel luctus neque ex id ex."
    },
    {
        id: 2,
        title: "Empresa ABC anuncia avanço na inteligência artificial",
        imageUrl: "https://source.unsplash.com/409x273/?technology",
        body: "Praesent a venenatis sapien. Morbi ut vestibulum magna, quis bibendum nisl. Suspendisse nec tellus in libero sollicitudin dictum."
    },
    {
        id: 3,
        title: "Realidade aumentada transformando a indústria dos games",
        imageUrl: "https://source.unsplash.com/409x273/?technology",
        body: "Donec eu urna nec lectus venenatis suscipit vel eget sapien. Nullam ultricies tincidunt velit, in efficitur velit vulputate nec."
    },
    {
        id: 4,
        title: "Internet 6G: A próxima revolução da conectividade",
        imageUrl: "https://source.unsplash.com/409x273/?technology",
        body: "Curabitur eu diam ac risus luctus blandit nec id sapien. Sed ac lacus eget purus laoreet sollicitudin."
    },
    {
        id: 5,
        title: "Novo dispositivo wearable promete monitoramento avançado da saúde",
        imageUrl: "https://source.unsplash.com/409x273/?technology",
        body: "Phasellus ultrices, odio a facilisis malesuada, quam orci elementum nunc, at blandit justo justo sit amet mauris."
    },
    {
        id: 6,
        title: "Carros autônomos: A tecnologia do futuro presente",
        imageUrl: "https://source.unsplash.com/409x273/?technology",
        body: "Maecenas et orci nulla. Nullam eu odio quam. Sed ut lectus id nunc volutpat laoreet ac eu elit."
    }
]

// lista de comentarios
export const comments: commentsType[] = [
    {
        id: 1,
        postId: 1,
        email: "usuário_1@email.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 2,
        postId: 1,
        email: "usuário_2@email.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 3,
        postId: 1,
        email: "usuário_3@email.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 4,
        postId: 2,
        email: "usuário_1@email.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 5,
        postId: 2,
        email: "usuário_2@email.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 6,
        postId: 2,
        email: "usuário_3@email.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 7,
        postId: 3,
        email: "usuário_1@email.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 8,
        postId: 3,
        email: "usuário_2@email.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 9,
        postId: 3,
        email: "usuário_3@email.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 10,
        postId: 4,
        email: "usuário_1@email.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 11,
        postId: 4,
        email: "usuário_2@email.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 12,
        postId: 4,
        email: "usuário_3@email.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 13,
        postId: 5,
        email: "usuário_1@email.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 14,
        postId: 5,
        email: "usuário_2@email.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 15,
        postId: 5,
        email: "usuário_3@email.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 16,
        postId: 6,
        email: "usuário_1@email.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 17,
        postId: 6,
        email: "usuário_2@email.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 18,
        postId: 6,
        email: "usuário_3@email.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
]
