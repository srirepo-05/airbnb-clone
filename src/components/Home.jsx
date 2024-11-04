import React from 'react';
import SearchBar from '../components/Searchbar';
import Card from '../components/Card';

const listings = [
  {
    id: 1,
    title: 'Cozy Beach House',
    description: 'Relaxing beach house with ocean views',
    image: 'https://picsum.photos/200/300',
    price: 200,
  },
  {
    id: 2,
    title: 'Modern City Apartment',
    description: 'Stylish apartment in the heart of the city',
    image: 'https://picsum.photos/200/301',
    price: 300,
  },
  {
    id: 3,
    title: 'Mountain Retreat',
    description: 'Secluded mountain retreat with scenic views',
    image: 'https://picsum.photos/200/302',
    price: 250,
  },
  {
    id: 4,
    title: 'Luxury Villa',
    description: 'Luxurious villa with private pool and garden',
    image: 'https://picsum.photos/200/303',
    price: 500,
  },
  // Add more listings...
];

function Maincontent() {
  return (
    <div className="home">
      <SearchBar />
      <div className="card-list">
        {listings.map((listing) => (
          <Card key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}

export default Maincontent;