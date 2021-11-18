import { useEffect, useCallback, useState } from 'react';
import { GameItemTypes } from '../../../services/data-types';
import { getFeaturedGames } from '../../../services/player';
import GameItem from '../../molecules/GameItem';

export default function FeaturedGame() {
  const [games, setGames] = useState([]);

  const getFeaturedGameList = useCallback(async () => {
    const data = await getFeaturedGames();
    setGames(data);
  }, [getFeaturedGames]);

  useEffect(() => {
    getFeaturedGameList();
  }, []);

  const API_IMAGE = process.env.NEXT_PUBLIC_IMAGE;
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          {' '}
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {games.map((game: GameItemTypes) => (
            <GameItem
              key={game._id}
              title={game.name}
              category={game.category.name}
              thumbnail={`${API_IMAGE}/${game.thumbnail}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
