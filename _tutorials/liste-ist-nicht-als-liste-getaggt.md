---
ID: 222
post_title: Liste ist nicht als Liste getaggt
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
  http://accessible-pdf.info/de/tutorials/liste-ist-nicht-als-liste-getaggt/
published: true
post_date: 2018-01-12 16:35:46
---
## Problembeschreibung

Wenn undefinierte oder nummerierte Listen verwendet werden, sollen diese auch als Liste *getaggt* werden. Die Listen-*Tags* werden beim Export aus Microsoft Word oder Adobe InDesign automatisch vergeben, sofern die Listen korrekt erstellt wurden.

Für Menschen, die auf [AT](https://accessible-pdf.info/de/glossar/#assistive-technologie) angewiesen sind, helfen korrekt *getaggte* Listen dem Verständnis und verbessern die Navigationsmöglichkeiten.

### PAC 2 Fehlermeldung

Keine Warnung oder Fehlermeldung zu diesem Problem!

### Prüfpunkt/e Matterhorn Protokoll

> **01-006** Der Strukturtyp und Attribute eines Strukturelementes sind nicht semantisch geeignet für das Strukturelement. Alle Strukturelemente müssen in Betracht gezogen werden. (→ [manuelle Prüfung][1])
> 
> **16-003** Inhalt ist eine Liste, die jedoch nicht als Liste getaggt ist. (→ [manuelle Prüfung][1])

## Manueller Lösungsweg in Word

Die betroffenen Stellen können mit der Listenfunktion umformatiert werden.

![Listen-Schaltflächen in Microsoft Word][2]

Damit die Formatierungen der Listen über das ganze Dokument einheitlich sind, wird das Erstellen einer Listenformatvorlage empfohlen.

## Manueller Lösungsweg in InDesign

Die betroffenen Stellen können mit der Listenfunktion umformatiert werden.

![Listen-Schaltflächen in Adobe InDesign][3]

Damit die Formatierungen der Listen über das ganze Dokument einheitlich sind, wird das Erstellen einer separaten Absatzformatvorlage empfohlen.

## Manueller Lösungsweg in Acrobat

Das manuelle *Nachtaggen* von Listen ist sehr zeitaufwändig und fehleranfällig. Es wird empfohlen eine der oben stehenden Lösungswege vorzuziehen. 

Die benötigten *Tags* sind `<L>`, `<LI>`, `<Lbl>` und `<LBody>`. Die einzelnen *Tags* werden in [„Übersicht der *PDF-Tags*“](https://accessible-pdf.info/de/basics/uebersicht-der-pdf-tags/) beschrieben.

 [1]: https://accessible-pdf.info/de/glossar/#manuelle-pruefung
 [2]: https://accessible-pdf.info/content/uploads/word_list_icons.png
 [3]: https://accessible-pdf.info/content/uploads/indesign_list_icons.png