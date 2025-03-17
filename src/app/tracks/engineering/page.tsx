'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Code, Database, Cpu, Cog, Layers } from 'lucide-react';

export default function EngineeringTracks() {
  const courses = [
    {
      id: 1,
      title: 'Разработка веб-приложений',
      description: 'Изучение современных технологий веб-разработки, включая React, Next.js и Node.js.',
      icon: <Code className="h-6 w-6" />,
      duration: '8 недель',
      level: 'Средний',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Анализ данных и машинное обучение',
      description: 'Основы анализа данных, статистики и построения моделей машинного обучения.',
      icon: <Database className="h-6 w-6" />,
      duration: '10 недель',
      level: 'Продвинутый',
      color: 'purple'
    },
    {
      id: 3,
      title: 'Робототехника и автоматизация',
      description: 'Проектирование и программирование роботов, основы автоматизации процессов.',
      icon: <Cpu className="h-6 w-6" />,
      duration: '12 недель',
      level: 'Продвинутый',
      color: 'green'
    },
    {
      id: 4,
      title: '3D-моделирование и проектирование',
      description: 'Создание трехмерных моделей и прототипов с использованием современных САПР.',
      icon: <Layers className="h-6 w-6" />,
      duration: '8 недель',
      level: 'Начальный',
      color: 'orange'
    },
    {
      id: 5,
      title: 'Электронная инженерия',
      description: 'Проектирование электронных схем, работа с микроконтроллерами и сенсорами.',
      icon: <Cog className="h-6 w-6" />,
      duration: '10 недель',
      level: 'Средний',
      color: 'red'
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
      green: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        border: 'border-green-200'
      },
      orange: {
        bg: 'bg-orange-100',
        text: 'text-orange-600',
        border: 'border-orange-200'
      },
      red: {
        bg: 'bg-red-100',
        text: 'text-red-600',
        border: 'border-red-200'
      }
    };

    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="max-w-7xl mx-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <Link 
          href="/programs" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Вернуться к программам
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Инженерные направления</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Выберите курс из нашей коллекции инженерных направлений, разработанных 
          для развития технических навыков и инженерного мышления.
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
                <span className="text-sm text-gray-500">Начало: 1 сентября 2025</span>
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

      <div className="mt-12 p-6 bg-blue-50 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Не нашли подходящий курс?</h2>
        <p className="text-gray-600 mb-6">
          Мы постоянно обновляем нашу коллекцию курсов. Если вы не нашли то, что искали, 
          свяжитесь с нами, и мы поможем подобрать подходящую программу обучения.
        </p>
        <Link
          href="/contact"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          Связаться с нами
        </Link>
      </div>
    </div>
  );
} 