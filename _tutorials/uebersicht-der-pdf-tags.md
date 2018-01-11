---
post_title: Übersicht der PDF-Tags
author: Stefan Brechbühl
post_excerpt: "Diese Zusammenstellung zeigt alle verfügbaren Tags nach dem Standard PDF 1.7. Sie hilft als Nachschlagewerk um semantisch korrekte Tags zu vergeben."
layout: tutorials
published: true
categories:
  - Grundlagen
---

Diese Zusammenstellung zeigt alle verfügbaren Tags nach dem Standard PDF 1.7. Sie hilft als Nachschlagewerk um semantisch korrekte Tags zu vergeben. 

Die Beschreibungen der Tags stammen teilweise von dem schon etwas älteren Handbuch „[Erstellen von barrierefreien PDF-Dokumenten mit Adobe Acrobat](https://www.adobe.com/de/accessibility/products/acrobat/pdfs/BRO_HowTo_PDFs_Barrierefrei_DE_2005_09_abReader7.pdf)“.

## Container
Behälterelemente bilden die höchste Ebene von Elementen und erlauben die hierarchische Gruppierung von weiteren Elementen auf Blockebene

| Tag | Übersetzung | Beschreibung |
|:-- |:-- |:-- |
| <code>&lt;Document&gt;</code> | Dokument | Stammelement des Tag-Baums eines Dokuments |
| <code>&lt;Part&gt;</code> | Teil | grobe Einteilung eines Dokuments; kann kleinere Inhaltseinheiten wie Kapitel- oder Abschnittselemente enthalten |
| <code>&lt;Div&gt;</code> | Kapitel (engl. division) | generisches Element auf Blockebene oder eine Gruppe solcher Elemente |
| <code>&lt;Art&gt;</code> | Artikel | inhaltlich in sich abgeschlossener Textkörper |
| <code>&lt;Sect&gt;</code> | Abschnitt (engl. section) | allgemeines Behälterelement, vergleichbar mit „Division“ (DIV Class=“Sect”) in HTML; in der Regel ein Teil- oder Artikelelement |

## Überschriften und Absätze

| Tag | Übersetzung | Beschreibung |
|:--|:--|:--|
| <code>&lt;P&gt;</code> | Absatz (engl. Paragraph) | Gewöhnlicher Absatz |
| <code>&lt;H1&gt;</code> bis <code>&lt;H6&gt;</code> | Überschriften (engl. Heading) | Überschriften mit Hierarchiestufe 1 bis 6. |
| <code>&lt;H&gt;</code> | Überschrift | Überschrift muss einer übergeordneten Einteilung untergeordnet sein. *Da es mithilfe der hierarchischen Überschriften-Formatvorlagen in der Regel einfacher ist eine Dokumentstruktur aufzubauen, empfehle ich diesen Tag nicht zu verwenden.* |

## Beschriftungs- und Listenelemente
Beschriftungs- und Listenelemente sind Elemente auf Blockebene, die zur Strukturierung von Listen dienen.

| Tag | Übersetzung | Beschreibung |
|:--|:--|:--|
| <code>&lt;L&gt;</code> | Liste | Folge von Einträgen ähnlicher Bedeutung oder Relevanz; die unmittelbar untergeordneten Elemente müssen Listeneinträge sein |
| <code>&lt;LI&gt;</code> | Listeneintrag (engl. list item) | einzelnes Element einer Liste; ihm kann ein Beschriftungselement (optional) und muss ein Listenkörperelement (obligatorisch) untergeordnet sein |
| <code>&lt;LBL&gt;</code> | Beschriftung (engl. label) | Aufzählungszeichen, ein Name oder eine Nummer, die einen Eintrag kennzeichnet und von anderen Einträgen in derselben Liste unterscheidet |
| <code>&lt;LBody&gt;</code> | Listenkörper (engl. list body) | eigentlicher Inhalt eines einzelnen Listeneintrags |

## Sondertextelemente
Sondertextelemente identifizieren Text, der keinen generischen Absatz bildet.

| Tag | Übersetzung | Beschreibung |
|:--|:--|:--|
| <code>&lt;BlockQuote&gt;</code> | Blockzitat | Absatz, der von einem anderen Verfasser stammt als der umgebende Haupttext |
| <code>&lt;Caption&gt;</code> | Bildunterschrift | kurzer Text, der eine Tabelle oder Abbildung beschreibt. |
| <code>&lt;Index&gt;</code> | Index | Folge von Einträgen, die aus einem Stichwort und Referenzelementen bestehen, die auf das Vorkommen des Stichworts im Hauptkörper des Dokuments verweisen |
| <code>&lt;TOC&gt;</code> | Inhaltsverzeichnis (engl. table of contents) | Element, das eine strukturierte Liste von Einträgen enthält; besitzt eine eigene Hierarchie |
| <code>&lt;TOCI&gt;</code> | Inhaltsverzeichniseintrag (engl. table of contents item) | Eintrag in einer Liste, die einem Inhaltsverzeichniselement zugeordnet ist |

## Tabellenelemente
Tabellenelemente sind besondere Elemente zur Strukturierung von Tabellen.

| Tag | Übersetzung | Beschreibung |
|:--|:--|:--|
| <code>&lt;Table&gt;</code> | Tabelle | zweidimensionale Anordnung von Daten- und Textzellen, die sich aus untergeordneten Tabellenzeilenelementen zusammensetzt und ein Bildunterschriftselement als erstes oder letztes untergeordnetes Element enthalten kann |
| <code>&lt;TR&gt;</code> | Tabellenzeile (engl. table row) | Zeile mit Überschriften oder Daten in einer Tabelle; kann Tabellenüberschrifts- und Tabellendatenzellenelemente enthalten |
| <code>&lt;TD&gt;</code> | Tabellendatenzelle | Tabellenzelle, die Daten enthält, die nicht als Überschrift fungieren |
| <code>&lt;TH&gt;</code> | Tabellenüberschriftszelle (engl. table header) | Tabellenzelle, die Überschriftstext oder -daten enthält, die eine oder mehrere Zeilen oder Spalten der Tabelle beschreiben |

## Elemente auf Zeilenebene
Elemente auf Zeilenebene kennzeichnen Textteile, die ein bestimmtes Format oder Verhalten aufweisen. Sie unterscheiden sich von den Elementen auf Blockebene und können in diesen enthalten sein sowie selbst Elemente auf Blockebene enthalten. Es gibt die folgenden Standardelemente auf Zeilenebene.

| Tag | Übersetzung | Beschreibung |
|:--|:--|:--|
| <code>&lt;BibEntry&gt;</code> | Quellenverzeichniseintrag  (engl. bibliography entry) | Quellenangabe für ein Zitat |
| <code>&lt;Quote&gt;</code> | Zitat | Textsegment, das von einem anderen Verfasser stammt als der umgebende Text; unterscheidet sich vom Blockzitat, bei dem es sich um einen ganzen Absatz oder mehrere Absätze und nicht um einen Teil eines Satzes handelt |
| <code>&lt;Span&gt;</code> | Span | beliebiges Textsegment; kennzeichnet in der Regel Text, dem bestimmte Formateigenschaften zugeordnet sind |

## Sonderelemente auf Zeilenebene
Ähnlich wie Elemente auf Zeilenebene beschreiben Sonderelemente auf Zeilenebene Textsegmente, die ein bestimmtes Format oder Verhalten aufweisen.

| Tag | Übersetzung | Beschreibung |
|:--|:--|:--|
| <code>&lt;Code&gt;</code> | Code | Computerprogrammtext, der in das Dokument eingebettet ist |
| <code>&lt;Figure&gt;</code> | Abbildung | Grafik oder grafische Darstellung, die mit dem Text zusammenhängt |
| <code>&lt;Form&gt;</code> | Formular | PDF-Formular, das ausgefüllt werden kann |
| <code>&lt;Formula&gt;</code> | Formel | mathematische Funktion |
| <code>&lt;Link&gt;</code> | Verknüpfung | Hypertext-Verknüpfung, die in das Dokument eingebettet und einer Anmerkung zugeordnet ist, die zu einer anderen Stelle in demselben Dokument oder in einem anderen Dokument oder zu einer Website führt |
| <code>&lt;Note&gt;</code> | Anmerkung | Zusatztext oder Dokumentation, z.B. eine Fuß- oder Endnote, auf die im Haupttext verwiesen wird |
| <code>&lt;Reference&gt;</code> | Verweis | Verweis auf Text oder Daten an anderer Stelle im Dokument |