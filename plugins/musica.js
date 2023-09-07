class Musica{
    constructor(){
        this.notas = [
            {
                "C": 131, "C#": 138,
                "Db": 138, "D": 147, "D#": 155,
                "Eb": 155, "E": 165,
                "F": 174, "F#": 185,
                "Gb": 185, "G": 196, "G#": 208,
                "Ab": 208, "A": 220, "A#": 233,
                "Bb": 233, "B": 247,
            },
            {
                "C": 262, "C#": 277,
                "Db": 277, "D": 293, "D#": 311,
                "Eb": 311, "E": 329,
                "F": 349, "F#": 369,
                "Gb": 369, "G": 391, "G#": 415,
                "Ab": 415, "A": 440, "A#": 466,
                "Bb": 466, "B": 493,
            },
            {
                "C": 523, "C#": 554,
                "Db": 554, "D": 587, "D#": 622,
                "Eb": 622, "E": 659,
                "F": 698, "F#": 739,
                "Gb": 739, "G": 783, "G#": 830,
                "Ab": 830, "A": 880, "A#": 932,
                "Bb": 932, "B": 987,
            },
            {
                "C": 1047, "C#": 1109,
                "Db": 1109, "D": 1175, "D#": 1245,
                "Eb": 1245, "E": 1319,
                "F": 1397, "F#": 1479,
                "Gb": 1479, "G": 1567, "G#": 1661,
                "Ab": 1661, "A": 1760, "A#": 1864,
                "Bb": 1864, "B": 1975,
            },
            {
                "s": 0
            }
        ];
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();  
    }
    tocar(nota,t){
        let osc = this.ctx.createOscillator();
        let gainNode = this.ctx.createGain();
        gainNode.gain.value = 0.01; 
        // admite: sine, square, sawtooth, triangle
        osc.type = 'sawtooth'; 
        osc.frequency.value = nota;
        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + t);
    }
}

let musica = new Musica();