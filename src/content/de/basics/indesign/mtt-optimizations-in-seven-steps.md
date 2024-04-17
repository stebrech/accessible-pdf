---
title: MadeToTag – Optimierungen in sieben Schritten
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2024-04-02
description: Mit dem InDesign-Plugin MadeToTag kann in sieben geführten Schritten ein barrierefreies, PDF/UA-konformes PDF erstellt werden. Mühsame Nachbesserungen nach dem PDF-Export können dabei minimiert bis vollständig eliminiert werden.
order: 11
---

Mit dem InDesign-Plugin MadeToTag kann in sieben geführten Schritten ein barrierefreies, PDF/UA-konformes PDF erstellt werden. Mühsame Nachbesserungen nach dem PDF-Export können dabei minimiert bis vollständig eliminiert werden.

## Die MadeToTag Registerkarte

Nach der Installation des Plugins erhält InDesign eine zusätzliche Registerkarte, die im Menü Fenster ein- und ausgeblendet werden kann.

1. Im oberen Bereich der Registerkarte befindet sich die Navigation um zwischen den sieben Aufgabenschritten zu wechseln.
2. Der mittlere Bereich ist dynamisch. Hier wird der eigentliche Aufgabenschritt erledigt.
3. Der untere Teil der Registerkarte enthält Scripte, welche die barrierefreie Ausgabe unterstützen.

![Die drei Bereiche der MadeToTag Registerkarte sind farblich gekennzeichnet. Screensho.](src/assets/img/mtt_overview.png)

Die sieben Schritte werden im Folgenden erläutert:

