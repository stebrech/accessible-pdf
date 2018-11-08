---
ID: 21940
post_title: '<em>PDF-Tags</em> in Word festlegen'
author: Stefan Brechbühl
post_excerpt: >
  Eines der wichtigsten Strukturelemente
  sind verschachtelte mehrstufige
  Überschriften. Solches Strukturieren
  kann durch die konsequente Verwendung
  von Absatzformaten in Word erreicht
  werden.
layout: basics
permalink: >
  https://accessible-pdf.info/de/basics/pdf-tags-in-word-festlegen/
published: true
post_date: 2018-06-19 17:24:08
tags:
  - Microsoft Word
categories: [ ]
---
Eines der wichtigsten Strukturelemente sind verschachtelte mehrstufige Überschriften, siehe auch [„Strukturieren mithilfe von hierarchischen Überschriften“][1]. Solches Strukturieren kann durch die konsequente Verwendung von Absatzformaten in Word erreicht werden. Bei korrekter Verwendung, werden die Überschriften mit dem passenden *Tag* in das PDF exportiert.

Word bietet bereits einen umfangreichen Formatvorlagenkatalog, einschliesslich „Überschrift 1“ bis „Überschrift 9“. Derzeit sind in PDF nur `<H1>` bis `<H6>` als nummerierte Überschriften-*Tags* verfügbar. Daher werden die Absatzformate "Überschrift 7" bis „Überschrift 9“ mit dem allgemeinen Absatz-*Tag* (`<P>`) *getaggt*.

Wenn du willst, kannst du auch deine eigenen Absatzformate verwenden und ihnen die entsprechende Gliederungsebene vergeben. Werfen wir einen Blick auf diese Option.

1.  Öffne den Bereich Formatvorlagen. Windows-Benutzer müssen auf ein kleines Symbol unten rechts in der Liste der Schnellformatvorlagen klicken.
2.  Fahre mit der Maus über die Formatvorlage, die du ändern möchtest und klicke auf das erscheinende Dropdown-Menü.
3.  Klicke auf “Formatvorlage ändern”.
4.  Im Dropdown-Menü unten links kannst du zu den Absatzeinstellungen wechseln.
5.  Die zweite Option unter „Allgemein“ ist die „Gliederungsstufe“. Diese wird verwendet, um das PDF-*Tag* für die Überschrift zu generieren: 
    *   Textkörper = `<P>`
    *   Ebene 1 = `<H1>`
    *   Ebene 2 = `<H2>`
    *   Ebene 3 = `<H3>`
    *   usw.

https://www.youtube.com/watch?v=ahD5WYjfuLE&rel=0&hl=de_DE

## Listen

Listen eignen sich hervorragend, um mehrere Informationen übersichtlich und in kurzer Form zu strukturieren. Du solltest jedoch die richtigen Listenwerkzeuge dazu verwenden.

Abhängig von deinen Word Einstellungen wird ein Bindestrich gefolgt von einem Leerzeichen automatisch in eine korrekte Liste umgewandelt. Man sollte sich jedoch nicht darauf verlassen und eine Liste bewusst formatieren.

Mit folgenden Schaltflächen kannst du das tun:

![Listen Werkzeuge in Word.][2]

1.  Die erste Schaltfläche erstellt eine ungeordnete Liste mit Aufzählungszeichen,
2.  die zweite eine nummerierte Liste und
3.  Die dritte gibt dir die Möglichkeit eine mehrstufige Liste zu verwenden. Neben vordefinierten Formaten kannst du auch dein eigenes Listenformat erstellen, indem du auf „Neue Listenfomatvorlage definieren“ klickst.

## Tabellen

Wenn Daten sowie horizontal wie auch vertikal angeordnet sind, gehören sie in eine Tabelle. Manchmal erstellen Autorinnen und Autoren mithilfe von Tabulatoren eine *falsche* Tabelle. Dies ist wegen der Semantik und der logischen Lesereihenfolge nicht korrekt.

Um eine Tabelle hinzuzufügen, kann im Menüpunkt „Einfügen“ auf „Tabelle“ geklickt werden. Das erscheinende Raster kann verwendet werden, um auszuwählen wie viele Spalten und Zeilen die Tabelle haben soll.

![Wo in Word eine Tabelle hinzugefügt werden kann. Screenshot.][3]

Wenn sich der Cursor irgendwo in der Tabelle befindet, werden zwei zusätzliche Registerkarten in der Menüleiste angezeigt. In diesen kann eine Tabelle näher konfiguriert werden.

Die wichtigsten Tabelleneinstellungen für die Barrierefreiheit sind die Optionen „Überschrift“, „Erste Spalte“ und „Letzte Spalte“. Mit Hilfe dieser Optionen erstellst du Tabellenüberschriftszellen.

### Layout-Raster

Eine Tabelle sollte nicht als Layout-Raster missbraucht werden. Falls mehrere Spalten benötigt werden, steht im Menüeintrag „Layout“ die Option „Spalten“ zur Verfügung. Mithilfe eines Spaltenumbruchs („Layout“ → „Umbrüche“ → „Spalte“) kann in die nächste Spalte gewechselt werden. Durch einen Abschnittswechsel („Layout“ → „Umbrüche“ → „Fortlaufend“) kann ein anderes Spaltenlayout angewendet werden.

## Exporteinstellung {#export}

Damit die gewünschten *Tags* beim PDF-Export erstellt werden, muss folgendes beachtet werden:

### Word für Windows

1.  Wähle „Datei“ → „Exportieren“ → „PDF/XPS-Dokument“ erstellen 
2.  Klicke auf „Optionen“
3.  Aktiviere die Option „Dokumentstrukturtags für Barrierefreiheit“ falls diese nicht bereits aktiviert ist

### Word für Mac

1.  Wähle „Datei“ → „Speichern unter“
2.  Wähle im Dropdown „Dateiformat“ die Option „PDF“
3.  Aktiviere die Option „Optimal für elektronische Verteilung und Barrierefreiheit“

 [1]: https://accessible-pdf.info/de/basics/strukturieren-mithilfe-von-hierarchischen-ueberschriften/
 [2]: https://accessible-pdf.info/wp/wp-content/uploads/word-list.png
 [3]: https://accessible-pdf.info/wp/wp-content/uploads/word_tabelle.png