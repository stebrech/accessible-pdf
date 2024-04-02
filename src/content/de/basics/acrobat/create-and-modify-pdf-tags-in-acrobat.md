---
title: PDF-Tags in Acrobat erstellen und ändern
layout: post.njk
author: Stefan Brechbühl
date: 2019-12-09
description: Das vollständige Taggen eines PDFs in Acrobat ist nur empfohlen wenn die Autorensoftware keinen PDF-Export mit Tags (Tagged PDF) erlaubt oder das Quelldokument nicht vorhanden ist. Für Word und InDesign werden folgende Anleitungen empfohlen.
order: 2
---

Das vollständige _Taggen_ eines PDFs in Acrobat ist nur empfohlen wenn die Autorensoftware keinen PDF-Export mit _Tags_ _(Tagged PDF)_ erlaubt oder das Quelldokument nicht vorhanden ist. Für Word und InDesign werden folgende Anleitungen empfohlen:

- [PDF-_Tags_ in Word festlegen](/de/basics/word/defining-pdf-tags-in-word/)
- [PDF-_Tags_ in InDesign festlegen](/de/basics/indesign/defining-pdf-tags-in-indesign/)

Weiter unten erfährst du wie einzelne _Tags_ in Acrobat hinzugefügt oder angepasst werden.

<p class="note">
  Softwarehinweis: Um mit den <em>Tags</em> arbeiten zu können, wird der kostenpflichtige 
  <a href="https://acrobat.adobe.com/ch/de/acrobat.html">Adobe Acrobat</a> benötigt. Mit dem
  kostenlosen <a href="https://get.adobe.com/de/reader/">Adobe Acrobat Reader</a> können *Tags*
  weder geprüft noch geändert werden.
</p>

## Erste Schritte (PDF enthält keine _Tags_)

Zuerst muss das Dokument als „Tagged PDF“ markiert werden.

1. Zeige dir hierzu das Navigationsfenster „Tags“ an.
2. Wähle „Tag-Stamm erstellen“ unter Optionen.
3. Der Text „Keine Tags verfügbar“ hat sich in „Tags“ geändert.
4. Ein erneuter Klick auf die Optionen zeigt neu den Befehl „Dokument ist PDF (mit Tags)„. Klicke darauf.
5. In den „Dokumenteigenschaften“ wird nun unter „Beschreibung“ der Eintrag „PDF mit Tags“ → „Ja“ angezeigt.

<p class="note">
Das Navigationsfenster „Tags“ lässt sich öffnen indem auf das Symbol mit dem Namensschild geklickt wird.
{% image "src/assets/img/tag-icon.png", "Tag Icon in Acrobat" %}
Falls dieses in der linken Leiste noch nicht aufgeführt ist, kann es mit einem Rechtsklick oder unter „Anzeige“ → „Ein-/Ausblenden“ → „Navigationsfenster“ hinzugefügt und das Navigationsfenster angezeigt werden.
</p>

<p class="note">
Die Optionen des Navigationsfenster „Tags“ können oben links unter dem kleinen Symbol mit den zwei Listenpunkten aufgerufen werden.
{% image "src/assets/img/tags-options-icon.png", "Menüicon der Tags Optionen in Acrobat" %}
</p>

<iframe
  width="750"
  height="422"
  title="YouTube video tutorial: First steps to create a Tagged PDF in Adobe Acrobat"
  src="https://www.youtube-nocookie.com/embed/zlG1DKLW9h0?hl=de"
  frameborder="0"
  allow="encrypted-media"
  allowfullscreen
></iframe>

### Semantik

Jetzt kannst du mit dem _Taggen_ beginnen. Als oberstes _Tag_ wird `<Document>` benötigt.

Eine Übersicht der möglichen Tags, welche innerhalb dieses `<Document>` _Tags_ angewendet werden können, findest du in der [„Übersicht der PDF-_Tags_“](/de/basics/general/overview-of-the-pdf-tags/).

