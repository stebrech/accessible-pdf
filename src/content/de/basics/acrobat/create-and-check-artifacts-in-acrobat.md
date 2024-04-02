---
title: Artefakte in Acrobat erstellen und prüfen
layout: post.njk
author: Stefan Brechbühl
date: 2020-12-06
description: Dekorative und unwichtige Informationen müssen als Artefakt gekennzeichnet werden damit sie von assistiver Technologie (AT) ignoriert werden. Können Artefakte nicht bereits im Herstellungsprogramm definiert werden, muss dies in Acrobat manuell nachgeholt werden.
order: 5
---

Dekorative und unwichtige Informationen müssen als Artefakt gekennzeichnet werden damit sie von [assistiver Technologie (AT)](/de/glossary/#assistive-technologie) ignoriert werden. Können Artefakte nicht bereits im Herstellungsprogramm definiert werden, muss dies in Acrobat manuell nachgeholt werden.

<p class="note">
  Erfahre im Glossar was <Link to="/de/glossary/#Artefakt/">Artefakte</Link> sind und was Beispiele
  davon sind.
</p>

Der effizienteste Weg ist jedoch die Artefakte bereits im Erstellungsprogramm zu bestimmen und beim PDF-Export mitzugeben. Hierzu stehen folgende Anleitungen zur Verfügung:

- [Artefakte in InDesign festlegen](/de/basics/indesign/defining-artifacts-in-indesign/)
- [Artefakte in Word festlegen](/de/basics/word/defining-artifacts-in-word/)

In Acrobat können Artefakte entweder [im _Tagbaum_](#artefakt-in-navigationsfenster-tags-erstellen) oder mit [dem Leserichtung-Werkzeug](#artefakt-mit-leserichtung-werkzeug-erstellen) definiert werden. Welche Inhalte als Artefakte gekennzeichnet wurden, können im [Navigationsfenster „Inhalt“ je Seite geprüft](#artefakte-in-navigationsfenster-inhalt-prüfen) werden.

<p class="note">
  Softwarehinweis: Um mit <em>Tags</em> und Artefakten arbeiten zu können, wird der kostenpflichtige 
  <a href="https://acrobat.adobe.com/ch/de/acrobat.html">Adobe Acrobat</a> benötigt. Mit dem
  kostenlosen <a href="https://get.adobe.com/de/reader/">Adobe Acrobat Reader</a> können diese weder
  geprüft noch geändert werden.
</p>

## Artefakt in Navigationsfenster _Tags_ erstellen

Bei dieser Anleitung ist die Ausgangslage ein vollständig _getaggtes_ Dokument.

1. Öffne das Navigationsfenster „Tags“.  
   Es lässt sich öffnen indem auf das Symbol mit dem Namensschild klickst.  
   ![Tag Icon in Acrobat](src/assets/img/tag-icon.png)
   Falls dieses in der linken Leiste noch nicht aufgeführt ist, kann es mit einem Rechtsklick oder unter „Anzeige“ → „Ein-/Ausblenden“ → „Navigationsfenster“ hinzugefügt und das Navigationsfenster angezeigt werden.
2. Suche dir den dekorativen Inhalt innerhalb der Tags, siehe dazu auch „[Getaggter Text im Tagbaum finden](/de/basics/acrobat/general-working-with-pdf-tags-in-acrobat/#getaggter-text-im-tagbaum-finden)“ innerhalb von „[Generelles Arbeiten mit PDF-Tags in Acrobat](/de/basics/acrobat/general-working-with-pdf-tags-in-acrobat/)“
3. Mache einen Rechtsklick auf den Inhalt (mit dem kleinen Kistensymbol) und wähle „_Tag_ in aussertextliches Element ändern“. ![Kontextmenü mit ausgewählter Option „Tag in aussertextliches Element ändern“. Bildschirmfoto aus Acrobat.](src/assets/img/acrobat-tag-in-aussertextliches-element-aendern.png)
4. Der öffnende Dialog erlaubt dir noch die Art des Artefakt und dessen Seitenposition näher zu beschreiben. ![In den Artifact Optionen kann zwischen den Typen „Seite“, „Paginierung“ und „Layout“ unterschieden werden. Zusätzlich stehen vier Optionsfelder der Positionen zur Verfügung: Links, Oben, Rechts und Unten. Bildschirmfoto aus Acrobat.](src/assets/img/acrobat-artefakt-optionen.png)
5. Falls dieses Artefakt alleine innerhalb eines _Tags_ platziert war, sollte das leere Tag noch gelöscht werden.

## Artefakt mit Leserichtung-Werkzeug erstellen

Mit dem Leserichtung-Werkzeug geht es schneller. Im Gegenzug kann man weniger präzise arbeiten und nicht genau sehen wo was passiert.

1. Wähle das Leserichtung-Werkzeug aus. Falls du es nicht in deinen Schnellwerkzeugen hast, findest du es innerhalb der Werkzeuggruppe „Barrierefreiheit“.
2. Nun verändert sich deine Maus und ein Fenster wird geöffnet.
3. Wähle den Bereich aus, den du als Artefakt kennzeichnen möchtest. Dazu kannst in die linke obere Ecke klicken oder die Maus geklickt halten und ein Auswahlfeld aufziehen.
4. Klicke nun im Fenster auf den Knopf „Hintergrund/Artefakt“.

![Wie wird ein Artefakt mithilfe des „Leserichtung-Werkzeugs“ angelegt? Gif-Animation.](src/assets/img/acrobat_artifact2.gif)

## Artefakte in Navigationsfenster „Inhalt“ prüfen

Falls bereits _getaggte_ Inhalte als Artefakte gekennzeichnet werden, verschwinden sie im „Tagbaum“. Artefakte sind jedoch im Navigationsfenster „Inhalt“ weiterhin vorhanden. Erkennbar sind sie durch die Kennzeichnung: „Container `<Artifact>` …“.

![Das Navigationsfenster „Inhalt“ mit einem gekennzeichneten Artifact Container. Bildschirmfoto in Acrobat.](src/assets/img/acrobat-artifact.png)

<p class="note">
  Im Navigationsfenster „Inhalt“ liegt das Element, das sich an oberster Stelle befindet, auf der
  untersten Ebene. Die Reihenfolge dieser Auflistung und die Darstellungsebene ist daher umgekehrt.
  In diesem Zusammenhang kann folgendes Problem auftreten: „
  <Link to="/de/tutorials/general/incorrect-display-order-makes-contents-disappear/">
    Falsche Anzeigereihenfolge lässt Inhalte verschwinden
  </Link>
  “
</p>
