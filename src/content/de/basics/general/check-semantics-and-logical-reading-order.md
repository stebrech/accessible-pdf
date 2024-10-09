---
title: Semantik und logische Lesereihenfolge prüfen
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2020-12-07
description: Die Semantik und die logische Lesereihenfolge kann in Adobe Acrobat anhand des *Tag*baums überprüft werden. Dies ist aber nicht sehr komfortabel und übersichtlich, weshalb hier noch weitere Möglichkeiten aufgezeigt werden.
order: 2
---

Die Semantik und die [logische Lesereihenfolge](/de/glossary/#logische-lesereihenfolge) kann in Adobe Acrobat anhand des *Tag*baums überprüft werden. Dies ist aber nicht sehr komfortabel und übersichtlich, weshalb hier noch weitere Möglichkeiten aufgezeigt werden.

## PAC

Nebst der Prüfung der automatisch prüfbaren Kriterien, kann der [PDF Accessibility Checker, kurz PAC,](/de/glossary/#pac) auch für die [manuelle Prüfung](/de/glossary/#manuelle-prüfung) genutzt werden.

### Screenreader Vorschau

Die Semantik lässt sich sehr gut anhand der farbig markierten Inhaltsblöcke der „Screenreader Vorschau“ prüfen. Insbesondere die für die Strukturierung wichtigen Überschriften können auf diesem Weg abstrakt wahrgenommen werden, siehe dazu auch [„Strukturieren mithilfe von hierarchischen Überschriften“](/de/basics/general/structure-with-the-help-of-multi-level-headings/).

![Bildschirmfoto: Auf der linken Seite ist das PDF im Acrobat geöffnet. Rechts befindet sich das gleiche PDF in der Screenreader-Vorschau von PAC.](src/assets/img/acrobat_and_pac-screenreader-preview.png)

Die logische Lesereihenfolge kann ebenfalls mit der „Screenreader-Vorschau“ geprüft werden. Hierzu kann an einem grösseren Bildschirm auf einer Seite das betreffende PDF und der anderen Seite die Screenreader-Vorschau gleichzeitig angezeigt werden. So kann die visuelle Erscheinung und die _Tags_ direkt miteinander verglichen werden und lässt es sich einfacher feststellen ob etwas an der Reihenfolge nicht logisch ist.

Was durch diese Prüfungsart ebenfalls bestens festgestellt werden kann, sind _getaggte_, nichtrelevante Inhalte oder das Gegenteil, relevante Inhalte, die als Artefakt markiert wurden.

- [Artefakte in InDesign festlegen](/de/basics/indesign/defining-artifacts-in-indesign/)
- [Artefakte in Word festlegen](/de/basics/word/defining-artifacts-in-word/)
- [Artefakte in Acrobat erstellen und prüfen](/de/basics/acrobat/create-and-check-artifacts-in-acrobat/)

### Logische Struktur

Ein weiteres Werkzeug in PAC ist „Logische Struktur“. Es zeigt den *Tag*baum, wie man es bereits aus Adobe Acrobat kennt. Der wesentliche Unterschied machen hier die Zusatzinfos die man ohne weiteren Mausklick auf der rechten Seite angezeigt erhält.

Das Werkzeug eignet sich bestens um die logische Lesereihenfolge zu überprüfen indem der Tab „Seitenansicht“ angezeigt wird. Wenn man nun im linken Strukturbaum mit den Pfeiltasten nach unten und oben navigiert, erhält man rechts visuell angezeigt wo sich dieser Inhaltsteil befindet.

## pdfGoHTML (Acrobat Plugin)

Mit dem Acrobat Plugin [„pdfGoHTML“](https://www.callassoftware.com/de/produkte/pdfgohtml) macht was der Name sagt – es wandelt ein _getaggtes_ PDF in ein HTML Dokument um. Dabei kann eines unter diversen _Themes_ ausgewählt werden. Hier muss die Option „Struktur-Tags“ ausgewählt werden um die korrekte Semantik prüfen zu können.

Die logische Lesereihenfolge lässt sich, wie in PAC’s [Screenreader Vorschau](#screenreader-vorschau) bereits aufgezeigt, prüfen. Dabei wird an einem grösseren Bildschirm auf einer Seite das PDF und der anderen das erzeugte HTML-Dokument miteinander verglichen.
