import { ReactNode } from 'react';

export interface Slide {
  component: ReactNode;
}

export interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}

export interface ChallengeItem {
  icon: React.ElementType;
  title: string;
  desc: string;
}

export interface ChallengeCardProps {
  title: string;
  items: ChallengeItem[];
  color: 'red' | 'orange';
}

export interface SuccessCardProps {
  company: string;
  achievements: string[];
}

export interface ComparisonCardProps {
  title: string;
  items: string[];
  color: 'red' | 'green';
}

export interface TechCardProps {
  icon: React.ElementType;
  title: string;
  items: string[];
  color: 'blue' | 'green' | 'purple';
}

export interface RevenueSectionProps {
  title: string;
  items: string[];
}

export interface TimelineItemProps {
  phase: string;
  title: string;
  details: string[];
  color: 'blue' | 'green' | 'purple' | 'orange';
}

export interface CTACardProps {
  title: string;
  items: string[];
  type: 'numbered' | 'bullet';
  color: 'blue' | 'green';
}

export interface MetricCardProps {
  title: string;
  value: string;
  detail: string;
}