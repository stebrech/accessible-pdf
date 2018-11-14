---
ID: 40004
post_title: Alt-Texte hinzufügen
author: Stefan Brechbühl
post_excerpt: >
  Ein Alt-Text (kurz für Alternativtext)
  beschreibt ein Nicht-Textelement, wie
  ein Bild / eine Grafik. Der unsichtbare
  Text kann durch Software, insbesondere
  AT, ausgelesen und wiedergegeben werden.
  In diesem Beitrag sehen wir uns an wie
  solche Alt-Texte in Microsoft Word,
  Adobe InDesign und Adobe Acrobat
  hinzugefügt werden können.
layout: basics
permalink: >
  https://accessible-pdf.info/de/basics/alt-texte-hinzufuegen/
published: true
post_date: 2018-10-11 16:09:22
tags:
  - InDesign
  - Word
categories: [ ]
---
Ein Alt-Text (kurz für Alternativtext) beschreibt ein Nicht-Textelement, wie ein Bild / eine Grafik. Der unsichtbare Text kann durch Software, insbesondere [AT][1], ausgelesen und wiedergegeben werden. Im Glossar kannst du mehr darüber erfahren was ein [Alt-Text][2] ist und wie er aussehen sollte.

In diesem Beitrag sehen wir uns an wie solche Alt-Texte in [Microsoft Word][3], [Adobe InDesign][4] und [Adobe Acrobat][5] hinzugefügt werden können.

## Alt-Text in Microsoft Word hinzufügen {#word}

Die möglichen Wege in Word einen Alt-Text hinzuzufügen, unterscheiden sich je nachdem welche Version benutzt wird und ob man sich im Kompatibilitätsmodus befindet (altes .doc Format). Egal welche Version man hat, mit dem Weg über den Rechtsklick auf das Bild kommt man immer zum Ziel.

1.  Mache einen Rechtsklick auf das Bild.
2.  Wähle „Grafik formatieren“ oder, falls vorhanden, ein direkter Befehl „Alternativtext bearbeiten“.
3.  Der letzte Schritt kann nun wie folgt aussehen: 
    1.  Falls sich nun rechts ein neuer Bereich „Grafik formatieren“ öffnet, klicke darin auf die dritte Registerkarte „Layout und Eigenschaften“ und schreibe deinen Alt-Text in „Alternativtext“ → „Beschreibung“.
    2.  Eine weitere mögliche Variante ist, dass sich ein Fenster „Grafik formatieren” öffnet, in welchem auf den Reiter „Alternativtext“ gewechselt werden muss.
    3.  Noch eine weitere Variante ist, dass sich ein Fenster öffnet bei dem der Alt-Text direkt eingegeben werden kann.

Die Alternativtexte werden bei einem PDF-Export nun mitgeliefert und müssen in Acrobat nicht erneut hinzugefügt werden.

Der Alt-Text wird einem `<Figure>` *Tag* hinzufügt. Deshalb müssen die Punkte in [„*PDF-Tags* in Word festlegen“][6] zwingend beachtet werden.

## Alt-Texte in Adobe InDesign hinzufügen {#indesign}

1.  Klicke auf den Grafikrahmen.
2.  Wähle „Objekt“ → „Objektexportoptionen“.
3.  Es wird der Reiter „Alternativer Text“ angezeigt.
4.  Wähle im Dropdown „Quelle für alternativen Text“ die Option „Benutzerdefiniert“ falls du den Alt-Text nicht bereits in einer hinterlegten XML-Struktur oder in Metadaten des Bildes hinterlegt hast.

Hinweis: Wenn mehrere Bilder bearbeitet werden müssen, kannst du das Fenster „Objektexportoptionen“ geöffnet lassen und weitere Bilder anklicken. Der Inhalt des Fensters „Objektexportoptionen“ ändert sich je nachdem welches Bild angeklickt wird.

Der Alt-Text wird einem `<Figure>` *Tag* hinzufügt. Deshalb müssen die Punkte in [„*PDF-Tags* in InDesign festlegen“][7] unbedingt beachtet werden.

## Alt-Texte mit MadeToTag in Adobe InDesign hinzufügen

Mithilfe des [Plugins MadeToTag][8] können in einem Fenster alle enthaltenen Bilder in einer Vorschau angezeigt und mit einem Alt-Text ergänzt werden. Klicke dazu auf „Übersicht zeigen“ in der Aufgabe 3 „Alternativer Text“.

Zudem kann eine Übersicht aller Metadaten und Alt-Texte in einem neuen InDesign Dokument generiert werden.

## Alt-Texte in Adobe Acrobat hinzufügen {#acrobat}

Wie es auch generell für das *Taggen* von Dokumenten gilt, wird das Hinzufügen von Alt-Texten besser im Quelldokument gemacht. Dies weil bei erneuter PDF-Erstellung sämtliche Arbeiten in Acrobat wiederholt werden müssen.

Bei den folgenden Lösungswegen wird vorausgesetzt, dass die Bilder bereits *getaggt* wurden. Falls du weitere Infos dazu benötigst, sehe dir folgende Beiträge an:

*   [*PDF-Tags* in Word festlegen][9]
*   [*PDF-Tags* in InDesign festlegen][10]
*   [*PDF-Tags* in Acrobat erstellen und ändern][11]

### Lösungsvariante 1

1.  Öffne das Navigationsfenster „Tags“.
2.  Navigiere zum betroffenen `<Figure>` *Tag*.
3.  Mache einen Rechtsklick auf diesem *Tag* und wähle „Eigenschaften“.
4.  Ergänze den Alt-Text im Register „Tag“ und der Rubrik „Alternativtext“.

### Lösungsvariante 2

1.  Klicke auf „Leserichtung“ innerhalb der „Barrierefreiheit“-Werkzeuge.
2.  Es öffnet sich ein neues Fenster „Leserichtung“ und die Inhalte werden in verschiedenen grauen Flächen dargestellt.
3.  Mache einen Rechtsklick auf die graue Fläche in welcher sich dein Bild befindet.
4.  Wähle „Alternativtext bearbeiten“ und füge deinen Alt-Text im neu geöffneten Fenster „Alternativtext“.

 [1]: https://accessible-pdf.info/de/glossar/#assistive-technologie
 [2]: https://accessible-pdf.info/de/glossar/#alt-text
 [3]: #word
 [4]: #indesign
 [5]: #acrobat
 [6]: http://accessible-pdf.info/de/basics/pdf-tags-in-word-festlegen/
 [7]: http://accessible-pdf.info/de/basics/pdf-tags-in-indesign-festlegen/
 [8]: https://www.axaio.com/doku.php/de:products:madetotag
 [9]: https://accessible-pdf.info/de/basics/pdf-tags-in-word-festlegen/
 [10]: https://accessible-pdf.info/de/basics/pdf-tags-in-indesign-festlegen/
 [11]: https://accessible-pdf.info/de/basics/pdf-tags-in-acrobat-erstellen-und-aendern/