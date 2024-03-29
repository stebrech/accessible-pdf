---
title: Alt-Texte hinzufügen
layout: post.njk
author: Stefan Brechbühl
date: 2019-12-09
description: Ein Alt-Text (kurz für Alternativtext) beschreibt ein Nicht-Textelement, wie ein Bild / eine Grafik. Der unsichtbare Text kann durch Software, insbesondere AT, ausgelesen und wiedergegeben werden. In diesem Beitrag sehen wir uns an wie solche Alt-Texte in Microsoft Word, Adobe InDesign und Adobe Acrobat hinzugefügt werden können.
---

Ein Alt-Text (kurz für Alternativtext) beschreibt ein Nicht-Textelement, wie ein Bild / eine Grafik. Der unsichtbare Text kann durch Software, insbesondere [AT](/de/glossary/#assistive-technologie), ausgelesen und wiedergegeben werden. Im Glossar kannst du mehr darüber erfahren was ein [Alt-Text](/de/glossary/#alt-text) ist und wie er aussehen sollte.

In diesem Beitrag sehen wir uns an wie solche Alt-Texte in [Microsoft Word](#alt-text-in-microsoft-word-hinzufügen), [Adobe InDesign](#alt-texte-in-adobe-indesign-hinzufügen) und [Adobe Acrobat](#alt-texte-in-adobe-acrobat-hinzufügen) hinzugefügt werden können.

## Alt-Text in Microsoft Word hinzufügen

Die möglichen Wege in Word einen Alt-Text hinzuzufügen, unterscheiden sich je nachdem welche Version benutzt wird und ob man sich im Kompatibilitätsmodus befindet (altes .doc Format). Egal welche Version man hat, mit dem Weg über den Rechtsklick auf das Bild kommt man immer zum Ziel.

1. Mache einen Rechtsklick auf das Bild.
2. Wähle „Grafik formatieren“ oder, falls vorhanden, ein direkter Befehl „Alternativtext bearbeiten“.
3. Der letzte Schritt kann nun wie folgt aussehen:
   - Falls sich nun rechts ein neuer Bereich „Grafik formatieren“ öffnet, klicke darin auf die dritte Registerkarte „Layout und Eigenschaften“ und schreibe deinen Alt-Text in „Alternativtext“ → „Beschreibung“.

- Eine weitere mögliche Variante ist, dass sich ein Fenster „Grafik formatieren” öffnet, in welchem auf den Reiter „Alternativtext“ gewechselt werden muss.
- Noch eine weitere Variante ist, dass sich ein Fenster öffnet bei dem der Alt-Text direkt eingegeben werden kann.

Die Alternativtexte werden bei einem PDF-Export nun mitgeliefert und müssen in Acrobat nicht erneut hinzugefügt werden.

Der Alt-Text wird einem `<Figure>` _Tag_ hinzufügt. Deshalb müssen die Punkte in [„PDF-_Tags_ in Word festlegen“](/de/basics/word/defining-pdf-tags-in-word/) zwingend beachtet werden.

## Alt-Texte in Adobe InDesign hinzufügen

1. Klicke auf den Grafikrahmen.
2. Wähle „Objekt“ → „Objektexportoptionen“.
3. Es wird der Reiter „Alternativer Text“ angezeigt.
4. Wähle im Dropdown „Quelle für alternativen Text“ die Option „Benutzerdefiniert“ falls du den Alt-Text nicht bereits in einer hinterlegten XML-Struktur oder in Metadaten des Bildes hinterlegt hast.

Hinweis: Wenn mehrere Bilder bearbeitet werden müssen, kannst du das Fenster „Objektexportoptionen“ geöffnet lassen und weitere Bilder anklicken. Der Inhalt des Fensters „Objektexportoptionen“ ändert sich je nachdem welches Bild angeklickt wird.

Der Alt-Text wird einem `<Figure>` _Tag_ hinzufügt. Deshalb müssen die Punkte in [„PDF-_Tags_ in InDesign festlegen“](/de/basics/indesign/defining-pdf-tags-in-indesign/) unbedingt beachtet werden.

## Alt-Texte mit MadeToTag in Adobe InDesign hinzufügen

Mithilfe des [Plugins MadeToTag](https://www.axaio.com/doku.php/de:products:madetotag) können in einem Fenster alle enthaltenen Bilder in einer Vorschau angezeigt und mit einem Alt-Text ergänzt werden. Klicke dazu auf „Übersicht zeigen“ in der Aufgabe 3 „Alternativer Text“.

Zudem kann eine Übersicht aller Metadaten und Alt-Texte in einem neuen InDesign Dokument generiert werden.

## Alt-Texte in Adobe Acrobat hinzufügen

Wie es auch generell für das _Taggen_ von Dokumenten gilt, wird das Hinzufügen von Alt-Texten besser im Quelldokument gemacht. Dies weil bei erneuter PDF-Erstellung sämtliche Arbeiten in Acrobat wiederholt werden müssen.

Bei den folgenden Lösungswegen wird vorausgesetzt, dass die Bilder bereits _getaggt_ wurden. Falls du weitere Infos dazu benötigst, sehe dir folgende Beiträge an:

- [PDF-_Tags_ in Word festlegen](/de/basics/word/defining-pdf-tags-in-word/)
- [PDF-_Tags_ in InDesign festlegen](/de/basics/indesign/defining-pdf-tags-in-indesign/)
- [PDF-_Tags_ in Acrobat erstellen und ändern](/de/basics/acrobat/create-and-modify-pdf-tags-in-acrobat/)

### Lösungsvariante 1

1. Öffne das Navigationsfenster „Tags“.
2. Navigiere zum betroffenen `<Figure>` _Tag_.
3. Mache einen Rechtsklick auf diesem _Tag_ und wähle „Eigenschaften“.
4. Ergänze den Alt-Text im Register „Tag“ und der Rubrik „Alternativtext“.

### Lösungsvariante 2

1. Klicke auf „Leserichtung“ innerhalb der „Barrierefreiheit“-Werkzeuge.
2. Es öffnet sich ein neues Fenster „Leserichtung“ und die Inhalte werden in verschiedenen grauen Flächen dargestellt.
3. Mache einen Rechtsklick auf die graue Fläche in welcher sich dein Bild befindet.
4. Wähle „Alternativtext bearbeiten“ und füge deinen Alt-Text im neu geöffneten Fenster „Alternativtext“.
