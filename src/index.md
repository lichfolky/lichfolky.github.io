---
layout: base.njk
title: My title
---
# Hello! This is my blog!

<ul class="posts">
{%- for post in collections.post -%}
  <li>
  <a href={{ post.url }}><h2>{{ post.data.title }}</h2></a></li>
{%- endfor -%}
</ul>

