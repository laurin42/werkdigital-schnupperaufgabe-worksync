# schnupperaufgabe_WorkSync

HomeOffice Zeiterfassungssystem (Arbeitstitel: WorkSync)
Dies ist ein einfaches System zur Erfassung von Arbeitszeiten im HomeOffice. Ziel ist es, Mitarbeitern eine unkomplizierte Möglichkeit zu geben, ihre Arbeitszeit zu starten und zu stoppen.

Das Projekt ist als Monorepo aufgebaut und trennt die Frontend- und Backend-Anwendung.

Tech Stack
Backend: Node.js, Express, Drizzle ORM, PostgreSQL (NeonDB)

Frontend: React, Vite, TypeScript

Projektstruktur
/
├── backend/ # Node.js (Express) Backend-Anwendung
├── frontend/ # React (Vite) Frontend-Anwendung
└── README.md

Lokales Setup & Inbetriebnahme
Voraussetzungen
Node.js (v18 oder neuer)

npm (oder ein anderer Paketmanager wie yarn, pnpm)

Anleitung
Repository klonen:

git clone <https://github.com/laurin42/WorkSync>
cd <WorkSync>

Backend Abhängigkeiten installieren:

cd backend
npm install

Frontend Abhängigkeiten installieren:

cd ../frontend
npm install

Erweiterter Start (via Docker) - (GEPLANT)

Umgebungsvariablen (.env) konfigurieren:
Sowohl im backend- als auch im frontend-Verzeichnis müssen .env-Dateien angelegt werden. Kopiere dazu die jeweiligen .env.example-Dateien und passe die Werte entsprechend an (z.B. den Datenbank-Verbindungsstring).

Entwicklungsserver starten:
Du benötigst zwei separate Terminals, um Frontend und Backend gleichzeitig auszuführen.

Backend Server:

cd backend
npm run dev

Frontend Server:

cd frontend
npm run dev

Die Anwendung ist nun für die Entwicklung bereit.
