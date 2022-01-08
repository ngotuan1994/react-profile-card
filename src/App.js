
import './App.css';
import ProfileCard from './component/profile-card/profile-card.component';
import { BrowserRouter } from "react-router-dom";
const Profile =
  [
    { name: 'Tuan Ngo', role: 'Software Engineer' },
    { name: 'Eric Ngo', role: 'Front-End Developer' },
    { name: 'Example Ngo', role: 'Software Engineer' }];
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        {Profile.map(element => {
          return <ProfileCard name={element.name} role={element.role} {...element} ></ProfileCard>
        })}

      </BrowserRouter>
    </div>

  );
}

export default App;
