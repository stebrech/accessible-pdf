---
title: Artefakte in Word festlegen
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2020-12-09
description: Dekorative und unwichtige Informationen müssen als Artefakt gekennzeichnet werden damit sie von assistiver Technologie (AT) ignoriert werden. Der effizienteste Weg ist es Artefakte bereits in Word zu bestimmen und beim PDF-Export mitzugeben.
order: 4
---

Dekorative und unwichtige Informationen müssen als Artefakt gekennzeichnet werden damit sie von [assistiver Technologie (AT)](/de/glossary/#assistive-technologie) ignoriert werden. Der effizienteste Weg ist es Artefakte bereits in Word zu bestimmen und beim PDF-Export mitzugeben.

<p class="note">
  Erfahre im Glossar was <Link to="/de/glossary/#Artefakt/">Artefakte</Link> sind und was Beispiele
  davon sind.
</p>

## Seitenbezogene Artefakte in Word

Seitenzahlen, Kolumnentitel, etc. werden durch Word beim Export als Artefakte gekennzeichnet, sofern sie im Dokument im Kopf- und der Fusszeile platziert wurden.

Dies bedeutet also auch, dass inhaltlich relevante Inhalte nicht in der Kopf- oder der Fusszeile stehen dürfen. Wenn beispielsweise der Titel nur in der Kopfzeile vorhanden ist, wird er auch nicht ausgegeben.

## Dekorative Artefakte in Word

In neueren 365-Versionen von Microsoft Word können Bilder als dekorativ markiert werden. Dies bewirkt, dass beim PDF-Export das markierte Bild als Artefakt gekennzeichnet wird.

![Markiertes Optionsfeld „Als dekorativ markieren“. Bildschirmfoto aus Word.](src/assets/img/word-als-dekorativ-markieren.png)

In älteren Versionen besteht diese Möglichkeit leider nicht. Wie dies in Acrobat nachgearbeitet wird, kannst du in „[Artefakte in Acrobat erstellen und prüfen](/de/basics/acrobat/create-and-check-artifacts-in-acrobat/)“ nachlesen.

### Plugin axesPDF for Word

Abhilfe kann hier aber das Plugin [axesPDF for Word](https://www.axes4.com/axespdf-for-word-ueberblick.html) schaffen. Damit lassen sich, wie dies in neueren Word-Version nativ möglich ist, auch in älteren Versionen Objekte als Artefakte festlegen.

![axesPDF Rollenzuordnung mit ausgewählter Option „Artefakt“, welches auf ein Bild angewendet wurde. Bildschirmfoto des Plugins.](src/assets/img/axespdf-artefakt.png)
