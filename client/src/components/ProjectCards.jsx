'use client';
// pages/index.js
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  // Sample data - you can add as many cards as needed
  const [cards, setCards] = useState([
    { 
      id: 0, 
      title: "Avinya- A tech fest website",
      description: "अVINYA, The Annual Tech Fest of GTB4CEC, is a distinguished event celebrating innovation, knowledge, and creativity. Derived from Sanskrit, अVINYA means 'Innovation,' embodying the fest's mission to offer a platform for students to engage with emerging technologies through a range of exciting events.",
      image: "/avinya.png",
      githubLink:"https://github.com/Aditya-tech1/Avinya" 
    },
    { 
      id: 1, 
      title: "Portfolio Project",
      description: "My name is Aditya Roy, and I am currently pursuing a BTech in Computer Science Engineering at GTB4CEC. I have been deeply passionate about web development and have worked diligently to enhance my skills in this field.",
      image: "/portfolio.png",
      githubLink:"https://github.com/Aditya-tech1/Adityaroy" 
    },
    
    { 
      id: 2, 
      title: "Blog Website",
      description: "Blog Editor is a simple, user-friendly blog editor that allows users to create, edit, and publish blog posts. It is built with React and Tailwind CSS, and it uses the JSONPlaceholder API to fetch and display blog posts.",
      image: "/comingSoon.png",
      githubLink:"#" 
    },
    
  ]);

  // Active index refers to the card in the center
  const [activeIndex, setActiveIndex] = useState(0);
  // State for controlling auto-slide
  const [autoSlide, setAutoSlide] = useState(true);
  // Auto-slide interval in milliseconds
  const slideInterval = 3000;
  // Ref to store the interval ID
  const intervalRef = useRef(null);
  
  // Navigate to the next card
  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % cards.length);
  };
  
  // Navigate to the previous card
  const handlePrev = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + cards.length) % cards.length);
  };
  
  // Navigate to a specific card
  const goToCard = (index) => {
    setActiveIndex(index);
    // Temporarily pause auto-sliding when manually navigating
    pauseAutoSlide();
    // Resume after a delay
    setTimeout(resumeAutoSlide, 5000);
  };

  // Start auto-sliding
  const startAutoSlide = () => {
    if (autoSlide && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, slideInterval);
    }
  };

  // Pause auto-sliding
  const pauseAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Resume auto-sliding
  const resumeAutoSlide = () => {
    if (autoSlide) {
      startAutoSlide();
    }
  };

  // Toggle auto-slide functionality
  const toggleAutoSlide = () => {
    setAutoSlide(prev => !prev);
  };

  // Start auto-sliding on component mount
  useEffect(() => {
    startAutoSlide();
    
    // Cleanup interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoSlide]);

  // Pause auto-sliding when user interacts with the carousel
  const handleCarouselInteraction = () => {
    pauseAutoSlide();
    // Resume after a delay
    setTimeout(resumeAutoSlide, 5000);
  };

  // Calculate position and style for each card
  const getCardStyle = (index) => {
    // Calculate relative position to active card
    const activePosition = activeIndex;
    const totalCards = cards.length;
    
    // Calculate the shortest distance between indices (considering circular wrap)
    let distance = (index - activePosition + totalCards) % totalCards;
    if (distance > totalCards / 2) {
      distance = distance - totalCards;
    }
    
    // Based on distance from active card, determine style
    if (distance === 0) {
      // Center card (active)
      return {
        position: 'center',
        style: 'z-30 transform translate-x-0 scale-100 opacity-100',
        showControls: true
      };
    } else if (distance === 1 || (distance === -totalCards + 1)) {
      // Right card
      return {
        position: 'right',
        style: 'z-20 transform translate-x-40 scale-90 opacity-70',
        showControls: false
      };
    } else if (distance === -1 || (distance === totalCards - 1)) {
      // Left card
      return {
        position: 'left',
        style: 'z-20 transform -translate-x-40 scale-90 opacity-70',
        showControls: false
      };
    } else if (distance > 1) {
      // Far right (hidden or partially visible)
      return {
        position: 'far-right',
        style: 'z-10 transform translate-x-80 scale-80 opacity-0',
        showControls: false
      };
    } else {
      // Far left (hidden or partially visible)
      return {
        position: 'far-left',
        style: 'z-10 transform -translate-x-80 scale-80 opacity-0',
        showControls: false
      };
    }
  };

  return (
    <div className="mt-20 flex items-center justify-center" 
         onMouseEnter={pauseAutoSlide} 
         onMouseLeave={resumeAutoSlide}>
      
      <div className="relative w-full max-w-4xl h-96">
        
        
        {/* Indicator showing current card position */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-4 space-x-2 z-40">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === activeIndex ? 'bg-white' : 'bg-white/30'
              }`}
              onClick={() => goToCard(index)}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Card Container */}
        <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
          {cards.map((card, index) => {
            const { position, style, showControls } = getCardStyle(index);
            
            return (
              <div 
                key={card.id}
                className={`absolute bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer
                  sm:w-72 w-64 h-80 transition-all duration-500 ${style}`}
                onClick={() => {
                  handleCarouselInteraction();
                  if (position === 'left') handlePrev();
                  if (position === 'right') handleNext();
                }}
              >
                {/* Card Image */}
                <div className="h-1/2 overflow-hidden bg-gray-200 relative">
                  {showControls && (
                    <Link href={card.githubLink} className="absolute top-3 right-3 text-black rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </Link>
                  )}
                  <img src={card.image} alt="Project" className="w-full h-full object-cover" />
                </div>
                
                {/* Card Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-4">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
     
      </div>
    </div>
  );
}