console.log(danishInflationNumbersWithYear);
console.log(danishInflationNumbers);

const data = [danishInflationNumbers];
document.querySelector('button').addEventListener('click', () => {
    let delay = 300;
    data.forEach((dataPoint, index) => {
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();
        // play a tone based on data for the duration of a 12th note every second
        const timeBetweenNotesInSeconds = 0.2;
        synth.triggerAttackRelease(dataPoint * 110, "16n", now + (index * timeBetweenNotesInSeconds));
    });
});