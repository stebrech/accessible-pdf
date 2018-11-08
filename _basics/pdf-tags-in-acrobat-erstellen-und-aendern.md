---
ID: 21938
post_title: '<em>PDF-Tags</em> in Acrobat erstellen und ändern'
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

*   [*PDF-Tags* in Word festlegen][1]
*   [*PDF-Tags* in InDesign festlegen][2]

Weiter unten erfährst du wie einzelne *Tags* in Acrobat hinzugefügt oder angepasst werden.

Hinweis: Mit dem kostenlosen [Adobe Acrobat Reader][3] können keine Anpassungen der *Tagstruktur* vorgenommen werden. Dafür wird der kostenpflichtige [Adobe Acrobat][4] benötigt.

## Erste Schritte (PDF enthält keine *Tags*) {#ersteSchritte}

Zuerst muss das Dokument als „Tagged PDF“ markiert werden.

1.  Zeige dir hierzu das Navigationsfenster „Tags“ an. 
2.  Wähle „Tag-Stamm erstellen“ unter Optionen (kleines rechteckiges *Icon* mit zwei Listenpunkten).
3.  Der Text „Keine Tags verfügbar“ hat sich in „Tags“ geändert.
4.  Ein erneuter Klick auf das Icon „Optionen“ zeigt neu den Befehl „Dokument ist PDF (mit Tags)„. Klicke diesen an.
5.  In den „Dokumenteigenschaften“ wird nun unter „Beschreibung“ der Eintrag „PDF mit Tags“ → „Ja“ angezeigt.

<div>
  <iframe width="750" height="422" title="YouTube video tutorial: First steps to create a Tagged PDF in Adobe Acrobat" src="https://www.youtube-nocookie.com/embed/zlG1DKLW9h0?hl=de" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
</div>

### Semantik

Jetzt kannst du mit dem *Taggen* beginnen. Als oberstes *Tag* wird `<Document>` benötigt.

Eine Übersicht der möglichen Tags, welche innerhalb dieses `<Document>` *Tags* angewendet werden können, findest du in der [„Übersicht der *PDF-Tags*“][5].

Gemäss [Matterhorn Protokoll][6], Fehlerbedingung 01-006, muss immer der semantisch korrekte *Tag* verwendet werden.

## *Tags* automatisch zuweisen {#automatischesTaggen}

In Acrobat können *Tags* automatisch zugewiesen werden. Die Erkennung semantischer Auszeichnungen wurde in Acrobat stets verbessert. Trotzdem wird es einem Computerprogramm nie zu 100 % gelingen, jegliche Gestaltungslogik zu erkennen. **Daher bedingt das automatische *Taggen*, dass zwingend eine manuelle Prüfung und Optimierung des *Tagbaums* gemacht werden muss.**

### Lösungsweg 1

Gleiches Vorgehen wie unter [Erste Schritte][7], nur wird bei Punkt 2 anstatt „Tag-Stamm erstellen“, „Tags zu Dokument hinzufügen“ gewählt.

### Lösungsweg 2

Wähle „Dokument automatisch taggen“ in den Werkzeugen „Barrierefreiheit“.

## Einzelner *Tag* manuell zuweisen {#manuellesTaggen}

Das manuelle Vorgehen wird in der Regel benötigt um einzelne, fehlende *Tags* der bestehenden Struktur hinzufügen.

### Lösungsweg 1

1.  Füge einen neuen *Tag* hinzu indem du im Navigationsfenster „Tags“ die Optionen öffnest (kleines rechteckiges *Icon* mit zwei Listenpunkten) und „Neuer Tag“ auswählst. 
2.  Im angezeigten Fenster kannst du den korrekten *Tag* auswählen und mit „OK“ bestätigen.
3.  Klicke auf den neu erstellten *Tag* und wähle den dafür vorgesehene Text mit dem Auswahlwerkzeug aus.
4.  Öffne nun das Optionen-Menü des Navigationsfensters „Tags“ erneut und wähle „Tag aus Auswahl erstellen“.

<div>
  <iframe width="750" height="422" title="YouTube: Assign single PDF tag in Acrobat – solution 1" src="https://www.youtube-nocookie.com/embed/AN-RyLPNNl4?hl=de" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
