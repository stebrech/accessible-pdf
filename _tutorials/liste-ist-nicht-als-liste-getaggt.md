---
post_title: Liste ist nicht als Liste getaggt
author: Stefan Brechbühl
post_excerpt: "Wenn undefinierte oder nummerierte Listen verwendet werden, sollen diese auch als Liste getaggt werden. Die Listen-Tags werden beim Export aus Microsoft Word oder Adobe InDesign automatisch vergeben, sofern die Listen korrekt erstellt wurden."
layout: tutorials
published: true
tags:
  - Adobe InDesign
  - Microsoft Word
  - manuelle Prüfung
categories:
  - 16. Listen
---

## Problembeschreibung

Wenn undefinierte oder nummerierte Listen verwendet werden, sollen diese auch als Liste getaggt werden. Die Listen-Tags werden beim Export aus Microsoft Word oder Adobe InDesign automatisch vergeben, sofern die Listen korrekt erstellt wurden.

Für eingeschränkte Menschen sind korrekt getaggte Listen wertvoll und verbessern die Navigationsmöglichkeiten.

### PAC 2 Fehlermeldung

Keine Warnung oder Fehlermeldung zu diesem Problem!

### Prüfpunkt/e Matterhorn Protokoll

> **01-006** Der Strukturtyp und Attribute eines Strukturelementes sind nicht semantisch geeignet für das Strukturelement. Alle Strukturelemente müssen in Betracht gezogen werden. (→ [manuelle Prüfung](https://accessible-pdf.info/de/glossar/#manuelle-pruefung))

> **16-003** Inhalt ist eine Liste, die jedoch nicht als Liste getaggt ist. (→ [manuelle Prüfung](https://accessible-pdf.info/de/glossar/#manuelle-pruefung))

## Manueller Lösungsweg in Word

Die betroffenen Stellen können mit der Listenfunktion umformatiert werden.

![Listen-Schaltflächen in Microsoft Word](https://accessible-pdf.info/content/uploads/word_list_icons.png)

Um eine einheitliche Formatierung zu gewährleisten, wird das Anlegen einer Listenformatvorlage empfohlen.

## Manueller Lösungsweg in InDesign

Die betroffenen Stellen können mit der Listenfunktion umformatiert werden.

![Listen-Schaltflächen in Adobe InDesign](https://accessible-pdf.info/content/uploads/indesign_list_icons.png)

Um eine einheitliche Formatierung zu gewährleisten, wird die Verwendung einer separaten Absatzformatvorlage empfohlen.

## Manueller Lösungsweg in Acrobat

Das manuelle Nachtaggen von Listen ist zeitaufwändig. Es wird empfohlen eine der oben stehenden Lösungswege vorzuziehen. Die benötigten Tags sind `<L>`, `<LI>`, `<Lbl>` und `<LBody>`.