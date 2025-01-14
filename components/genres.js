import Genre from './genre';

export const GENRES = ['rap', 'pop', 'edm', 'r&b', 'rock', 'latin'];

export default function Genres() {
  return (
    <>
      {GENRES.map(genre => (
        <Genre key={genre} genre={genre} />
      ))}
    </>
  );
}
