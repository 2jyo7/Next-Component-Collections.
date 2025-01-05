import React from "react";

const QuoteTypo = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-3xl mx-auto">
      <blockquote className="text-xl italic font-semibold text-gray-800 border-l-4 border-blue-500 pl-4">
        {`I will be the leader of a company that ends up being worth billions of
  dollars, because I got the answers. I understand culture. I am the
  nucleus. I think that’s a responsibility that I have, to push
  possibilities, to show people, this is the level that things could be
  at.`}
      </blockquote>
      <cite className="block mt-4 text-right text-lg text-gray-600">
        — Kanye West, <span className="font-medium">Musician</span>
      </cite>
    </div>
  );
};

export default QuoteTypo;
