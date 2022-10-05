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
These files are placed inside the `src/pages/` directory.  
The naming of the files must be in lowercase with `-` between words.  

Example: `naming-example.md`

## Add the page to the sidebar

To add the page to the sidebar, you need to modify the configuration file located in `src/config.ts`. In this file you
will find the `sidebar` object. This object contains the different sections of the sidebar. Each section contains a 
page object with two fields: `title` and `filename`. The `title` field is the title of the page and the `filename` 
field is the name of the file you have created without extension.

Example:
``` ts
export const sidebar = {
    'Category 1': [
        {
            title: 'Title 1',
            filename: 'filename-1',
        },
        {
            title: 'Title 2',
            filename: 'filename-2',
        },
    ],
    'New category': [
        {
            title: 'My new documentation page',
            filename: 'my-new-documentation-page',
        },
    ],
}
```

## How to structure the file

The file must start with a front matter in YAML surrounded with two line of three consecutive dashes `---`. Inside this 
section you must define three fields:

| Field       | Value                   | Description                                  |
|-------------|-------------------------|----------------------------------------------|
| layout      | ../layouts/Layout.astro | add this value to correctly display the page |
| title       | { page title }          | define the title of the page                 |
| description | { page description }    | define the description of the page           |

After you can start writing the content using Markdown syntax.  
It is good practice to structure the content with headings as they will be easily accessible in the page. Please don't 
use the `#` heading as it is reserved for the title of the page.  

Example:
```md
---
layout: ../layouts/Layout.astro
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

For more reference please watch the files present in the repository.

## How to add images

To add images to the documentation you must place them inside the `src/assets/images/` directory.
Then you can reference them in the markdown file using the following syntax:  
`![Image description](/assets/images/image-name.extension "Image title")`

## Test your changes

You can test your changes by running the website locally.  
In order to do that you must have [Node.js](https://nodejs.org/en/) installed on your machine 
([yarn](https://classic.yarnpkg.com/en/docs/install) is used but optional).  
Then you can follow these steps:
1. Run `npm install` or `yarn install` to install the dependencies
2. Run `npm run dev` or `yarn dev` to start the development server
3. Open your browser at `http://localhost:3000/`
4. Make your changes and your browser will automatically refresh with the new content
