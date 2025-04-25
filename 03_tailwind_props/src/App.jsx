import "./App.css";
import Card from "./components/Card";
import giphyImages from "./components/imageData";

function App() {
  return (
    <div
      className="w-screen h-auto  flex flex-col justify-center gap-12
      items-center bg-slate-800 text-white py-9"
    >
      <h1 className="text-[50px]">Hello</h1>
      <div className="flex flex-row flex-wrap gap-12 justify-center items-center">
        {giphyImages.map((imaageObject,index) => {
          return (
            <Card key={index} text={imaageObject.text} imageLink={imaageObject.imageLink} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
