import React, { useState } from 'react';
import { NavigationControls } from './components/shared/NavigationControls';
import { TitleSlide } from './components/slides/TitleSlide';
import { ChallengesSlide } from './components/slides/ChallengesSlide';
import { CurrentSuccessSlide } from './components/slides/CurrentSuccessSlide';
import { MarketOpportunitySlide } from './components/slides/MarketOpportunitySlide';
import { PlatformVisionSlide } from './components/slides/PlatformVisionSlide';
import { FeatureAdaptationSlide } from './components/slides/FeatureAdaptationSlide';
import { IntegrationBenefitsSlide } from './components/slides/IntegrationBenefitsSlide';
import { TechnicalArchitectureSlide } from './components/slides/TechnicalArchitectureSlide';
import { RevenueModelSlide } from './components/slides/RevenueModelSlide';
import { ImplementationPlanSlide } from './components/slides/ImplementationPlanSlide';
import { CompetitiveAdvantageSlide } from './components/slides/CompetitiveAdvantageSlide';
import { GatineauCaseStudySlide } from './components/slides/GatineauCaseStudySlide';
import { CallToActionSlide } from './components/slides/CallToActionSlide';
import { Slide } from './types';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides: Slide[] = [
    { component: <TitleSlide /> },
    { component: <ChallengesSlide /> },
    { component: <CurrentSuccessSlide /> },
    { component: <MarketOpportunitySlide /> },
    { component: <PlatformVisionSlide /> },
    { component: <FeatureAdaptationSlide /> },
    { component: <IntegrationBenefitsSlide /> },
    { component: <TechnicalArchitectureSlide /> },
    { component: <RevenueModelSlide /> },
    { component: <ImplementationPlanSlide /> },
    { component: <CompetitiveAdvantageSlide /> },
    { component: <GatineauCaseStudySlide /> },
    { component: <CallToActionSlide /> },
  ];
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-1 relative">
        <div className="max-w-6xl mx-auto p-8">
          <div className="bg-white rounded-lg shadow-lg p-8 min-h-[600px]">
            {slides[currentSlide].component}
          </div>
        </div>
      </div>
      
      <NavigationControls 
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={nextSlide}
        onPrev={prevSlide}
      />
    </div>
  );
};

export default App;