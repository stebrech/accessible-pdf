---
title: Bild als Block-Element
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 13. Grafiken
description: Bilder in Word-Dokumenten werden beim PDF-Export immer auf Block-Ebene ausgegeben. Dem <Figure> Tag werden keine zusätzliche Attribute mitgegeben, welche es als Block-Element kennzeichnen.
---

Bilder in Word-Dokumenten werden beim PDF-Export immer auf Block-Ebene ausgegeben. Dem `<Figure>` Tag werden keine zusätzliche Attribute mitgegeben, welche es als Block-Element kennzeichnen.

## Problem festgestellt bei der PDF-Konvertierung aus:

- Microsoft Word 2013 für Windows
- Microsoft Word für Mac (mind. bis Version 15.33)

## PAC 3 Warnung

> Mögliche unangebrachte Verwendung des Strukturelements „Figure“

## Prüfpunkt des Matterhorn Protokolls

Ist nicht Bestandteil des Matterhorn Protokolls.

---

## Manueller Lösungsweg in Acrobat

Schnellster und einfachster Weg ist es das `<Figure>` Tag nicht als eigenständiges Block-Element zu behandeln.

Dazu kann das `<Figure>` Tag

- innerhalb des zugehörigen Absatz (`<P>`-Tag) verschoben werden oder
- ein neues `<P>` Tag erstellt werden und das `<Figure>` Tag darin verschoben werden.

Zu beachten gilt, dass die Lesereihenfolge (Reihenfolge der Tags) danach immer noch korrekt ist.

## Manueller Lösungsweg in Acrobat

Füge das „Placement“ Attribut dem `<Figure>` _Tag_ hinzu um es in ein Block-Element umzuwandeln.

1. In den Eigenschaften des `<Figure>` Tags auf „Attributobjekte bearbeiten…“ klicken
2. Auf das Pluszeichen links von „Attributobjekte“ klicken
3. Die nächst untere Ebene „Attributobjekt 1“ markieren und den Button „Neues Element“ klicken
4. Das Dialogfeld wie folgt ausfüllen:
   - Schlüssel: Placement
   - Wert: Block
   - Werttyp: Name
