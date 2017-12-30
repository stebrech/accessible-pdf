---
post_title: Glossar
author: Stefan Brechbühl
layout: page
published: true
post_excerpt: "Im Glossar werden Begriffe erklärt, die für die Arbeit mit barrierefreien PDFs benötigt werden."
---

Im Glossar werden Begriffe erklärt, die für die Arbeit mit barrierefreien PDFs benötigt werden.

## Assistierende Technologie
siehe [assistive Technolgie](#assistive-technolgie)

## Assistive Technolgie
Assistive Technologie (Abk. AT) ist der eingedeutschte Begriff von *Assistive Technology*. AT steht für mögliche Hilfsmittel, die benötigt werden um Informationen trotz Einschränkungen lesen und verarbeiten zu können.

Unter AT fallen folgende Software und Hardware:
- Screenreader \(Bildschirmlese-Software\)
- Braille-Zeile
- Bildschirmvergrösserung
- Sprachsteuerung
- Spezialmäuse und -tastaturen
- Augen-, Mund-, Sprachsteuerung 

## AT
siehe [assistive Technolgie](#assistive-technolgie)

## barrierearm
siehe [barrierefrei](#barrierefrei)

## barrierefrei
Ein PDF ist barrierefrei wenn

- es mit semantischen PDF-Tags versehen ist, welche die logische Dokumentstruktur und Lesereihenfolge erzeugen;
- Alternativtexte verwendet werden um Elemente, die kein Text sind, zu beschreiben;
- keine schwachen oder ungeeignete Farbkontraste verwendet werden;
- es mit dem Standard [PDF/UA](#pdf-ua) kompatibel ist.

Durch Barrierefreiheit werden keine Menschen aufgrund einer Schwäche oder Behinderung ausgeschlossen.

## Matterhorn Protokoll
Das [Matterhorn Protokoll](https://www.pdfa.org/publication/matterhorn-protokoll-1-02-deutsche-uebersetzung/?lang=de) ist ein Dokument der [PDF Association](https://www.pdfa.org/pdf-association/?lang=de), welches Softwareentwicklern und Prüfpersonen von Dokumenten hilft, ein PDF nach PDF/UA zu erstellen. Es beschreibt 136 Fehlerbedingungen, welche in 31 Prüfpunkte aufgeteilt sind. Von den 136 Fehlerbedingungen können 87 durch eine Software geprüft werden. 47 Fehlerbedingungen müssen manuell durch einen Menschen geprüft werden. 2 Fehlerbedingungen können in keiner dieser Kategorien zugeordnet werden. Das Matterhorn Protokoll wurde ins Deutsche übersetzt.

## PAC
[PAC](http://www.access-for-all.ch/ch/pdf-werkstatt/pdf-accessibility-checker-pac.html) ist das umfangreichste und kostenlose Prüftool um PDFs auf dessen Zugänglichkeit zu testen. Es prüft ob ein Dokument den PDF/UA Standard erfüllt. Dazu werden die maschinell prüfbaren Punkte ausgewertet. Prüfpunkte, welche interaktiv getestet werden müssen, können mithilfe der enthaltenen Screenreader-Simulation geprüft werden. PAC wird durch die Schweizer Stiftung «Zugang für alle» vertrieben. Sie kann zurzeit nur auf einem Windows Betriebssystem installiert werden.

## PDF/UA
PDF/UA ist der ISO-Standard 14289-1. Dieser Standard definiert Anforderungen an die Barrierefreiheit des PDF-Dokuments. Er richtet sich an Herstellerfirmen von Software und assistiver Technologie. Um ein Dokument nach PDF/UA zu prüfen muss nicht zwingend die ISO-Dokumentation erworben werden. Das [Matterhorn Protokoll](#matterhorn-protokoll) enthält die benötigten Prüfpunkte und ist kostenlos.

## manuelle Prüfung
Gemäss [Matterhorn Protokoll](#matterhorn-protokoll) sind 47 Prüfpunkte durch einen Menschen zu prüfen. Diese können nicht durch eine Software, wie zum Beispiel [PAC 2](#pac2), geprüft werden. Es kann höchstens eine Warnung ausgegeben werden.

## automatische Prüfung
Gemäss [Matterhorn Protokoll](#matterhorn-protokoll) können 87 Prüfpunkte durch eine Software geprüft werden. Mithilfe einer Prüfung mit [PAC 2](#pac2) werden solche Fehler erkannt.

## Zugänglichkeit
siehe [barrierefrei](#barrierefrei)
