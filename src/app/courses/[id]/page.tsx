'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Users, BookOpen, CheckCircle } from 'lucide-react';
import { useParams } from 'next/navigation';

// Имитация данных курсов
const engineeringCourses = [
  {
    id: '1',
    title: 'Разработка веб-приложений',
    description: 'Изучение современных технологий веб-разработки, включая React, Next.js и Node.js.',
    fullDescription: 'Этот курс предназначен для тех, кто хочет освоить современные технологии веб-разработки. Вы изучите основы React, Next.js и Node.js, научитесь создавать полноценные веб-приложения с нуля. Курс включает практические задания и проекты, которые помогут закрепить полученные знания.',
    startDate: '1 сентября 2023',
    duration: '8 недель',
    level: 'Средний',
    students: 24,
    instructor: 'Александр Иванов',
    price: '75 000 ₸',
    category: 'engineering',
    color: 'blue',
    modules: [
      'Введение в веб-разработку',
      'Основы JavaScript и TypeScript',
      'React: компоненты и хуки',
      'Next.js: серверный рендеринг',
      'Работа с API и базами данных',
      'Стилизация и UI-библиотеки',
      'Тестирование и отладка',
      'Деплой и оптимизация'
    ],
    skills: [
      'Разработка на React и Next.js',
      'Работа с REST API',
      'Управление состоянием приложения',
      'Верстка адаптивных интерфейсов',
      'Работа с базами данных'
    ]
  },
  // Другие курсы...
];

const creativeCourses = [
  {
    id: '101',
    title: 'Цифровая сценография и медиа-арт',
    description: 'Создание цифровых инсталляций, проекций и интерактивных медиа-объектов.',
    fullDescription: 'Курс посвящен созданию цифровых инсталляций, проекций и интерактивных медиа-объектов. Вы изучите основы работы с проекционным оборудованием, сенсорами и программным обеспечением для создания интерактивных инсталляций. В рамках курса вы создадите собственный медиа-арт проект.',
    startDate: '15 сентября 2023',
    duration: '10 недель',
    level: 'Средний',
    students: 18,
    instructor: 'Мария Петрова',
    price: '90 000 ₸',
    category: 'creative',
    color: 'purple',
    modules: [
      'Введение в медиа-арт',
      'Работа с проекционным оборудованием',
      'Сенсоры и интерактивность',
      'Программирование в Processing',
      'Создание визуальных эффектов',
      'Звуковое сопровождение',
      'Интеграция с пространством',
      'Разработка и реализация проекта'
    ],
    skills: [
      'Работа с проекционным оборудованием',
      'Программирование интерактивных инсталляций',
      'Создание визуальных эффектов',
      'Интеграция медиа-объектов в пространство',
      'Разработка концепции медиа-арт проекта'
    ]
  },
  // Другие курсы...
];

// Объединение всех курсов
const allCourses = [...engineeringCourses, ...creativeCourses];

export default function CourseDetails() {
  const params = useParams();
  const courseId = params.id as string;
  
  // Поиск курса по ID
  const course = allCourses.find(c => c.id === courseId);
  
  // Если курс не найден
  if (!course) {
    return (
      <div className="max-w-7xl mx-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Курс не найден</h1>
          <p className="text-xl text-gray-600 mb-8">
            К сожалению, запрашиваемый курс не существует или был удален.
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }
  
  // Определение цветов в зависимости от категории курса
  const colorClasses = {
    bg: course.category === 'engineering' ? 'bg-blue-600' : 'bg-purple-600',
    bgLight: course.category === 'engineering' ? 'bg-blue-50' : 'bg-purple-50',
    text: course.category === 'engineering' ? 'text-blue-600' : 'text-purple-600',
    border: course.category === 'engineering' ? 'border-blue-200' : 'border-purple-200',
    hover: course.category === 'engineering' ? 'hover:bg-blue-700' : 'hover:bg-purple-700',
  };
  
  return (
    <div className="max-w-7xl mx-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link 
          href={course.category === 'engineering' ? '/tracks/engineering' : '/tracks/creative'} 
          className={`inline-flex items-center ${colorClasses.text} hover:opacity-80 mb-6`}
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Вернуться к списку курсов
        </Link>
      </div>
      
      {/* Заголовок курса */}
      <div className={`${colorClasses.bgLight} p-8 rounded-lg mb-8`}>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
        <p className="text-xl text-gray-600 mb-6">{course.fullDescription}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center">
            <Calendar className={`h-5 w-5 ${colorClasses.text} mr-2`} />
            <span className="text-gray-700">Начало: {course.startDate}</span>
          </div>
          <div className="flex items-center">
            <Clock className={`h-5 w-5 ${colorClasses.text} mr-2`} />
            <span className="text-gray-700">Длительность: {course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className={`h-5 w-5 ${colorClasses.text} mr-2`} />
            <span className="text-gray-700">Студентов: {course.students}</span>
          </div>
          <div className="flex items-center">
            <BookOpen className={`h-5 w-5 ${colorClasses.text} mr-2`} />
            <span className="text-gray-700">Уровень: {course.level}</span>
          </div>
        </div>
      </div>
      
      {/* Содержание курса */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Программа курса</h2>
            <div className="space-y-4">
              {course.modules.map((module, index) => (
                <div key={index} className="flex items-start">
                  <div className={`flex-shrink-0 ${colorClasses.text} mr-3`}>
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-100">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{module}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Навыки, которые вы получите</h2>
            <div className="space-y-3">
              {course.skills.map((skill, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className={`h-5 w-5 ${colorClasses.text} mr-3 flex-shrink-0`} />
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Боковая панель */}
        <div>
          <div className="bg-white border rounded-lg p-6 sticky top-4">
            <div className="text-3xl font-bold text-gray-900 mb-4">{course.price}</div>
            <button 
              className={`w-full ${colorClasses.bg} text-white font-medium py-3 px-4 rounded-lg ${colorClasses.hover} transition-colors mb-4`}
            >
              Записаться на курс
            </button>
            <button 
              className="w-full bg-white text-gray-700 font-medium py-3 px-4 rounded-lg border hover:bg-gray-50 transition-colors"
            >
              Добавить в избранное
            </button>
            
            <div className="mt-6 pt-6 border-t">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Преподаватель</h3>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <div className="font-medium text-gray-900">{course.instructor}</div>
                  <div className="text-sm text-gray-500">Эксперт в области</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Призыв к действию */}
      <div className={`${colorClasses.bgLight} p-8 rounded-lg text-center`}>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Готовы начать обучение?</h2>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          Запишитесь на курс сейчас и начните свой путь к освоению новых навыков и знаний.
          Количество мест ограничено!
        </p>
        <button 
          className={`${colorClasses.bg} text-white font-medium py-3 px-8 rounded-lg ${colorClasses.hover} transition-colors`}
        >
          Записаться на курс
        </button>
      </div>
    </div>
  );
} 