---
title: Glossar
layout: layouts/page_toc.njk
tags: [mainMenu, pageInSitemap]
order: 3
author: Stefan Brechbühl
date: 2020-12-06
description: Im Glossar werden Begriffe erklärt, die für die Arbeit mit barrierefreien PDFs benötigt werden.
---

## Alt-Text

Ein Alt-Text (kurz für Alternativtext) beschreibt ein Nicht-Textelement, wie ein Bild / eine Grafik. Der unsichtbare Text kann durch Software, insbesondere [AT](#assistive-technologie), ausgelesen und wiedergegeben werden.

Der Alt-Text sollte so kurz und prägnant wie möglich sein und beschreiben was auf dem Bild sichtbar ist. Er soll keine zusätzlichen Informationen enthalten, welche auch visuell nicht erkannt würden, z.B. der Name des Fotografen oder Namen von abgebildeten Personen und Sachen, die mithilfe des Kontexts auch visuell nicht erkannt würden. Dies ist der grosse Unterschied zu einer sichtbaren Bildunterschrift / einer Bildbeschreibung, welche zusätzliche Informationen übermitteln kann.

Nicht jedes Bild und jede Grafik benötigt einen Alt-Text. Eine wertvolle Entscheidungshilfe bietet WAI (Web Accessibility Initiative) mit „[An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)“ und den [Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/) (nur in Englisch). Der wesentliche Unterschied von HTML und PDF ist die Handhabung von dekorativen Bildern (z.B. Hintergrundbilder, Linien und weiteren dekorativen Formen). Diese werden in PDF als Artefakt gekennzeichnet, siehe auch:

- [Artefakte in InDesign festlegen](/de/basics/indesign/defining-artifacts-in-indesign/)
- [Artefakte in Word festlegen](/de/basics/word/defining-artifacts-in-word/)
- [Artefakte in Acrobat erstellen und prüfen](/de/basics/acrobat/create-and-check-artifacts-in-acrobat/)

Während die dekorativen Bilder keinen Alt-Text benötigen, sollen die funktionalen Bilder die Funktion / das Ziel erklären und nicht dessen Bildinhalt. Hierzu zählen insbesondere verlinkte Bilder.

## Alternativtext

siehe [Alt-Text](#alt-text)

## Artefakt

Artefakte sind, wie PDF-_[Tags](#tags)_ auch, unsichtbare Strukturinformationen. Sie beschreiben ein Seitenelement als dekorativ und unwichtig. Unwichtig sind diese Elemente weil sie für das Verständnis des Inhalts nicht wichtig sind. Werden unnötige Elemente als Artefakte gekennzeichnet, können sie von [assistiver Technologie](#assistive-technologie) ignoriert werden.

Als unwichtig zählen seitenbezogene Informationen, die in einem Druckerzeugnis nützlich sind. Dies sind insbesondere:

- Seitennummerierungen
- Wiederholende Informationen in Kopf- und Fusszeilen

Weitere unwichtige, rein dekorative Objekte sind beispielsweise:

- Hintergrundbilder
- Symbolbilder
- diverse Formen von Linien
  - zur Dekoration
  - zur Trennung von Textspalten
  - Tabellenlinien

## assistierende Technologie

Assistierende Technologie ist eine weitere Übersetzung des englischen Begriffs _assistive technology_. Siehe dazu [assistive Technologie](#assistive-technologie).

## assistive Technologie

Assistive Technologie (Abk. AT) ist der eingedeutschte Begriff von _assistive technology_. AT steht für mögliche Hilfsmittel, die benötigt werden um Informationen trotz Einschränkungen lesen und verarbeiten zu können.

Unter AT fallen folgende Software und Hardware:

- [Screenreader (Bildschirmvorlese-Software)](https://de.wikipedia.org/wiki/Screenreader)
- [Braillezeile](https://de.wikipedia.org/wiki/Braillezeile)
- Bildschirmvergrösserung
- Sprachsteuerung
- Spezialmäuse und -tastaturen
- Augen- und Mundsteuerung
- …

## AT

Abkürzung für [assistive Technologie](#assistive-technologie)

## automatische Prüfung

Gemäss [Matterhorn Protokoll](#matterhorn-protokoll) können 87 Prüfpunkte durch eine Software geprüft werden. Mithilfe einer Prüfung mit [PAC](#pac) werden solche Fehler erkannt.

## barrierearm

Der Begriff „barrierearm“ wird teilweise für eine beschränkt, erreichte Barrierefreiheit verwendet. Siehe dazu [barrierefreies PDF](#barrierefreies-pdf)

## barrierefreies PDF

Durch Barrierefreiheit werden keine Menschen aufgrund einer Schwäche oder Behinderung ausgeschlossen. Für elektronische Dokumente bedeutet dies, dass technische Voraussetzungen geschaffen werden damit alle Menschen diese selbstständig benutzen können.

Ein PDF ist barrierefrei wenn es mit dem Standard [PDF/UA](#pdfua) kompatibel ist und die Richtlinien des [WCAG](https://www.w3.org/Translations/WCAG20-de/) einhält.

Die wichtigsten Grundlagen sind erreicht, wenn

- das Dokument mit [semantischen PDF-Tags](https://accessible-pdf.info/de/basics/general/overview-of-the-pdf-tags) versehen ist, welche die logische Dokumentstruktur und Lesereihenfolge erzeugen;
- inhaltlich nicht relevante Objekte als Artefakt markiert sind (z.B. dekorative Elemente, wiederholende Kopf- und Fusszeilen);
- Texte des Dokuments grundsätzlich als Text und nicht als Bild vorhanden sind (OCR Scannen);
- Alternativtexte verwendet werden um Nicht-Text-Elemente (Bilder und Grafiken) zu beschreiben;
- keine schwachen oder ungeeignete Farbkontraste verwendet werden.

## Hilfstechnologie

siehe [assistive Technologie](#assistive-technologie)

## Lesereihenfolge

siehe [Logische Lesereihenfolge](#logische-lesereihenfolge)

## Logische Lesereihenfolge

Die logische Lesereihenfolge steht für die korrekte Reihenfolge, in welcher einzelne Inhaltsteile gelesen werden sollten damit das Dokument richtig verstanden wird. Ein gutes Praxisbeispiel ist ein mehrspaltiges Layout indem Zeile für Zeile innerhalb einer Spalte und nicht über die ganze Seite gelesen werden muss.

Hilfstechnologien ([AT](#assistive-technologie)) benötigen PDF-_[Tags](#tags)_ nicht nur um die Bedeutung der enthaltenen Inhalte zu erkennen, sondern auch um die logische Lesereihenfolge abzuleiten. Leider nutzen nicht alle AT die Reihenfolge der _Tags_ sondern entnehmen sie der visuellen Reihenfolge der Inhalte, welche in Acrobat im Navigationsfenster „Reihenfolge“ abgebildet wird. Diese visuelle Reihenfolge der logischen Lesereihenfolge anzupassen kann sehr zeitraubend sein und ist keine Anforderung von [PDF/UA](#pdfua).

![Acrobat Infofenster: Im Tags-Fenster wird die logische Dokumentstruktur angezeigt, die von Hilfstechnologien für die Auswertung des Dokuments verwendet wird. Durch die logische Struktur wird die Lesereihenfolge festgelegt. Ausserdem werden Überschriften, Listen, Tabellen und andere Elemente identifiziert, die Benutzer von Hilfstechnologien verwenden können, um durch das Dokument zu navigieren. Um die Lesereihenfolge zu ändern, die von der Sprachausgabe von Adobe Acrobat und Adobe Acrobat Reader verwendet wird, verwenden Sie das Leserichtung-Fenster.](src/assets/img/acrobat-info-tags-reihenfolge.png)

In [„Semantik und logische Lesereihenfolge prüfen“](/de/basics/general/check-semantics-and-logical-reading-order/) lernst du wie die logische Lesereihenfolge geprüft werden kann.

## manuelle Prüfung

Gemäss [Matterhorn Protokoll](#matterhorn-protokoll) sind 47 Prüfpunkte durch einen Menschen zu prüfen. Diese können nicht durch eine Software, wie zum Beispiel [PAC](#pac), geprüft werden. Es kann höchstens eine Warnung ausgegeben werden.

## Matterhorn Protokoll

Das [Matterhorn Protokoll](https://www.pdfa.org/publication/matterhorn-protokoll-1-02-deutsche-uebersetzung/?lang=de) ist ein Dokument der [PDF Association](https://www.pdfa.org/pdf-association/?lang=de), welches Softwareentwicklern und Prüfpersonen von Dokumenten hilft, ein PDF nach PDF/UA zu erstellen. Es beschreibt 136 Fehlerbedingungen, welche in 31 Prüfpunkte aufgeteilt sind. Von den 136 Fehlerbedingungen können 87 durch eine Software geprüft werden. 47 Fehlerbedingungen müssen manuell durch einen Menschen geprüft werden. 2 Fehlerbedingungen können in keiner dieser Kategorien zugeordnet werden. Das Matterhorn Protokoll wurde ins Deutsche übersetzt.

## PAC

[PAC](http://www.access-for-all.ch/ch/pdf-werkstatt/pdf-accessibility-checker-pac.html) ist das umfangreichste und kostenlose Prüftool um PDFs auf dessen Zugänglichkeit zu testen. Es prüft ob ein Dokument den PDF/UA Standard erfüllt. Dazu werden die maschinell prüfbaren Punkte ausgewertet. Prüfpunkte, welche interaktiv getestet werden müssen, können mithilfe der enthaltenen Screenreader-Simulation geprüft werden. PAC wird durch die Schweizer Stiftung „Zugang für alle“ vertrieben. Sie kann zurzeit nur auf einem Windows Betriebssystem installiert werden.

## PDF/UA

PDF/UA ist der ISO-Standard 14289-1. Der Teil „UA“ steht für _Universal Accessibility_. Dieser Standard definiert Anforderungen an die Barrierefreiheit des PDF-Dokuments. Er richtet sich an Herstellerfirmen von Software und assistiver Technologie. Um ein Dokument nach PDF/UA zu prüfen, muss nicht die ISO-Dokumentation erworben werden. Mithilfe des kostenlosen [Matterhorn Protokolls](#matterhorn-protokoll) lässt sich ein Dokument auf dessen PDF/UA-Kompatibilität prüfen.

PDF/UA baut auf die [WCAG](#wcag) auf, widerspricht diesen Richtlinien nicht, behandelt aber nicht alle Regelungen der WCAG.

## Reihenfolge

siehe [Logische Lesereihenfolge](#logische-lesereihenfolge)

## _Tagged PDF_

siehe _[Tags](#tags)_

## _Tags_

Wird ein _Tagged PDF_ hergestellt, also ein PDF das _Tags_ enthält, legt man den Grundstein der Maschinenlesbarkeit und somit der Barrierefreiheit. Das alleinige Vorhandensein reicht jedoch nicht. Die PDF-_Tags_ müssen auch die Semantik des Dokuments wiedergeben. Damit ist gemeint, dass beispielsweise eine Überschrift nicht nur visuell, anhand einer grösseren Schrift, sondern auch maschinell, anhand eines Überschriften-_Tags_, als solche erkennbar ist.

[PDF/UA](#pdfua) gibt vor, dass sämtliche Elemente eines Dokuments entweder _getaggt_ oder als Artefakt markiert werden müssen.

Um mehr über das _Taggen_ eines Dokuments zu erfahren, werden die folgenden Beiträge empfohlen:

- [PDF-Tags in InDesign festlegen](/de/basics/indesign/defining-pdf-tags-in-indesign/)
- [PDF-Tags in Word festlegen](/de/basics/word/defining-pdf-tags-in-word/)
- [PDF-Tags in Acrobat erstellen und ändern](/de/basics/acrobat/create-and-modify-pdf-tags-in-acrobat/)

Die möglichen _PDF-Tags_ (nach dem PDF 1.7 Standard) findest du in der „[Übersicht der PDF-_Tags_](/de/basics/general/overview-of-the-pdf-tags/)“.

Um mehr über Artefakte zu erfahren, werden die folgenden Beiträge empfohlen:

- [Artefakte in InDesign festlegen](/de/basics/indesign/defining-artifacts-in-indesign/)
- [Artefakte in Word festlegen](/de/basics/word/defining-artifacts-in-word/)
- [Artefakte in Acrobat erstellen und prüfen](/de/basics/acrobat/create-and-check-artifacts-in-acrobat/)

## Unterstützungstechnologie

Unterstützungstechnologie ist eine weitere Übersetzung des englischen Begriffs _assistive technology_. Siehe dazu [assistive Technologie](#assistive-technologie).

## WCAG

Die [WCAG](https://www.w3.org/TR/WCAG21/), kurz für Web Content Accessibility Guidelines, sind die Empfehlungen/Richtlinien der Gruppe [WAI](https://www.w3.org/WAI/) (kurz für Web Accessibility Initiative), welche wiederum Bestandteil des [W3C](https://www.w3.org/) (kurz für World Wide Web Consortium) ist. Diese Richtlinien wurden in verschiedene Sprachen übersetzt, unter anderem [ins Deutsche](https://www.w3.org/Translations/WCAG20-de/).

Die WCAG kann man als wichtigstes, allgemeines Regelwerk betrachten wenn es um die digitale und barrierefreie Kommunikation geht. PDF wird auch als mögliche Technologie der Webinhalte angesehen, weshalb die WCAG auch für PDF gilt.

Für die technische Umsetzung von barrierefreien PDFs werden jedoch nicht die WCAG, sondern der [PDF/UA](#pdfua) Standard benötigt.

In vielen nationalen und internationalen Gesetzen zur digitalen Barrierefreiheit wird auf die WCAG verwiesen.

## Zugänglichkeit

Ist eine weitere Übersetzung von des englischen Begriffs Accessibility. Siehe dazu [barrierefreies PDF](#barrierefreies-pdf).
