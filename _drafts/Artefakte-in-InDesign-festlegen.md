---
ID: 58369
post_title: Artefakte in InDesign festlegen
author: Stefan Brechbühl
post_excerpt: ""
layout: basics
permalink: 'https://accessible-pdf.info/?post_type=basics&p=58369'
published: false
tags: [ ]
categories: [ ]
---
Nutzerinnen und Nutzer von [assistierender Technologie (AT)](https://accessible-pdf.info/de/glossar/#assistive-technologie) sind nicht nur auf semantisch korrekte *Tags* angewiesen. Es ist auch wichtig dekorative, nicht relevante Objekte von der Ausgabe auszuschliessen. Dies wird erreicht indem solche unwichtige Elemente als Artefakt gekennzeichnet werden.

Als unwichtig zählen seitenbezogene Informationen, beispielsweise:

- Seitennummerierungen
- Wiederholende Informationen in Kopf- und Fusszeilen

Weitere unwichtige, rein dekorative Objekte sind beispielsweise:

- Hintergrundbilder
- Symbolbilder
- diverse Formen von Linien 
	- zur Dekoration
	- zur Trennung von Textspalten 
	- Tabellenlinien

Der effizienteste Weg ist es die Artefakte bereits im Erstellungsprogramm zu bestimmen und beim PDF-Export mitzugeben.

## Seitenbezogene Artefakte in InDesign

Seitenzahlen, Kolumnentitel, etc. werden durch InDesign automatisch beim Export als Artefakte gekennzeichnet, wenn sie auf einer Musterseite platziert wurden.

Dies bedeutet also auch, dass inhaltlich relevante Inhalte nicht  auf einer Musterseite stehen dürfen. Wenn beispielsweise der Titel nur auf einer Musterseite vorhanden ist, wird er auch nicht ausgegeben.

Alternativ können Texte auch mittels einem dafür eingerichteten Absatzformat als Artefakt gekennzeichnet werden. Dafür muss in den Absatzformatoptionen die Auswahl „Artifact“ in „Tagsexport“ getroffen werden, siehe dazu auch [„PDF-*Tags* in InDesign festlegen“](https://accessible-pdf.info/de/basics/pdf-tags-in-indesign-festlegen/).

## Dekorative Artefakte in InDesign

Dekorative Objekte können mit „Objekt“ → „Objektexportoptionen“ als Artefakt gekennzeichnet werden. Wechsle dazu im Fenster auf den Tab „PDF mit *Tags*“ und wähle „*Tag* anwenden: Aussertextliches Element“.

### Dekorative Artefakte mit dem Plugin MadeToTag

Wer das InDesign Plugin [MadeToTag](https://www.axaio.com/doku.php/de:products:madetotag) besitzt, braucht nicht zwingend alle Artefakt zu kennzeichnen. Alle Objekte, welche ausserhalb eines Artikels sind, werden automatisch als Artefakt markiert.