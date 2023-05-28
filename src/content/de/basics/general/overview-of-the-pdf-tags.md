---
title: Übersicht der PDF-Tags
layout: post.njk
author: Stefan Brechbühl
date: 2020-12-07
description: Diese Zusammenstellung zeigt alle verfügbaren Tags nach dem Standard PDF 1.7. Sie hilft als Nachschlagewerk um semantisch korrekte Tags zu vergeben.
---

Diese Zusammenstellung zeigt alle verfügbaren Tags nach dem Standard PDF 1.7. Sie hilft als Nachschlagewerk um semantisch korrekte Tags zu vergeben.

Die unten aufgeführten _Tags_ entsprechen dem [ISO Standard PDF 1.7](https://opensource.adobe.com/dc-acrobat-sdk-docs/pdfstandards/PDF32000_2008.pdf). Im Jahr 2018 ist der neuere Standard PDF 2.0 erschienen. Darin sind einige der hier beschriebenen _Tags_ weggefallen und neue hinzugekommen. Da der Standard aber noch zu wenig verbreitet ist und eine Überarbeitung des PDF/UA-Standards noch offen ist, entspricht diese Übersicht noch PDF 1.7.

In der Übersicht nicht enthalten, sind die PDF-_Tags_

- `NonStruct` (Gruppierendes Element)
- `Private` (Gruppierendes Element)
- `H` (Block-Element)
- `BibEntry` (Inline-Element)
- `Ruby`, `RB`, `RT`, `RP`, `Warichu`, `WT`, `WP` (Inline-Element)

da sie für die Verwendung nicht empfohlen oder nicht relevant sind.

Es liegt nahe, dass gruppierende Elemente grundsätzlich Block-Elemente und Block-Elemente grundsätzlich Inline-Elemente enthalten. Der Standard gibt nicht immer klar vor, welche Konstellationen möglich sind. Die illustrierende Elemente können als Block- oder Inline-Elemente fungieren.

<p class="note">
  Praktische Anwendungsbeispiele und Informationen bietet das Dokument 
  <a href="https://www.pdfa.org/resource/tagged-pdf-best-practice-guide-syntax/">
    “Tagged PDF Best Practice Guide: Syntax”
  </a> 
  der PDF Association.
</p>

## Gruppierende Elemente

<div class="pdfTags tableResponsive">

| PDF _Tag_    | Semantische Bedeutung                                                                                                                                                                                                                                                                                                                                                      | Mögliche und semantisch sinnvolle Elternelemente                     | Mögliche und semantisch sinnvolle Kindelemente                                                   |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| `Document`   | Bildet ein komplettes Dokument ab                                                                                                                                                                                                                                                                                                                                          | –                                                                    | [Gruppierende Elemente](#gruppierende-elemente), [Block-Elemente](#block-elemente)               |
| `Part`       | Teilung eines grösseren Dokuments in kleinere, zusammengehörende Teile                                                                                                                                                                                                                                                                                                     | `Document`                                                           | `Art`, `Sect`, `Div`, `BlockQuote`, `Caption`, `TOC`, `Index`, [Block-Elemente](#block-elemente) |
| `Art`        | Inhaltsteile, die zusammen abschliessend sind, also ein Artikel oder ein Teil eines Dokuments                                                                                                                                                                                                                                                                              | `Document`, `Part`, `Sect`, `Div`, `BlockQuote`                      | `Sect`, `Div`, `BlockQuote`, `Caption`, `TOC`, `Index`, [Block-Elemente](#block-elemente)        |
| `Sect`       | Gruppierte zusammenhängende Inhaltsteile, beispielsweise mehrere Absätze, die zu einer Gruppe zusammengefasst werden können                                                                                                                                                                                                                                                | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`               | `Art`, `Sect`, `Div`, `BlockQuote`, `Caption`, `TOC`, `Index`, [Block-Elemente](#block-elemente) |
| `Div`        | Generisches Gruppenelement ohne semantische Bedeutung                                                                                                                                                                                                                                                                                                                      | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`               | `Art`, `Sect`, `Div`, `BlockQuote`, `Caption`, `TOC`, `Index`, [Block-Elemente](#block-elemente) |
| `BlockQuote` | Ein oder mehrere Absätze, die von einer anderen Autorin / einem anderen Autoren stammt, also zitiert wurde                                                                                                                                                                                                                                                                 | `Document`, `Part`, `Art`, `Sect`, `Div`                             | `Art`, `Sect`, `Div`, `Caption`, [Block-Elemente](#block-elemente)                               |
| `Caption`    | Eine Beschriftung um beispielsweise ein Bild oder eine Tabelle zu beschreiben                                                                                                                                                                                                                                                                                              | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`, `Table`, `L` | `Sect`, `Div`, `BlockQuote`, [Block-Elemente](#block-elemente)                                   |
| `TOC`        | Container für Inhaltsverzeichniseinträge. Kann entweder als flache (alle enthaltene `TOCI` auf einer Ebene) oder komplexe Hierarchie (`TOC` innerhalb eines `TOCI` als Untergruppe) angewendet werden. Kann mehrfach in einem Dokument enthalten sein, da es auch für Bilder- oder Tabellenverzeichnisse verwendet werden kann. Englisch abgekürzt für _Table of contents_ | `Document`, `Part`, `Art`, `Sect`, `Div`                             | `TOCI`                                                                                           |
| `TOCI`       | Eintrag innerhalb eines Inhaltsverzeichnisses (`TOC`). Englisch abgekürzt für _Table of contents item_                                                                                                                                                                                                                                                                     | `TOC`                                                                | `TOC`, `P`, `Lbl`, `Reference`                                                                   |
| `Index`      | Container für ein Stichwortverzeichnis                                                                                                                                                                                                                                                                                                                                     | `Document`, `Part`, `Art`, `Sect`, `Div`                             | `L`                                                                                              |

</div>

## Block-Elemente

### Absatzelemente

<div class="pdfTags tableResponsive">

| PDF _Tag_                          | Semantische Bedeutung                                                                     | Mögliche und semantisch sinnvolle Elternelemente                          | Mögliche und semantisch sinnvolle Kindelemente |
| :--------------------------------- | :---------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ | :--------------------------------------------- |
| `P`                                | Gewöhnlicher Absatz; Englisch abgekürzt für _Paragraph_                                   | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`, `Caption`, `TOCI` | [Inline-Elemente](#inline-elemente)            |
| `H1`, `H2`, `H3`, `H4`, `H5`, `H6` | Hierarchische Überschriften der Ebene 1 bis 6; H ist die englisch Abkürzung für _Heading_ | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`                    | [Inline-Elemente](#inline-elemente)            |

</div>

### Listenelemente

<div class="pdfTags tableResponsive">

| PDF _Tag_ | Semantische Bedeutung                                                                                                                                                                                                                         | Mögliche und semantisch sinnvolle Elternelemente                | Mögliche und semantisch sinnvolle Kindelemente |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------- | :--------------------------------------------- |
| `L`       | Listencontainer; fasst alle zusammengehörigen Listenelemente zusammen                                                                                                                                                                         | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`, `Index` | `LI`, `Caption`                                |
| `LI`      | Container eines Listeneintrags; Kann ein `L` enthalten um mehrstufige Listen zu erstellen                                                                                                                                                     | `L`                                                             | `Lbl`, `LBody`, `L`                            |
| `Lbl`     | Kommt vom englischen Begriff „Label“ und steht innerhalb einer Liste für die Nummerierung oder das Aufzählungszeichen. _Ist eigentlich kein Blockelement und kann auch in anderen Elementen wie z.B. `TOCI` oder `Caption` verwendet werden._ | `LI`                                                            | –                                              |
| `LBody`   | Enthält den Inhalt eines Listeneintrags                                                                                                                                                                                                       | `LI`                                                            | [Inline-Elemente](#inline-elemente)            |

</div>

### Tabellenelemente

<div class="pdfTags tableResponsive">

| PDF _Tag_ | Semantische Bedeutung                                                                                                           | Mögliche und semantisch sinnvolle Elternelemente       | Mögliche und semantisch sinnvolle Kindelemente |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------- | :--------------------------------------------- |
| `Table`   | Tabellencontainer; fasst alle zusammengehörigen Tabellennelemente zusammen                                                      | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote` | `TR`, `Caption`, `THead`, `TBody`, `TFoot`     |
| `TR`      | Fasst eine Tabellenzeile zusammen; englische abgekürzt für “table row”                                                          | `Table`, `THead`, `TBody`, `TFoot`                     | `TH`, `TD`                                     |
| `TH`      | Tabellenüberschriftszelle; beschreiben die Bedeutung entweder auf horizontaler (Zeile) oder auf vertikaler (Spalte) Ebene       | `TR`                                                   | [Inline-Elemente](#inline-elemente)            |
| `TD`      | Gewöhnliche Tabellendatenzellen                                                                                                 | `TR`                                                   | [Inline-Elemente](#inline-elemente)            |
| `THead`   | Eine Gruppe Tabellenzeilen (`TR`) um sie als Tabellenkopf zu kennzeichnen; kann optional angewendet werden                      | `Table`                                                | `TR`                                           |
| `TBody`   | Eine Gruppe Tabellenzeilen (`TR`) um sie als Tabelleninhalt zu kennzeichnen; kann optional angewendet werden                    | `Table`                                                | `TR`                                           |
| `TFoot`   | Eine Gruppe Tabellenzeilen (`TR`) um sie als Tabellenfusszeile (Ergebniszeile) zu kennzeichnen; kann optional angewendet werden | `Table`                                                | `TR`                                           |

</div>

## Inline-Elemente

<div class="pdfTags tableResponsive">

| PDF _Tag_   | Semantische Bedeutung                                                                                                                                                                                  | Mögliche und semantisch sinnvolle Elternelemente | Mögliche und semantisch sinnvolle Kindelemente |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------- | :--------------------------------------------- |
| `Span`      | Generischer Container ohne semantische Bedeutung; wird unter anderem für visuelle Auszeichnungen, Sprachenwechsel oder zum Hinzufügen von ActualText (z.B. zum Ignorieren von Trennstrichen) verwendet | `P`, `H1`–`H6`, `LBody`, `TD`, `Quote`, `Note`   | –                                              |
| `Quote`     | Wird wie `BlockQuote` für zitierte Inhalte verwendet; `Quote` wird jedoch auf Zeilenebene verwendet                                                                                                    | `P`, `H1`–`H6`, `LBody`, `TD`                    | `Span`                                         |
| `Note`      | Fuss- oder Endnotentext (nicht das Referenzzeichen im Fliesstext). Das Fuss-/Endnotenzeichen wird innerhalb von `Note` und `Reference` in einem `Lbl` platziert.                                       | `P`, `H1`–`H6`, `LBody`, `TD`                    | `Lbl`, `P`, `Span`                             |
| `Reference` | Referenziert auf eine andere Stelle im Dokument, z.B. Fussnote oder Verzeichniseintrag                                                                                                                 | `P`, `H1`–`H6`, `LBody`, `TD`                    | `Lbl`                                          |
| `Code`      | Auszeichnung von Programmiersprache                                                                                                                                                                    | `P`, `H1`–`H6`, `LBody`, `TD`                    | –                                              |
| `Link`      | Link auf eine Webseite oder auf eine Stelle im Dokument                                                                                                                                                | `P`, `H1`–`H6`, `LBody`, `TD`                    | –                                              |
| `Annot`     | Anmerkungen (Annotations) die keine Verknüpfung oder Widget (Formularfeld) sind, wie Kommentaren und Videos.                                                                                           | `P`, `H1`–`H6`, `LBody`, `TD`                    | –                                              |

</div>

## Illustrative Elemente

<div class="pdfTags tableResponsive">

| PDF _Tag_ | Semantische Bedeutung | Mögliche und semantisch sinnvolle Elternelemente                                      | Mögliche und semantisch sinnvolle Kindelemente |
| :-------- | :-------------------- | :------------------------------------------------------------------------------------ | :--------------------------------------------- |
| `Figure`  | Foto oder Grafik      | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`, `P`, `LBody`, `TD`            | –                                              |
| `Formula` | Mathematische Formel  | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`, `P`, `H1`–`H6`, `LBody`, `TD` | –                                              |
| `Form`    | Formularelement       | `Document`, `Part`, `Art`, `Sect`, `Div`, `P`, `TD`                                   | –                                              |

</div>
