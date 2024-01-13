---
layout: base.njk
title: My title
date: 2024-01-13
---
# Hello! This is my blog!

<ul class="posts">
{%- for post in collections.post -%}
  <li>
  <a href='{{ post.url }}'><h2>{{ post.data.title }}</h2></a></li>
{%- endfor -%}
</ul>

