class Song {
  constructor(private artist: string, private title: string) {
  }

  play() {
    console.log(`Playing ${this.title} by ${this.artist}`);
  }
}

class Jukebox {
  constructor(private songs: Song[]) {
  }

  play() {
    const song = this.getRandomSong();
    song.play();
  }

  private getRandomSong() {
    const songCount = this.songs.length;
    const songIndex = Math.floor(Math.random() * songCount);
    return this.songs[songIndex];
  }
}

const songs = [
  new Song('foo', 'bar'),
];

const jukebox = new Jukebox(songs);

jukebox.play();

class Playlist {
  private songs: Song[] = [];
  static maxSongCount: number = 30;
  
  constructor(public name: string) {
  }

  addSong(song: Song) {
    if (this.songs.length >= Playlist.maxSongCount) {
      throw new Error('Playlist is full');
    }
    this.songs.push(song);
  }
}

const playlist = new Playlist('My Playlist');

const name = playlist.name;

playlist.addSong(new Song('Therapy?', 'Hoge'));

const MaxSongs = Playlist.maxSongCount;