Gemäss [Matterhorn Protokoll](/de/glossary/#matterhorn-protokoll), Fehlerbedingung 01-006, muss immer der semantisch korrekte _Tag_ verwendet werden.

## _Tags_ automatisch zuweisen

In Acrobat können _Tags_ automatisch zugewiesen werden. Die Erkennung semantischer Auszeichnungen wurde in Acrobat stets verbessert. Trotzdem wird es einem Computerprogramm nie zu 100 % gelingen, jegliche Gestaltungslogik zu erkennen.

<p class="warning">
  Daher bedingt das automatische <em>Taggen</em>, dass zwingend eine manuelle Prüfung und
  Optimierung des <em>Tag</em>baums gemacht werden muss.
</p>

### Lösungsweg 1

Gleiches Vorgehen wie unter [Erste Schritte](#erste-schritte-pdf-enthält-keine-tags), nur wird bei Punkt 2 anstatt „Tag-Stamm erstellen“, „Tags zu Dokument hinzufügen“ gewählt.

### Lösungsweg 2

Wähle „Dokument automatisch taggen“ in den Werkzeugen „Barrierefreiheit“.

## Einzelner _Tag_ manuell zuweisen

Das manuelle Vorgehen wird in der Regel benötigt um einzelne, fehlende _Tags_ der bestehenden Struktur hinzufügen.

### Lösungsweg 1

1. Füge einen neuen _Tag_ hinzu indem du im Navigationsfenster „Tags“ die [Optionen](#optionen) öffnest und „Neuer Tag“ auswählst.
2. Im angezeigten Fenster kannst du den korrekten _Tag_ auswählen und mit „OK“ bestätigen.
3. Klicke auf den neu erstellten _Tag_ und wähle den dafür vorgesehene Text mit dem Auswahlwerkzeug aus.
4. Öffne nun das Optionen-Menü des Navigationsfensters „Tags“ erneut und wähle „Tag aus Auswahl erstellen“.

<iframe
  width="750"
  height="422"
  title="YouTube: Assign single PDF tag in Acrobat – solution 1"
  src="https://www.youtube-nocookie.com/embed/AN-RyLPNNl4?hl=de"
  frameborder="0"
  allow="encrypted-media"
  allowfullscreen
></iframe>

### Lösungsweg 2

1. Klicke auf das _Root_-Element „Tags“ im Navigationsfenster „Tags“.
2. Wähle den gewünschten Text mit dem Auswahlwerkzeug aus.
3. Öffne das [Optionen-Menü](#optionen) des Navigationsfensters _Tags_ und wähle „Tag aus Auswahl erstellen“
4. Im angezeigten Fenster kannst du den korrekten _Tag_ auswählen und mit „OK“ bestätigen.

<iframe
  width="750"
  height="422"
  title="YouTube: Assign single PDF tag in Acrobat – solution 2"
  src="https://www.youtube-nocookie.com/embed/b0XUfbRnMe0?hl=de"
  frameborder="0"
  allow="encrypted-media"
  allowfullscreen
></iframe>

### Lösungsweg 3

Eine weitere Möglichkeit ist die Verwendung des „Leserichtung“-Werkzeugs. Die Handhabung dieses Werkzeugs ist etwas gewöhnungsbedürftig und es stehen nicht alle möglichen _Tags_ zur Verfügung.

1. Klicke auf „Leserichtung“ innerhalb der „Barrierefreiheit“-Werkzeuge.
2. Es öffnet sich ein neues Fenster und der _Cursor_ ändert sich in ein Kreuz.
3. Wähle damit den Inhalt aus, welcher _getaggt_ werden muss.
4. Im Fenster „Leserichtung“ kann nun der entsprechende _Tag_ ausgewählt werden.

<iframe
  width="750"
  height="422"
  title="YouTube: Assign single PDF tag in Acrobat – solution 3"
  src="https://www.youtube-nocookie.com/embed/vBK1jO5xi90?hl=de"
  frameborder="0"
  allow="encrypted-media"
  allowfullscreen
></iframe>

## _Tag_ in einen anderen _Tag_ ändern

Da die Möglichkeiten, welche Word oder InDesign anbieten, beschränkt sind, ist es häufig nötig die _Tagstruktur_ in Acrobat noch anzupassen.

### Lösungsweg 1

1. Öffne das Navigationsfenster „Tags“.
2. Klicke den betroffenen _Tag_ im Navigationsfenster „Tags“ einmal an um es auszuwählen.
3. Klicke mit der Maus erneut auf das ausgewählte _Tag_ um es manuell umzubenennen.

<p class="warning">
  Achtung: Der <em>Tag</em> muss in Englisch und korrekt geschrieben sein, siehe 
  <Link to="/de/basics/general/overview-of-the-pdf-tags/">
    „Übersicht der PDF-<em>Tags</em>“
  </Link>
</p>

<iframe
  width="750"
  height="422"
  title="YouTube: Change a PDF tag in Acrobat – solution 1"
  src="https://www.youtube-nocookie.com/embed/dJUkjDv73JQ?hl=de"
  frameborder="0"
  allow="encrypted-media"
  allowfullscreen
></iframe>

### Lösungsweg 2

1. Öffne das Navigationsfenster „Tags.
2. Mache einen Rechtsklick auf den betroffenen _Tag_ und wähle „Eigenschaften“ im Menü aus.
3. Im Register „Tag“ und dem Dropdown-Feld „Typ“ kann der gewünschte _Tag_ ausgewählt werden.

<p class="note">
  Die Bezeichnung der <em>Tags</em> in diesem Menü sind ins Deutsche übersetzt aber in der
  Reihenfolge der englischen Originalbezeichnungen geblieben.
</p>

<iframe
  width="750"
  height="422"
  title="YouTube: Change a PDF tag in Acrobat – solution 2"
  src="https://www.youtube-nocookie.com/embed/DO5n0QjAHHM?hl=de"
  frameborder="0"
  allow="encrypted-media"
  allowfullscreen
></iframe>
