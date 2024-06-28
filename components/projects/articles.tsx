import { Separator } from "../ui/separator"
import { Badge } from "../ui/badge";
import articles_data from "@/lib/data/article_data";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

interface Article {
    title: string;
    url: string;
    tags: string[];
    date: string;
}

const ArticleCard = ({ article }: { article: Article }) => {
    
    return (
        <>
            <div className="flex items-center justify-between w-full gap-2">
                <a href={article.url} target="_blank">
                    <div className="flex items-center gap-2 hover:font-semibold hover:text-primary hover:underline transition">
                        <h3 className="text-md font-medium">{article.title}</h3>
                        {/* <ExternalLinkIcon className="w-4 h-4" /> */}
                    </div>
                </a>
                <p className="text-primary text-xs flex-shrink-0">
                    {article.date}
                </p>
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
                {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
            </div>
        </>
    );
}

export default function Articles() {
    const articles = articles_data;

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