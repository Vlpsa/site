import React, { useState, useEffect } from 'react';

const Player = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Add mousemove event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  
  return (
    <div
      style={{
        position: 'absolute',
        left: `${mousePosition.x - 25}px`,  // Adjust by half of the width/height to center the player
        top: `${mousePosition.y - 25}px`,   // Adjust by half of the width/height to center the player
        width: '50px',  // Square size
        height: '50px', // Square size
        backgroundColor: 'red',
      }}
    ></div>
  );
}

const Draggin = () => {
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [isDialogVisible, setIsDialogVisible] = useState(true);
    const [isPlayerVisible, setIsPlayerVisible] = useState(false); 

    const startGame = () => {
        setIsDialogVisible(false); // Hide dialog when user clicks "Click to Continue"
        setIsPlayerVisible(true); // Show the player object 
    }

    return (
        <div style={{ position: 'relative', height: '100vh' }}>
          {/* Dialog Box */}
          {isDialogVisible && (
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              padding: '20px',  borderRadius: '10px',
              textAlign: 'center'
            }}>
              
              <button onClick={startGame} style={{
                padding: '80px 100px', border: 'solid black',
                cursor: 'pointer', fontFamily: "'Ubuntu Mono', monospace"
              }}>
                <h2>Click to Start_</h2>

              </button>
            </div>
          )}
    
          {/* Player Object */}
          {isPlayerVisible && <Player />}
        </div>
      );

}

export default Draggin;