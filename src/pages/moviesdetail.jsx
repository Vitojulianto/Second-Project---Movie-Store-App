import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [animeDetails, setAnimeDetails] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const animeResponse = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
        setAnimeDetails(animeResponse.data.data);

        // Mengambil data karakter
       
      } catch (error) {
        console.error('Error fetching anime details:', error);
      }
    };

    fetchAnimeDetails();
  }, [id]);

  if (!animeDetails) {
    return <div className="text-center text-white mt-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 via-pink-600 to-red-400 p-6">
      <div className="max-w-screen-lg mx-auto text-white">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
        >
          Go Back
        </button>

        <h1 className="text-4xl font-bold mb-6">{animeDetails?.title}</h1>

        <img
          src={animeDetails?.images?.jpg?.large_image_url}
          alt={animeDetails?.title}
          className="w-full h-[500px] object-contain rounded-lg mb-8"
          style={{
            maxWidth: '100%', 
            maxHeight: '500px',
          }}
        />

        {/* Sinopsis */}
        <div className="text-lg mb-6">
          <p><span className="font-semibold">Synopsis:</span> {animeDetails?.synopsis || 'No synopsis available.'}</p>
        </div>

        {/* Rating Anime */}
        <div className="text-lg mb-6">
          <p><span className="font-semibold">Score:</span> {animeDetails?.score || 'Not rated yet.'}</p>
        </div>

        {/* Trailer */}
        {animeDetails?.trailer?.youtube_id && (
          <div className="rounded-lg overflow-hidden mb-6">
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${animeDetails.trailer.youtube_id}`}
              title={animeDetails?.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default MovieDetails;
