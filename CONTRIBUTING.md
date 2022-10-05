# How to contribute

## Create, place and name the markdown file

All documentation file are in `Markdown (.md)` format.  
These files are placed inside the `src/pages/` directory.  
The naming of the files must be in lowercase with `-` between word; the only exception is acronyms.  
Example: `TDR-naming-example.md`

## How to structure the file

The file must start with a front matter in YAML surrounded with two line of three consecutive dashes `---`. Inside this 
section you must define three fields:
- `layout: ../layouts/Layout.astro` to correctly display the file in the website
- `title: Title example` to define the title of the page
- `description: Description example` to define the description of the page 

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