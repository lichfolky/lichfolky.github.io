---
layout: home.njk
title: M.Folcarelli
date: 2024-01-13
---

## Ultimi post:

<ul class="posts">
{% assign top_posts = collections.post | reverse %}
{%- for post in top_posts limit:5 -%}
  <a href='{{ post.url }}'>
    <li>{{ post.data.title }}</li>
  </a>
{%- endfor -%}
</ul>

