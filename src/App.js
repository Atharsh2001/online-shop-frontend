import './App.css';
import Card from "./Seller/Components/Card";
import img1 from "./pexels-kubra-kısa-16814271.jpg"
function App() {
  return (
      <div className="App">
          <Card
              prodName="Sample Product"
              price="3566.87"
              shortDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
              imgUrl={img1}
          />
      </div>
  );
}

export default App;
