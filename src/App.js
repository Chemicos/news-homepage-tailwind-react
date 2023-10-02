import ExtraNews from "./components/ExtraNews";
import Navigation from "./components/Navigation";
import News from "./components/News";

export default function App() {
  return (
    <main className='min-h-screen flex flex-col justify-center items-center pt-8 md:p-0'>
      <div className='px-4 md:px-0  md:max-w-correct-width'>
        <Navigation />   
        <News /> 
        <ExtraNews />   
      </div>
    </main>
  );
}