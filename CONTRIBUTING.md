*[[DE] Die deutsche Übersetzung findest du weiter unten.](#de)*

# Contributors Guide

Please read and understand the contribution guide before writing an issue or pull request.

## Etiquette

This project is licensed under [Creative Commons BY 4.0](LICENSE). The maintainers give their free time to create and maintain the content held within. It would be extremely unfair for them to suffer abuse or anger for their hard work. Please be considerate towards maintainers when raising issues or presenting pull requests.

It's the duty of the maintainer to ensure that all submissions to the project are of sufficient quality to benefit the project. All people have different skillsets, strengths and weaknesses. Respect the maintainer's decision and do not be upset or abusive if your submission is not used.

## Issue or Pull Request

Before filing an issue or submitting a pull request please check if the question, change or request doesn't exist already.

### Issue

#### When should you write an issue?

- if you have a question about [accessible-pdf.info](https://accessible-pdf.info/en/) and its content
- if you want to give a feedback
- if you want a bigger change to discuss first

### Pull Request

#### When should you submit a pull request?

- if you want to submit a change of an existing post
- if you have translated a tutorial from German to English or the other way around
- if you want to submit a new post

#### Metadata

Every post needs proper metadata at the beginning of the file. You'll find more information about this on [README.md](README.md).

<h4 id="en-pull-request-first-time">How to submit a pull request the first time? (The “Github web interface” way)</h4>

Hint 1: Contribution is only possible with a [Github account](https://github.com/join).

Hint 2: The following animations show another repository. To show how it works, I had to use a repo I do not own.

1. **Fork** this repository (`pixelstrolch/accessible-pdf`). This means you copy the project to your own account. [See annex 1](#annex1)
2. Create a **new branch** from the `master` branch. This step keeps the `master` branch clean and makes it easier to keep your repository up to date. [See annex 2](#annex2)
3. Check the branch your in and open the file you want to change. Click on the *edit* icon. Make the changes you wish and save – or in Git language – **commit** your changes. [See annex 3](#annex3)
4. Create a **pull request** by clicking on the provided tab and the green button *New pull request*. Now you define which repos and branches should be compared with each other. The only thing you probably need to do, is to choose the branch you created in step 2. Great, hit *Create pull request* and you successfully made your change request. [See annex 4](#annex4)
5. If your pull request will be merged (accepted), you can delete the branch you created.

#### How to submit a pull request the next time? (The “Github web interface” way)

Before you change anything you should update your `master` so that it has the official status. If your branch is behind, it might cause conflicts.

The way of updating your `master` branch is ([See annex 5](#annex5)):

1. create a pull request. It should compare the two `master` branches. 
2. click on the link *switching the base*.
3. it lists all commits which have been merged in the meantime
4. push the green button *Create pull request*
5. push the green button *Merge pull request*
6. push the green button *Confirm merge*
7. Your `master` is now up to date and you can continue with step 2 in “[How to submit a pull request the first time?](#en-pull-request-first-time)”

***

<h1 id="de">Regeln für die Mithilfe</h1>

Bitte lese und akzeptiere die folgenden „Mitmachregeln“ bevor du ein *Issue* oder *Pull Request* erstellst.

## Anstandsregeln

Dieses Projekt ist lizensiert unter [Creative Commons BY 4.0](LICENSE). Die ProjektverwalterInnen geben ihre Freizeit um die enthaltenen Inhalte zu erstellen und zu pflegen. Es wäre extrem unfair wenn sie für ihre harte Arbeit wegen Beschimpfungen und Zorn leiden müssen. Bitte sei rücksichtsvoll zu den ProjektverwalterInnen wenn du ein Issue oder Pull Request einreichst.

Es ist die Pflicht der ProjektverwalterInnen sicherzustellen, dass alle Projektanträge qualitativ ausreichend sind. Alle Leute haben verschiedene Fähigkeiten, Stärken und Schwächen. Respektiere die Entscheidung der ProjektverwalterInnen und sei nicht verärgert oder beleidigend wenn dein Projektantrag nicht angenommen wird.

## *Issue* oder *Pull Request*

Bevor ein *Issue* geschrieben oder ein *Pull Request* eingereicht wird, prüfe bitte ob ein solches Anliegen nicht bereits existiert.

### *Issue*

#### Wann solltest du ein *Issue* schreiben?

- wenn du eine Frage zu [accessible-pdf.info](https://accessible-pdf.info/de/) und dessen Inhalte hast
- wenn du ein Feedback geben möchtest
- wenn du eine grössere Änderung einreichen aber vorher besprechen möchtest

### *Pull Request*

#### Wann solltest du einen *Pull Request* einreichen?

- wenn du eine Änderung eines existierenden Beitrags einreichen möchtest
- wenn du eine Übersetzung von Deutsch in Englisch oder umgekehrt gemacht hast
- wenn du einen neuen Beitrag einreichen möchtest

#### Metadaten

Jeder Beitrag benötigt passende Metadaten am Anfang der Datei. Du findest mehr Informationen in der [README.md](README.md) Datei.

<h4 id="de-pull-request-first-time">Wie kann ein *Pull Request* das erste Mal eingereicht werden? (Weg über die Github Website)</h4>

Hinweis 1: Die Mithilfe ist nur mit einem [Github Konto](https://github.com/join) möglich.

Hinweis 2: Die folgenden Animationen zeigen ein anderes *Repository*. Um zu zeigen wie es funktioniert, musste ich ein anderes verwenden, welches ich nicht besitze.

1. ***Fork*** dieses *Repository* ([pixelstrolch/accessible-pdf](https://github.com/pixelstrolch/accessible-pdf)). Das bedeutet, dass du eine Kopie des Projekts für dein Konto anlegst. [(Siehe Annex 1)](#annex1) 
2. Erstelle einen **neuen *Branch*** vom `master` *Branch* aus. Dieser Schritt hält den `master` *Branch* sauber und macht es einfacher dein *Repository* zu aktualisieren. [(Siehe Annex 2)](#annex2)
3. Prüfe in welchem *Branch* du dich befindest und öffne die Datei, die du ändern möchtest. Klicke auf *Bearbeiten* (Bleistiftsymbol). Mache die Änderungen, die du wünscht und speichere – oder in der Git Sprache – ***Commit(te)*** deine Änderungen. [(Siehe Annex 3)](#annex3)
4. Erstelle einen ***Pull Request*** indem du auf den gleichnamigen Tab und dann auf den grünen Knopf *New pull request* klickst. Jetzt definierst du welche *Repos* miteinander verglichen werden sollen. Normalerweise musst du nur noch dein *Branch*, den du in Schritt 2 angelegt hast, auswählen. Super, drücke *Create pull request* und du hast erfolgreich deine Änderung eingereicht. [(Siehe Annex 4)](#annex4)
5. Wenn dein *Pull Request* akzeptiert wird (merged), kannst du dein erstellter *Branch* löschen.

#### Wie kann ein *Pull Request* das nächste Mal eingereicht werden? (Weg über die Github Website)

Bevor du etwas änderst, solltest du dein `master` *Branch* aktualisieren, so dass dieser auf dem offiziellen Stand ist. Wenn dein `master` *Branch* veraltet ist, kann es zu Konflikten kommen.

Wie der `master` *Branch* aktualisiert wird [(siehe Annex 5)](#annex5):

1. Erstelle einen *Pull Request*. Es sollten die beiden `master` *Branches* vergleichen.
2. Klicke auf den Link *switching the base*
3. Jetzt werden alle Commits gelistet, welche in der Zwischenzeit im originalen *Repository* hinzugekommen sind.
4. Drücke den grünen Knopf *Create pull request*
5. Drücke den grünen Knopf *Merge pull request*
6. Drücke den grünen Knopf *Confirm merge*   
7. Dein `master` ist nun auf dem aktuellen Stand und du kannst mit Schritt 2 in „[Wie kann ein *Pull Request* das erste Mal eingereicht werden?](#de-pull-request-first-time)“ fortfahren.

<strong id="annex1">Annex 1: Github fork</strong>
![Animation how to fork a Github repository.](assets/github_fork.gif)

<strong id="annex2">Annex 2: Github branch</strong>
![Animation how to create a new branch on Github.](assets/github_branch.gif)

<strong id="annex3">Annex 3: Github commit</strong>
![Animation how to commit changes on Github.](assets/github_commit.gif)

<strong id="annex4">Annex 4: Github pull request</strong>
![Animation how to submit a Pull Request on Github.](assets/github_pullRequest.gif)

<strong id="annex5">Annex 5: Github update `master`</strong>
![Animation how to update your master branch on Github.](assets/github_pullRequest_updateMaster.gif)