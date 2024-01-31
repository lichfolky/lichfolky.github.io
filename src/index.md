---
layout: home.njk
title: Website
date: 2024-01-13
---

## Ultimi post:

<ul class="posts">
{% assign top_posts = collections.post | reverse %}
{%- for post in top_posts limit:6 -%}
  <a href='{{ post.url }}'>
    <li>{{ post.data.title }}</li>
  </a>
{%- endfor -%}
</ul>

