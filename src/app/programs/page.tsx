'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Code, Paintbrush, ArrowRight } from 'lucide-react';

export default function Programs() {
  const tracks = [
    {
      id: 'engineering',
      title: 'Инженерные направления',
      description: 'Курсы по программированию, робототехнике, анализу данных и другим техническим дисциплинам.',
      icon: <Code className="h-8 w-8" />,
      color: 'blue',
      link: '/tracks/engineering',
      features: [
        'Программирование и разработка',
        'Робототехника и автоматизация',
        'Анализ данных и машинное обучение',
        '3D-моделирование и проектирование',
        'Электронная инженерия'
      ]
    },
    {
      id: 'creative',
      title: 'Творческие направления',
      description: 'Курсы по дизайну, искусству, музыке и другим творческим дисциплинам.',
      icon: <Paintbrush className="h-8 w-8" />,
      color: 'purple',
      link: '/tracks/creative',
      features: [
        'Графический дизайн',
        'Музыкальное продюсирование',
        'Фотография и обработка изображений',
        'Видеопроизводство и монтаж',
        'Цифровая живопись'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: {[key: string]: {bg: string, text: string, border: string, hover: string, gradient: string, light: string}} = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        border: 'border-blue-200',
        hover: 'hover:bg-blue-200',
        gradient: 'from-blue-600 to-blue-400',
        light: 'bg-blue-50'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        border: 'border-purple-200',
        hover: 'hover:bg-purple-200',
        gradient: 'from-purple-600 to-pink-400',
        light: 'bg-purple-50'
      }
    };

    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="max-w-7xl mx-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Анимированные декоративные элементы */}
      <div className="relative">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="relative">
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Вернуться на главную
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gradient-text bg-gradient-to-r from-blue-600 to-purple-600">
            Программы обучения
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-12">
            Выберите направление обучения, которое вас интересует. У нас есть курсы 
            как инженерных, так и творческих направлений.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {tracks.map((track) => {
            const colorClasses = getColorClasses(track.color);
            
            return (
              <div 
                key={track.id}
                className="bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className={`h-3 bg-gradient-to-r ${colorClasses.gradient}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`flex items-center justify-center h-14 w-14 rounded-lg ${colorClasses.bg} ${colorClasses.text} mr-4`}>
                      {track.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{track.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">{track.description}</p>
                  
                  <div className={`${colorClasses.light} rounded-lg p-4 mb-6`}>
                    <h3 className="font-medium mb-3">Доступные курсы:</h3>
                    <ul className="space-y-2">
                      {track.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className={`inline-block h-5 w-5 rounded-full ${colorClasses.bg} ${colorClasses.text} flex-shrink-0 mr-2`}>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href={track.link}
                    className={`inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r ${colorClasses.gradient} text-white font-medium hover:shadow-lg transition-all duration-300`}
                  >
                    Просмотреть курсы
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 p-8 bg-gray-50 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Не нашли подходящее направление?</h2>
              <p className="text-gray-600">
                Мы постоянно расширяем список доступных курсов и направлений. Если вы не нашли то, что искали, 
                свяжитесь с нами, и мы поможем подобрать подходящую программу обучения.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 