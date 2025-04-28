import React, { useState, useEffect, useContext } from 'react';

import Carousel from '../Fragments/Carousel';
import axios from 'axios';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import NavbarLog from '../Fragments/NavbarLog';


const Home = () => {
    //pakai addtocartnya
    const {addToCart} = useContext(CartContext);
    //buat functio untuk handle klik buynow yang isinya berisi data2 yang akan ditampilkan
    //berhubugan sama find tadi di context
    const handleBuyNow = (item) => {
        const anime = {
            id: item.mal_id,
            title: item.title,
            price: 100000,
            image: item.images.jpg.image_url
        }
        addToCart(anime)
    }
  const navigate = useNavigate();
  const [anime, setAnime] = useState([]);
  const baseUrl = "https://api.jikan.moe/v4/seasons/now";

  const fetchAnime = async () => {
    try {
      const response = await axios.get(baseUrl);
      console.log(response.data.data);
      setAnime(response.data.data);
    } catch (error) {
      console.error('Error fetching anime:', error);
    }
  };

  useEffect(() => {
    fetchAnime();
  }, []);

  const handleSeeDetail = (id) => {
    navigate(`/movies/${id}`);
  };

  const fixedPrice = 100000; // Harga tetap Rp.100.000

  return (
    <div className="bg-gradient-to-r from-purple-800 via-pink-600 to-red-400 min-h-screen">
      <NavbarLog />
      <Carousel />

      <div className="max-w-screen-xl mx-auto p-6 mt-8">
        <h1 className="text-3xl font-bold text-center text-white mb-10">Popular Anime This Season</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
                    onClick={() => handleSeeDetail(item.mal_id)}
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
