---
ID: 178
post_title: '<em>Getaggte</em> Tabellenlinien'
author: Stefan Brechbühl
post_excerpt: 'Wird eine Tabelle aus Word 2013 exportiert, werden die Linien einer Tabelle innerhalb von &lt;Span&gt; Tags gesetzt. Ein &lt;Span&gt; Tag darf aber nicht innerhalb eines &lt;TR&gt; (Tabellenzeile) auf gleicher Ebene wie die &lt;TD&gt; Tags (Tabellenzelle) liegen. Zudem müssen Tabellenlinien als Artefakt ausgezeichnet sein und dürfen nicht getaggt werden.'
layout: tutorials
permalink: >
  https://accessible-pdf.info/de/tutorials/getaggte-tabellenlinien/
published: true
post_date: 2018-01-05 16:24:27
tags:
  - Automatische Prüfung
  - Manuelle Prüfung
  - Word
categories:
  - 01. Getaggter realer Inhalt
---
## Problembeschreibung

Wird eine Tabelle aus Word 2013 exportiert, werden die Linien einer Tabelle innerhalb von `<Span>` Tags gesetzt. Ein `<Span>` Tag darf aber nicht innerhalb eines `<TR>` (Tabellenzeile) auf gleicher Ebene wie die `<TD>` Tags (Tabellenzelle) liegen. Zudem müssen Tabellenlinien als Artefakt ausgezeichnet sein und dürfen nicht getaggt werden.

Problem festgestellt bei der PDF-Konvertierung aus:

*   Microsoft Word 2013 für Windows

### PAC 3 Fehlermeldung

> Falsche Verwendung eines „Span“-Strukturelements

### Prüfpunkte des Matterhorn Protokolls

> **01-001** Artefakte sind als realer Inhalt getaggt. (→ [manuelle Prüfung][1])
> 
> **09-004** Ein Strukturelement, das im Zusammenhang mit einer Tabelle steht, wird in einer Weise verwendet, die nicht mit Tabelle 337 der ISO 32000-1 übereinstimmt. (→ [automatische Prüfung][2])

## Manueller Lösungsweg in Acrobat

1.  Das Pfad Element wird als Artefakt gekennzeichnet. Dazu kann das Pfadelement, mithilfe eines Rechtsklicks in der Tag-Menüleiste, in ein aussertextliches Element geändert werden.
2.  Danach kann das leere `<Span>` Tag gelöscht werden.

 [1]: https://accessible-pdf.info/de/glossar/#manuelle-pruefung
 [2]: https://accessible-pdf.info/de/glossar/#automatische-pruefung