</div>

### Lösungsweg 2

1.  Klicke auf das *Root*-Element „Tags“ im Navigationsfenster „Tags“.
2.  Wähle den gewünschten Text mit dem Auswahlwerkzeug aus.
3.  Öffne das Optionen-Menü (kleines rechteckiges *Icon* mit zwei Listenpunkten) des Navigationsfensters *Tags* und wähle „Tag aus Auswahl erstellen“
4.  Im angezeigten Fenster kannst du den korrekten *Tag* auswählen und mit „OK“ bestätigen.

<div>
  <iframe width="750" height="422" title="YouTube: Assign single PDF tag in Acrobat – solution 2" src="https://www.youtube-nocookie.com/embed/b0XUfbRnMe0?hl=de" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
</div>

### Lösungsweg 3

Eine weitere Möglichkeit ist die Verwendung des „Leserichtung“-Werkzeugs. Die Handhabung dieses Werkzeugs ist etwas gewöhnungsbedürftig und es stehen nicht alle möglichen *Tags* zur Verfügung.

1.  Klicke auf „Leserichtung“ innerhalb der „Barrierefreiheit“-Werkzeuge.
2.  Es öffnet sich ein neues Fenster und der *Cursor* ändert sich in ein Kreuz.
3.  Wähle damit den Inhalt aus, welcher *getaggt* werden muss. 
4.  Im Fenster „Leserichtung“ kann nun der entsprechende *Tag* ausgewählt werden.

<div>
  <iframe width="750" height="422" title="YouTube: Assign single PDF tag in Acrobat – solution 3" src="https://www.youtube-nocookie.com/embed/vBK1jO5xi90?hl=de" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
</div>

## *Tag* in einen anderen *Tag* ändern {#tagAendern}

Da die Möglichkeiten, welche Word oder InDesign anbieten, beschränkt sind, ist es häufig nötig die *Tagstruktur* in Acrobat noch anzupassen.

### Lösungsweg 1

1.  Das Navigationsfenster „Tags“ muss geöffnet werden. Falls es bisher nie verwendet wurde, kann es unter „Anzeige“ → „Ein-/Ausblenden“ → „Navigationsfenster“ eingeblendet werden.
2.  Das betroffene *Tag* im Navigationsfenster „Tags“ einmal anklicken um es auszuwählen.
3.  Mit der Maus erneut auf das ausgewählte *Tag* klicken um es manuell umzubenennen. Achtung: Das *Tag* muss in Englisch und korrekt geschrieben sein, siehe „[Übersicht der *PDF-Tags*][5]“

<div>
  <iframe width="750" height="422" title="YouTube: Change a PDF tag in Acrobat – solution 1" src="https://www.youtube-nocookie.com/embed/dJUkjDv73JQ?hl=de" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
</div>

### Lösungsweg 2

1.  Das Navigationsfenster „Tags“ muss geöffnet werden. Falls es bisher nie verwendet wurde, kann es unter „Anzeige“ → „Ein-/Ausblenden“ → „Navigationsfenster“ eingeblendet werden.
2.  Rechtsklick mit der Maus auf das betroffene Tag und im Menü „Eigenschaften“ auswählen.
3.  Im Register „Tag“ und Dropdown-Feld „Typ“ kann das gewünschte *Tag* ausgewählt werden. Achtung: Die *Tags* sind hier ins Deutsche übersetzt.

<div>
  <iframe width="750" height="422" title="YouTube: Change a PDF tag in Acrobat – solution 2" src="https://www.youtube-nocookie.com/embed/DO5n0QjAHHM?hl=de" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
</div>

 [1]: https://accessible-pdf.info/de/basics/pdf-tags-in-word-festlegen/
 [2]: https://accessible-pdf.info/de/basics/pdf-tags-in-indesign-festlegen/
 [3]: https://get.adobe.com/de/reader/
 [4]: https://acrobat.adobe.com/ch/de/acrobat.html
 [5]: https://accessible-pdf.info/de/basics/uebersicht-der-pdf-tags/
 [6]: https://accessible-pdf.info/de/glossar/#matterhorn-protokoll
 [7]: #ersteSchritte