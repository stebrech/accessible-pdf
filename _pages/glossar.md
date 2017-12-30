---
ID: 134
post_title: Glossar
author: Stefan Brechbühl
post_excerpt: ""
layout: page
permalink: https://accessible-pdf.info/glossar/
published: true
post_date: 2017-12-30 19:48:13
tags: [ ]
categories: [ ]
---
Im Glossar werden Begriffe erklärt, die für die Arbeit mit barrierefreien PDFs benötigt werden.

## Assistierende Technologie

siehe [assistive Technolgie][1]

## Assistive Technolgie

Assistive Technologie (Abk. AT) ist der eingedeutschte Begriff von *Assistive Technology*. AT steht für mögliche Hilfsmittel, die benötigt werden um Informationen trotz Einschränkungen lesen und verarbeiten zu können.

Unter AT fallen folgende Software und Hardware: - Screenreader (Bildschirmlese-Software) - Braille-Zeile - Bildschirmvergrösserung - Sprachsteuerung - Spezialmäuse und -tastaturen - Augen-, Mund-, Sprachsteuerung

## AT

siehe [assistive Technolgie][1]

## barrierearm

siehe [barrierefrei][2]

## barrierefrei

Ein PDF ist barrierefrei wenn

*   es mit semantischen PDF-Tags versehen ist, welche die logische Dokumentstruktur und Lesereihenfolge erzeugen;
*   Alternativtexte verwendet werden um Elemente, die kein Text sind, zu beschreiben;
*   keine schwachen oder ungeeignete Farbkontraste verwendet werden;
*   es mit dem Standard [PDF/UA][3] kompatibel ist.

Durch Barrierefreiheit werden keine Menschen aufgrund einer Schwäche oder Behinderung ausgeschlossen.

## Matterhorn Protokoll

Das [Matterhorn Protokoll][4] ist ein Dokument der [PDF Association][5], welches Softwareentwicklern und Prüfpersonen von Dokumenten hilft, ein PDF nach PDF/UA zu erstellen. Es beschreibt 136 Fehlerbedingungen, welche in 31 Prüfpunkte aufgeteilt sind. Von den 136 Fehlerbedingungen können 87 durch eine Software geprüft werden. 47 Fehlerbedingungen müssen manuell durch einen Menschen geprüft werden. 2 Fehlerbedingungen können in keiner dieser Kategorien zugeordnet werden. Das Matterhorn Protokoll wurde ins Deutsche übersetzt.

## PAC

[PAC][6] ist das umfangreichste und kostenlose Prüftool um PDFs auf dessen Zugänglichkeit zu testen. Es prüft ob ein Dokument den PDF/UA Standard erfüllt. Dazu werden die maschinell prüfbaren Punkte ausgewertet. Prüfpunkte, welche interaktiv getestet werden müssen, können mithilfe der enthaltenen Screenreader-Simulation geprüft werden. PAC wird durch die Schweizer Stiftung «Zugang für alle» vertrieben. Sie kann zurzeit nur auf einem Windows Betriebssystem installiert werden.

## PDF/UA

PDF/UA ist der ISO-Standard 14289-1. Dieser Standard definiert Anforderungen an die Barrierefreiheit des PDF-Dokuments. Er richtet sich an Herstellerfirmen von Software und assistiver Technologie. Um ein Dokument nach PDF/UA zu prüfen muss nicht zwingend die ISO-Dokumentation erworben werden. Das [Matterhorn Protokoll][7] enthält die benötigten Prüfpunkte und ist kostenlos.

## manuelle Prüfung

Gemäss [Matterhorn Protokoll][7] sind 47 Prüfpunkte durch einen Menschen zu prüfen. Diese können nicht durch eine Software, wie zum Beispiel [PAC 2][8], geprüft werden. Es kann höchstens eine Warnung ausgegeben werden.

## automatische Prüfung

Gemäss [Matterhorn Protokoll][7] können 87 Prüfpunkte durch eine Software geprüft werden. Mithilfe einer Prüfung mit [PAC 2][8] werden solche Fehler erkannt.

## Zugänglichkeit

siehe [barrierefrei][2]

 [1]: #assistive-technolgie
 [2]: #barrierefrei
 [3]: #pdf-ua
 [4]: https://www.pdfa.org/publication/matterhorn-protokoll-1-02-deutsche-uebersetzung/?lang=de
 [5]: https://www.pdfa.org/pdf-association/?lang=de
 [6]: http://www.access-for-all.ch/ch/pdf-werkstatt/pdf-accessibility-checker-pac.html
 [7]: #matterhorn-protokoll
 [8]: #pac2