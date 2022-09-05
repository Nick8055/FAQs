import React, { useState, useEffect } from "react";
import './App.css';

let icon = "+";
let icon1 = "+";
let LoadButtonName = "Load More FAQs...";


const App = () => {

  const [isDisplayed, setIsDisplayed] = useState(true);

  function LoadMoreButton(){
    setIsDisplayed((current) => !current);
    LoadButtonName = isDisplayed ? "Show Less FAQs" : "Load More FAQs...";
  }

  const FaqHidden = ({Title, Des, ID}) => {
    const [isActive, setIsActive] = useState(true);

    const buttonFunction = () => {
      setIsActive((current) => !current);
      icon = isActive ? '-' : '+';
    }
    return(
      <div className='FaqContainer' id={ID} style={{display: isDisplayed ? "none" : ""}}>
        <button
         className="FaqButton"
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

  const Faq = ({Title, Des}) => {
    const [isActive1, setIsActive1] = useState(true);

    const buttonFunction1 = () => {
      setIsActive1((current) => !current);
      icon1 = isActive1 ? '-' : '+';
    }
    return(
      <div className='FaqContainer'>
        <button
         className="FaqButton"
         onClick={buttonFunction1}
         >
          <h1 className='icon'>{icon1}</h1>
          <h1 className='Title'>{Title}</h1>
        </button>
        <div className='Description' style={{display: isActive1 ? "none" : ""}}>
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

      <Faq
       Title={"How can Hypha help grow my clinic practice?"}
       Des={'With Hypha, you can grow organically by building strong patient relationships. We help you simplify the way you run your clinic and you can focus on delivering the best quality of care to your patients. Our customer relationship tools are designed to ensure strong patient retention and long lasting engagement.'}>
       </Faq>

      <Faq 
       Title={"Will my data be safe?"}
       Des={'Yes, your data will be absolutely safe here at Hypha. All our data servers are HIPAA compliant and you will have entire ownership of all your data.'}>
       </Faq>

      <Faq 
       Title={"Can I migrate from a different software to Hypha?"} 
       Des={'Yes, definitely. At Hypha, we make sure to take care of the entire process of migration once you have shared your data. '}>
      </Faq>

      <FaqHidden 
      ID={'4'}
       Title={"How much time will it take to integrate Hypha into my clinic?"}
       Des={'Integrating Hypha to your clinic is super easy and does not require spending a lot of time. We offer instantaneous account activation to make it available without any hurdles at your workplace.'}>
       </FaqHidden>


      <FaqHidden 
       Title={"Will my staff require training to use Hypha?"}
       Des={'No, they will not. We have designed the Hypha interface making it one of the easiest user interfaces so special training will not be needed for your staff. However, in case of any need for assistance, we are always ready to help you out.'}>
       </FaqHidden>

       <FaqHidden 
       Title={"What if I open another clinic? Can I change my plan later on?"}
       Des={'Yes. All the plans can be upgraded or changed at any time as per your clinic’s requirement.'}>
       </FaqHidden>

       <FaqHidden 
       Title={"Will I be able to add multiple branches for my clinic?"}
       Des={'Yes. We offer a combined dashboard analytics where you can add more clinics under the same organization account and get a consolidated overview as well. All the patient records will also be made available available across the different branches.'}>
       </FaqHidden>

       <FaqHidden 
       Title={"What is your refunds policy?"}
       Des={'We have a questions asked asked refund policy for 100 days from the purchase date.'}>
       </FaqHidden>

       <FaqHidden 
       Title={"Can I access Hypha from outside the clinic?"}
       Des={'Absolutely. Since our system is cloud based, you can access it anywhere anytime, and also across multiple devices.'}>
       </FaqHidden>

       <FaqHidden 
       Title={"If there are any updates, will I have to purchase the software again?"}
       Des={'With Hypha, you’ll be able to freely upgrade to the newer version of your current software  for the existing features .'}>
       </FaqHidden>

       <FaqHidden 
       Title={"How can I share the documents like prescription with patients?"}
       Des={'With Hypha you get access to easy communication. And you can share all patient document like prescriptions and reports through WhatsApp.'}>
       </FaqHidden>
 
       <FaqHidden 
       Title={"Is there a customer support team I can contact for technical issues?"}
       Des={'For any assistance you can contact our customer support team @7907522144. They’re available from Mon-Sat between 9AM and 6PM.'}>
       </FaqHidden>

       <button className="LoadButton" onClick={LoadMoreButton}><h1>{LoadButtonName}</h1></button>

    </div>
  );
}

export default App;
