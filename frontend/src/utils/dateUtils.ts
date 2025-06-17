//MINUTE TO HH:MM FORMAT CHANGER (for Dashboard.tsx)
export function formatMinutesToHHMMSS(totalSecondsInput: number): string {
    if (totalSecondsInput === null || totalSecondsInput < 0) {
        return "00:00:00";
    }

    const totalSeconds = Math.floor(totalSecondsInput);


    const hours = Math.floor(totalSeconds / 3600);
    const remainingSeconds = totalSeconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedHours} Stunden, ${formattedMinutes }Minuten, ${formattedSeconds} Sekunden`;

}