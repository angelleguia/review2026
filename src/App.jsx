import Card from './components/Card.jsx';
import { profiles } from './profiles.js';
import { useState, useEffect } from 'react';

function App() {

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/profiles')
        //  .then(res => res.json())
        //  .then(data => console.log(data))

        const data = await response.json();

        setProfiles(data.profiles)
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    }

    fetchProfiles();
  }, [])


  return (
    <div className="flex-container">
      {profiles.map((profile) => (
        <Card key={profile._id} name={profile.name} title={profile.title} bio={profile.bio} />
      ))}
    </div>
  );
}

export default App;
