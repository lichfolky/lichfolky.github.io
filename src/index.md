---
layout: base.njk
title: My title
date: 2024-01-13
---
# M.Folcarelli

Insegno con metodi innovativi a programmare e ad esprimersi nel mondo digitale.

Mi piace concentrarmi sulle intersezioni e temi che solitamente vengono trascurati. Uno dei miei abbinamenti preferiti è tra sviluppo web, design, etica digitale e accessibilità inclusiva, perché penso che sia essenziale promuovere discipline digitali più responsabili, basate sui bisogni dell'utente e con una forte e sensibile componente umana.

È importante essere competenti in ciò che insegni, ma ancora più importante essere competenti nell’insegnare. Cerco di raggiungere questo obiettivo con una continua ricerca e sperimentazione di nuovi metodi innovativi basati sulla collaborazione, gioco e storytelling e usando nuove forme e tipologie di contenuti.

Ho una grande passione per i giochi di ruolo e i giochi da tavolo, soprattutto quelli più creativi.

<ul class="posts">
{%- for post in collections.post -%}
  <li>
  <a href='{{ post.url }}'><h2>{{ post.data.title }}</h2></a></li>
{%- endfor -%}
</ul>

