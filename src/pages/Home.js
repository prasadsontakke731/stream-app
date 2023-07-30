import React from 'react';

import Zoro from '../assets/zoro.png';
import oneTowThree from '../assets/123movies.png';
import Five from '../assets/5movie.png';
import A2z from '../assets/a2z.png';
import Bounce from '../assets/bounce.png';
import Filmrise from '../assets/filmrise.png';
import Fmovie from '../assets/fmovie.png';
import Himovie from '../assets/himovies.png';
import Peacock from '../assets/peacock.png';
import Solar from '../assets/solar.png';
import { Link } from 'react-router-dom';

const ZoroLink = 'https://zoroto.tv/home';
const oneTwoThreeLink = 'https://wattchmovies.top/watch/';
const fiveMovieLink = 'https://5moviess.com/';
const atozLink = 'https://www.azmovies.net/';
const bounceLink = 'https://www.bouncetv.com/';
const filmRiseLink = 'https://filmrise.com/';
const fMovieLink = 'https://fmoviesfree.ac/';
const hiMovieLink = 'https://himovies.sx/home';
const peacockLink = 'https://www.peacocktv.com/unavailable';
const solarLink = 'https://wwv.solarmovie.one/';

const Home = () => {
  const data = [
    {
      id: 1,
      name: '5Movie',
      img: Five,
      link: fiveMovieLink,
    },
    {
      id: 2,
      name: '123Movie',
      img: oneTowThree,
      link: oneTwoThreeLink,
    },
    {
      id: 3,
      name: 'a2zmovies',
      img: A2z,
      link: atozLink,
    },
    {
      id: 4,
      name: 'Bounce',
      img: Bounce,
      link: bounceLink,
    },
    {
      id: 5,
      name: 'Filmrise',
      img: Filmrise,
      link: filmRiseLink,
    },
    {
      id: 6,
      name: 'fmovies',
      img: Fmovie,
      link: fMovieLink,
    },
    {
      id: 7,
      name: 'Himovies',
      img: Himovie,
      link: hiMovieLink,
    },
    {
      id: 8,
      name: 'Peacock',
      img: Peacock,
      link: peacockLink,
    },
    {
      id: 9,
      name: 'solar movies',
      img: Solar,
      link: solarLink,
    },
    {
      id: 10,
      name: 'Zoro',
      img: Zoro,
      link: ZoroLink,
    },
  ];

  return (
    <div className="cards">
      {
        data.map((item) => {
          return (
            <div className='card' key={item.id}>
              <img src={item.img} className='card-img-top' alt='Image' />
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <Link to={item.link}> <button className='btn btn-danger'>
                  CLick Here...
                </button></Link>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default Home;