1. [Export-Tags zuweisen](#schritt-1-export-tags-zuweisen)
2. [Inhalte in Artikeln strukturieren](#schritt-2-inhalte-in-artikeln-strukturieren)
3. [Alternativer Text](#schritt-3-alternativer-text)
4. [Dokument Metadaten bearbeiten](#schritt-4-dokument-metadaten-bearbeiten)
5. [Sprache](#schritt-5-sprache)
6. [Tabellenstruktur](#schritt-6-tabellenstruktur)
7. [PDF exportieren](#abschluss-pdf-exportieren)

## Schritt 1: Export-Tags zuweisen

Wie einem Absatzformat ein Export-Tag zugewiesen wird, erklärt der Beitrag: «[PDF-Tags in InDesign festlegen](/de/basics/indesign/defining-pdf-tags-in-indesign/)». Mit MadeToTag erhältst du einen zusätzlichen Weg diese Aufgabe zu erledigen.

In InDesign können lediglich die Überschriften-*Tags* (`H` und `H1-H6`) und das Absatz-Tag (`P`) zugewiesen werden. Das Plugin erweitert die Liste möglicher Export-Tags um:

- `Caption` (für Listen und Tabellen)
- `Index`
- `Blockquote`

Ein wertvolles Kontroll-Werkzeug ist die Checkbox «Export-Tags farblich hervorheben». Damit werden alle Inhalte, die einen Export-Tag enthalten, farblich hervorgehoben. Nun können fehlende sowie falsch zugeordnete Tags ganz einfach identifiziert werden.

![Ein Ausschnitt eines Beispieldokuments mit eingeschalteter Option «Export-Tags farblich hervorheben». Screenshot.](src/assets/img/mtt_export-tags-preview.png)

## Schritt 2: Inhalte in Artikeln strukturieren

Um die *getaggten* Inhalte in der korrekten Lesereihenfolge zu bringen, werden sie in Artikeln strukturiert, (siehe dazu [Logische Lesereihenfolge in InDesign festlegen](/de/basics/indesign/defining-logical-reading-order-in-indesign/)).

Ob man alle Inhalte richtig und vollständig in Artikel verpackt hat, ist mit InDesign-Boardmitteln nicht auf einen Blick erkennbar. MadeToTag unterstützt hier mit zusätzlichen Features. 

Inhalte, die sich im aktuell ausgewählten Artikel befinden, können ein- und ausgeblendet werden. Der Button «in keinem Artikel» blendet alles aus, was irgendeinem Artikel zugewiesen wurde. So kann geprüft werden ob nichts vergessen wurde.

![](src/assets/img/mtt_artikel.png)

Für die Prüfung der korrekten Reihenfolge enthält MadeToTag noch eine Alternative zur Artikel-Registerkarte. Das Plugin kann eine Vorschau generieren, womit sich die angewendeten Export-*Tags* und deren Reihenfolge prüfen lassen.

![](src/assets/img/mtt_preview.png)

## Schritt 3: Alternativer Text

Alle relevanten Nicht-Text-Elemente benötigen einen Beschreibungstext, der sich [Alt-Text](/de/glossary/#alt-text) nennt. «[Alt-Texte in InDesign hinzufügen](/de/basics/indesign/add-an-alt-text-in-indesign/#alt-texte-in-adobe-indesign-hinzuf%C3%BCgen)» beschreibt wie das in InDesign gemacht wird.

MadeToTag bietet zusätzlich eine Zusammenfassung aller Bilder an, in der die Alt-Texte ergänzt oder angepasst werden können.

## Schritt 4: Dokument Metadaten bearbeiten

Die Metadaten des Dokuments werden in InDesign unter `Dateiinformationen` (innerhalb Menüregister `Datei`) eingegeben.

MadeToTags’s Schritt 4 hilft daran zu denken, dass dieser Schritt nicht vergessen geht und fasst die PDF relevanten Metadaten zusammen.

## Schritt 5: Sprache

Für die Rechschreibeprüfung und Silbentrennung wird dem Text eine Sprache zugeordnet. Die korrekte zugewiesene Sprache sorgt zudem dafür, dass [assistive Technologie](/de/glossary/#assistive-technologie) die Inhalte korrekt ausgeben kann. Die Überprüfung mit InDesign-Boardmitteln ist eher umständlich. Umso mehr trifft dies auf mehrsprachige Dokumente zu.

MadeToTag zeigt dir die Primärsprache an. Dies ist die Sprache, welche am meisten im Dokument verwendet wurde. Die Primärsprache wird als Dokumentsprache verwendet. Werden im Dokument zusätzlich zur Primärsprache noch weitere Sprachen verwendet, werden diese in der MadeToTag Registerkarte aufgelistet.

Mithilfe der Checkbox «Sprachen farblich hervorheben» kann eine effiziente, visuelle Prüfung vorgenommen werden.

![Ein Ausschnitt eines Beispieldokuments mit den farblichen Kennzeichnungen der verschiednenen Sprachen. Screenshot.](src/assets/img/mtt_sprachen.png)

## Schritt 6: Tabellenstruktur

Das Tabellenwerkzeug ist das *Powerfeature* von MadeToTag. In InDesign können lediglich Tabellenkopfzeilen und -fusszeilen verwendet werden. Die Zellen der Tabellenkopfzeilen werden damit zu Tabellenüberschriften *getaggt*. Mit Boardmitteln können keine Spaltenüberschriften und schon gar keine komplexe Tabellen ausgezeichnet werden.

Nebst der PDF/UA-konformen Tabellenausgabe, bietet das Plugin drei weitere Strukturierungstools an:

- **Quick-Headers:** Es werden die Anzahl Zeilen und Spalten von oben und links angegeben, die als Überschriftenzellen ausgezeichnet werden;
- **Smart-Headers:** Mit diesem zusätzlichen Tool können komplexe Tabellenstrukturen  umgesetzt werden;
- **Layout-Tabellen:** Werden Tabellen zu Layoutzwecken «missbraucht», kann mit dieser Option die Ausgabe als Tabelle verhindert werden.

![Tabelle, die mithilfe von Smart-Headers strukturiert wurde. Screenshot.](src/assets/img/mtt_tabellen.png)

## Abschluss: PDF exportieren

Zum Schluss werden die letzten Ausgabeeinstellungen eingestellt, bevor das Dokument in ein PDF exportiert wird. 

Die Optionen 

- Verankerte Rahmen optimieren
- Inhaltsverzeichnis optimieren 

können einen Einfluss auf die Ausgabequalität haben und sind bei älteren InDesign-Versionen wichtig. 

Wenn zusätzlich zu PDF/UA auch der PDF/A-Standard gewährleistet werden soll, kann dies optional ausgewählt werden.

<p class="note">
Wird ein PDF mithilfe von MadeToTag erstellt, wird die InDesign-Exportfunktionalität genutzt und mit diversen PDF-Korrekturen im Hintergrund optimiert.
</p>

## Weiterführende Informationen zu MadeToTag

Dieser Beitrag hat nicht den Anspruch vollständig jede MadeToTag-Option zu beschreiben. Weit umfangreicher ist das [Online-Handbuch vom Hersteller axaio](https://hilfe.axaio.com/m/madetotag-handbuch/), welches bei Fragen oder Problemen weiterhilft.

Weitere Informationen vom Hersteller axaio:

- [Allgemeine Produktinformationen, Download-Link sowie Preisinformationen](https://www.axaio.com/doku.php/de:products:madetotag)
- [Release Notes](https://www.axaio.com/doku.php/de:products:madetotag:releasenotes)
