---
post_title: Geteilte Block-Elemente
author: Stefan Brechbühl
layout: tutorials
published: false
tags:
  - Manuelle Prüfung
  - Word
categories:
  - 01. Getaggter realer Inhalt
---
## Problembeschreibung

Word berücksichtigt beim Erstellen eines *getaggten* PDF und der *Tag*struktur die Seitenumbrüche. Dabei werden zusammenhängende Blöcke, die über zwei oder mehr Seiten laufen, aufgeteilt. Bei einfachen Absätzen mag das vertretbar sein, werden aber beispielsweise Überschriften, Listen oder Tabellen getrennt, leidet die Semantik.

Problem festgestellt bei der PDF-Konvertierung aus:

- Microsoft Word (alle Versionen)

### PAC 3 Warnung/Fehler

Keine Warnung oder Fehlermeldung zu diesem Problem!

### Prüfpunkt des Matterhorn Protokolls

Kein eindeutiger Prüfpunkt, welcher auf diesen Fehler zutrifft!

## Automatischer Lösungsweg mit axesPDF for Word

Indem der PDF-Export mit dem Plugin [axesPDF for Word](https://www.axes4.com/axespdf-for-word-ueberblick.html) gemacht wird, kann dieser Fehler verhindert werden. Die *Tags* werden anhand der verwendeten Formatvorlagen generiert und nicht durch einen Seiten- oder Spaltenumbruch unterbrochen.

## Manueller Lösungsweg in Word

Mithilfe der Absatzformateinstellungen kann verhindert werden, dass ein Block getrennt wird. Mit den Optionen

- Zeilen nicht trennen
- Seitenumbruch oberhalb

bleibt ein Block zusammen und beginnt erst auf der nächsten Seite oder in der nächsten Spalte.

![Bildschirmfoto aus Word mit geöffneten Absatzformateinstellungen und aktivem Register „Zeilen- und Seitenumbruch“. Markiert sind die beiden Optionen „Zeilen nicht trennen“ und „Seitenumbruch oberhalb“.](https://accessible-pdf.info/content/uploads/word-absatzformat-seitenumbruch.png)

<div class="warning-block" markdown="1">
Dieser manuelle Lösungsweg kann nur situativ angewendet werden. Je nach Layout oder bei grossen, seiten-/spaltenübergreifenden Block-Elementen hilft diese Methode nicht.
</div>

## Manueller Lösungsweg in Word

Mithilfe eines manuellen Seitenumbruchs kann die Trennung eines Blocks vermieden werden. Einer der zur Verfügung stehenden Umbrüche wird dabei vor dem Block, der getrennt würde, platziert.

Mögliche Umbrüche, die eine Trennung eines Blocks verhindern können:

- Seite
- Spalte
- Nächste Seite
- Gerade Seite
- Ungerade Seite

![Bildschirmfoto von Word mit aktivem „Layout“ Register und aufgeklappten „Umbrüche“ Befehl. Die möglichen Umbrucharten sind markiert.](https://accessible-pdf.info/content/uploads/word-umbrueche.png)

<div class="warning-block" markdown="1">
Dieser manuelle Lösungsweg kann nur situativ angewendet werden. Je nach Layout oder bei grossen, seitenübergreifenden Block-Elementen hilft diese Methode nicht.
</div>

## Manueller Lösungsweg in Acrobat

<div class="warning-block" markdown="1">
Die strikte Nachbearbeitung dieses Problems in Acrobat ist vielfach unverhältnismässig. Weiter oben beschriebene Lösungswege sind diesem wenn möglich immer vorzuziehen. Kritische Stellen müssen im PDF und dem *Tag*baum manuell gefunden und behoben werden.
</div>

Werden Block-Elemente geteilt, wiederholt sich nach dem Umbruch der *Tag* auf oberster Ebene. Am Beispiel einer Liste existieren mehrere `<L>`-*Tags*. Folgende Bildschirmfotos aus Acrobat zeigen wie auch noch ein Listenpunkt selbst durch einen Umbruch getrennt wird.

![Bildschirmfoto in Acrobat: Erste Seite mit drei sichtbaren Listenpunkten. Geöffnet ist ebenfalls das Navigationsfenster „Tags“. Markierungen zeigen welche Tags welchem Listenpunkt zugeordnet sind.](https://accessible-pdf.info/content/uploads/acrobat-liste-geteilt-1.png)

![Bildschirmfoto in Acrobat: Zweite Seite mit drei sichtbaren Listenpunkten, wobei der erste die Fortsetzung des letzten der ersten Seite ist. Geöffnet ist ebenfalls das Navigationsfenster „Tags“. Markierungen zeigen welche Tags welchem Listenpunkt zugeordnet sind.](https://accessible-pdf.info/content/uploads/acrobat-liste-geteilt-2.png) 

1. Zuerst müssen die Inhalte von `<LBody>` des ersten `<LI>` auf der zweiten Seite (3-2) in das `<LBody>` des letzten `<LI>` der ersten Seite (3-1) verschoben werden. Die korrekte Reihenfolge muss bewahrt werden.
2. Danach werden die beiden übrigen Listenelemente `<LI>` (4 und 5) innerhalb des `<L>`-*Tag* der ersten Seite verschoben.
3. Zuletzt können die leeren *Tags* der zweiten Seite gelöscht werden.

Analog diesem Beispiel können auch andere Block-Elemente manuell wieder zusammengebaut werden. 

### Aufgeteilte Tabellen

In einer Word-Tabelle kann definiert werden, dass sich die erste Zeile einer Tabelle auf jeder Seite wiederholt. Dabei muss sich der *Cursor* in der ersten Zeile befinden und die Tabellenoption „Gleiche Kopfzeile auf jeder Seite wiederholen“ ausgewählt werden.

![Markierte Tabellenoption „Gleiche Kopfzeile auf jeder Seite wiederholen“. Bildschirmfoto aus Word.](https://accessible-pdf.info/content/uploads/word-tabelle-kopfzeile-wiederholen.png)

Dabei werden diese Wiederholungen auch als Überschriftenzellen *getaggt*. Der Aufwand, der beim Vereinen von solchen einzelnen Tabellen entsteht, ist fragwürdig. Sofern die Tabellen einzeln verstanden werden, können diese auch so belassen werden.

Lieber sollte dafür gesorgt werden, dass nicht innerhalb einer Zelle getrennt wird. Mit **Deaktivierung** der Tabellenoption „Seitenumbruch in der Zeile zulassen“ kann dies erreicht werden.

![Markierte Tabellenoption „Seitenumbruch in der Zeile zulassen“. Bildschirmfoto aus Word.](https://accessible-pdf.info/content/uploads/word-tabelle-zeile-nicht-trennen.png)