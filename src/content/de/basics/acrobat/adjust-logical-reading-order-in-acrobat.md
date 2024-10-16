---
title: Logische Lesereihenfolge in Acrobat anpassen
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-09
description: PDF-Tags werden nicht nur benötigt um Inhalten eine semantische Bedeutung zu geben, sondern auch auch um die logische Lesereihenfolge festzulegen. In Acrobat kann die Reihenfolge der Tags im Tagbaum angepasst werden.
order: 3
---

PDF-_Tags_ werden nicht nur benötigt um Inhalten eine semantische Bedeutung zu geben, sondern auch auch um die logische Lesereihenfolge festzulegen. In Acrobat kann die Reihenfolge der _Tags_ im *Tag*baum angepasst werden.

<p class="note">
  Was bedeutet <Link to="/de/glossary/#logische-lesereihenfolge">logische Lesereihenfolge</Link>?
  Erfahre mehr im Glossar.
</p>

<p class="note">
  Softwarehinweis: Um mit den <em>Tags</em> arbeiten zu können, wird der kostenpflichtige 
  <a href="https://acrobat.adobe.com/ch/de/acrobat.html">Adobe Acrobat</a> benötigt. Mit dem
  kostenlosen <a href="https://get.adobe.com/de/reader/">Adobe Acrobat Reader</a> können 
  <em>Tags</em> weder geprüft noch geändert werden.
</p>

## _Tag_ in *Tag*baum verschieben

1. Klicke im Navigationsfenster „Tags“ auf den _Tag_, welcher sich an der falschen Stelle befindet und ziehe in an die richtige Position.
2. Während dem gedrückt halten wird eine schwarze Linie angezeigt und markiert wo der _Tag_ beim Loslassen verschoben wird.
   - Wenn sich der kleine Pfeil der Linie ganz links befindet, wird der _Tag_ beim Loslassen unterhalb und auf gleicher Ebene des darüber angezeigten _Tags_, verschoben.
   - Wenn sich der kleine Pfeil der Linie weiter rechts befindet, wird der _Tag_ beim Loslassen innerhalb des darüber angezeigten _Tags_, verschoben.

<p class="note">
Das Navigationsfenster „Tags“ lässt sich öffnen indem auf das Symbol mit dem Namensschild geklickt wird.
{% image "src/assets/img/tag-icon.png", "Tag Icon in Acrobat" %}
Falls dieses in der linken Leiste noch nicht aufgeführt ist, kann es mit einem Rechtsklick oder unter „Anzeige“ → „Ein-/Ausblenden“ → „Navigationsfenster“ hinzugefügt und das Navigationsfenster angezeigt werden.
</p>

## Sich im *Tag*baum zurechtfinden

Generelle Tipps wie du mit dem *Tag*baum arbeiten kannst, findest du unter [„Generelles Arbeiten mit PDF-_Tags_ in Acrobat“](/de/basics/acrobat/general-working-with-pdf-tags-in-acrobat/).

## Prüfung ausserhalb von Acrobat

Indem der *Tag*baum in Acrobat geprüft wird, kann die logische Lesereihenfolge geprüft werden. Da dies nicht sehr komfortabel und unübersichtlich ist, sollte ein anderes _Tool_ verwendet werden. Der Artikel [„Semantik und logische Lesereihenfolge prüfen“](/de/basics/general/check-semantics-and-logical-reading-order/) zeigt wie diese [manuelle Prüfung](/de/glossary/#manuelle-prüfung) besser gemacht werden kann.
