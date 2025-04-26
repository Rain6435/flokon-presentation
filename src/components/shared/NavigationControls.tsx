import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NavigationControlsProps } from '../../types';

export const NavigationControls: React.FC<NavigationControlsProps> = ({ 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev 
}) => (
  <div className="bg-black/30 backdrop-blur-md border-t border-white/10 p-4 z-20">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <button
        onClick={onPrev}
        disabled={currentSlide === 0}
        className={`flex items-center px-6 py-3 rounded-lg transform transition-all duration-200 ${
          currentSlide === 0 
            ? 'text-gray-500 cursor-not-allowed' 
            : 'text-white hover:bg-white/10 hover:scale-105 active:scale-95'
        }`}
      >
        <ChevronLeft className="w-5 h-5 mr-2" />
        <span className="font-medium">Précédent</span>
      </button>
      
      <div className="text-center">
        <span className="text-white/80 font-medium">
          {currentSlide + 1} / {totalSlides}
        </span>
        <div className="flex justify-center mt-2 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 h-2 bg-blue-400 rounded-full' 
                  : 'w-2 h-2 bg-white/30 rounded-full hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className={`flex items-center px-6 py-3 rounded-lg transform transition-all duration-200 ${
          currentSlide === totalSlides - 1 
            ? 'text-gray-500 cursor-not-allowed' 
            : 'text-white hover:bg-white/10 hover:scale-105 active:scale-95'
        }`}
      >
        <span className="font-medium">Suivant</span>
        <ChevronRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  </div>
);