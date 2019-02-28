---
post_title: Logische Lesereihenfolge in InDesign festlegen
author: Stefan Brechbühl
layout: basics
published: false
tags: 
 - InDesign
categories: [ ]
---
PDF-*Tags* werden nicht nur benötigt um Inhalten eine semantische Bedeutung zu geben, sondern auch auch um die logische Lesereihenfolge festzulegen. In InDesign kann die Reihenfolge der *Tags* festgelegt werden, sodass beim erzeugten PDF die logische Lesereihenfolge bereits korrekt ist.

<aside class="note-block">Was bedeutet <a href="https://accessible-pdf.info/de/glossar/#logische-lesereihenfolge">logische Lesereihenfolge</a>? Erfahre mehr im Glossar.</aside>

## Artikel Bedienfeld

Um die logische Lesereihenfolge bereits in InDesign zu bestimmen, wird das Bedienfeld „Artikel“ benötigt. Alle relevanten Inhalte müssen in einen Artikel verpackt werden. 

1. Zuerst muss ein Textrahmen (oder ein anderes Objekt) ausgewählt werden
2. Falls noch kein Artikel existiert, kann direkt ein neuer Artikel mit dem ausgewählten Objekt erstellt werden. Klicke dazu auf das kleine Seitensymbol unten rechts im Bedienfeld. Danach wirst du aufgefordert dem Artikel einen Namen zu geben. Hier wird am besten ein passendes und beschreibendes Wort verwendet.
3. Falls bereits ein Artikel existiert, kann es mit dem Plussymbol, unten rechts im Bedienfeld, einem Artikel hinzugefügt werden.

<p class="warning-block">Bevor das Dokument exportiert werden kann, muss zwingend noch die Option „Für Leserichtung in PDF mit Tags verwenden“ in den Bedienfeldoptionen aktiviert werden.<br><img src="https://accessible-pdf.info/wp/wp-content/uploads/indesign-artikel-reihenfolge.png" alt="Screenshot von Bedienfeldoptionen mit aktivierter Option für Lesereihenfolge"/></p>

### Nachträgliche Anpassungen

Falls ein Objekt verschoben werden muss, lässt sich dies bequem per „Drag&Drop“ verschieben. Klicke und verschiebe ein Objekt mit gedrückter Maustaste an die korrekte Stelle im selben oder in einen anderen Artikel.

### Verhalten bei Textverkettungen

Wenn Textrahmen miteinander verkettet sind, fliesst der Text dynamisch in den nächsten Rahmen, falls nicht mehr genügend Platz vorhanden ist oder dies manuell gewünscht wird. Auch technisch gesehen macht es Sinn, zueinander gehörende Texte miteinander zu verketten. Sie werden so nämlich in einem gemeinsamen Container *getaggt*.

Im Artikel Bedienfeld werden verkettete Textrahmen als ein Objekt behandelt. Fügt man also den ersten Textrahmen hinzu, sind alle verketten Textrahmen inklusive. Die Reihenfolge ist durch die Verkettung vorgegeben.

<aside class="note-block">Mehr zu <a href="https://helpx.adobe.com/ch_de/indesign/using/threading-text.html">„Verketten von Textrahmen“</a> kannst du im offiziellen Onlinehandbuch nachlesen.</aside>

### Verankerte Objekte

Grafiken oder andere Objekte können ebenfalls in einen Artikel integriert werden, sodass diese in der richtigen Reihenfolge *getaggt* werden.

Um eine Grafik an einer bestimmten Stelle in der logischen Reihenfolge zu platzieren, muss diese meist innerhalb eines Textrahmens verankert werden. Wird dies gemacht, kann man die Grafik als Bestandteil des Textrahmens betrachten. Sie erscheint nämlich nicht mehr separat im Artikel Bedienfeld.

Um ein Objekt zu verankern wird im Rahmen an der oberen Kante auf das gefüllte, kleine Quadrat geklickt. Mit geklickter Maustaste wird dann der Zeiger an die gewünschte Stelle im Text verschoben und die Taste losgelassen.

<aside class="note-block">Mehr zu <a href="https://helpx.adobe.com/ch_de/indesign/using/anchored-objects.html">„Verankerte Objekte“</a> kannst du im offiziellen Onlinehandbuch nachlesen.</aside>

<aside class="note-block">Da Grafiken Nicht-Text-Inhalte sind, muss ein Alternativtext hinterlegt werden, sofern sie inhaltlich relevant sind. Falls sie nicht relevant sind, gehören sie nicht in einen Artikel.<br>Für weitere Informationen, siehe auch <a href="https://accessible-pdf.info/de/glossar/#alt-text">Alt-Text</a> im Glossar oder <a href="https://accessible-pdf.info/de/basics/alt-texte-hinzufuegen/">„Alt-Texte hinzufügen“</a>.</aside>

## Formularfelder und Tab-Reihenfolge

Auch Formularfelder sind Objekte, die ebenfalls am besten innerhalb eines Textrahmens verankert werden. Beim PDF-Export als „Adobe PDF (Interaktiv)“ kann die Option „Struktur für Aktivierreihenfolge verwenden“ aktiviert werden und die Tab-Reihenfolge wird korrekt, gemäss der logischen Lesereihenfolge, übernommen.

![Screenshot der Exportoptionen im interaktiven PDF-Format.](https://accessible-pdf.info/wp/wp-content/uploads/indesign_pdf_export_interaktiv.png)

## Zusätzliche Features mit MadeToTag

Das kostenpflichtige InDesign Plugin <a href="https://www.axaio.com/doku.php/de:products:madetotag">MadeToTag</a> von Axaio kann bei der Arbeit mit dem Artikel Bedienfeld unterstützen. 

Im zweiten Aufgabenschritt des Plugins lassen sich sämtliche Inhalte eines Artikels oder aller Artikel ein- und ausblenden. Dies hilft um noch fehlende Inhalte zu finden, welche noch in einen Artikel aufgenommen werden müssen. Umgekehrt können auch Objekte, die nicht *getaggt* werden sollen, besser identifiziert werden.

![Screenshot des Plugins MadeToTag im 2. Aufgabenschritt](https://accessible-pdf.info/wp/wp-content/uploads/mtt_artikel.png	)

Ähnlich wie in [„Semantik und logische Lesereihenfolge prüfen“](https://accessible-pdf.info/de/basics/semantik-und-logische-lesereihenfolge-pruefen/) gezeigt, kann mithilfe des Plugins eine Vorschau der Tags und deren Reihenfolge innerhalb von InDesign angezeigt werden.