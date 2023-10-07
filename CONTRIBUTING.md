# How to contribute

First of all thank you for showing interest in contributing to this documentation.  
If you are new to GitHub contributions please read this
[guide](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).  
If you need help with writing markdown please read this [guide](https://www.markdownguide.org/basic-syntax/).
If you are already conformable with these tools, you can skip to the next section to learn about project guidelines.

## Modify an existing page

If you find an error or something missing you can contribute by modifying a page. You can do this by clicking on the
"Edit this page" link at the bottom of the page. This will make you start the fork process described in the guide
above.  
You can also directly fork the repository and start to work from there.

## Create, place and name the markdown file

All documentation file are in `Markdown (.md)` format.  
These files are placed inside the `src/content/docs/` directory.  
The naming of the files must be in lowercase with `-` between words.
Example: `naming-example.md`.  
The files are placed in subdirectories to organize the content in the same way as the sidebar.

## Add the page to the sidebar

If the category of the page already exists in the sidebar the page will be automatically added to it.  
If the category doesn't exist you must add it to the sidebar.
Please refer to the [sidebar documentation](https://starlight.astro.build/guides/sidebar/) for more information.

## How to structure the file

The file must start with a front matter in YAML surrounded with two line of three consecutive dashes `---`. Inside this
section you must define three fields:

| Field       | Value                   | Description                                               |
|-------------|-------------------------|-----------------------------------------------------------|
| title       | { page title }          | define the title of the page and the label in the sidebar |
| description | { page description }    | define the description of the page                        |

For more information about the front matter and other fields please refer to the
[front matter documentation](https://starlight.astro.build/reference/frontmatter/).

After you can start writing the content using Markdown syntax.  
It is good practice to structure the content with headings as they will be easily accessible in the page. Please don't
use the `#` heading as it is reserved for the title of the page.

Example:
```md
---
title: Title example
description: Description example
---

## Argument 1

Content 1  
Content 1  
Content 1  

## Argument 2

Content 2  
Content 2  
Content 2  
```

For more info please visit the [authoring documentation](https://starlight.astro.build/guides/authoring-content/) or 
reference the files present in the repository.

## How to add images

To add images to the documentation you must place them inside the `src/assets/images/` directory.
Then you can reference them in the markdown file using the following syntax:  
`![Image description](/assets/images/image-name.extension "Image title")`

## Test your changes

You can test your changes by running the website locally.  
In order to do that you must have [Node.js](https://nodejs.org/en/) installed on your machine.  
Then you can follow these steps:
1. Run `npm install` to install the dependencies
2. Run `npm run dev` to start the development server
3. Open your browser at `http://localhost:4321/`
4. Make your changes and your browser will automatically refresh with the new content