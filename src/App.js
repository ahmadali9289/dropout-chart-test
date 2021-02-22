import logo from './logo.svg';
import './App.scss';
import data from './data/data';
import Card from './components/Card';

function App() {
  console.log('Data ==>', data);
  const transformedData = Object.keys(data).map((key) => {
    return {
      name: key,
      ...data[key]
    }
  })

  return (
    <div className="App">
          <Card tree={transformedData}/>
    </div>
  );
}

export default App;
