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
       Des={'Yes, definitely. At Hypha, we make sure to take care of the entire process of migration once you have shared your data. '} ID={'b3'}>
      </Faq>

      <Faq 
       Title={"How much time will it take to integrate Hypha into my clinic?"}
       Des={'Integrating Hypha to your clinic is super easy and does not require spending a lot of time. We offer instantaneous account activation to make it available without any hurdles at your workplace.'}>
       </Faq>

      <Faq
       Title={"Will my staff require training to use Hypha?"}
       Des={'No, they will not. We have designed the Hypha interface making it one of the easiest user interfaces so special training will not be needed for your staff. However, in case of any need for assistance, we are always ready to help you out.'}>
       </Faq>

       <Faq
       Title={"What if I open another clinic? Can I change my plan later on?"}
       Des={'Yes. All the plans can be upgraded or changed at any time as per your clinic’s requirement.'}>
       </Faq>

       <Faq
       Title={"Will I be able to add multiple branches for my clinic?"}
       Des={'Yes. We offer a combined dashboard analytics where you can add more clinics under the same organization account and get a consolidated overview as well. All the patient records will also be made available available across the different branches.'}>
       </Faq>

       <Faq
       Title={"What is your refunds policy?"}
       Des={'We have a questions asked asked refund policy for 100 days from the purchase date.'}>
       </Faq>

       <Faq
       Title={"Can I access Hypha from outside the clinic?"}
       Des={'Absolutely. Since our system is cloud based, you can access it anywhere anytime, and also across multiple devices.'}>
       </Faq>

       <Faq
       Title={"If there are any updates, will I have to purchase the software again?"}
       Des={'With Hypha, you’ll be able to freely upgrade to the newer version of your current software  for the existing features .'}>
       </Faq>

       <Faq
       Title={"How can I share the documents like prescription with patients?"}
       Des={'With Hypha you get access to easy communication. And you can share all patient document like prescriptions and reports through WhatsApp.'}>
       </Faq>
 
       <Faq
       Title={"Is there a customer support team I can contact for technical issues?"}
       Des={'For any assistance you can contact our customer support team @7907522144. They’re available from Mon-Sat between 9AM and 6PM.'}>
       </Faq>

    </div>
  );
}

export default App;
