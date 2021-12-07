import { useState, useEffect } from 'react';

export default function ChekoutItem() {
  const [gameItem, setGameItem] = useState({
    thumbnail: '',
    name: '',
    category: {
      name: '',
    },
  });

  useEffect(() => {
    const dataItem = localStorage.getItem('data-item');
    const item = JSON.parse(dataItem!);
    setGameItem(item);
  }, []);

  const IMG = process.env.NEXT_PUBLIC_IMAGE;

  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <img src={`${IMG}/${gameItem.thumbnail}`} className="img-fluid" alt="" />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">
          {gameItem.name}
        </p>
        <p className="color-palette-2 m-0">
          Category:
          {gameItem.category.name}
        </p>
      </div>
    </div>
  );
}
