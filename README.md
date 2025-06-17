# werkdigital-schnupperaufgabe-worksync

# Status und Umsetzung offener Punkte

Die Anwendung ist nun für die Entwicklung bereit.

Die Kernfunktionalität der Zeiterfassung für das Homeoffice ist umgesetzt.

Allerdings sind folgende Punkte aufgrund der begrenzten, angesetzten Zeit (6-8 Stunden) in dieser Version noch nicht umgesetzt worden:

- Email-Versand an das Personalbüro bei beenden einer Homeoffice Session
  -> für Demo Zwecke hätte ich das via Ethereal und Nodemailer aufgesetzt. Beim klicken auf den Stop-button hätte ein Ethereal "Fake"Smtp Mail Sever via Nodemailer eine E-mail an die Adresse des Superusers geschickt. Im realen Produktionsfall hätte ich auf einen externen Maildienst(Brevo o.ä.) und eigener Maildomain, um CORS probleme zu vermeiden eine Automation eingerichtet - welche immer dann reagiert, wenn ein Mitarbeiter auf den Stop-button drückt
- Übersichts/Kalenderansicht: Eine allgemeine Übersicht der erfassten Arbeitszeiten für den Nutzer und/oder Admins
  -> Die Basis dafür ist in der Datenbank vorhanden (work_sessions, start_time, end_time), es wäre verhältnismäßig schnell umgesetzt (react-datepicker für Kalenderansicht und Auswahl des Zeitraums, einfache scrollbare Liste, oder Flatlist, für die Anzeige der Homeoffice Sessions mit den jeweiligen Zeiten)

Ich habe mich darauf konzentriert, eine saubere Grundstruktur des Projektes mit Freiraum zum wachsen anzulegen. Es war mir auch wichtig, den Fokus auf eine funktionierende Basisarchitektur mit Docker Compose auf die Beine zu stellen, um eine reibungslose Demo und Startumgebung zu schaffen, die die Logik hinter dem Projekt schnell und einfach aufzeigt.

Vielen Dank für die Aufgabe, es hat mir viel Spaß gemacht!

## HomeOffice Zeiterfassungssystem (Arbeitstitel: WorkSync)

Dies ist ein einfaches System zur **Erfassung von Arbeitszeiten** im HomeOffice. Ziel ist es, Mitarbeitern eine _unkomplizierte_ Möglichkeit zu geben, ihre Arbeitszeit zu starten und zu stoppen.

Das Projekt ist als **Monorepo** aufgebaut und trennt die Frontend- und Backend-Anwendung.

## Tech Stack

**Backend**: Node.js, Express, Drizzle ORM, PostgreSQL (Docker)

**Frontend**: React, Vite, TypeScript

## Projektstruktur

<pre><code>
/
├── backend/ # Node.js (Express) Backend-Anwendung
├── frontend/ # React (Vite) Frontend-Anwendung
└── README.md
</code>
</pre>

## Start via Docker

Alle `docker compose`-Befehle müssen aus dem **Projekt-Root-Verzeichnis** (werkdigital-schnupperaufgabe-worksync) ausgeführt werden, da sich dort die `docker-compose.yaml` und die `.env`-Datei befinden.

Für den schnellen Start ist eine .env-Datei mit bereits im Projekt-Root-enthalten.
Sie muss nicht erstellt oder angepasst werden -
Dies ist nur für Entwicklungs und Demozwecke gedacht!

### Repository klonen

<pre><code>
git clone <https://github.com/laurin42/WorkSync>
cd werkdigital-schnupperaufgabe-worksync
</code></pre>

### Alte Container und Datenbank-Volumes entfernen

<pre><code>
cd werkdigital-schnupperaufgabe-worksync
docker compose down --volumes --remove-orphans
</code></pre>

### Docker Images bauen und Dienste starten

<pre><code>
docker compose up --build
</code></pre>

### Datenbank-Schema anwenden

In einem neuem Terminal:

<pre><code>
cd werkdigital-schnupperaufgabe-worksync
docker compose exec backend npm run db:push
</code></pre>

## Initiale Daten seeden

<pre><code>
docker compose exec backend npm run seed
</code></pre>

## Drizzle Studio für Datenbankansicht öffnen

In einem neuen Terminal:

<pre><code>
cd werkdigital-schnupperaufgabe-worksync/backend
npm install drizzle-kit
npx drizzle-kit studio
</code></pre>

## Anwendung im Browser öffnen

http://localhost:8080

## Einloggen mit Superuser

E-Mail: demo@worksync.de
Passwort: workSyncDemo098123!

<pre><code>
#SUPERUSER FOR LOGIN 
SUPERUSER_EMAIL=demo@worksync.de
SUPERUSER_PASS=workSyncDemo098123!
</code></pre>

## Manuelles Setup

### Voraussetzungen

Node.js (v18 oder neuer)

npm (oder ein anderer Paketmanager wie yarn, pnpm)

## Anleitung

Repository klonen:

<pre><code>
git clone <https://github.com/laurin42/WorkSync>
cd werkdigital-schnupperaufgabe-worksync
</code></pre>

## Backend Abhängigkeiten installieren:

<pre><code>
cd backend
npm install
</code></pre>

## Frontend Abhängigkeiten installieren:

<pre><code>
cd ../frontend
npm install
</code></pre>

## Umgebungsvariablen (.env) konfigurieren:

Es **müssen** .env-Dateien angelegt werden. Kopiere dazu die jeweiligen **.env.example**-Dateien und passe die Werte entsprechend an (z.B. den Datenbank-Verbindungsstring).

## Entwicklungsserver starten:

Du benötigst zwei separate Terminals, um Frontend und Backend gleichzeitig auszuführen.

## Backend Server:

<pre><code>
cd backend
npm run dev
</code></pre>

## Frontend Server:

<pre><code>
cd frontend
npm run dev
</code></pre>
