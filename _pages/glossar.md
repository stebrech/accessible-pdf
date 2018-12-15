---
ID: 134
post_title: Glossar
author: Stefan Brechbühl
post_excerpt: >
  Im Glossar werden Begriffe erklärt, die
  für die Arbeit mit barrierefreien PDFs
  benötigt werden.
layout: page
permalink: https://accessible-pdf.info/de/glossar/
published: true
post_date: 2017-12-30 19:48:13
tags: [ ]
categories: [ ]
---
Im Glossar werden Begriffe erklärt, die für die Arbeit mit barrierefreien PDFs benötigt werden.

<h2 id="alt-text">Alt-Text</h2>

Ein Alt-Text (kurz für Alternativtext) beschreibt ein Nicht-Textelement, wie ein Bild / eine Grafik. Der unsichtbare Text kann durch Software, insbesondere <a href="#assistive-technologie">AT</a>, ausgelesen und wiedergegeben werden.

Der Alt-Text sollte so kurz und prägnant wie möglich sein und beschreiben was auf dem Bild sichtbar ist. Er soll keine zusätzlichen Informationen enthalten, welche auch visuell nicht erkannt würden, z.B. der Name des Fotografen oder Namen von abgebildeten Personen und Sachen, die mithilfe des Kontexts auch visuell nicht erkannt würden. Dies ist der grosse Unterschied zu einer sichtbaren Bildunterschrift / einer Bildbeschreibung, welche zusätzliche Informationen übermitteln kann.

Nicht jedes Bild und jede Grafik benötigt einen Alt-Text. Eine wertvolle Entscheidungshilfe bietet WAI (Web Accessibility Initiative) mit „<a href="https://www.w3.org/WAI/tutorials/images/decision-tree/">An alt Decision Tree</a>“ und den <a href="https://www.w3.org/WAI/tutorials/images/">Web Accessibility Tutorials</a> (nur in Englisch). Der wesentliche Unterschied von HTML und PDF ist die Handhabung von dekorativen Bildern (z.B. Hintergrundbilder, Linien und weiteren dekorativen Formen). Diese werden in PDF als Artefakt gekennzeichnet, siehe auch „<a href="https://accessible-pdf.info/de/basics/unwichtige-und-dekorative-inhalte-als-artefakt/">Unwichtige und dekorative Inhalte als Artefakt</a>“. Während die dekorativen Bilder keinen Alt-Text benötigen, sollen die funktionalen Bilder die Funktion / das Ziel erklären und nicht dessen Bildinhalt. Hierzu zählen insbesondere verlinkte Bilder.

<h2 id="alternativtext">Alternativtext</h2>

siehe <a href="#alt-text">Alt-Text</a>

<h2 id="assistierende-technologie">assistierende Technologie</h2>

Assistierende Technologie ist eine weitere Übersetzung des englischen Begriffs <em>assistive technology</em>. Siehe dazu <a href="#assistive-technologie">assistive Technologie</a>.

<h2 id="assistive-technologie">assistive Technologie</h2>

Assistive Technologie (Abk. AT) ist der eingedeutschte Begriff von <em>assistive technology</em>. AT steht für mögliche Hilfsmittel, die benötigt werden um Informationen trotz Einschränkungen lesen und verarbeiten zu können.

Unter AT fallen folgende Software und Hardware:

<ul>
<li><a href="https://de.wikipedia.org/wiki/Screenreader">Screenreader (Bildschirmvorlese-Software)</a></li>
<li><a href="https://de.wikipedia.org/wiki/Braillezeile">Braillezeile</a></li>
<li>Bildschirmvergrösserung</li>
<li>Sprachsteuerung</li>
<li>Spezialmäuse und -tastaturen</li>
<li>Augen- und Mundsteuerung</li>
<li>…</li>
</ul>

<h2 id="at">AT</h2>

Abkürzung für <a href="#assistive-technologie">assistive Technologie</a>

<h2 id="automatische-pruefung">automatische Prüfung</h2>

Gemäss <a href="#matterhorn-protokoll">Matterhorn Protokoll</a> können 87 Prüfpunkte durch eine Software geprüft werden. Mithilfe einer Prüfung mit <a href="#pac">PAC</a> werden solche Fehler erkannt.

<h2 id="barrierearm">barrierearm</h2>

Der Begriff „barrierearm“ wird teilweise für eine beschränkt, erreichte Barrierefreiheit verwendet. Siehe dazu <a href="#barrierefrei">barrierefreies PDF</a>

<h2 id="barrierefrei">barrierefreies PDF</h2>

Durch Barrierefreiheit werden keine Menschen aufgrund einer Schwäche oder Behinderung ausgeschlossen. Für elektronische Dokumente bedeutet dies, dass technische Voraussetzungen geschaffen werden damit alle Menschen diese selbstständig benutzen können.

