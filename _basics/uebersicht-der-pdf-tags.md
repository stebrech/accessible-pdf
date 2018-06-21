---
ID: 207
post_title: 'Übersicht der <em>PDF-Tags</em>'
author: Stefan Brechbühl
post_excerpt: >
  Diese Zusammenstellung zeigt alle
  verfügbaren Tags nach dem Standard PDF
  1.7. Sie hilft als Nachschlagewerk um
  semantisch korrekte Tags zu vergeben.
layout: basics
permalink: >
  http://accessible-pdf.info/de/basics/uebersicht-der-pdf-tags/
published: true
post_date: 2018-01-11 16:39:50
tags: [ ]
categories: [ ]
---
Diese Zusammenstellung zeigt die wichtigsten Tags nach dem Standard PDF 1.7. Sie hilft als Nachschlagewerk um semantisch korrekte Tags zu vergeben.

Die Beschreibungen der Tags stammen von dem schon etwas älteren Handbuch „[Erstellen von barrierefreien PDF-Dokumenten mit Adobe Acrobat][1]“. Persönliche Notizen sind in *kursiv* geschrieben.

## Container

Behälterelemente bilden die höchste Ebene von Elementen und erlauben die hierarchische Gruppierung von weiteren Elementen auf Blockebene

| Tag | Übersetzung | Beschreibung |
|:--- |:--- |:--- |
| `<Document>` | Dokument | Stammelement des Tag-Baums eines Dokuments |
| `<Part>` | Teil | grobe Einteilung eines Dokuments; kann kleinere Inhaltseinheiten wie Kapitel- oder Abschnittselemente enthalten |
| `<Div>` | Kapitel (engl. division)  | generisches Element auf Blockebene oder eine Gruppe solcher Elemente |
| `<Art>` | Artikel | inhaltlich in sich abgeschlossener Textkörper |
| `<Sect>` | Abschnitt (engl. section) | allgemeines Behälterelement; in der Regel ein Teil- oder Artikelelement |

## Überschriften und Absätze

| Tag | Übersetzung | Beschreibung |
|:--- |:--- |:--- |
| `<P>` | Absatz (engl. Paragraph) | Gewöhnlicher Absatz |
| `<H1>` bis `<H6>` | Überschriften (engl. Heading) | Überschriften mit Hierarchiestufe 1 bis 6. |
| `<H>` | Überschrift | Überschrift muss einer übergeordneten Einteilung untergeordnet sein. <br>*Da es mit den `<H1>` bis `<H6>` Tags in aller Regel einfacher ist eine Struktur aufzubauen, empfehle ich diesen Tag nicht zu verwenden.* |

## Beschriftungs- und Listenelemente

Beschriftungs- und Listenelemente sind Elemente auf Blockebene, die zur Strukturierung von Listen dienen.

| Tag | Übersetzung | Beschreibung |
|:--- |:--- |:--- |
| `<L>` | Liste | Folge von Einträgen ähnlicher Bedeutung oder Relevanz; die unmittelbar untergeordneten Elemente müssen Listeneinträge sein |
| `<LI>` | Listeneintrag (engl. list item) | einzelnes Element einer Liste; ihm kann ein Beschriftungselement (optional) und muss ein Listenkörperelement (obligatorisch) untergeordnet sein |
| `<LBL>` | Beschriftung (engl. label) | Aufzählungszeichen, ein Name oder eine Nummer, die einen Eintrag kennzeichnet und von anderen Einträgen in derselben Liste unterscheidet |
| `<LBody>` | Listenkörper (engl. list body) | eigentlicher Inhalt eines einzelnen Listeneintrags |

## Sondertextelemente

Sondertextelemente identifizieren Text, der keinen generischen Absatz bildet.

