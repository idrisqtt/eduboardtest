'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Palette, Film, Music, Mic, Scissors } from 'lucide-react';

export default function CreativeTracks() {
  const courses = [
    {
      id: 1,
      title: 'Цифровая сценография и медиа-арт',
      description: 'Создание цифровых инсталляций, проекций и интерактивных медиа-объектов.',
      icon: <Film className="h-6 w-6" />,
      duration: '10 недель',
      level: 'Средний',
      color: 'purple'
    },
    {
      id: 2,
      title: 'Актерское мастерство и коммуникации',
      description: 'Развитие навыков публичных выступлений, актерского мастерства и коммуникации.',
      icon: <Mic className="h-6 w-6" />,
      duration: '8 недель',
      level: 'Начальный',
      color: 'blue'
    },
    {
      id: 3,
      title: 'Основы дизайна и моды',
      description: 'Изучение принципов дизайна, создание эскизов и работа с материалами.',
      icon: <Scissors className="h-6 w-6" />,
      duration: '12 недель',
      level: 'Начальный',
      color: 'pink'
    },
    {
      id: 4,
      title: 'Нейропластика и биомеханическое движение',
      description: 'Изучение техник движения, пластики тела и импровизации в пространстве.',
      icon: <Music className="h-6 w-6" />,
      duration: '8 недель',
      level: 'Средний',
      color: 'green'
    },
    {
      id: 5,
      title: 'Крафтовые и ремесленные мастерские',
      description: 'Работа с различными материалами, создание уникальных предметов искусства.',
      icon: <Palette className="h-6 w-6" />,
      duration: '10 недель',
      level: 'Начальный',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: {[key: string]: {bg: string, text: string, border: string}} = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        border: 'border-blue-200'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        border: 'border-purple-200'
      },
      pink: {
        bg: 'bg-pink-100',
        text: 'text-pink-600',
        border: 'border-pink-200'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        border: 'border-green-200'
      },
      orange: {
        bg: 'bg-orange-100',
        text: 'text-orange-600',
        border: 'border-orange-200'
      }
    };

    return colorMap[color] || colorMap.purple;
  };

  return (
    <div className="max-w-7xl mx-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Вернуться на главную
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Творческие направления</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Выберите курс из нашей коллекции творческих направлений, разработанных 
          для развития креативного мышления и художественных навыков.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course) => {
          const colorClasses = getColorClasses(course.color);
          
          return (
            <div 
              key={course.id} 
              className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className={`p-6 border-b ${colorClasses.border}`}>
                <div className="flex items-center mb-4">
                  <div className={`flex items-center justify-center h-12 w-12 rounded-lg ${colorClasses.bg} ${colorClasses.text} mr-4`}>
                    {course.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{course.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    Длительность: {course.duration}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    Уровень: {course.level}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 flex justify-between items-center">
                <span className="text-sm text-gray-500">Начало: 15 сентября 2023</span>
                <Link
                  href={`/courses/${course.id}`}
                  className={`px-4 py-2 rounded-lg ${colorClasses.bg} ${colorClasses.text} hover:opacity-90 transition-opacity`}
                >
                  Подробнее
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 p-6 bg-purple-50 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Хотите предложить свой курс?</h2>
        <p className="text-gray-600 mb-6">
          Мы открыты для сотрудничества с творческими профессионалами. Если у вас есть идея 
          для курса или мастер-класса, свяжитесь с нами, и мы обсудим возможности сотрудничества.
        </p>
        <Link
          href="/contact"
          className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition-colors"
        >
          Предложить курс
        </Link>
      </div>
    </div>
  );
} 