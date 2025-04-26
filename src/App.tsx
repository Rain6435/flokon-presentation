import React, { useState } from 'react';
import { NavigationControls } from './components/shared/NavigationControls';
import { TitleSlide } from './components/slides/TitleSlide';
import { ChallengesSlide } from './components/slides/ChallengesSlide';
import { CurrentSuccessSlide } from './components/slides/CurrentSuccessSlide';
import { MarketOpportunitySlide } from './components/slides/MarketOpportunitySlide';
import { PlatformVisionSlide } from './components/slides/PlatformVisionSlide';
import { FeatureAdaptationSlide } from './components/slides/FeatureAdaptationSlide';
import { IntegrationBenefitsSlide } from './components/slides/IntegrationBenefitsSlide';
import { EmergencyResponseSlide } from './components/slides/EmergencyResponseSlide';
import { TechnicalArchitectureSlide } from './components/slides/TechnicalArchitectureSlide';
import { RevenueModelSlide } from './components/slides/RevenueModelSlide';
import { ImplementationPlanSlide } from './components/slides/ImplementationPlanSlide';
import { CompetitiveAdvantageSlide } from './components/slides/CompetitiveAdvantageSlide';
import { GatineauCaseStudySlide } from './components/slides/GatineauCaseStudySlide';
import { CallToActionSlide } from './components/slides/CallToActionSlide';
import { Slide } from './types';
import CalculateurROIMunicipal from './components/slides/CalculateurROIMunicipal';
import { Snowflake } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  
  const slides: Slide[] = [
    { component: <TitleSlide /> },
    { component: <ChallengesSlide /> },
    { component: <CurrentSuccessSlide /> },
    { component: <MarketOpportunitySlide /> },
    { component: <PlatformVisionSlide /> },
    { component: <FeatureAdaptationSlide /> },
    { component: <IntegrationBenefitsSlide /> },
    { component: <EmergencyResponseSlide /> },
    { component: <GatineauCaseStudySlide /> },
    { component: <CalculateurROIMunicipal /> },
    { component: <div className='flex flex-col gap-2'><CompetitiveAdvantageSlide /><TechnicalArchitectureSlide /></div> },
    { component: <RevenueModelSlide /> },
    { component: <ImplementationPlanSlide /> },
    { component: <CallToActionSlide /> },
  ];
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setSlideDirection('right');
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentSlide > 0) {
      setSlideDirection('left');
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex flex-col">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        {/* Floating snowflakes animation */}
        <div className="snowflakes-container">
          {[...Array(20)].map((_, i) => (
            <Snowflake 
              key={i} 
              className="snowflake absolute text-blue-200 opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                fontSize: `${Math.random() * 10 + 10}px`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="flex-1 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto p-4 md:p-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl min-h-[80vh] relative border border-white/20 flex items-center justify-center">
            <div 
              className="slide-container w-full h-full" 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                animation: `slideIn${slideDirection === 'right' ? 'FromRight' : 'FromLeft'} 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)`,
              }}
              key={currentSlide}
            >
              <div className="bg-white rounded-xl h-full shadow-inner flex items-center justify-center p-8">
                {slides[currentSlide].component}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <NavigationControls 
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={nextSlide}
        onPrev={prevSlide}
      />
      
      <style>{`
        @keyframes slideInFromRight {
          from {
            transform: translateX(100%) scale(0.8);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            transform: translateX(-100%) scale(0.8);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes snowfall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
        
        .snowflake {
          animation: snowfall linear infinite;
          animation-duration: 10s;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};

export default App;