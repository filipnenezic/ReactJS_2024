import React, { useState } from 'react';
import PageContent from '../components/PageContent';
import '../App.css';

function HomePage() {
  const [showFriends, setShowFriends] = useState(false);

  const showFriendsList = () => {
    setShowFriends((e) => !e);
  };

  const friends = ['John117', 'Barrack Obama', 'Son Goku'];

  return (
    <PageContent>
      <div className="profile-container">
        <h1 className="text">Welcome Hi! I'm Batman</h1>
        <img
          src="images/aE8zZRG_460s.jpg"
          alt="Profile Picture"
          className="profile-image"
        />
        <p className="text">Part-time Gym-Bro, full-time coffee drinker</p>
        <div className="text">
          <p>10 achievements</p>
          <p>12 followers</p>
          <p>18,376 karma</p>
        </div>
        <button className="logout-button" onClick={showFriendsList}>
          {showFriends ? 'Hide Friends' : '3 Friends'}
        </button>
        {showFriends && (
          <ul className="text">
            {friends.map((friend, index) => (
              <li key={index}>{friend}</li>
            ))}
          </ul>
        )}
      </div>
    </PageContent>
  );
}

export default HomePage;
