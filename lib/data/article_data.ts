interface Article {
    title: string;
    url: string;
    tags: string[];
    date: string;
}

const articles_data: Article[] = [
    {
        title: "NeoChat: A Context-Aware RAG Chatbot Starter",
        url: "https://dev.to/sraveend/neochat-a-context-aware-rag-chatbot-starter-kit-19bf",
        tags: ["typescript", "RAG", "AI", "Langchain", "Vue", "Full-Stack"],
        date: "Sept 2024",
    },
    {
        title: "The Power of Pipes: Streamlining Data Flow in Backend Development",
        url: "https://dev.to/sraveend/the-power-of-pipes-streamlining-data-flow-in-backend-development-nhh",
        tags: ["typescript", "nodejs", "backend"],
        date: "Aug 2024",
    },
    {
        title: "Building a Scalable AI Translator with Next.js Pt 1",
        url: "https://dev.to/sraveend/building-a-scalable-ai-translator-with-nextjs-pt-1-leveraging-composition-and-custom-hooks-gla",
        tags: ["react", "nextjs", "frontend", "ai"],
        date: "Aug 2024",
    },
    {
        title: "Basic React Design Patterns: A practical look with Tic Tac Toe",
        url: "https://dev.to/sraveend/basic-react-design-patterns-a-practical-look-with-tic-tac-toe-3c76",
        tags: ["react", "design patterns", "frontend", "typeScript"],
        date: "July 2024",
    },
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
