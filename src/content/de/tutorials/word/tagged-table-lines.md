---
title: Getaggte Tabellenlinien
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-21
category: 01. Getaggter realer Inhalt
description: Wird eine Tabelle aus Word 2013 exportiert, werden die Linien einer Tabelle innerhalb von <Span> Tags gesetzt. Ein <Span> Tag darf aber nicht innerhalb eines <TR> (Tabellenzeile) auf gleicher Ebene wie die <TD> Tags (Tabellenzelle) liegen. Zudem müssen Tabellenlinien als Artefakt ausgezeichnet sein und dürfen nicht getaggt werden
---

Wird eine Tabelle aus Word 2013 exportiert, werden die Linien einer Tabelle innerhalb von `<Span>` Tags gesetzt. Ein `<Span>` Tag darf aber nicht innerhalb eines `<TR>` (Tabellenzeile) auf gleicher Ebene wie die `<TD>` Tags (Tabellenzelle) liegen. Zudem müssen Tabellenlinien als Artefakt ausgezeichnet sein und dürfen nicht getaggt werden.

## Problem festgestellt bei der PDF-Konvertierung aus:

- Microsoft Word 2013 für Windows

## PAC 3 Fehlermeldung

> Falsche Verwendung eines „Span“-Strukturelements

## Prüfpunkte des Matterhorn Protokolls

> **01-001** Artefakte sind als realer Inhalt getaggt. (→ [manuelle Prüfung](/de/glossary/#manuelle-prüfung))
>
> **09-004** Ein Strukturelement, das im Zusammenhang mit einer Tabelle steht, wird in einer Weise verwendet, die nicht mit Tabelle 337 der ISO 32000-1 übereinstimmt. (→ [automatische Prüfung](/de/glossary/#automatische-prüfung))

---

## Manueller Lösungsweg in Acrobat

1. Das Pfad Element wird als Artefakt gekennzeichnet. Dazu kann das Pfadelement, mithilfe eines Rechtsklicks in der Tag-Menüleiste, in ein aussertextliches Element geändert werden.
2. Danach kann das leere `<Span>` Tag gelöscht werden.

Siehe dazu auch [„Artefakte in Acrobat erstellen und prüfen“](/de/basics/acrobat/create-and-check-artifacts-in-acrobat/)
