interface Article {
    title: string;
    url: string;
    tags: string[];
    date: string;
}

const articles_data: Article[] = [
    {
        title: "A Photo Caption API",
        url: "https://dev.to/sraveend/a-photo-caption-api-f90",
        tags: ["typescript", "backend", "REST", "API"],
        date: "Jun 2024",
    },
    {
        title: "Simplifying Authentication with JWT, TypeScript and Fastify",
        url: "https://dev.to/sraveend/simplifying-authentication-with-jwt-typescript-and-fastify-1dc9",
        tags: ["typescript", "backend", "fastify", "jwt"],
        date: "Jun 2024",
    },
    {
        title: "Unlocking Code Reusability and Flexibility with Upcasting in Java",
        url: "https://dev.to/sraveend/unlocking-code-reusability-and-flexibility-with-upcasting-in-java-1c71",
        tags: ["java", "oop"],
        date: "Feb 2024",
    }
];

export default articles_data;