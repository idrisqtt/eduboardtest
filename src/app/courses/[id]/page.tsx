'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function CourseDetails() {
  const params = useParams();
  const courseId = params.id;
  
  // Здесь в реальном приложении вы бы загружали данные курса по ID
  // Для примера используем статические данные
  const course = {
    id: courseId,
    title: `Курс #${courseId}`,
    description: 'Подробное описание курса будет здесь.',
    duration: '8 недель',
    level: 'Средний',
    startDate: '1 сентября 2025',
    modules: [
      { id: 1, title: 'Введение в курс', duration: '1 неделя' },
      { id: 2, title: 'Основные концепции', duration: '2 недели' },
      { id: 3, title: 'Практические задания', duration: '3 недели' },
      { id: 4, title: 'Финальный проект', duration: '2 недели' }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <Link 
          href="/tracks/engineering" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Вернуться к списку курсов
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mb-6">
          {course.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
            Длительность: {course.duration}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
            Уровень: {course.level}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
            Начало: {course.startDate}
          </span>
        </div>
      </div>

      <div className="bg-white border rounded-lg overflow-hidden shadow-md mb-12">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Программа курса</h2>
          <div className="space-y-4">
            {course.modules.map((module) => (
              <div key={module.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    Модуль {module.id}: {module.title}
                  </h3>
                  <span className="text-sm text-gray-500">{module.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors">
          Записаться на курс
        </button>
      </div>
    </div>
  );
} 