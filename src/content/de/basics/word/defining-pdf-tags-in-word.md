---
title: PDF-Tags in Word festlegen
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2020-12-09
description: Um die Ausgabequalität eines aus Word exportierten PDF-Dokuments zu verbessern, ist es wichtig die verfügbaren Werkzeuge in Word korrekt zu verwenden. Damit erreicht man, dass eine elementare Tagstruktur erzeugt und der Nachbearbeitungsaufwand im PDF reduziert wird.
order: 1
---

Um die Ausgabequalität eines aus Word exportierten PDF-Dokuments zu verbessern, ist es wichtig die verfügbaren Werkzeuge in Word korrekt zu verwenden. Damit erreicht man, dass eine elementare *Tag*struktur erzeugt und der Nachbearbeitungsaufwand im PDF reduziert wird.

Folgende semantische Strukturinformationen können in Word automatisch in das PDF übertragen werden:

- [Überschriften](#überschriften)
- [Listen](#listen)
- [Tabellen](#tabellen)
  - [Layout-Raster](#layout-raster)
- [Fuss-/Endnoten](#fuss-endnoten)
- [Weitere Auszeichnungen](#weitere-auszeichnungen)
- [Exporteinstellung](#exporteinstellung)
  - [Word für Windows](#word-für-windows)
  - [Word für Mac](#word-für-mac)

Damit diese Strukturinformationen übernommen werden, folgen am Schluss noch Informationen zu den [Exporteinstellung](#exporteinstellung).

## Überschriften

Eines der wichtigsten Strukturelemente sind hierarchische Überschriften, siehe auch [„Strukturieren mithilfe von hierarchischen Überschriften“](/de/basics/general/structure-with-the-help-of-multi-level-headings/). Solches Strukturieren kann durch die bewusste Verwendung von Absatzformaten in Word erreicht werden. Die korrekte Verwendung führt dazu, dass Überschriften automatisch mit dem passenden _Tag_ in das PDF exportiert werden.

<iframe
  width="750"
  height="422"
  title="YouTube video tutorial: PDF-Tags in Word festlegen"
  src="https://www.youtube-nocookie.com/embed/ahD5WYjfuLE?hl=de"
  frameborder="0"
  allow="encrypted-media"
  allowfullscreen
></iframe>

Word bietet bereits einen umfangreichen Formatvorlagenkatalog, einschliesslich „Überschrift 1“ bis „Überschrift 9“. Derzeit sind in PDF nur `<H1>` bis `<H6>` als nummerierte Überschriften-_Tags_ verfügbar. Daher werden die Absatzformate "Überschrift 7" bis „Überschrift 9“ mit dem allgemeinen Absatz-_Tag_ (`<P>`) _getaggt_.

Wenn du möchtest, kannst du auch deine eigenen Absatzformate verwenden und ihnen die entsprechende Gliederungsebene vergeben. Somit werden auch eigene Formatvorlagen als hierarchische Überschriften _getaggt_. Werfen wir einen Blick auf diese Option.

1. Öffne den Bereich Formatvorlagen. Windows-Benutzer müssen auf ein kleines Symbol unten rechts in der Liste der Schnellformatvorlagen klicken.
2. Fahre mit der Maus über die Formatvorlage, die du ändern möchtest und klicke auf das erscheinende Dropdown-Menü.
3. Klicke auf “Formatvorlage ändern”.
4. Im Dropdown-Menü unten links kannst du zu den Absatzeinstellungen wechseln.
5. Die zweite Option unter „Allgemein“ ist die „Gliederungsstufe“. Diese wird verwendet, um das PDF-_Tag_ für die Überschrift zu generieren:
   - Textkörper = `<P>`
   - Ebene 1 = `<H1>`
   - Ebene 2 = `<H2>`
   - Ebene 3 = `<H3>`
   - usw.

![Absatzformateinstellungen mit markierter Option Gliederungsebene. Bildschirmfoto von Word.](src/assets/img/word_gliederungsebene.png)

## Listen

Listen sind ein weiteres wichtiges Strukturierungsmittel. Damit werden mehrere Dinge ungeordnet oder in einer definierten Reihenfolge aufgelistet. Damit Listen aus Word auch automatisch als Listen _getaggt_ werden, müssen die dafür vorgesehenen Listenwerkzeuge verwendet werden.

Mit folgenden Schaltflächen kannst du das tun:

![Listen Werkzeuge in Word.](src/assets/img/word-list.png)

1. Die erste Schaltfläche erstellt eine ungeordnete Liste mit Aufzählungszeichen,
2. die zweite eine nummerierte Liste und
3. die dritte gibt dir die Möglichkeit eine Liste mit mehreren Ebenen zu verwenden.

Unter dem dritten Button zur Erstellung einer Liste mit mehreren Ebenen versteckt sich die Möglichkeit eine eigene Listenformatvorlage zu definieren. Klicke dazu auf den letzten Eintrag mit der Bezeichnung „Neuen Listentyp definieren“ oder „Neue Listenfomatvorlage definieren“. Damit können das Aufzählungszeichen / die Nummerierung und dessen Einzüge definiert werden. Zudem können die einzelnen Ebenen mit **einem Absatzformat verknüpft** werden.

<p class="note">
  Abhängig von deinen Word Einstellungen wird ein Bindestrich gefolgt von einem Leerzeichen
  automatisch in eine korrekte Liste umgewandelt. Man sollte sich jedoch nicht darauf verlassen und
  eine Liste bewusst formatieren.
</p>

Die automatisch generierten Listen-_Tags_ sind:

- `<L>` = Container des ganzen Listenblocks
  - `<LI>` = Container eines Listeneintrags
    - `<LBody>` = Inhalt eines Listeineintrags

PDF sieht eigentlich noch den _Tag_ `<Lbl>` für das Aufzählungszeichen / die Nummerierungsziffer vor. Dies wird mit Word bisher nicht verwendet und es wird ebenfalls in `<LBody>` integriert. Die automatische Ausgabe ist daher nicht korrekt aber brauchbar. Die Verwendung von `<Lbl>` ist gemäss Standard nicht obligatorisch.

## Tabellen

Wenn Daten sowie horizontal wie auch vertikal angeordnet sind, gehören sie in eine Tabelle. Eine Tabelle soll nicht nur visuell sondern auch maschinell als solche erkennbar sein. Sie muss daher mit dem dafür vorgesehene Tabellenwerkzeug und nicht mithilfe von Leerzeichen und Tabulatoren erstellt werden.

Um eine Tabelle hinzuzufügen, kann im Menüpunkt „Einfügen“ auf „Tabelle“ geklickt werden. Das erscheinende Raster kann verwendet werden, um auszuwählen wie viele Spalten und Zeilen die Tabelle haben soll.

![Wo in Word eine Tabelle hinzugefügt werden kann. Screenshot.](src/assets/img/word_tabelle.png)

Wenn sich der Cursor irgendwo in der Tabelle befindet, werden zwei zusätzliche Registerkarten in der Menüleiste angezeigt. In diesen kann eine Tabelle näher konfiguriert werden.

Eine Tabelle enthält immer Zellen die als Überschriften gelten und anderen Zellen übergeordnet sind. Das korrekte Werkzeug um solche Überschriftenzellen in Word hinzufügen sind die Tabellenformatoptionen. Dort befinden sich die Optionen

- Überschrift
- Erste Spalte
- Ergebniszeile
- Letzte Spalte

![Tabellenformatoptionen in Word. Markiert sind die Optionen Überschrift, Erste Spalte, Ergebnisspalte und letzte Spalte.](src/assets/img/word_tabellenformatoptionen.png)

Leider haben diese Optionen bis und mit der Version 2016 nur Einfluss auf die visuelle Formatierungen, jedoch nicht auf die PDF-Ausgabe. In der 365-Version werden die Überschriftenzellen dann automatisch korrekt _getaggt_. Diesen `<TH>` _Tags_ fehlt jedoch das _Scope_ Attribut, welches angibt ob es eine Überschriftszelle für die Spalte oder Zeile ist.

<p class="note">
  Eine Anleitung um das <em>Scope</em> Attribut hinzuzufügen ist noch offen.
</p>

In früheren Word-Versionen gibt es eine Möglichkeit um die erste Zeile automatisch mit `<TH>` _Tags_ auszeichnen zu lassen. Dafür muss

1. der Cursor in eine Zelle der ersten Zeile gesetzt werden;
2. die Tabelleneigenschaften geöffnet werden (z.B. via Rechtsklick);
3. in das Register „Zeile“ gewechselt werden;
4. und die Option „Gleiche Kopfzeile auf jeder Zeile wiederholen“ aktiviert werden.

Auch bei diesem Lösungsweg fehlt das _Scope_ Attribut im erzeugten PDF.

### Layout-Raster

Eine Tabelle sollte nicht als Layout-Raster missbraucht werden. Falls mehrere Spalten benötigt werden, steht im Menüeintrag „Layout“ die Option „Spalten“ zur Verfügung. Mithilfe eines Spaltenumbruchs („Layout“ → „Umbrüche“ → „Spalte“) kann in die nächste Spalte gewechselt werden. Durch einen Abschnittswechsel („Layout“ → „Umbrüche“ → „Fortlaufend“) kann ein anderes Spaltenlayout angewendet werden.

## Fuss-/Endnoten

Im Menüregister „Verweise“, respektive „Referenzen“, befinden sich die Befehle für das Hinzufügen von Fuss- und Endnoten. Der Befehl für das Hinzufügen einer Fussnote sorgt dafür, dass Fussnote und die Fussnotenziffer immer dynamisch auf der gleichen Seiten sind.

![Wie in Word eine Fussnote oder Endnote hinzufügen. Screenshot.](src/assets/img/word-fuss-endnoten.png)

Die Verwendung der korrekten Befehle sorgen jedoch auch da
für, dass die Fuss-/Endnoten innerhalb eines `Note` _getaggt_ werden. Leider lässt die Ausgabe aus Word aber noch sehr zu Wünschen übrig. Bisher werden alle Fuss-/Endnoten einer Seite innerhalb von einem `Note` _getaggt_ anstatt jede für sich. Zudem wird der `Note` _Tag_ nach dem Absatz, indem das erste Fussnotenzeichen erscheint, aufgeführt. Dies kann dazu führen, dass eine Fussnote vor der dazugehörigen Fussnotenziffer platziert wird. Obwohl PDF 1.7 nicht genau vorgibt wo eine Fussnote platziert werden soll, entspricht dies nicht einer verständlichen und logischen Reihenfolge.

<p class="note">
  Um es genau zu nehmen, platziert Word die Fussnoten nicht innerhalb eines <code>Note</code> 
  <em>Tags</em>, sondern innerhalb eines nicht-standardkonformen <code>Footnote</code>. Es wird
  jedoch automatisch eine Rollenzuordnung mitgegeben, welche auf den standardkonformen <em>Tag</em> 
  verweist. Erfahre mehr in 
  <Link to="/de/basics/acrobat/general-working-with-pdf-tags-in-acrobat/#standardisierte-tags-und-tags-mit-rollenzuordnung">
    „Generelles Arbeiten mit PDF <em>Tags</em> in Acrobat“
  </Link>
</p>

Weiter wird auch die Fussnotenziffer nicht automatisch innerhalb eines `Reference` _Tags_ ausgezeichnet.

## Weitere Auszeichnungen

Weitere semantische _Tags_, wie sie in [„Übersicht der PDF-_Tags_“](/de/basics/general/overview-of-the-pdf-tags/) aufgeführt sind, können aktuell nicht automatisch aus Word erzeugt werden.

## Exporteinstellung

Damit die gewünschte *Tag*struktur beim PDF-Export erstellt wird, müssen die Exporteinstellunge beachtet werden.

### Word für Windows

1. Wähle „Datei“ → „Exportieren“ → „PDF/XPS-Dokument“ erstellen
2. Klicke auf „Optionen“
3. Aktiviere die Option „Dokumentstrukturtags für Barrierefreiheit“ falls diese nicht bereits aktiviert ist

### Word für Mac

1. Wähle „Datei“ → „Speichern unter“
2. Wähle im Dropdown „Dateiformat“ die Option „PDF“
3. Aktiviere die Option „Optimal für elektronische Verteilung und Barrierefreiheit“
