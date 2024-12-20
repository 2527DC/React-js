import React, { useState } from 'react';

const Section3 = () => {
  const cardsData = [
    { id: 1, title: "Card 1", image: "public/2br4.jpg", description: "Description for card 1.", category: "Deluxe" },
    { id: 2, title: "Card 2", image: "public/2br2.jpg", description: "Description for card 2.", category: "Standard" },
    { id: 3, title: "Card 3", image: "public/2br1.jpg", description: "Description for card 3.", category: "Deluxe" },
    { id: 4, title: "Card 4", image: "public/3br1.jpg", description: "Description for card 4.", category: "Economy" },
    { id: 5, title: "Card 5", image: "public/2br1.jpg", description: "Description for card 5.", category: "Standard" },
    { id: 6, title: "Card 6", image: "public/2br1.jpg", description: "Description for card 5.", category: "Standard" },
    { id: 7, title: "Card 7", image: "public/2br1.jpg", description: "Description for card 5.", category: "Standard" },
    { id: 8, title: "Card 8", image: "public/2br1.jpg", description: "Description for card 5.", category: "Standard" },
    { id: 9, title: "Card 9", image: "public/2br1.jpg", description: "Description for card 5.", category: "Standard" },
  ];

  const [filter, setFilter] = useState('All');

  const filteredCards = filter === 'All' 
    ? cardsData 
    : cardsData.filter(card => card.category === filter);

  return (
    <div className="container-fluid mt-10">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Filter Cards</h2>
        <div className="flex space-x-4 mt-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setFilter('All')}>All</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setFilter('Deluxe')}>Deluxe</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setFilter('Standard')}>Standard</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setFilter('Economy')}>Economy</button>
        </div>
      </div>

      {/* Responsive grid with 3 columns on large screens, 2 on medium, and 1 on small screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1   ">
        {filteredCards.map((data) => (
          <div className="card m-2" key={data.id}>
            <div className="h-48 w-full overflow-hidden">
              <img src={data.image} className="object-cover h-full w-full" alt={data.title} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
