import { Nav } from "@/components/templates/Nav";

interface ISong {
  id: string;
}

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

async function fetchRandomSongs() {
  const songs: ISong[] = [];
  const amount = 3;

  while (songs.length < amount) {
    try {
      const id = getRandomInt(0, 100000);
      const song = await fetch(`https://genius.com/api/songs/${id}`);

      if (song.ok) {
        const songJSON = await song.json();

        songs.push(songJSON.response.song);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return songs;
}

async function getData() {
  const songs = await fetchRandomSongs();

  return {
    songs,
  };
}

export default async function Home() {
  const { songs } = await getData();

  return (
    <div>
      <Nav />
      {songs.map((song) => (
        <li key={song.id}>{song.id}</li>
      ))}
    </div>
  );
}
