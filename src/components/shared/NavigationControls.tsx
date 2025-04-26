import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NavigationControlsProps } from '../../types';

export const NavigationControls: React.FC<NavigationControlsProps> = ({ 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev 
}) => (
  <div className="bg-white border-t p-4">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <button
        onClick={onPrev}
        disabled={currentSlide === 0}
        className={`flex items-center px-4 py-2 rounded ${
          currentSlide === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'
        }`}
      >
        <ChevronLeft className="w-5 h-5 mr-2" />
        Précédent
      </button>
      
      <div className="text-center">
        <span className="text-gray-600">
          Slide {currentSlide + 1} sur {totalSlides}
        </span>
        <div className="flex justify-center mt-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className={`flex items-center px-4 py-2 rounded ${
          currentSlide === totalSlides - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'
        }`}
      >
        Suivant
        <ChevronRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  </div>
);