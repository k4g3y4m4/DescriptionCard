import DescriptionCard from './Components/DescriptionCard';
import Personcard from './Components/Personcard';
import './App.css';


function App() {
  return (
    <div className="App">
      <Personcard FirstName="Mary" LastName="Jane" Age={25} HairColor="Red"/>
      <DescriptionCard FirstName ="Jane" LastName="Doe" Age={45} HairColor="Black"/>
      <DescriptionCard FirstName ="John" LastName="Smith" Age={88} HairColor="Brown"/>
      <DescriptionCard FirstName ="Millard" LastName="Fillmore" Age={50} HairColor="Brown"/>
      <DescriptionCard FirstName ="Mary" LastName="Smith" Age={62} HairColor="Brown"/>
    </div>
  );
}

export default App;
