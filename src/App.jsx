import Card from './components/Card.jsx'
import { profiles } from './profiles.js';

function App() {

  return (
    <div className="flex-container">
      {profiles.map((profile) => (
        <Card key={profile.id} name={profile.name} title={profile.title} bio={profile.bio} />
      ))}
    </div>

  );
}

export default App;
