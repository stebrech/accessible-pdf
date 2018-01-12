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

Wenn undefinierte oder nummerierte Listen verwendet werden, sollen diese auch als Liste getaggt werden. Die Listen-Tags werden beim Export aus Microsoft Word oder Adobe InDesign automatisch vergeben, sofern die Listen korrekt erstellt wurden.

Für eingeschränkte Menschen sind korrekt getaggte Listen wertvoll und verbessern die Navigationsmöglichkeiten.

### PAC 2 Fehlermeldung

Keine Warnung oder Fehlermeldung zu diesem Problem!

### Prüfpunkt/e Matterhorn Protokoll

> **01-006** Der Strukturtyp und Attribute eines Strukturelementes sind nicht semantisch geeignet für das Strukturelement. Alle Strukturelemente müssen in Betracht gezogen werden. (→ [manuelle Prüfung][1])
> 
> **16-003** Inhalt ist eine Liste, die jedoch nicht als Liste getaggt ist. (→ [manuelle Prüfung][1])

## Manueller Lösungsweg in Word

Die betroffenen Stellen können mit der Listenfunktion umformatiert werden.

![Listen-Schaltflächen in Microsoft Word][2]

Um eine einheitliche Formatierung zu gewährleisten, wird das Anlegen einer Listenformatvorlage empfohlen.

## Manueller Lösungsweg in InDesign

Die betroffenen Stellen können mit der Listenfunktion umformatiert werden.

![Listen-Schaltflächen in Adobe InDesign][3]

Um eine einheitliche Formatierung zu gewährleisten, wird die Verwendung einer separaten Absatzformatvorlage empfohlen.

## Manueller Lösungsweg in Acrobat

Das manuelle Nachtaggen von Listen ist zeitaufwändig. Es wird empfohlen eine der oben stehenden Lösungswege vorzuziehen. Die benötigten Tags sind `<L>`, `<LI>`, `<Lbl>` und `<LBody>`.

 [1]: https://accessible-pdf.info/de/glossar/#manuelle-pruefung
 [2]: https://accessible-pdf.info/content/uploads/word_list_icons.png
 [3]: https://accessible-pdf.info/content/uploads/indesign_list_icons.png