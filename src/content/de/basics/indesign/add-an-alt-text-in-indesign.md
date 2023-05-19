---
title: Alt-Texte in InDesign hinzufügen
layout: post.njk
author: Stefan Brechbühl
date: 2021-06-08
description: Ein Alt-Text (kurz für Alternativtext) beschreibt ein Nicht-Textelement, wie ein Foto oder eine Grafik. In dieser Anleitung schauen wir uns an, wie ein Alt-Text in Word hinzugefügt wird.
---

Ein Alt-Text (kurz für Alternativtext) beschreibt ein Nicht-Textelement, wie ein Foto oder eine Grafik. Der unsichtbare Text kann durch Software, insbesondere [assistive Technologie (AT)](/de/glossary/#assistive-technologie), ausgelesen und wiedergegeben werden.

Im Glossar kannst du mehr darüber erfahren was ein [Alt-Text](/de/glossary/#alt-text) ist und wie er aussehen sollte. In dieser Anleitung schauen wir uns an, wie ein Alt-Text in InDesign hinzugefügt wird.

## Alt-Texte in Adobe InDesign hinzufügen

1. Klicke auf den Grafikrahmen.
2. Wähle „Objekt“ → „Objektexportoptionen“.
3. Es wird der Reiter „Alternativer Text“ angezeigt.
4. Wähle im Dropdown „Quelle für alternativen Text“ die Option „Benutzerdefiniert“ falls du den Alt-Text nicht bereits in einer hinterlegten XML-Struktur oder in Metadaten des Bildes hinterlegt hast.

<p class="note">
  Wenn mehrere Bilder bearbeitet werden müssen, kannst du das Fenster „Objektexportoptionen“
  geöffnet lassen und weitere Bilder anklicken. Der Inhalt des Fensters „Objektexportoptionen“
  ändert sich je nachdem welches Bild angeklickt wird.
</p>

Der Alt-Text wird einem `<Figure>` _Tag_ hinzufügt. Deshalb müssen die Punkte in [„PDF-_Tags_ in InDesign festlegen“](/de/basics/indesign/defining-pdf-tags-in-indesign/) unbedingt beachtet werden.

## Alt-Texte mit MadeToTag in Adobe InDesign hinzufügen

Mithilfe des [Plugins MadeToTag](https://www.axaio.com/doku.php/de:products:madetotag) können in einem Fenster alle enthaltenen Bilder in einer Vorschau angezeigt und mit einem Alt-Text ergänzt werden. Klicke dazu auf „Übersicht zeigen“ in der Aufgabe 3 „Alternativer Text“.

Zudem kann eine Übersicht aller Metadaten und Alt-Texte in einem neuen InDesign Dokument generiert werden.

## PDF-Konvertierung

Durch oben beschriebene Massnahmen und den korrekten Exporteinstellungen werden die Alternativtexte bei einem PDF-Export berücksichtigt. Die Exporteinstellungen werden in [„PDF-Tags in InDesign festlegen„](/de/basics/indesign/defining-pdf-tags-in-indesign/) beschrieben.

<p class="note">
  Fotos und Grafiken werden mit dem <code>&lt;Figure&gt;</code>-Tag ausgezeichnet. Der in InDesign
  definierte Alt-Text wird auf diesen Tag angewendet.
</p>
