---
ID: 134
post_title: Glossar
author: Stefan Brechbühl
post_excerpt: >
  Im Glossar werden Begriffe erklärt, die
  für die Arbeit mit barrierefreien PDFs
  benötigt werden.
layout: page
permalink: https://accessible-pdf.info/de/glossar/
published: true
post_date: 2017-12-30 19:48:13
tags: [ ]
categories: [ ]
---
Im Glossar werden Begriffe erklärt, die für die Arbeit mit barrierefreien PDFs benötigt werden.

## Alt-Text {#alt-text}

Ein Alt-Text (kurz für Alternativtext) beschreibt ein Nicht-Textelement, wie ein Bild / eine Grafik. Der unsichtbare Text kann durch Software, insbesondere [AT](#assistive-technologie), ausgelesen und wiedergegeben werden.

Der Alt-Text sollte so kurz und prägnant wie möglich sein und beschreiben was auf dem Bild sichtbar ist. Er soll keine zusätzlichen Informationen enthalten, welche auch visuell nicht erkannt würden, z.B. der Name des Fotografen oder Namen von abgebildeten Personen und Sachen, die mithilfe des Kontexts auch visuell nicht erkannt würden. Dies ist der grosse Unterschied zu einer sichtbaren Bildunterschrift / einer Bildbeschreibung, welche zusätzliche Informationen übermitteln kann.

Nicht jedes Bild und jede Grafik benötigt einen Alt-Text. Eine wertvolle Entscheidungshilfe bietet WAI (Web Accessibility Initiative) mit „[An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)“ und den [Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/) (nur in Englisch). Der wesentliche Unterschied von HTML und PDF ist die Handhabung von dekorativen Bildern (z.B. Hintergrundbilder, Linien und weiteren dekorativen Formen). Diese werden in PDF als Artefakt gekennzeichnet, siehe auch „[Unwichtige und dekorative Inhalte als Artefakt](https://accessible-pdf.info/de/basics/unwichtige-und-dekorative-inhalte-als-artefakt/)“. Während die dekorativen Bilder keinen Alt-Text benötigen, sollen die funktionalen Bilder die Funktion / das Ziel erklären und nicht dessen Bildinhalt. Hierzu zählen insbesondere verlinkte Bilder.

## Alternativtext {#alternativtext}

siehe [Alt-Text](#alt-text)

## assistierende Technologie {#assistierende-technologie}

Assistierende Technologie ist eine weitere Übersetzung des englischen Begriffs *assistive technology*. Siehe dazu [assistive Technologie](#assistive-technologie).

## assistive Technologie {#assistive-technologie}

Assistive Technologie (Abk. AT) ist der eingedeutschte Begriff von *assistive technology*. AT steht für mögliche Hilfsmittel, die benötigt werden um Informationen trotz Einschränkungen lesen und verarbeiten zu können.

Unter AT fallen folgende Software und Hardware:

- [Screenreader (Bildschirmvorlese-Software)](https://de.wikipedia.org/wiki/Screenreader)
- [Braillezeile](https://de.wikipedia.org/wiki/Braillezeile)
- Bildschirmvergrösserung
- Sprachsteuerung
- Spezialmäuse und -tastaturen
- Augen- und Mundsteuerung
- …

## AT {#at}

Abkürzung für [assistive Technologie](#assistive-technologie)

## automatische Prüfung {#automatische-pruefung}

Gemäss [Matterhorn Protokoll](#matterhorn-protokoll) können 87 Prüfpunkte durch eine Software geprüft werden. Mithilfe einer Prüfung mit [PAC](#pac) werden solche Fehler erkannt.

## barrierearm {#barrierearm}

Der Begriff „barrierearm“ wird teilweise für eine beschränkt, erreichte Barrierefreiheit verwendet. Siehe dazu [barrierefreies PDF](#barrierefrei)

## barrierefreies PDF {#barrierefrei}

Durch Barrierefreiheit werden keine Menschen aufgrund einer Schwäche oder Behinderung ausgeschlossen. Für elektronische Dokumente bedeutet dies, dass technische Voraussetzungen geschaffen werden damit alle Menschen diese selbstständig benutzen können.

Ein PDF ist barrierefrei wenn es mit dem Standard [PDF/UA](#pdf-ua) kompatibel ist und die Richtlinien des [WCAG](https://www.w3.org/Translations/WCAG20-de/) einhält.

Die wichtigsten Grundlagen sind erreicht, wenn

- das Dokument mit [semantischen PDF-Tags](https://accessible-pdf.info/de/basics/uebersicht-der-pdf-tags/) versehen ist, welche die logische Dokumentstruktur und Lesereihenfolge erzeugen;
- inhaltlich nicht relevante Objekte als Artefakt markiert sind (z.B. dekorative Elemente, wiederholende Kopf- und Fusszeilen);
- Texte des Dokuments grundsätzlich als Text und nicht als Bild vorhanden sind (OCR Scannen);
- Alternativtexte verwendet werden um Nicht-Text-Elemente (Bilder und Grafiken) zu beschreiben;
- keine schwachen oder ungeeignete Farbkontraste verwendet werden.

## Hilfstechnologie {#hilfstechnologie}

siehe [assistive Technologie](#assistive-technologie)

## Lesereihenfolge {#lesereihenfolge}

siehe [Logische Lesereihenfolge](#logische-lesereihenfolge)

## Logische Lesereihenfolge {#logische-lesereihenfolge}

Die logische Lesereihenfolge steht für die korrekte Reihenfolge, in welcher einzelne Inhaltsteile gelesen werden sollten damit das Dokument richtig verstanden wird. Ein gutes Praxisbeispiel ist ein mehrspaltiges Layout indem Zeile für Zeile innerhalb einer Spalte und nicht über die ganze Seite gelesen werden muss.

Hilfstechnologien ([AT](#assistive-technologie)) benötigen PDF-*[Tags](#tags)* nicht nur um die Bedeutung der enthaltenen Inhalte zu erkennen, sondern auch um die logische Lesereihenfolge abzuleiten. Leider nutzen nicht alle AT die Reihenfolge der *Tags* sondern entnehmen sie der visuellen Reihenfolge der Inhalte, welche in Acrobat im Navigationsfenster „Reihenfolge“ abgebildet wird. Diese visuelle Reihenfolge der logischen Lesereihenfolge anzupassen kann sehr zeitraubend sein und ist keine Anforderung von [PDF/UA](#pdf-ua).

![Acrobat Infofenster: Im Tags-Fenster wird die logische Dokumentstruktur angezeigt, die von Hilfstechnologien für die Auswertung des Dokuments verwendet wird. Durch die logische Struktur wird die Lesereihenfolge festgelegt. Ausserdem werden Überschriften, Listen, Tabellen und andere Elemente identifiziert, die Benutzer von Hilfstechnologien verwenden können, um durch das Dokument zu navigieren. Um die Lesereihenfolge zu ändern, die von der Sprachausgabe von Adobe Acrobat und Adobe Acrobat Reader verwendet wird, verwenden Sie das Leserichtung-Fenster.](https://accessible-pdf.info/wp/wp-content/uploads/acrobat-info-tags-reihenfolge.png)

In [„Semantik und logische Lesereihenfolge prüfen“](https://accessible-pdf.info/de/basics/semantik-und-logische-lesereihenfolge-pruefen/) lernst du wie die logische Lesereihenfolge geprüft werden kann.

## manuelle Prüfung {#manuelle-pruefung}

Gemäss [Matterhorn Protokoll](#matterhorn-protokoll) sind 47 Prüfpunkte durch einen Menschen zu prüfen. Diese können nicht durch eine Software, wie zum Beispiel [PAC](#pac), geprüft werden. Es kann höchstens eine Warnung ausgegeben werden.

## Matterhorn Protokoll {#matterhorn-protokoll}

Das [Matterhorn Protokoll](https://www.pdfa.org/publication/matterhorn-protokoll-1-02-deutsche-uebersetzung/?lang=de) ist ein Dokument der [PDF Association](https://www.pdfa.org/pdf-association/?lang=de), welches Softwareentwicklern und Prüfpersonen von Dokumenten hilft, ein PDF nach PDF/UA zu erstellen. Es beschreibt 136 Fehlerbedingungen, welche in 31 Prüfpunkte aufgeteilt sind. Von den 136 Fehlerbedingungen können 87 durch eine Software geprüft werden. 47 Fehlerbedingungen müssen manuell durch einen Menschen geprüft werden. 2 Fehlerbedingungen können in keiner dieser Kategorien zugeordnet werden. Das Matterhorn Protokoll wurde ins Deutsche übersetzt.

## PAC {#pac}

[PAC](http://www.access-for-all.ch/ch/pdf-werkstatt/pdf-accessibility-checker-pac.html) ist das umfangreichste und kostenlose Prüftool um PDFs auf dessen Zugänglichkeit zu testen. Es prüft ob ein Dokument den PDF/UA Standard erfüllt. Dazu werden die maschinell prüfbaren Punkte ausgewertet. Prüfpunkte, welche interaktiv getestet werden müssen, können mithilfe der enthaltenen Screenreader-Simulation geprüft werden. PAC wird durch die Schweizer Stiftung „Zugang für alle“ vertrieben. Sie kann zurzeit nur auf einem Windows Betriebssystem installiert werden.

## PDF/UA {#pdf-ua}

PDF/UA ist der ISO-Standard 14289-1. Der Teil „UA“ steht für *Universal Accessibility*. Dieser Standard definiert Anforderungen an die Barrierefreiheit des PDF-Dokuments. Er richtet sich an Herstellerfirmen von Software und assistiver Technologie. Um ein Dokument nach PDF/UA zu prüfen, muss nicht die ISO-Dokumentation erworben werden. Mithilfe des kostenlosen [Matterhorn Protokolls](#matterhorn-protokoll) lässt sich ein Dokument auf dessen PDF/UA-Kompatibilität prüfen.

PDF/UA baut auf die [WCAG](#wcag) auf, widerspricht diesen Richtlinien nicht, behandelt aber nicht alle Regelungen der WCAG.

## Reihenfolge {#reihenfolge}

siehe [Logische Lesereihenfolge](#logische-lesereihenfolge)

## *Tagged PDF* {#tagged-pdf}

siehe *[Tags](#tags)*

## *Tags* {#tags}

Wird ein *Tagged PDF* hergestellt, also ein PDF das *Tags* enthält, legt man den Grundstein der Maschinenlesbarkeit und somit der Barrierefreiheit. Das alleinige Vorhandensein reicht jedoch nicht. Die PDF-*Tags* müssen auch die Semantik des Dokuments wiedergeben. Damit ist gemeint, dass beispielsweise eine Überschrift nicht nur visuell, anhand einer grösseren Schrift, sondern auch maschinell, anhand eines Überschriften-*Tags*, als solche erkennbar ist.

[PDF/UA](#pdf-ua) gibt vor, dass sämtliche Elemente eines Dokuments entweder *getaggt* oder als Artefakt markiert werden müssen. Mehr zu Artefakten findest du in „[Unwichtige und dekorative Inhalte als Artefakt](https://accessible-pdf.info/de/basics/unwichtige-und-dekorative-inhalte-als-artefakt/)“.

Die möglichen *PDF-Tags* (nach dem PDF 1.7 Standard) findest du in der „[Übersicht der PDF-*Tags*](https://accessible-pdf.info/de/basics/uebersicht-der-pdf-tags/)“. Die verfügbaren PDF-*Tags* sind den HTML-Tags teilweise sehr ähnlich.

## WCAG {#wcag}

Die [WCAG](https://www.w3.org/TR/WCAG21/), kurz für Web Content Accessibility Guidelines, sind die Empfehlungen/Richtlinien der Gruppe [WAI](https://www.w3.org/WAI/) (kurz für Web Accessibility Initiative), welche wiederum Bestandteil des [W3C](https://www.w3.org/) (kurz für World Wide Web Consortium) ist. Diese Richtlinien wurden in verschiedene Sprachen übersetzt, unter anderem [ins Deutsche](https://www.w3.org/Translations/WCAG20-de/).

Die WCAG kann man als wichtigstes, allgemeines Regelwerk betrachten wenn es um die digitale und barrierefreie Kommunikation geht. PDF wird auch als mögliche Technologie der Webinhalte angesehen, weshalb die WCAG auch für PDF gilt.

Für die technische Umsetzung von barrierefreien PDFs werden jedoch nicht die WCAG, sondern der [PDF/UA](#pdf-ua) Standard benötigt.

In vielen nationalen und internationalen Gesetzen zur digitalen Barrierefreiheit wird auf die WCAG verwiesen.

## Zugänglichkeit {#zugaenglichkeit}

Ist eine weitere Übersetzung von des englischen Begriffs Accessibility. Siehe dazu [barrierefreies PDF](#barrierefrei).