---
ID: 222
post_title: 'Liste ist nicht als Liste <em>getaggt</em>'
author: Stefan Brechbühl
post_excerpt: >
  Wenn undefinierte oder nummerierte
  Listen verwendet werden, sollen diese
  auch als Liste getaggt werden. Die
  Listen-Tags werden beim Export aus
  Microsoft Word oder Adobe InDesign
  automatisch vergeben, sofern die Listen
  korrekt erstellt wurden.
layout: tutorials
permalink: >
  https://accessible-pdf.info/de/tutorials/liste-ist-nicht-als-liste-getaggt/
published: true
post_date: 2018-01-12 16:35:46
tags:
  - Adobe InDesign
  - manuelle Prüfung
  - Microsoft Word
categories:
  - 16. Listen
---
## Problembeschreibung

Wenn undefinierte oder nummerierte Listen verwendet werden, sollen diese auch als Liste *getaggt* werden. Die Listen-*Tags* werden beim Export aus Microsoft Word oder Adobe InDesign automatisch vergeben, sofern die Listen korrekt erstellt wurden.

Für Menschen, die auf [AT][1] angewiesen sind, helfen korrekt *getaggte* Listen dem Verständnis und verbessern die Navigationsmöglichkeiten.

### PAC 3 Warnung/Fehler

Keine Warnung oder Fehlermeldung zu diesem Problem!

### Prüfpunkte des Matterhorn Protokolls

> **01-006** Der Strukturtyp und Attribute eines Strukturelementes sind nicht semantisch geeignet für das Strukturelement. Alle Strukturelemente müssen in Betracht gezogen werden. (→ [manuelle Prüfung][2])
> 
> **16-003** Inhalt ist eine Liste, die jedoch nicht als Liste getaggt ist. (→ [manuelle Prüfung][2])

## Manueller Lösungsweg in Word

Die betroffenen Stellen können mit der Listenfunktion umformatiert werden.

![Listen-Schaltflächen in Microsoft Word][3]

Damit die Formatierungen der Listen über das ganze Dokument einheitlich sind, wird das Erstellen einer Listenformatvorlage empfohlen.

## Manueller Lösungsweg in InDesign

Die betroffenen Stellen können mit der Listenfunktion umformatiert werden.

![Listen-Schaltflächen in Adobe InDesign][4]

Damit die Formatierungen der Listen über das ganze Dokument einheitlich sind, wird das Erstellen einer separaten Absatzformatvorlage empfohlen.

## Manueller Lösungsweg in Acrobat

Das manuelle *Nachtaggen* von Listen ist sehr zeitaufwändig und fehleranfällig. Es wird empfohlen eine der oben stehenden Lösungswege vorzuziehen.

Die benötigten *Tags* sind `<L>`, `<LI>`, `<Lbl>` und `<LBody>`. Die einzelnen *Tags* werden in [„Übersicht der *PDF-Tags*“][5] beschrieben.

 [1]: https://accessible-pdf.info/de/glossar/#assistive-technologie
 [2]: https://accessible-pdf.info/de/glossar/#manuelle-pruefung
 [3]: https://accessible-pdf.info/wp/wp-content/uploads/word_list_icons.png
 [4]: https://accessible-pdf.info/wp/wp-content/uploads/indesign_list_icons.png
 [5]: https://accessible-pdf.info/de/basics/uebersicht-der-pdf-tags/