Ein PDF ist barrierefrei wenn es mit dem Standard <a href="#pdf-ua">PDF/UA</a> kompatibel ist und die Richtlinien des <a href="https://www.w3.org/Translations/WCAG20-de/">WCAG</a> einhält.

Die wichtigsten Grundlagen sind erreicht, wenn

<ul>
<li>das Dokument mit <a href="https://accessible-pdf.info/de/basics/uebersicht-der-pdf-tags/">semantischen PDF-Tags</a> versehen ist, welche die logische Dokumentstruktur und Lesereihenfolge erzeugen;</li>
<li>inhaltlich nicht relevante Objekte als Artefakt markiert sind (z.B. dekorative Elemente, wiederholende Kopf- und Fusszeilen);</li>
<li>Texte des Dokuments grundsätzlich als Text und nicht als Bild vorhanden sind (OCR Scannen);</li>
<li>Alternativtexte verwendet werden um Nicht-Text-Elemente (Bilder und Grafiken) zu beschreiben;</li>
<li>keine schwachen oder ungeeignete Farbkontraste verwendet werden.</li>
</ul>

<h2 id="hilfstechnologie">Hilfstechnologie</h2>

siehe <a href="#assistive-technologie">assistive Technologie</a>

<h2 id="lesereihenfolge">Lesereihenfolge</h2>

siehe <a href="#logische-lesereihenfolge">Logische Lesereihenfolge</a>

<h2 id="logische-lesereihenfolge">Logische Lesereihenfolge</h2>

Die logische Lesereihenfolge steht für die korrekte Reihenfolge, in welcher einzelne Inhaltsteile gelesen werden sollten damit das Dokument richtig verstanden wird. Ein gutes Praxisbeispiel ist ein mehrspaltiges Layout indem Zeile für Zeile innerhalb einer Spalte und nicht über die ganze Seite gelesen werden muss.

Hilfstechnologien (<a href="#assistive-technologie">AT</a>) benötigen PDF-<em><a href="#tags">Tags</a></em> nicht nur um die Bedeutung der enthaltenen Inhalte zu erkennen, sondern auch um die logische Lesereihenfolge abzuleiten. Leider nutzen nicht alle AT die Reihenfolge der <em>Tags</em> sondern entnehmen sie der visuellen Reihenfolge der Inhalte, welche in Acrobat im Navigationsfenster „Reihenfolge“ abgebildet wird. Diese visuelle Reihenfolge der logischen Lesereihenfolge anzupassen kann sehr zeitraubend sein und ist keine Anforderung von <a href="#pdf-ua">PDF/UA</a>.

<img src="https://accessible-pdf.info/wp/wp-content/uploads/acrobat-info-tags-reihenfolge.png" alt="Acrobat Infofenster: Im Tags-Fenster wird die logische Dokumentstruktur angezeigt, die von Hilfstechnologien für die Auswertung des Dokuments verwendet wird. Durch die logische Struktur wird die Lesereihenfolge festgelegt. Ausserdem werden Überschriften, Listen, Tabellen und andere Elemente identifiziert, die Benutzer von Hilfstechnologien verwenden können, um durch das Dokument zu navigieren. Um die Lesereihenfolge zu ändern, die von der Sprachausgabe von Adobe Acrobat und Adobe Acrobat Reader verwendet wird, verwenden Sie das Leserichtung-Fenster." />

Die logische Lesereihenfolge kann mithilfe des <em>Tag</em>-Strukturbaums in Acrobat, mit der „Screenreader-Vorschau“ in <a href="#pac">PAC</a>, mit dem Acrobat Plugin <a href="https://www.callassoftware.com/de/produkte/pdfgohtml">„pdfGoHTML“</a> oder einer <a href="#assistive-technologie">AT</a> überprüft werden.

<h2 id="manuelle-pruefung">manuelle Prüfung</h2>

Gemäss <a href="#matterhorn-protokoll">Matterhorn Protokoll</a> sind 47 Prüfpunkte durch einen Menschen zu prüfen. Diese können nicht durch eine Software, wie zum Beispiel <a href="#pac">PAC</a>, geprüft werden. Es kann höchstens eine Warnung ausgegeben werden.

<h2 id="matterhorn-protokoll">Matterhorn Protokoll</h2>

Das <a href="https://www.pdfa.org/publication/matterhorn-protokoll-1-02-deutsche-uebersetzung/?lang=de">Matterhorn Protokoll</a> ist ein Dokument der <a href="https://www.pdfa.org/pdf-association/?lang=de">PDF Association</a>, welches Softwareentwicklern und Prüfpersonen von Dokumenten hilft, ein PDF nach PDF/UA zu erstellen. Es beschreibt 136 Fehlerbedingungen, welche in 31 Prüfpunkte aufgeteilt sind. Von den 136 Fehlerbedingungen können 87 durch eine Software geprüft werden. 47 Fehlerbedingungen müssen manuell durch einen Menschen geprüft werden. 2 Fehlerbedingungen können in keiner dieser Kategorien zugeordnet werden. Das Matterhorn Protokoll wurde ins Deutsche übersetzt.

