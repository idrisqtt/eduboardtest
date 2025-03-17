'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Code, Paintbrush } from 'lucide-react';

export default function Programs() {
  const tracks = [
    {
      id: 'engineering',
      title: 'Инженерные направления',
      description: 'Курсы по программированию, робототехнике, анализу данных и другим техническим дисциплинам.',
      icon: <Code className="h-8 w-8" />,
      color: 'blue',
      link: '/tracks/engineering'
    },
    {
      id: 'creative',
      title: 'Творческие направления',
      description: 'Курсы по дизайну, искусству, музыке и другим творческим дисциплинам.',
      icon: <Paintbrush className="h-8 w-8" />,
      color: 'purple',
      link: '/tracks/creative'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: {[key: string]: {bg: string, text: string, border: string, hover: string}} = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        border: 'border-blue-200',
        hover: 'hover:bg-blue-200'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        border: 'border-purple-200',
        hover: 'hover:bg-purple-200'
      }
    };

    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="max-w-7xl mx-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Вернуться на главную
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Программы обучения</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Выберите направление обучения, которое вас интересует. У нас есть курсы 
          как инженерных, так и творческих направлений.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tracks.map((track) => {
          const colorClasses = getColorClasses(track.color);
          
          return (
            <Link 
              key={track.id}
              href={track.link}
              className={`block p-8 border rounded-lg ${colorClasses.border} ${colorClasses.bg} ${colorClasses.hover} transition-colors`}
            >
              <div className="flex items-center mb-4">
                <div className={`flex items-center justify-center h-12 w-12 rounded-lg bg-white ${colorClasses.text} mr-4`}>
                  {track.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{track.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{track.description}</p>
              <div className="flex justify-end">
                <span className={`inline-flex items-center ${colorClasses.text} font-medium`}>
                  Просмотреть курсы <ArrowLeft className="h-4 w-4 ml-2 transform rotate-180" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
} 