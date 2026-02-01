import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { HOME } from "@consts";
import { getDevToArticles } from "@lib/devto";

type Context = {
  site: string
}

export async function GET(context: Context) {
  const blog = (await getCollection("blog"))
    .filter(post => !post.data.draft);

  const projects = (await getCollection("projects"))
    .filter(project => !project.data.draft);

  const devtoPosts = await getDevToArticles();

  const items = [...blog, ...projects, ...devtoPosts]
    .sort((a, b) => {
      const dateA = new Date("data" in a ? a.data.date : a.published_at).valueOf();
      const dateB = new Date("data" in b ? b.data.date : b.published_at).valueOf();
      return dateB - dateA;
    });

  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: items.map((item) => {
      if ("data" in item) {
        return {
          title: item.data.title,
          description: item.data.description,
          pubDate: item.data.date,
          link: `/${item.collection}/${"slug" in item ? item.slug : item.id}/`,
        };
      } else {
        return {
          title: item.title,
          description: item.description,
          pubDate: new Date(item.published_at),
          link: item.url,
        };
      }
    }),
  });
}
