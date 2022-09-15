# About

There is a new minor version of Laravel almost every week. Also it includes a new feature very often which is not in Laravel documentation yet or is very poorly documented.

A lot of those features can be handy and that's the purpose of this website - to contains all undocumented or poorly documented features which we can use in our projects.

This project is open source and anybody can add a new feature, just create a new pull request. The purpose of this website is purely to help other developers. Any comments or feedbacks are welcome.

## Post

You can contribute with any method which is still not documented in official Laravel docs. Just create a new pull request, fill frontmatter and add your description.

### Frontmatter

Frontmatter follows [Hugo's standards](https://gohugo.io/content-management/front-matter/).

Currently 7 fields are required.

```
title
date (in format yyyy-mm-dd)
lastmod
version
link
tags
summary
```

Here's an example of a post's frontmatter:

```
---
title: 'through'
date: '2022-09-01'
lastmod: '2022-09-20'
version: 8.9.0
tags: ['pagination']
summary: 'It transforms each item in the slice of items using a callback, and keeps the items paginated.'
link: 'https://github.com/laravel/framework/pull/34657'
---
```

## Licence

[MIT](https://github.com/jerryklimcik/laravel-missing-docs/blob/main/LICENSE) ©
