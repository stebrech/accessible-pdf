---
ID: 58368
post_title: >
  Artefakte in Acrobat erstellen und
  prüfen
author: Stefan Brechbühl
post_excerpt: ""
layout: basics
permalink: 'https://accessible-pdf.info/?post_type=basics&p=58368'
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

Der effizienteste Weg ist es die Artefakte bereits im Erstellungsprogramm zu bestimmen und beim PDF-Export mitzugeben. Hierzu stehen folgende Anleitungen zur Verfügung:

- [Artefakte in InDesign festlegen](https://accessible-pdf.info/de/basics/artefakte-in-indesign-festlegen/)
- [Artefakte in Word festlegen](https://accessible-pdf.info/de/basics/artefakte-in-word-festlegen/)

In Acrobat können Artefakte entweder [im *Tagbaum*](#tagbaum) oder mit [dem Leserichtung-Werkzeug](#leserichtung) definiert werden. Welche Inhalte als Artefakte gekennzeichnet wurden, können im [Navigationsfenster „Inhalt“ je Seite geprüft](#inhalt) werden.

<aside class="note-block" markdown="1">
Softwarehinweis: Um mit *Tags* und Artefakten arbeiten zu können, wird der kostenpflichtige [Adobe Acrobat](https://acrobat.adobe.com/ch/de/acrobat.html) benötigt. Mit dem kostenlosen [Adobe Acrobat Reader](https://get.adobe.com/de/reader/) können diese weder geprüft noch geändert werden.
</aside>

### Artefakt in Navigationsfenster *Tags* erstellen {#tagbaum}

<aside id="tags" class="note-block" markdown="1">
Bei dieser Anleitung ist die Ausgangslage ein vollständig *getaggtes* Dokument.
</aside>

1. Öffne das Navigationsfenster „Tags“ 
2. Suche dir den dekorativen Inhalt innerhalb der Tags, siehe dazu auch „[Getaggter Text im Tagbaum finden](https://accessible-pdf.info/de/basics/generelles-arbeiten-mit-pdf-tags-in-acrobat/#tagfinden)“ innerhalb von „[Generelles Arbeiten mit PDF-Tags in Acrobat](https://accessible-pdf.info/de/basics/generelles-arbeiten-mit-pdf-tags-in-acrobat/)“
3. Mache einen Rechtsklick auf den Inhalt (mit dem kleinen Kistensymbol) und wähle „*Tag* in aussertextliches Element ändern“. ![Kontextmenü mit ausgewählter Option „Tag in aussertextliches Element ändern“. Bildschirmfoto aus Acrobat.](https://accessible-pdf.info/content/uploads/acrobat-tag-in-aussertextliches-element-aendern.png)
3. Der öffnende Dialog erlaubt dir noch die Art des Artefakt und dessen Seitenposition näher zu beschreiben. Seitenzahlen ![](https://accessible-pdf.info/content/uploads/acrobat-artefakt-optionen.png)
4. Falls dieses Artefakt alleine innerhalb eines *Tags* platziert war, sollte das leere Tag noch gelöscht werden.

<aside id="tags" class="note-block" markdown="1">
Das Navigationsfenster „Tags“ lässt sich öffnen indem auf das Symbol mit dem Namensschild geklickt wird.
![Tag Icon in Acrobat](https://accessible-pdf.info/content/uploads/tag-icon.png)
Falls dieses in der linken Leiste noch nicht aufgeführt ist, kann es mit einem Rechtsklick oder unter „Anzeige“ → „Ein-/Ausblenden“ → „Navigationsfenster“ hinzugefügt und das Navigationsfenster angezeigt werden.
</aside>

### Artefakt mit Leserichtung-Werkzeug erstellen {#leserichtung}

Mit dem Leserichtung-Werkzeug geht es schneller. Im Gegenzug kann man weniger präzise arbeiten und nicht genau sehen wo was passiert.

1. Wähle das Leserichtung-Werkzeug aus. Falls du es nicht in deinen Schnellwerkzeugen hast, findest du es innerhalb der Werkzeuggruppe „Barrierefreiheit“.
2. Nun verändert sich deine Maus und ein Fenster wird geöffnet.
3. Wähle den Bereich aus, den du als Artefakt kennzeichnen möchtest. Dazu kannst in die linke obere Ecke klicken oder die Maus geklickt halten und ein Auswahlfeld aufziehen.
4. Klicke nun im Fenster auf den Knopf „Hintergrund/Artefakt“.

![Wie wird ein Artefakt mithilfe des „Leserichtung-Werkzeugs“ angelegt? Gif-Animation.](https://accessible-pdf.info/content/uploads/acrobat_artifact2.gif)

### Artefakte in Navigationsfenster „Inhalt“ prüfen {#inhalt}

Falls bereits *getaggte* Inhalte als Artefakte gekennzeichnet werden, verschwinden sie im „Tagbaum“. Artefakte sind jedoch im Navigationsfenster „Inhalt“ weiterhin vorhanden. Erkennbar sind sie durch die Kennzeichnung: „Container <Artifact> …“.

![Das Navigationsfenster „Inhalt“ mit einem gekennzeichneten Artifact Container. Bildschirmfoto in Acrobat.](https://accessible-pdf.info/content/uploads/acrobat-artifact.png)

<p class="warning-block" markdown="1">
Im Navigationsfenster „Inhalt“ liegt das Element, das sich an oberster Stelle befindet, auf der untersten Ebene. Die Reihenfolge dieser Auflistung und die Darstellungsebene ist daher umgekehrt. In diesem Zusammenhang kann folgendes Problem auftreten: „[Falsche Ebenenreihenfolge: Inhalt verschwindet hinter anderem Element](https://accessible-pdf.info/de/falsche-ebenenreihenfolge-inhalt-verschwindet-hinter-anderem-element)“
</p>