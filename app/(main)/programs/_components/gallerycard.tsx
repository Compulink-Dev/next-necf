import React from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const GalleryCard: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="relative w-80 h-80 overflow-hidden border border-x-4 border-green-600">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45 hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="ml-10">
            <h3 className="text-2xl font-bold text-green-500">{title}</h3>
            <p className="mt-2">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
