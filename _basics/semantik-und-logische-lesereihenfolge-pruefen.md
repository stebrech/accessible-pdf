---
post_title: Semantik und logische Lesereihenfolge prüfen
author: Stefan Brechbühl
layout: basics
published: false
tags: [ ]
categories: [ ]
---
Die Semantik und die [logische Lesereihenfolge](https://accessible-pdf.info/de/glossar/#logische-lesereihenfolge) kann  in Adobe Acrobat anhand des *Tag*baums überprüft werden. Dies ist aber nicht sehr komfortabel und übersichtlich, weshalb hier noch weitere Möglichkeiten aufgezeigt werden.

## PAC

Nebst der Prüfung der automatisch prüfbarem Kriterien, kann der [PDF Accessibility Checker, kurz PAC,](https://accessible-pdf.info/de/glossar/#pac) auch für die [manuelle Prüfung](https://accessible-pdf.info/de/glossar/#manuelle-pruefung) genutzt werden. 

### Screenreader Vorschau {#screenreaderVorschau}

Die Semantik lässt sich sehr gut anhand der farbig markierten Inhaltsblöcke der „Screenreader Vorschau“ prüfen. Insbesondere die für die Strukturierung wichtigen Überschriften können auf diesem Weg abstrakt wahrgenommen werden, siehe dazu auch [„Strukturieren mithilfe von hierarchischen Überschriften“](https://accessible-pdf.info/de/basics/strukturieren-mithilfe-von-hierarchischen-ueberschriften/).

![Bildschirmfoto: Auf der linken Seite ist das PDF im Acrobat geöffnet. Rechts befindet sich das gleiche PDF in der Screenreader-Vorschau von PAC.](https://accessible-pdf.info/wp/wp-content/uploads/acrobat_and_pac-screenreader-preview.png)

Die logische Lesereihenfolge kann ebenfalls mit der  „Screenreader-Vorschau“ geprüft werden. Hierzu kann an einem grösseren Bildschirm auf einer Seite das betreffende PDF und der anderen Seite die Screenreader-Vorschau gleichzeitig angezeigt werden. So kann die visuelle Erscheinung und die *Tags* direkt miteinander verglichen werden und lässt es sich einfacher feststellen ob etwas an der Reihenfolge nicht logisch ist.

Was durch diese Prüfungsart ebenfalls bestens festgestellt werden kann, sind *getaggte*, nichtrelevante Inhalte oder das Gegenteil, relevante Inhalte, die als Artefakt markiert wurden. Siehe dazu auch [„Unwichtige und dekorative Inhalte als Artefakt“](https://accessible-pdf.info/de/basics/unwichtige-und-dekorative-inhalte-als-artefakt/)

###  Logische Struktur

Ein weiteres Werkzeug in PAC ist „Logische Struktur“. Sie zeigt den *Tag*baum, wie man es bereits aus Adobe Acrobat kennt. Der wesentliche Unterschied machen hier die Zusatzinfos die man ohne weiteren Mausklick auf der rechten Seite angezeigt erhält.

Das Werkzeug eignet sich bestens um die logische Lesereihenfolge zu überprüfen indem der Tab „Seitenansicht“ angezeigt wird. Wenn man nun im linken Strukturbaum mit den Pfeiltasten nach unten und oben navigiert, erhält man rechts visuell angezeigt wo sich dieser Inhaltsteil befindet.

## pdfGoHTML (Acrobat Plugin)

Mit dem Acrobat Plugin [„pdfGoHTML“](https://www.callassoftware.com/de/produkte/pdfgohtml) macht was der Name sagt – es wandelt ein *getaggtes* PDF in ein HTML Dokument um. Dabei kann eines unter diversen *Themes* ausgewählt werden. Hier muss die Option „Struktur-Tags“ ausgewählt werden um die korrekte Semantik prüfen zu können. 

Die logische Lesereihenfolge lässt sich, wie in PAC’s [Screenreader Vorschau](screenreaderVorschau) bereits aufgezeigt, prüfen. Dabei wird an einem grösseren Bildschirm auf einer Seite das PDF und der anderen das erzeugte HTML-Dokument miteinander verglichen.
