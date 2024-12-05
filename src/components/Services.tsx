import React from 'react';
import { Pen, Code, Palette } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export const Services = () => {
  const services = [
    {
      title: 'Content Writing',
      description: 'Crafting compelling narratives and engaging content that resonates with your audience.',
      Icon: Pen
    },
    {
      title: 'Website Development',
      description: 'Building modern, responsive websites with cutting-edge technologies.',
      Icon: Code
    },
    {
      title: 'Graphic Design',
      description: 'Creating stunning visuals that capture attention and communicate your message.',
      Icon: Palette
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          description={service.description}
          Icon={service.Icon}
        />
      ))}
    </div>
  );
};