import React from 'react';

const Hello = (props) => {

  const day = props.day.getDate();  // Day of the month (1-31)
  const month = props.day.getMonth() + 1;  // Month (0-11), add 1 to make it human-readable (1-12)
  const year = props.day.getFullYear();  // Full year (e.g., 2025)
    return (
      <div>
        <p>
  
          Hello {props.name}, the date is {month}/{day}/{year}
        </p>
      </div>
    )
  }
  
  const Footer = () => {
    return (
      <div align="bottom">
        site created by <a href='https://www.linkedin.com/in/elmer-villalobos/'>Elmer Villalobos</a>
      </div>
    )
  }

  const Homepage = (props) => {
    const name = 'Marly'
    const today = new Date();
    

    return (
      <div>
      <h1 className='hackerheader'>Welcome!</h1>
      <div className='hackerbody'>
        <Hello name={name} day={today}/>
        <p>
          I am really not sure what to make with this site, but I want to make something that lets me learn
          and have fun with developing. I want to be able to work on games, concepts, music, and any ideas that
          occur to me with this site. I plan to have guests, friends, and collaborators joining me and I can
          only hope that I give this project enough energy to even take off. I want something I can show to people.
          Something I WANT to show to people.
        </p>
        


      <Footer />
      </div>
      </div>
    );
  };

  export default Homepage;
