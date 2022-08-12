import { useState } from 'react';
import './App.css';

let icon = "+";

const App = () => {

  const Faq = ({Title, Des}) => {
    const [isActive, setIsActive] = useState(true);

    const buttonFunction = () => {
      setIsActive((current) => !current);
      icon = isActive ? '-' : '+';
    }
    return(
      <div className='FaqContainer'>
        <button
         onClick={buttonFunction}
         >
          <h1 className='icon'>{icon}</h1>
          <h1 className='Title'>{Title}</h1>
        </button>
        <div className='Description' style={{display: isActive ? "none" : ""}}>
          {Des}
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className='Heading'>
       <h1>FAQs</h1>
      </div>
      <Faq Title={"First of all, what does the word 'Hypha' mean?"} Des={'Dude, honestly speaking, even I dont know the answer to that.'} ></Faq>
      <Faq Title={"Why do these guys even exist in the first place?"} Des={'To make Caaash of course, its business baby..'}></Faq>
      <Faq Title={"Can I make money by literally doing nothing and be lazy?"} Des={'In your damn dreams. Join Hypha, and we will kick your ****'} ID={'b3'}></Faq>
      <Faq Title={"How can i get information about patient"} Des={'Use your head and find out yourself..'}></Faq>
      <Faq Title={"How can i get information about patient"} Des={'Dont ask the same damn question again you DONUT.'}></Faq>

    </div>
  );
}

export default App;
