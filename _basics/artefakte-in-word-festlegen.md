---
ID: 58370
post_title: Artefakte in Word festlegen
author: Stefan Brechbühl
post_excerpt: >
  Dekorative und seitenbezogene
  Informationen müssen als Artefakt
  gekennzeichnet werden damit sie von
  assistierender Technologie ignoriert
  werden. Artefakte können bereits in
  Word definiert und ins PDF übertragen
  werden.
layout: basics
permalink: >
  https://accessible-pdf.info/de/basics/artefakte-in-word-festlegen/
published: true
post_date: 2019-12-13 21:31:08
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

## Seitenbezogene Artefakte in Word

Seitenzahlen, Kolumnentitel, etc. werden durch Word beim Export als Artefakte gekennzeichnet, sofern sie im Dokument im Kopf- und der Fusszeile platziert wurden.

Dies bedeutet also auch, dass inhaltlich relevante Inhalte nicht in der Kopf- oder der Fusszeile stehen dürfen. Wenn beispielsweise der Titel nur in der Kopfzeile vorhanden ist, wird er auch nicht ausgegeben.

## Dekorative Artefakte in Word

In neueren 365-Versionen von Microsoft Word können Bilder als dekorativ markiert werden. Dies bewirkt, dass beim PDF-Export das markierte Bild als Artefakt gekennzeichnet wird.

![Markiertes Optionsfeld „Als dekorativ markieren“. Bildschirmfoto aus Word.](https://accessible-pdf.info/content/uploads/word-als-dekorativ-markieren.png)

In älteren Versionen besteht diese Möglichkeit leider nicht. Wie dies in Acrobat nachgearbeitet wird, kannst du in „[Artefakte in Acrobat erstellen und prüfen](https://accessible-pdf.info/de/artefakte-in-acrobat-erstellen-und-pruefen)“ nachlesen.

### Plugin axesPDF for Word

Abhilfe kann hier aber das Plugin [axesPDF for Word](https://www.axes4.com/axespdf-for-word-ueberblick.html) schaffen. Damit lassen sich, wie dies in neueren Word-Version nativ möglich ist, auch in älteren Versionen Objekte als Artefakte festlegen.

![axesPDF Rollenzuordnung mit ausgewählter Option „Artefakt“, welches auf ein Bild angewendet wurde. Bildschirmfoto des Plugins.](https://accessible-pdf.info/content/uploads/axespdf-artefakt.png)