| Tag | Übersetzung | Beschreibung |
|:--- |:--- |:--- |
| `<BlockQuote>` | Blockzitat                                               | Absatz, der von einem anderen Verfasser stammt als der umgebende Haupttext |
| `<Caption>` | Bildunterschrift | kurzer Text, der eine Tabelle oder Abbildung beschreibt. |
| `<Index>` | Index | Folge von Einträgen, die aus einem Stichwort und Referenzelementen bestehen, die auf das Vorkommen des Stichworts im Hauptkörper des Dokuments verweisen |
| `<TOC>` | Inhaltsverzeichnis (engl. table of contents)             | Element, das eine strukturierte Liste von Einträgen enthält; besitzt eine eigene Hierarchie |
| `<TOCI>` | Inhaltsverzeichniseintrag (engl. table of contents item) | Eintrag in einer Liste, die einem Inhaltsverzeichniselement zugeordnet ist |

## Tabellenelemente

Tabellenelemente sind besondere Elemente zur Strukturierung von Tabellen.

| Tag | Übersetzung | Beschreibung |
|:--- |:--- |:--- |
| `<Table>` | Tabelle | zweidimensionale Anordnung von Daten- und Textzellen, die sich aus untergeordneten Tabellenzeilenelementen zusammensetzt und ein Bildunterschriftselement als erstes oder letztes untergeordnetes Element enthalten kann |
| `<TR>` | Tabellenzeile (engl. table row) | Zeile mit Überschriften oder Daten in einer Tabelle; kann Tabellenüberschrifts- und Tabellendatenzellenelemente enthalten |
| `<TD>` | Tabellendatenzelle | Tabellenzelle, die Daten enthält, die nicht als Überschrift fungieren |
| `<TH>` | Tabellenüberschriftszelle (engl. table header) | Tabellenzelle, die Überschriftstext oder -daten enthält, die eine oder mehrere Zeilen oder Spalten der Tabelle beschreiben |

## Elemente auf Zeilenebene

Elemente auf Zeilenebene kennzeichnen Textteile, die ein bestimmtes Format oder Verhalten aufweisen. Sie unterscheiden sich von den Elementen auf Blockebene und können in diesen enthalten sein sowie selbst Elemente auf Blockebene enthalten. Es gibt die folgenden Standardelemente auf Zeilenebene.

| Tag | Übersetzung | Beschreibung |
|:--- |:--- |:--- |
| `<BibEntry>` | Quellenverzeichniseintrag (engl. bibliography entry) | Quellenangabe für ein Zitat |
| `<Quote>` | Zitat | Textsegment, das von einem anderen Verfasser stammt als der umgebende Text; unterscheidet sich vom Blockzitat, bei dem es sich um einen ganzen Absatz oder mehrere Absätze und nicht um einen Teil eines Satzes handelt |
| `<Span>` | Span | beliebiges Textsegment; kennzeichnet in der Regel Text, dem bestimmte Formateigenschaften zugeordnet sind |

## Sonderelemente auf Zeilenebene

Ähnlich wie Elemente auf Zeilenebene beschreiben Sonderelemente auf Zeilenebene Textsegmente, die ein bestimmtes Format oder Verhalten aufweisen.

| Tag | Übersetzung | Beschreibung |
|:--- |:--- |:--- |
| `<Code>` | Code | Computerprogrammtext, der in das Dokument eingebettet ist |
| `<Figure>` | Abbildung | Grafik oder grafische Darstellung, die mit dem Text zusammenhängt |
| `<Form>` | Formular | PDF-Formular, das ausgefüllt werden kann |
| `<Formula>` | Formel | mathematische Funktion |
| `<Link>` | Verknüpfung | Hypertext-Verknüpfung, die in das Dokument eingebettet und einer Anmerkung zugeordnet ist, die zu einer anderen Stelle in demselben Dokument oder in einem anderen Dokument oder zu einer Website führt |
| `<Note>` | Anmerkung | Zusatztext oder Dokumentation, z.B. eine Fuß- oder Endnote, auf die im Haupttext verwiesen wird |
| `<Reference>` | Verweis | Verweis auf Text oder Daten an anderer Stelle im Dokument |

 [1]: https://www.adobe.com/de/accessibility/products/acrobat/pdfs/BRO_HowTo_PDFs_Barrierefrei_DE_2005_09_abReader7.pdf