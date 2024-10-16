---
title: Artefakte in InDesign festlegen
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2020-12-09
description: Dekorative und unwichtige Informationen müssen als Artefakt gekennzeichnet werden damit sie von assistiver Technologie (AT) ignoriert werden. Der effizienteste Weg ist es Artefakte bereits in InDesign zu bestimmen und beim PDF-Export mitzugeben.
order: 4
---

Dekorative und unwichtige Informationen müssen als Artefakt gekennzeichnet werden damit sie von [assistiver Technologie (AT)](/de/glossary/#assistive-technologie) ignoriert werden. Der effizienteste Weg ist es Artefakte bereits in InDesign zu bestimmen und beim PDF-Export mitzugeben.

<p class="note">
  Erfahre im Glossar was <Link to="/de/glossary/#Artefakt/">Artefakte</Link> sind und was Beispiele
  davon sind.
</p>

## Seitenbezogene Artefakte in InDesign

Seitenzahlen, Kolumnentitel, etc. werden durch InDesign automatisch beim Export als Artefakte gekennzeichnet, wenn sie auf einer Musterseite platziert wurden.

Dies bedeutet also auch, dass inhaltlich relevante Inhalte nicht auf einer Musterseite stehen dürfen. Wenn beispielsweise der Titel nur auf einer Musterseite vorhanden ist, wird er auch nicht ausgegeben.

Alternativ können Texte auch mittels einem dafür eingerichteten Absatzformat als Artefakt gekennzeichnet werden. Dafür muss in den Absatzformatoptionen die Auswahl „Artifact“ in „Tagsexport“ getroffen werden, siehe dazu auch [„PDF-_Tags_ in InDesign festlegen“](/de/basics/indesign/defining-pdf-tags-in-indesign/).

## Dekorative Artefakte in InDesign

Dekorative Objekte können mit „Objekt“ → „Objektexportoptionen“ als Artefakt gekennzeichnet werden. Wechsle dazu im Fenster auf den Tab „PDF mit _Tags_“ und wähle „_Tag_ anwenden: Aussertextliches Element“.

<p class="note">
  Grafische Formen und Linien, die <strong>keinen Alternativtext</strong> enthalten, werden
  automatisch als Artefakt gekennzeichnet. Für solche Elemente ist somit die Verwendung der
  Objektexportoptionen nicht nötig.
</p>

### Dekorative Artefakte mit dem Plugin MadeToTag

Wer das InDesign Plugin [MadeToTag](https://www.axaio.com/doku.php/de:products:madetotag) besitzt, kann sich die Kennzeichnung über die Objektexportoptionen sparen. Alle Objekte, welche ausserhalb eines Artikels sind, werden automatisch als Artefakt markiert.
