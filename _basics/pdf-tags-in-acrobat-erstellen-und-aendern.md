---
ID: 21938
post_title: 'PDF-<em>Tags</em> in Acrobat erstellen und ändern'
author: Stefan Brechbühl
post_excerpt: >
  Das vollständige Taggen eines PDFs in
  Acrobat ist nur empfohlen wenn die
  Autorensoftware keinen PDF-Export mit
  Tags (Tagged PDF) erlaubt oder das
  Quelldokument nicht vorhanden ist. Für
  Word und InDesign werden folgende
  Anleitungen empfohlen.
layout: basics
permalink: >
  https://accessible-pdf.info/de/basics/pdf-tags-in-acrobat-erstellen-und-aendern/
published: true
post_date: 2018-09-06 20:16:51
tags: [ ]
categories: [ ]
---
Das vollständige *Taggen* eines PDFs in Acrobat ist nur empfohlen wenn die Autorensoftware keinen PDF-Export mit *Tags* *(Tagged PDF)* erlaubt oder das Quelldokument nicht vorhanden ist. Für Word und InDesign werden folgende Anleitungen empfohlen:

- [PDF-*Tags* in Word festlegen](https://accessible-pdf.info/de/basics/pdf-tags-in-word-festlegen/)
- [PDF-*Tags* in InDesign festlegen](https://accessible-pdf.info/de/basics/pdf-tags-in-indesign-festlegen/)

Weiter unten erfährst du wie einzelne *Tags* in Acrobat hinzugefügt oder angepasst werden.

<aside class="note-block">Softwarehinweis: Um mit den <em>Tags</em> arbeiten zu können, wird der kostenpflichtige <a href="https://acrobat.adobe.com/ch/de/acrobat.html">Adobe Acrobat</a> benötigt. Mit dem kostenlosen <a href="https://get.adobe.com/de/reader/">Adobe Acrobat Reader</a> können <em>Tags</em> weder geprüft noch geändert werden.</aside>

## Erste Schritte (PDF enthält keine *Tags*) {#ersteSchritte}

Zuerst muss das Dokument als „Tagged PDF“ markiert werden.

1. Zeige dir hierzu das Navigationsfenster „Tags“ an. 
2. Wähle „Tag-Stamm erstellen“ unter Optionen.
3. Der Text „Keine Tags verfügbar“ hat sich in „Tags“ geändert.
4. Ein erneuter Klick auf die Optionen zeigt neu den Befehl „Dokument ist PDF (mit Tags)„. Klicke darauf.
5. In den „Dokumenteigenschaften“ wird nun unter „Beschreibung“ der Eintrag „PDF mit Tags“ → „Ja“ angezeigt.

<aside id="tags" class="note-block">Das Navigationsfenster „Tags“ lässt sich öffnen indem auf das Symbol mit dem Namensschild geklickt wird.<br><img src="https://accessible-pdf.info/wp/wp-content/uploads/tag-icon.png" alt="Tag Icon in Acrobat"><br>Falls dieses in der linken Leiste noch nicht aufgeführt ist, kann es mit einem Rechtsklick oder unter „Anzeige“ → „Ein-/Ausblenden“ → „Navigationsfenster“ hinzugefügt und das Navigationsfenster angezeigt werden.</aside>

<aside id="options" class="note-block">Die Optionen des Navigationsfenster „Tags“ können oben links unter dem kleinen Symbol mit den zwei Listenpunkten aufgerufen werden.<br><img src="https://accessible-pdf.info/wp/wp-content/uploads/tags-options-icon.png" alt="Menüicon der Tags Optionen in Acrobat" /></aside>

<iframe width="750" height="422" title="YouTube video tutorial: First steps to create a Tagged PDF in Adobe Acrobat" src="https://www.youtube-nocookie.com/embed/zlG1DKLW9h0?hl=de" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

### Semantik

Jetzt kannst du mit dem *Taggen* beginnen. Als oberstes *Tag* wird `<Document>` benötigt.

Eine Übersicht der möglichen Tags, welche innerhalb dieses `<Document>` *Tags* angewendet werden können, findest du in der [„Übersicht der PDF-*Tags*“](https://accessible-pdf.info/de/basics/uebersicht-der-pdf-tags/).

Gemäss [Matterhorn Protokoll](https://accessible-pdf.info/de/glossar/#matterhorn-protokoll), Fehlerbedingung 01-006, muss immer der semantisch korrekte *Tag* verwendet werden.

## *Tags* automatisch zuweisen {#automatischesTaggen}

In Acrobat können *Tags* automatisch zugewiesen werden. Die Erkennung semantischer Auszeichnungen wurde in Acrobat stets verbessert. Trotzdem wird es einem Computerprogramm nie zu 100 % gelingen, jegliche Gestaltungslogik zu erkennen.

<p class="warning-block">Daher bedingt das automatische <em>Taggen</em>, dass zwingend eine manuelle Prüfung und Optimierung des <em>Tag</em>baums gemacht werden muss.</p>

### Lösungsweg 1

Gleiches Vorgehen wie unter [Erste Schritte](#ersteSchritte), nur wird bei Punkt 2 anstatt „Tag-Stamm erstellen“, „Tags zu Dokument hinzufügen“ gewählt.

### Lösungsweg 2

Wähle „Dokument automatisch taggen“ in den Werkzeugen „Barrierefreiheit“.

## Einzelner *Tag* manuell zuweisen {#manuellesTaggen}

Das manuelle Vorgehen wird in der Regel benötigt um einzelne, fehlende *Tags* der bestehenden Struktur hinzufügen.

### Lösungsweg 1

1. Füge einen neuen *Tag* hinzu indem du im [Navigationsfenster „Tags“](#tags) die [Optionen](#optionen) öffnest und „Neuer Tag“ auswählst.
2. Im angezeigten Fenster kannst du den korrekten *Tag* auswählen und mit „OK“ bestätigen.
3. Klicke auf den neu erstellten *Tag* und wähle den dafür vorgesehene Text mit dem Auswahlwerkzeug aus.
4. Öffne nun das Optionen-Menü des Navigationsfensters „Tags“ erneut und wähle „Tag aus Auswahl erstellen“.

<iframe width="750" height="422" title="YouTube: Assign single PDF tag in Acrobat – solution 1" src="https://www.youtube-nocookie.com/embed/AN-RyLPNNl4?hl=de" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

### Lösungsweg 2

1. Klicke auf das *Root*-Element „Tags“ im [Navigationsfenster „Tags“](#tags).
2. Wähle den gewünschten Text mit dem Auswahlwerkzeug aus.
3. Öffne das [Optionen-Menü](#optionen) des Navigationsfensters *Tags* und wähle „Tag aus Auswahl erstellen“
4. Im angezeigten Fenster kannst du den korrekten *Tag* auswählen und mit „OK“ bestätigen.

<iframe width="750" height="422" title="YouTube: Assign single PDF tag in Acrobat – solution 2" src="https://www.youtube-nocookie.com/embed/b0XUfbRnMe0?hl=de" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

### Lösungsweg 3

Eine weitere Möglichkeit ist die Verwendung des „Leserichtung“-Werkzeugs. Die Handhabung dieses Werkzeugs ist etwas gewöhnungsbedürftig und es stehen nicht alle möglichen *Tags* zur Verfügung.

1. Klicke auf „Leserichtung“ innerhalb der „Barrierefreiheit“-Werkzeuge.
2. Es öffnet sich ein neues Fenster und der *Cursor* ändert sich in ein Kreuz.
3. Wähle damit den Inhalt aus, welcher *getaggt* werden muss. 
4. Im Fenster „Leserichtung“ kann nun der entsprechende *Tag* ausgewählt werden.

<iframe width="750" height="422" title="YouTube: Assign single PDF tag in Acrobat – solution 3" src="https://www.youtube-nocookie.com/embed/vBK1jO5xi90?hl=de" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

## *Tag* in einen anderen *Tag* ändern {#tagAendern}

Da die Möglichkeiten, welche Word oder InDesign anbieten, beschränkt sind, ist es häufig nötig die *Tagstruktur* in Acrobat noch anzupassen.

### Lösungsweg 1

1. Öffne das [Navigationsfenster „Tags“](#tags).
2. Klicke den betroffenen *Tag* im Navigationsfenster „Tags“ einmal an um es auszuwählen.
3. Klicke mit der Maus erneut auf das ausgewählte *Tag* um es manuell umzubenennen. 

<p class="warning-block">Achtung: Der <em>Tag</em> muss in Englisch und korrekt geschrieben sein, siehe <a href="https://accessible-pdf.info/de/basics/uebersicht-der-pdf-tags/">„Übersicht der PDF-<em>Tags</em>“</a></p>

<iframe width="750" height="422" title="YouTube: Change a PDF tag in Acrobat – solution 1" src="https://www.youtube-nocookie.com/embed/dJUkjDv73JQ?hl=de" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

### Lösungsweg 2

1. Öffne das [Navigationsfenster „Tags](#tags).
2. Mache einen Rechtsklick auf den betroffenen *Tag* und wähle „Eigenschaften“ im Menü aus.
3. Im Register „Tag“ und dem Dropdown-Feld „Typ“ kann der gewünschte *Tag* ausgewählt werden. 

<aside class="note-block">Die Bezeichnung der <em>Tags</em> in diesem Menü sind ins Deutsche übersetzt aber in der Reihenfolge der englischen Originalbezeichnungen geblieben.</aside>

<iframe width="750" height="422" title="YouTube: Change a PDF tag in Acrobat – solution 2" src="https://www.youtube-nocookie.com/embed/DO5n0QjAHHM?hl=de" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>