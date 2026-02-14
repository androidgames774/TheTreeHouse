// app.js

class AudioScheduler {
    constructor() {
        this.audioQueue = [];
        this.isPlaying = false;
    }

    addToQueue(audioFile) {
        this.audioQueue.push(audioFile);
    }

    playNext() {
        if (this.audioQueue.length === 0) {
            this.isPlaying = false;
            return;
        }

        const audioFile = this.audioQueue.shift();
        this.isPlaying = true;
        const audio = new Audio(audioFile);
        audio.play();
        
        audio.onended = () => {
            this.isPlaying = false;
            this.playNext(); // Play the next audio file
        };
    }

    start() {
        if (!this.isPlaying) {
            this.playNext(); // Start playing the next audio file
        }
    }
}

const audioScheduler = new AudioScheduler();

// Example usage
audioScheduler.addToQueue('audio1.mp3');
audioScheduler.addToQueue('audio2.mp3');
audioScheduler.start();

export default audioScheduler;