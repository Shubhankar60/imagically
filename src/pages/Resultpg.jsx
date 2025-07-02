import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Resultpg = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate image generation after 2 seconds
    setTimeout(() => {
      // Replace with API-generated image later
      setImage(assets.sample_img_1); 
      setIsImageLoaded(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <form
      className="flex flex-col min-h-[90vh] justify-center items-center px-4"
      onSubmit={handleSubmit}
    >
      {/* Image Section */}
      <div>
        <div className="relative">
          <img src={image} alt="Generated Result" className="max-w-sm rounded" />
          <span className="absolute bottom-0 left-0 h-1 bg-blue-500 w-full transition-all duration-[10s]" />
        </div>
        {loading && <p className="text-center text-sm mt-2">Loading.....</p>}
      </div>

      {/* Input Form */}
      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-1 mt-10 rounded-full">
          <input
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent outline-none px-4 placeholder-white text-white"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            type="submit"
            className="bg-zinc-900 px-6 sm:px-10 py-3 rounded-full hover:bg-zinc-800 transition"
          >
            Generate
          </button>
        </div>
      )}

      {/* Action Buttons */}
      {isImageLoaded && (
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <button
            type="button"
            className="border border-zinc-900 text-black px-6 sm:px-8 py-3 rounded-full hover:bg-zinc-900 hover:text-white transition"
            onClick={() => setIsImageLoaded(false)}
          >
            Generate Another
          </button>
          <a
            href={image}
            download
            className="bg-zinc-900 text-white px-6 sm:px-10 py-3 rounded-full hover:bg-zinc-800 transition"
          >
            Download
          </a>
        </div>
      )}
    </form>
  );
};

export default Resultpg;
