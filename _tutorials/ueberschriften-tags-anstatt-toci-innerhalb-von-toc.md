---
ID: 397
post_title: 'Überschriften-<em>Tags</em> anstatt <code>TOCI</code> innerhalb von <code>TOC</code>'
author: Stefan Brechbühl
post_excerpt: 'Ein Inhaltsverzeichnis wird mit den Tags &lt;TOC&gt;und &lt;TOCI&gt; erstellt. &lt;TOC&gt; ist dabei der Container und &lt;TOCI&gt; wird für die einzelnen Einträge verwendet. Bei diesem Fehlerszenario werden im PDF einzelne Einträge innerhalb Überschriften-Tags, z.B. &lt;H1&gt;, anstatt &lt;TOCI&gt; strukturiert.'
layout: tutorials
permalink: >
  https://accessible-pdf.info/de/tutorials/ueberschriften-tags-anstatt-toci-innerhalb-von-toc/
published: true
post_date: 2018-01-05 16:24:27
tags:
  - Manuelle Prüfung
  - Microsoft Word
categories:
  - 01. Getaggter realer Inhalt
---
## Problembeschreibung

Ein Inhaltsverzeichnis wird mit den Tags `<TOC>` und `<TOCI>` erstellt. `<TOC>` ist dabei der Container und `<TOCI>` wird für die einzelnen Einträge verwendet. Bei diesem Fehlerszenario werden im PDF einzelne Einträge innerhalb Überschriften-Tags, z.B. `<H1>`, anstatt `<TOCI>` strukturiert.

Problem festgestellt bei der PDF-Konvertierung aus:

*   Microsoft Word 2013 für Windows

### PAC 3 Warnung/Fehler

Keine Warnung oder Fehlermeldung zu diesem Problem!

### Prüfpunkt des Matterhorn Protokolls

> **01-006** Der Strukturtyp und Attribute eines Strukturelementes sind nicht semantisch geeignet für das Strukturelement. Alle Strukturelemente müssen in Betracht gezogen werden. (→ [manuelle Prüfung][1])

## Manueller Lösungsweg in Word

Word verwendet für die einzelnen Verzeichniseinträge die Formatvorlagen

*   Verzeichnis 1
*   Verzeichnis 2
*   …

Ist in diesen Formatvorlagen die Gliederungsebene (Absatz Einstellungen) nicht als *Textkörper* definiert, werden die Überschriften-Tags angewendet. Diese müssen also zwingend mit der Option *Textkörper* definiert sein.

 [1]: https://accessible-pdf.info/de/glossar/#manuelle-pruefung