---
ID: 58369
post_title: Artefakte in InDesign festlegen
author: Stefan Brechbühl
post_excerpt: >
  Dekorative und seitenbezogene
  Informationen müssen als Artefakt
  gekennzeichnet werden damit sie von
  assistierender Technologie ignoriert
  werden. Artefakte können bereits in
  InDesign definiert und ins PDF
  übertragen werden.
layout: basics
permalink: >
  https://accessible-pdf.info/de/basics/artefakte-in-indesign-festlegen/
published: true
post_date: 2019-12-13 21:32:42
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

<p class="note-block" markdown="1">
Grafische Formen und Linien, die **keinen Alternativtext** enthalten, werden automatisch als Artefakt gekennzeichnet. Für solche Elemente ist somit die Verwendung der Objektexportoptionen nicht nötig.
</p>

### Dekorative Artefakte mit dem Plugin MadeToTag

Wer das InDesign Plugin [MadeToTag](https://www.axaio.com/doku.php/de:products:madetotag) besitzt, kann sich die Kennzeichnung über die Objektexportoptionen sparen. Alle Objekte, welche ausserhalb eines Artikels sind, werden automatisch als Artefakt markiert.