import React, { useState, useEffect } from 'react';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';
import './ProgressBar.scss';
const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const StepWiseProgressBar = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(currentStep + 10);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <ProgressBar percent={currentStep} filledBackground="#00A594" transition="scale">
      {steps.map((step) => {
        return (
          <Step>
            {({ accomplished, index }) => (
              <div className={`indexedStep ${accomplished ? 'accomplished' : null}`}>
                {currentStep / 10 === index && (
                  <div style={{ position: 'absolute', top: '0' }}>saheb</div>
                )}
                {index + 1}
              </div>
            )}
          </Step>
        );
      })}
    </ProgressBar>
  );
};
export default StepWiseProgressBar;
