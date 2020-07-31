{
  interface Audio {
    play(): void;
  }

  class Song implements Audio {
    constructor(private artist: string, private title: string) {}

    play(): void {
      console.log(`Playing ${this.title} by ${this.artist}`);
    }

    static Comparer(a: Song, b: Song) {
      if (a.title === b.title) {
        return 0;
      } else {
        return a.title > b.title ? 1: -1;
      }
    }
  }

  class Playlist {
    constructor(public songs: Song[]) {}

    play() {
      const song = this.songs.pop();
      if (song !== undefined) {
        song.play();
      }
    }

    sort() {
      this.songs.sort(Song.Comparer);
    }
  }

  class RepeatingPlaylist extends Playlist {
    private songIndex = 0;

    // constructor(songs: Song[]) {
      // super(songs);
    // }

    play() {
      this.songs[this.songIndex].play();
      this.songIndex++;

      if (this.songIndex >= this.songs.length) {
        this.songIndex = 0;
      }
    }
  }
}