<h2 id="pac">PAC</h2>

<a href="http://www.access-for-all.ch/ch/pdf-werkstatt/pdf-accessibility-checker-pac.html">PAC</a> ist das umfangreichste und kostenlose Prüftool um PDFs auf dessen Zugänglichkeit zu testen. Es prüft ob ein Dokument den PDF/UA Standard erfüllt. Dazu werden die maschinell prüfbaren Punkte ausgewertet. Prüfpunkte, welche interaktiv getestet werden müssen, können mithilfe der enthaltenen Screenreader-Simulation geprüft werden. PAC wird durch die Schweizer Stiftung „Zugang für alle“ vertrieben. Sie kann zurzeit nur auf einem Windows Betriebssystem installiert werden.

<h2 id="pdf-ua">PDF/UA</h2>

PDF/UA ist der ISO-Standard 14289-1. Der Teil „UA“ steht für <em>Universal Accessibility</em>. Dieser Standard definiert Anforderungen an die Barrierefreiheit des PDF-Dokuments. Er richtet sich an Herstellerfirmen von Software und assistiver Technologie. Um ein Dokument nach PDF/UA zu prüfen, muss nicht die ISO-Dokumentation erworben werden. Mithilfe des kostenlosen <a href="#matterhorn-protokoll">Matterhorn Protokolls</a> lässt sich ein Dokument auf dessen PDF/UA-Kompatibilität prüfen.

PDF/UA baut auf die <a href="#wcag">WCAG</a> auf, widerspricht diesen Richtlinien nicht, behandelt aber nicht alle Regelungen der WCAG.

<h2 id="reihenfolge">Reihenfolge</h2>

siehe <a href="#logische-lesereihenfolge">Logische Lesereihenfolge</a>

<h2 id="tagged-pdf"><em>Tagged PDF</em></h2>

siehe <a href="#tags"><em>Tags</em></a>

<h2 id="tags"><em>Tags</em></h2>

Wird ein <em>Tagged PDF</em> hergestellt, also ein PDF das <em>Tags</em> enthält, legt man den Grundstein der Maschinenlesbarkeit und somit der Barrierefreiheit. Das alleinige Vorhandensein reicht jedoch nicht. Die <em>PDF-Tags</em> müssen auch die Semantik des Dokuments wiedergeben. Damit ist gemeint, dass beispielsweise eine Überschrift nicht nur visuell, anhand einer grösseren Schrift, sondern auch maschinell, anhand eines Überschriften-<em>Tags</em>, als solche erkennbar ist.

<a href="#pdf-ua">PDF/UA</a> gibt vor, dass sämtliche Elemente eines Dokuments entweder <em>getaggt</em> oder als Artefakt markiert werden müssen. Mehr zu Artefakten findest du in „<a href="https://accessible-pdf.info/de/basics/unwichtige-und-dekorative-inhalte-als-artefakt/">Unwichtige und dekorative Inhalte als Artefakt</a>“.

Die möglichen <em>PDF-Tags</em> (nach dem PDF 1.7 Standard) findest du in der „<a href="https://accessible-pdf.info/de/basics/uebersicht-der-pdf-tags/">Übersicht der <em>PDF-Tags</em></a>“. Die verfügbaren <em>PDF-Tags</em> sind den HTML-Tags teilweise sehr ähnlich.

<h2 id="wcag">WCAG</h2>

Die <a href="https://www.w3.org/TR/WCAG21/">WCAG</a>, kurz für Web Content Accessibility Guidelines, sind die Empfehlungen/Richtlinien der Gruppe <a href="https://www.w3.org/WAI/">WAI</a> (kurz für Web Accessibility Initiative), welche wiederum Bestandteil des <a href="https://www.w3.org/">W3C</a> (kurz für World Wide Web Consortium) ist. Diese Richtlinien wurden in verschiedene Sprachen übersetzt, unter anderem <a href="https://www.w3.org/Translations/WCAG20-de/">ins Deutsche</a>.

Die WCAG kann man als wichtigstes, allgemeines Regelwerk betrachten wenn es um die digitale und barrierefreie Kommunikation geht. PDF wird auch als mögliche Technologie der Webinhalte angesehen, weshalb die WCAG auch für PDF gilt.

Für die technische Umsetzung von barrierefreien PDFs werden jedoch nicht die WCAG, sondern der <a href="#pdf-ua">PDF/UA</a> Standard benötigt.

In vielen nationalen und internationalen Gesetzen zur digitalen Barrierefreiheit wird auf die WCAG verwiesen.

<h2 id="zugaenglichkeit">Zugänglichkeit</h2>

Ist eine weitere Übersetzung von des englischen Begriffs Accessibility. Siehe dazu <a href="#barrierefrei">barrierefreies PDF</a>