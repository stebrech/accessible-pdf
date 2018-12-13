---
ID: 21939
post_title: '<em>PDF-Tags</em> in InDesign festlegen'
author: Stefan Brechbühl
post_excerpt: >
  In InDesign können die
  Überschriften-Tags innerhalb der
  Absatzformateinstellungen definiert
  werden. Unter „Tagsexport“ wird
  einem Absatzformat ein PDF-Tag
  zugewiesen.
layout: basics
permalink: >
  https://accessible-pdf.info/de/basics/pdf-tags-in-indesign-festlegen/
published: true
post_date: 2018-01-19 12:45:49
tags:
  - InDesign
categories: [ ]
---
In InDesign kannst du Überschriften-<em>Tags</em> manuell über die Einstellungen des Absatzformats definieren. Für Tabellen, Listen und Fussnoten wirst du die entsprechenden <em>Tags</em> automatisch erhalten, wenn die verfügbaren <em>Tools</em> korrekt verwendet wurden.

<h2><em>Tagsexport</em></h2>

Eines der wichtigsten Strukturelemente sind verschachtelte mehrstufige Überschriften, siehe auch <a href="https://accessible-pdf.info/de/basics/strukturieren-mithilfe-von-hierarchischen-ueberschriften/">"Struktur mit Hilfe von mehrstufigen Überschriften"</a>. Zur Einstellung des <em>Tags</em> für jedes Absatzformat

<ol>
<li>klickst du mit der rechten Maustaste auf das Absatzformat welches du ändern möchtest und wählst „… bearbeiten“; </li>
<li>öffnest den letzten Abschnitt „Tagsexport“;</li>
<li>und wählst das passende <em>Tag</em> im letzten <em>Dropdown</em>-Feld mit der Bezeichnung „PDF“ → „Tag“.</li>
</ol>

Du kannst dem Absatzformat jeden beliebigen Überschriften-<em>Tag</em> zuweisen. Es besteht auch die Möglichkeit „Artifact“ auszuwählen, wenn der Text keine relevanten Informationen enthält. Mehr dazu findest du unter <a href="https://accessible-pdf.info/de/basics/unwichtige-und-dekorative-inhalte-als-artefakt/">„Unwichtige und dekorative Inhalte als Artefakt“</a>.

<h3>Alle <em>Tags</em> auf einmal festlegen</h3>

Im <em>Flyout</em>-Menü oben rechts im Panel „Absatzformate“ findest du den Befehl „Alle Exporttags bearbeiten“. Im sich öffnenden Fenster musst du auf „PDF“ wechseln. Danach kannst du die <em>Tags</em> alle auf einmal festlegen.

<h2>Tabellen, Listen und Fussnoten</h2>

Verwende zum Erstellen von Tabellen den Menüpunkt „Tabelle“ und erstelle keine falsche Tabelle mit Hilfe von Tabulatoren. Dies wäre semantisch nicht korrekt und verursacht Probleme mit der <a href="https://accessible-pdf.info/de/glossar/#logische-lesereihenfolge">logischen Lesereihenfolge</a>. Innerhalb der Tabellenoptionen kannst du wählen, wie viele Kopf- und Fusszeilen die Tabelle haben soll.

Auch Listen müssen korrekt angelegt werden. Du darfst nicht nur ein Bindestrich oder eine Zahl eingeben, um eine Liste zu erstellen. Innerhalb der Absatzformateinstellungen kann eine korrekt nummerierte oder ungeordnete Liste erstellt werden.

Im Menüpunkt „Schrift“ können korrekte Fuss- oder Endnoten hinzugefügt werden.

<h2>Export</h2>

Sobald dein Dokument fertig ist, gibt es eine wichtige Exporteinstellung, die du prüfen musst. Die Option „PDF mit Tags erstellen“ muss aktiviert sein. Du wirst sie finden ob du das Format „Adobe PDF (Druck)“.

<img src="https://accessible-pdf.info/wp/wp-content/uploads/indesign_pdf_export_druck.jpg" alt="Screenshot der Exportoptionen im PDF-Druckformat." />

oder „Adobe PDF (Interaktiv)“ auswählst.

<img src="https://accessible-pdf.info/wp/wp-content/uploads/indesign_pdf_export_interaktiv.jpg" alt="Screenshot der Exportoptionen im interaktiven PDF-Format." />

Wenn dein Dokument interaktiv ist und Links oder Formularfelder enthält, musst du „Adobe PDF (Interaktiv)“ wählen und auch die Option „Struktur für Aktivierreihenfolge verwenden“ aktivieren.

<h2>Rollenzuordnung von Tags</h2>

Wenn du dir in Acrobat den Navigationsbereich „Tags“ anschaust, wirst du feststellen, dass das Dokument <em>getaggt</em> wurde. Die <em>Tags</em> werden jedoch nach dem Absatzformat benannt, den du in InDesign gewählt hast und nicht nach dem ausgewählten Export-<em>Tag</em>.

Also, weshalb die zusätzliche Arbeit? InDesign hat mit Hilfe der Rollenzuordnung die richtigen Tags zugewiesen. Das bedeutet, dass jedes <em>Tag</em> mit dem Namen des Absatzformats einem gültigen PDF-<em>Tag</em> zugeordnet wird.

Um diese Regeln zu überprüfen oder zu ändern, öffnest du das Menü in „Tags“ und wählst „Rollenzuordnung bearbeiten“.

Seit Adobe Acrobat DC 2017 hat es im Menü „Tags“ eine neue Option namens „Rollenzuordnung auf Tags anwenden“. Wenn diese Option aktiv ist, siehst du die zugeordneten <em>Tags</em> anstelle der Namens, wie sie tatsächlich benannt wurden.