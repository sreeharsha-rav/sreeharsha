import { Separator } from "../ui/separator"
import { Badge } from "../ui/badge";

interface Article {
    title: string;
    url: string;
    tags: string[];
    date: string;
}

const articles: Article[] = [
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

const ArticleCard = ({ article }: { article: Article }) => {
    return (
        <>
            <div className="flex items-center justify-between w-full gap-2">
                <a href={article.url} target="_blank">
                    <h3 className="text-md font-medium hover:font-semibold hover:text-primary hover:underline transition">{article.title}</h3>
                </a>
                <p className="text-primary text-xs flex-shrink-0">
                    {article.date}
                </p>
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
                {article.tags.map((tag) => (
                    <Badge variant="secondary">{tag}</Badge>
                ))}
            </div>
        </>
    );
}

export default function Articles() {
    return (
        <div>
            <h2 className="text-xl font-bold">Articles</h2>
            <div className="flex flex-col">
                <div className="p-4">
                    {articles.map((article) => (
                        // Wrap the two components in a fragment
                        <div key={article.title}>
                            <ArticleCard article={article} />
                            <Separator className="my-4" />
                        </div>
                    ))}
                    {/* TODO: Add more articles view link to dev.to */}
                </div>
            </div>
        </div>
    );
}