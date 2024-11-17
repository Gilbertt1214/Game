import React from 'react';

function Card({image, title, description}) {
  return (
    <>
    <div className="max-w-sm w-[400px]  lg:max-w-full lg:flex shadow-lg rounded-lg overflow-hidden bg-white">
      <div className="flex items-center flex-col px-6 py-4">
        <img 
          className="w-[100px] h-[100px] rounded-lg mr-4" 
          src={image} 
          />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Card;
