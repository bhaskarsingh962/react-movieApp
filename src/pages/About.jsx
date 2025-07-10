import React from 'react';
import team from '../../public/team.jpeg';
function About() {
  return (
    <div className=" py-12 bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center py-20">
      <h1 className="text-4xl font-bold mb-6">About Movie Duniya</h1>
      <p className="text-lg max-w-2xl text-center mb-6">
        Welcome to Movie Duniya! We are passionate about movies and dedicated to bringing you the latest and greatest in the world of cinema. 
        Our platform provides comprehensive information on various films, including reviews, ratings, and recommendations.
      </p>
      <img 
        src={team} // Replace with a relevant image URL
        alt="About Movie Duniya"
        className="w-full max-w-3xl  h-96 rounded-lg shadow-lg mb-6"
      />
      <p className="text-lg max-w-2xl text-center mb-6">
        Whether you are a casual viewer or a hardcore film enthusiast, Movie Duniya is your go-to source for everything related to movies. 
        Join us on this cinematic journey and explore the world of films with us!
      </p>
      <p className="text-lg max-w-2xl text-center">
        Thank you for being a part of our community!
      </p>
    </div>
  );
}

export default About;
