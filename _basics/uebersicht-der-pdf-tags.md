---
ID: 207
post_title: 'Übersicht der PDF-<em>Tags</em>'
author: Stefan Brechbühl
post_excerpt: >
  Diese Zusammenstellung zeigt alle
  verfügbaren Tags nach dem Standard PDF
  1.7. Sie hilft als Nachschlagewerk um
  semantisch korrekte Tags zu vergeben.
layout: basics
permalink: >
  https://accessible-pdf.info/de/basics/uebersicht-der-pdf-tags/
published: true
post_date: 2018-01-11 16:39:50
tags: [ ]
categories: [ ]
---
Die unten aufgeführten *Tags* entsprechen dem [ISO Standard PDF 1.7](https://www.adobe.com/content/dam/acom/en/devnet/pdf/pdfs/PDF32000_2008.pdf). Im Jahr 2018 ist der neuere Standard PDF 2.0 erschienen. Darin sind einige der hier beschriebenen *Tags* weggefallen und neue hinzugekommen. Da der Standard aber noch zu wenig verbreitet ist und eine Überarbeitung des PDF/UA-Standards noch offen ist, entspricht diese Übersicht noch PDF 1.7.

In der Übersicht nicht enthalten, sind die PDF-*Tags*

- `NonStruct` (Gruppierendes Element)
- `Private` (Gruppierendes Element)
- `H` (Block-Element)
- `BibEntry` (Inline-Element)
- `Ruby`, `RB`, `RT`, `RP`, `Warichu`, `WT`, `WP` (Inline-Element)

da sie für die Verwendung nicht empfohlen oder nicht relevant sind.

Es liegt nahe, dass gruppierende Elemente grundsätzlich Block-Elemente und Block-Elemente grundsätzlich Inline-Elemente enthalten. Der Standard gibt nicht immer klar vor, welche Konstellationen möglich sind. Die illustrierende Elemente können als Block- oder Inline-Elemente fungieren.

<div class="warning-block" markdown="1">
In der dritten und vierten Spalte der Übersicht werden semantisch sinnvolle Kombinationen aufgezeigt. Zwar lässt der Standard noch weitere Konstellationen zu, sie werden aber eben nicht als sinnvoll erachtet. Auf Vollständigkeit wird jedoch keine Gewähr gegeben.
</div>

<aside class="note-block" markdown="1">
Praktische Anwendungsbeispiele und Informationen bietet das Dokument [“Tagged PDF Best Practice Guide: Syntax”](https://www.pdfa.org/resource/tagged-pdf-best-practice-guide-syntax/) der PDF Association.
</aside>

## Gruppierende Elemente {#gruppierendeElemente}

| PDF *Tag* | Semantische Bedeutung | Mögliche und semantisch sinnvolle Elternelemente | Mögliche und semantisch sinnvolle Kindelemente |
|:--|:--|:--|:--|
| `Document` | Bildet ein komplettes Dokument ab | – | [Gruppierende Elemente](#gruppierendeElemente), [Block-Elemente](#blockElemente) |
| `Part` | Teilung eines grösseren Dokuments in kleinere, zusammengehörende Teile | `Document` | `Art`, `Sect`, `Div`, `BlockQuote`, `Caption`, `TOC`, `Index`, [Block-Elemente](#blockElemente) |
| `Art` | Inhaltsteile, die zusammen abschliessend sind, also ein Artikel oder ein Teil eines Dokuments | `Document`, `Part`, `Sect`, `Div`, `BlockQuote` | `Sect`, `Div`, `BlockQuote`, `Caption`, `TOC`, `Index`,  [Block-Elemente](#blockElemente) |
| `Sect` | Gruppierte zusammenhängende Inhaltsteile, beispielsweise mehrere Absätze, die zu einer Gruppe zusammengefasst werden können | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote` | `Art`, `Sect`, `Div`, `BlockQuote`, `Caption`, `TOC`, `Index`,  [Block-Elemente](#blockElemente) |
| `Div` | Generisches Gruppenelement ohne semantische Bedeutung | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote` | `Art`, `Sect`, `Div`, `BlockQuote`, `Caption`, `TOC`, `Index`, [Block-Elemente](#blockElemente) |
| `BlockQuote` | Ein oder mehrere Absätze, die von einer anderen Autorin / einem anderen Autoren stammt, also zitiert wurde | `Document`, `Part`, `Art`, `Sect`, `Div` | `Art`, `Sect`, `Div`, `Caption`, [Block-Elemente](#blockElemente) |
| `Caption` | Eine Beschriftung um beispielsweise ein Bild oder eine Tabelle zu beschreiben | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`, `Table`, `L` | `Sect`, `Div`, `BlockQuote`, [Block-Elemente](#blockElemente) |
| `TOC` | Container für Inhaltsverzeichniseinträge. Kann entweder als flache (alle enthaltene `TOCI` auf einer Ebene) oder komplexe Hierarchie (`TOC` innerhalb eines `TOCI` als Untergruppe) angewendet werden. Kann mehrfach in einem Dokument enthalten sein, da es auch für Bilder- oder Tabellenverzeichnisse verwendet werden kann. Englisch abgekürzt für *Table of contents* | `Document`, `Part`, `Art`, `Sect`, `Div`| `TOCI` |
| `TOCI` | Eintrag innerhalb eines Inhaltsverzeichnisses (`TOC`). Englisch abgekürzt für *Table of contents item* | `TOC` | `TOC`, `P`, `Lbl`, `Reference` |
| `Index` | Container für ein Stichwortverzeichnis |`Document`, `Part`, `Art`, `Sect`, `Div` | `L` |

## Block-Elemente {#blockElemente}

### Absatzelemente

| PDF *Tag* | Semantische Bedeutung | Mögliche und semantisch sinnvolle Elternelemente | Mögliche und semantisch sinnvolle Kindelemente |
|:--|:--|:--|:--|
| `P` | Gewöhnlicher Absatz; Englisch abgekürzt für *Paragraph* | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`, `Caption`, `TOCI` | [Inline-Elemente](#inlineElemente) |
| `H1`, `H2`, `H3`, `H4`, `H5`, `H6` | Hierarchische Überschriften der Ebene 1 bis 6; H ist die englisch Abkürzung für *Heading* | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote` | [Inline-Elemente](#inlineElemente) |

### Listenelemente

| PDF *Tag* | Semantische Bedeutung | Mögliche und semantisch sinnvolle Elternelemente | Mögliche und semantisch sinnvolle Kindelemente |
|:--|:--|:--|:--|
| `L` | Listencontainer; fasst alle zusammengehörigen Listenelemente zusammen | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`, `Index` | `LI`, `Caption` |
| `LI` | Container eines Listeneintrags; Kann ein `L` enthalten um mehrstufige Listen zu erstellen | `L` | `Lbl`, `LBody`, `L` |
| `Lbl` | Kommt vom englischen Begriff „Label“ und steht innerhalb einer Liste für die Nummerierung oder das Aufzählungszeichen <p class="warning-block" markdown="1">Ist eigentlich kein Blockelement und kann auch in anderen Elementen wie z.B. `TOCI` oder `Caption`</p> | `LI` | – |
| `LBody` | Enthält den Inhalt eines Listeneintrags | `LI` | [Inline-Elemente](#inlineElemente) |

### Tabellenelemente

| PDF *Tag* | Semantische Bedeutung | Mögliche und semantisch sinnvolle Elternelemente | Mögliche und semantisch sinnvolle Kindelemente |
|:--|:--|:--|:--|
| `Table` | Tabellencontainer; fasst alle zusammengehörigen Tabellennelemente zusammen | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`  | `TR`, `Caption`, `THead`, `TBody`, `TFoot` |
| `TR` | Fasst eine Tabellenzeile zusammen; englische abgekürzt für “table row” | `Table`, `THead`, `TBody`, `TFoot` | `TH`, `TD` |
| `TH` | Tabellenüberschriftszelle; beschreiben die Bedeutung entweder auf horizontaler (Zeile) oder auf vertikaler (Spalte) Ebene | `TR` | [Inline-Elemente](#inlineElemente) |
| `TD` | Gewöhnliche Tabellendatenzellen | `TR` | [Inline-Elemente](#inlineElemente) |
| THead | Eine Gruppe Tabellenzeilen (`TR`) um sie als Tabellenkopf zu kennzeichnen; kann optional angewendet werden | `Table` | `TR` |
| TBody | Eine Gruppe Tabellenzeilen (`TR`) um sie als Tabelleninhalt zu kennzeichnen; kann optional angewendet werden | `Table` | `TR` |
| TFoot | Eine Gruppe Tabellenzeilen (`TR`) um sie als Tabellenfusszeile (Ergebniszeile) zu kennzeichnen; kann optional angewendet werden | `Table` | `TR` |

## Inline-Elemente

| PDF *Tag* | Semantische Bedeutung | Mögliche und semantisch sinnvolle Elternelemente | Mögliche und semantisch sinnvolle Kindelemente |
|:--|:--|:--|:--|
| `Span` | Generischer Container ohne semantische Bedeutung; wird unter anderem für visuelle Auszeichnungen, Sprachenwechsel oder zum Hinzufügen von ActualText (z.B. zum Ignorieren von Trennstrichen) verwendet | `P`, `H1`–`H6`, `LBody`, `TD`, `Quote`, `Note` | – |
| `Quote` | Wird wie `BlockQuote` für zitierte Inhalte verwendet; `Quote` wird jedoch auf Zeilenebene verwendet | `P`, `H1`–`H6`, `LBody`, `TD` | `Span` |
| `Note` | Fuss- oder Endnotentext; das Fussnotenzeichen wird innerhalb eines `Lbl` platziert, gleich wie das `Reference`-Zeichen im Text | `P`, `H1`–`H6`, `LBody`, `TD` | `Lbl`, `P`, `Span` |
| `Reference` | Referenziert auf eine andere Stelle im Dokument, z.B. Fussnote oder Verzeichniseintrag | `P`, `H1`–`H6`, `LBody`, `TD` | `Lbl` |
| `Code` | Auszeichnung von Programmiersprache | `P`, `H1`–`H6`, `LBody`, `TD` | – |
| `Link` | Link auf eine Webseite oder auf eine Stelle im Dokument | `P`, `H1`–`H6`, `LBody`, `TD` | – |
| `Annot` |  | `P`, `H1`–`H6`, `LBody`, `TD` | – |

## Illustrative Elemente

| PDF *Tag* | Semantische Bedeutung | Mögliche und semantisch sinnvolle Elternelemente | Mögliche und semantisch sinnvolle Kindelemente |
|:--|:--|:--|:--|
| `Figure` | Foto oder Grafik | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`, `P`, `LBody`, `TD` | – |
| `Formula` | Mathematische Formel | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`, `P`, `H1`–`H6`, `LBody`, `TD` | – |
| `Form` | Formularelement | `Document`, `Part`, `Art`, `Sect`, `Div`, `P`, `TD` | – |