import React, { useState } from 'react'
import HomeMvideo from '../../components/HomeMvideo';
import Footer from '../../components/Footer';
import Calculator from '../../components/MvideoCalculator';
import LearnMore from '../../components/MVideoLearnMore';
import { Link } from "react-router-dom";


export default function Main() {
 React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [calculatorResult, setCalculatorResult] = useState('');
  const handleCalculatorSubmit = (resultText) => {
    setCalculatorResult(resultText);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <Link to='/'></Link>
      </div>
      <HomeMvideo />
      <Calculator onSubmitForm={handleCalculatorSubmit}/>
      <LearnMore calculatorResult={calculatorResult}/>
      <Footer />
    </>
  )
}
