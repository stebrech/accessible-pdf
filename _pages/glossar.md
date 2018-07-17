---
ID: 134
post_title: Glossar
author: Stefan Brechbühl
post_excerpt: >
  Im Glossar werden Begriffe erklärt, die
  für die Arbeit mit barrierefreien PDFs
  benötigt werden.
layout: page
permalink: http://accessible-pdf.info/de/glossar/
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

Assistierende Technologie ist eine weitere Übersetzung des englischen Begriffs *assistive technology*. Siehe dazu [assistive Technologie][1].

## assistive Technologie {#assistive-technologie}

Assistive Technologie (Abk. AT) ist der eingedeutschte Begriff von *assistive technology*. AT steht für mögliche Hilfsmittel, die benötigt werden um Informationen trotz Einschränkungen lesen und verarbeiten zu können.

Unter AT fallen folgende Software und Hardware:

*   [Screenreader (Bildschirmvorlese-Software)][2]
*   [Braillezeile][3]
*   Bildschirmvergrösserung
*   Sprachsteuerung
*   Spezialmäuse und -tastaturen
*   Augen- und Mundsteuerung
*   …

## AT {#at}

Abkürzung für [assistive Technologie][1]

## automatische Prüfung {#automatische-pruefung}

Gemäss [Matterhorn Protokoll][4] können 87 Prüfpunkte durch eine Software geprüft werden. Mithilfe einer Prüfung mit [PAC 2][5] werden solche Fehler erkannt.

## barrierearm {#barrierearm}

Der Begriff „barrierearm“ wird teilweise für eine beschränkt, erreichte Barrierefreiheit verwendet. Siehe dazu [barrierefreies PDF][6]

## barrierefreies PDF {#barrierefrei}

Durch Barrierefreiheit werden keine Menschen aufgrund einer Schwäche oder Behinderung ausgeschlossen. Für elektronische Dokumente bedeutet dies, dass technische Voraussetzungen geschaffen werden damit alle Menschen diese selbstständig benutzen können.

Ein PDF ist barrierefrei wenn es mit dem Standard [PDF/UA][7] kompatibel ist und die Richtlinien des [WCAG][8] einhält.

Die wichtigsten Grundlagen sind erreicht, wenn

*   das Dokument mit [semantischen PDF-Tags][9] versehen ist, welche die logische Dokumentstruktur und Lesereihenfolge erzeugen;
*   inhaltlich nicht relevante Objekte als Artefakt markiert sind (z.B. dekorative Elemente, wiederholende Kopf- und Fusszeilen);
*   Texte des Dokuments grundsätzlich als Text und nicht als Bild vorhanden sind (OCR Scannen);
*   Alternativtexte verwendet werden um Nicht-Text-Elemente (Bilder und Grafiken) zu beschreiben;
*   keine schwachen oder ungeeignete Farbkontraste verwendet werden.

## manuelle Prüfung {#manuelle-pruefung}

Gemäss [Matterhorn Protokoll][4] sind 47 Prüfpunkte durch einen Menschen zu prüfen. Diese können nicht durch eine Software, wie zum Beispiel [PAC 2][5], geprüft werden. Es kann höchstens eine Warnung ausgegeben werden.

## Matterhorn Protokoll {#matterhorn-protokoll}

Das [Matterhorn Protokoll][10] ist ein Dokument der [PDF Association][11], welches Softwareentwicklern und Prüfpersonen von Dokumenten hilft, ein PDF nach PDF/UA zu erstellen. Es beschreibt 136 Fehlerbedingungen, welche in 31 Prüfpunkte aufgeteilt sind. Von den 136 Fehlerbedingungen können 87 durch eine Software geprüft werden. 47 Fehlerbedingungen müssen manuell durch einen Menschen geprüft werden. 2 Fehlerbedingungen können in keiner dieser Kategorien zugeordnet werden. Das Matterhorn Protokoll wurde ins Deutsche übersetzt.

## PAC {#pac}

[PAC][12] ist das umfangreichste und kostenlose Prüftool um PDFs auf dessen Zugänglichkeit zu testen. Es prüft ob ein Dokument den PDF/UA Standard erfüllt. Dazu werden die maschinell prüfbaren Punkte ausgewertet. Prüfpunkte, welche interaktiv getestet werden müssen, können mithilfe der enthaltenen Screenreader-Simulation geprüft werden. PAC wird durch die Schweizer Stiftung „Zugang für alle“ vertrieben. Sie kann zurzeit nur auf einem Windows Betriebssystem installiert werden.

## PDF/UA {#pdf-ua}

PDF/UA ist der ISO-Standard 14289-1. Der Teil „UA“ steht für *Universal Accessibility*. Dieser Standard definiert Anforderungen an die Barrierefreiheit des PDF-Dokuments. Er richtet sich an Herstellerfirmen von Software und assistiver Technologie. Um ein Dokument nach PDF/UA zu prüfen muss nicht zwingend die ISO-Dokumentation erworben werden. Das [Matterhorn Protokoll][4] enthält die benötigten Prüfpunkte und ist kostenlos.

## Zugänglichkeit {#zugaenglichkeit}

Ist eine weitere Übersetzung von des englischen Begriffs Accessibility. Siehe dazu [barrierefreies PDF][6]

 [1]: #assistive-technologie
 [2]: https://de.wikipedia.org/wiki/Screenreader
 [3]: https://de.wikipedia.org/wiki/Braillezeile
 [4]: #matterhorn-protokoll
 [5]: #pac
 [6]: #barrierefrei
 [7]: #pdf-ua
 [8]: https://www.w3.org/Translations/WCAG20-de/
 [9]: https://accessible-pdf.info/de/basics/uebersicht-der-pdf-tags/
 [10]: https://www.pdfa.org/publication/matterhorn-protokoll-1-02-deutsche-uebersetzung/?lang=de
 [11]: https://www.pdfa.org/pdf-association/?lang=de
 [12]: http://www.access-for-all.ch/ch/pdf-werkstatt/pdf-accessibility-checker-pac.html