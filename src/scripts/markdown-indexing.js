import dotenv from 'dotenv';
import fs from 'fs';
import matter from 'gray-matter';
import algoliasearch from 'algoliasearch';
import {indexingExcludedPages} from '../config.js';

dotenv.config();

const pages = fs.readdirSync('src/pages').filter(fn => fn.endsWith('.md') && !indexingExcludedPages.includes(fn));
console.log(pages);

const objects = pages.map(page => {
    const fileContents = fs.readFileSync(`src/pages/${page}`, 'utf8');
    const {data, content} = matter(fileContents);
    delete data.layout;
    const path = page.replace('.md', '');
    let slug = path === 'docs/index' ? 'docs' : path;
    slug = "/" + slug + "/";
    return {
        slug,
        content,
        frontmatter: {
            ...data
        }
    };
})
console.log(objects);

const client = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_ADMIN_KEY,
);
const index = client.initIndex('markdown-pages');
index.saveObjects(objects, {
    autoGenerateObjectIDIfNotExist: true
});