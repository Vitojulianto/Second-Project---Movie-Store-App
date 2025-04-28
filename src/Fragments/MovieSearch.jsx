import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Button from '../components/Button/Button';

import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { CartContext } from '../contexts/CartContext';
import NavbarLog from './NavbarLog';

const Home = () => {
    const {addToCart} = useContext(CartContext)
    const handleBuyNow = (item) => {
        const anime = {
            id: item.mal_id,
            title: item.title,
            image: item.images.jpg.image_url,
            price: 100000
        }
        addToCart(anime)
    }
  const [anime, setAnime] = useState([]);
  const [input, setInput] = useState('');
  const baseUrl = "https://api.jikan.moe/v4";
  const navigate = useNavigate(); // Inisialisasi navigate

  const fetchAnime = async () => {
    try {
      const response = await axios.get(`${baseUrl}/anime?q=${input}`);
      const animeData = response.data.data;

      // Simpan hasil pencarian ke localStorage
      localStorage.setItem('animeSearchResults', JSON.stringify(animeData));
      
      setAnime(animeData); // Update state dengan data anime
    } catch (error) {
      console.error('Error fetching anime:', error);
    }
  };

  const handleSeeDetail = (id) => {
    navigate(`/movies/${id}`); // Redirect ke halaman detail anime
  };

  useEffect(() => {
    // Cek apakah ada data pencarian yang tersimpan di localStorage
    const storedAnime = localStorage.getItem('animeSearchResults');
    
    if (storedAnime) {
      setAnime(JSON.parse(storedAnime)); // Set data anime dari localStorage jika ada
    }
  }, []);

  const fixedPrice = 100000;
  return (
    <div className="bg-gradient-to-r from-purple-800 via-pink-600 to-red-400 min-h-screen">
      <NavbarLog />
      <div className="max-w-screen-xl mx-auto p-6 mt-8">
        <h1 className="text-3xl font-bold text-center text-white mb-10">Search Anime</h1>
        
        <div className="flex justify-center items-center mb-8">
          <div className="relative w-full max-w-md mr-4">
            <input
              type="text"
              placeholder="Search Anime..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-3 pl-10 pr-4 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <div className="absolute top-0 left-0 p-3 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M17 10a7 7 0 10-7 7 7 7 0 007-7z"
                />
              </svg>
            </div>
          </div>
          <Button
            onClick={fetchAnime}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition duration-300"
          >
            Search
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
          {anime.map((item) => (
            <div
            key={item.mal_id}
            className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              className="w-full h-60 object-cover"
              src={item.images.jpg.large_image_url}
              alt={item.title}
            />
            <div className="flex flex-col flex-grow p-4">
              
              {/* Title & Synopsis */}
              <div className="flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title.length > 30 ? item.title.substring(0, 30) + '...' : item.title}
                </h2>
                <p className="text-sm text-gray-600 mb-2">
                  {item.synopsis ? item.synopsis.substring(0, 100) + '...' : 'No synopsis available.'}
                </p>
              </div>
          
              {/* Harga + Buttons */}
              <div className="mt-4">
                <p className="text-green-600 font-bold text-lg mb-3">
                  Rp. {fixedPrice.toLocaleString('id-ID')}
                </p>
                <div className="flex space-x-2">
                  <Button
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg transition duration-300 text-sm"
                    onClick={() => handleSeeDetail(item.mal_id)} // Fungsi untuk redirect
                  >
                    See Details
                  </Button>
                  <Button
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg transition duration-300 text-sm"
                    onClick={()=>handleBuyNow(item)}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
          
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
