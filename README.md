# werkdigital-schnupperaufgabe-worksync

## HomeOffice Zeiterfassungssystem (Arbeitstitel: WorkSync)
Dies ist ein einfaches System zur **Erfassung von Arbeitszeiten** im HomeOffice. Ziel ist es, Mitarbeitern eine *unkomplizierte* Möglichkeit zu geben, ihre Arbeitszeit zu starten und zu stoppen.

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
## Lokales Setup & Inbetriebnahme
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
## Erweiterter Start (via Docker) - (GEPLANT)

## Umgebungsvariablen (.env) konfigurieren:
Sowohl im backend- als auch im frontend-Verzeichnis **müssen** .env-Dateien angelegt werden. Kopiere dazu die jeweiligen **.env.example**-Dateien und passe die Werte entsprechend an (z.B. den Datenbank-Verbindungsstring).

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
Die Anwendung ist nun für die Entwicklung bereit.
