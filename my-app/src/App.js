import React, { useState } from 'react';
import DashboardSection from './components/DashboardSection';
import QueueSection from './components/QueueSection';

const App = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [isDraft, setIsDraft] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    console.log("Dropped files:", files);
  };

  const handleFileSelect = (event) => {
    const files = event.target.files;
    console.log("Selected files:", files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <h2 className="text-center text-xl font-bold mb-6">Content Creation Scheduler</h2>
      <div className="max-w-[80%] mx-auto">
        <DashboardSection />
        <QueueSection
          viewMode={viewMode}
          setViewMode={setViewMode}
          isDraft={isDraft}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
          handleFileSelect={handleFileSelect}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep} // Pass setCurrent
          nextStep={nextStep}
        />
      </div>
    </div>
  );
};

export default App;
