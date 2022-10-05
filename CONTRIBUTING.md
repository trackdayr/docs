# How to contribute

## Modify an existing page

If you find an error or something missing you can contribute by modifying a page. You can do this by clicking on the 
"Edit this page" link at the bottom of the page. This will take you to the GitHub repository where you can edit the 
page and submit a pull request. You can also directly find the page in this repository under the `src/pages/` folder. 

## Create, place and name the markdown file

All documentation file are in `Markdown (.md)` format.  
These files are placed inside the `src/pages/` directory.  
The naming of the files must be in lowercase with `-` between word; the only exception is acronyms.  
Example: `TDR-naming-example.md`

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