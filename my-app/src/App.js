import React, { useState } from 'react';
import DashboardSection from './components/DashboardSection';
import QueueSection from './components/QueueSection';
import Navigation from './components/navigation';

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
    <div className="min-h-screen bg-blue-900 p-6">
      <div className="grid grid-cols-10 gap-4 max-w-full mx-auto h-full">
        {/* Left 10% Navigation */}
        <div className="col-span-1 h-full">
          <Navigation />
        </div>
        {/* Right 80% Main Content */}
        <div className="col-span-9">
          <DashboardSection />
          <QueueSection
            viewMode={viewMode}
            setViewMode={setViewMode}
            isDraft={isDraft}
            handleDrop={handleDrop}
            handleDragOver={handleDragOver}
            handleFileSelect={handleFileSelect}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            nextStep={nextStep}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
