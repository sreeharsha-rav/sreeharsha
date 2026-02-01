export interface DevToArticle {
    id: number;
    title: string;
    description: string;
    url: string;
    tags: string[];
    cover_image: string | null;
    social_image: string | null;
    published_at: string;
    reading_time_minutes: number;
}

export async function getDevToArticles(): Promise<DevToArticle[]> {
    const username = import.meta.env.DEVTO_USERNAME;
    const apiKey = import.meta.env.DEVTO_API_KEY;

    if (!username) {
        console.warn("DEVTO_USERNAME is not defined in environment variables.");
        return [];
    }

    const headers: HeadersInit = {
        "User-Agent": "Portfolio-Site"
    };

    if (apiKey) {
        headers["api-key"] = apiKey;
    }

    try {
        const response = await fetch(
            `https://dev.to/api/articles?username=${username}`,
            { headers }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch Dev.to articles: ${response.statusText}`);
        }

        const rawArticles = await response.json();

        // Map raw response to DevToArticle interface, ensuring tags is an array
        const articles: DevToArticle[] = rawArticles.map((article: any) => ({
            id: article.id,
            title: article.title,
            description: article.description,
            url: article.url,
            // Dev.to returns 'tag_list' as array, 'tags' as comma-separated string
            tags: Array.isArray(article.tag_list) ? article.tag_list : [],
            cover_image: article.cover_image,
            social_image: article.social_image,
            published_at: article.published_at,
            reading_time_minutes: article.reading_time_minutes
        }));

        return articles;
    } catch (error) {
        console.error("Error fetching Dev.to articles:", error);
        return [];
    }
}
