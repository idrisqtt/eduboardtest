'use client';
import React from 'react';
import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto bg-white">
      {/* Hero секция с обновленным дизайном */}
      <div className="relative overflow-hidden">
        {/* Упрощенные декоративные элементы */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full opacity-50"></div>
        
        <div className="relative text-center py-20 md:py-32">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-gray-900">
            Educative Creative Board
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 px-4">
            Создана для университетов, позволяет выбирать элективные курсы 
            инженерных и творческих направлений, мастер-классы и воркшопы
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Link
              href="/programs"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            >
              Изучить программы
            </Link>
            <Link
              href="/register"
              className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </div>

      {/* Преимущества */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Преимущества нашей платформы
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div>
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-blue-100 text-blue-600 mb-6">
                  <BookOpen className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Элективные курсы</h3>
                <p className="text-gray-600">
                  Широкий выбор элективных курсов инженерных и творческих направлений,
                  которые можно добавить в свою программу обучения.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div>
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-purple-100 text-purple-600 mb-6">
                  <Layers className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Мастер-классы и воркшопы</h3>
                <p className="text-gray-600">
                  Интенсивные практические занятия с профессионалами
                  в своей области для быстрого освоения навыков.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div>
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-pink-100 text-pink-600 mb-6">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Единая система</h3>
                <p className="text-gray-600">
                  Объединяем все курсы и программы обучения в единой системе 
                  с удобными инструментами для студентов и преподавателей.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Направления обучения */}
      <div className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Направления обучения
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Выбирайте направления обучения в соответствии со своими интересами и целями
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="bg-blue-600 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="p-8 h-full">
              <h3 className="text-3xl font-bold text-white mb-4">
                Инженерные направления
              </h3>
              <p className="text-white opacity-90 mb-6 text-lg">
                Программирование, инженерия, машинное обучение, анализ данных, 
                робототехника и другие технические дисциплины.
              </p>
              <ul className="space-y-3 text-white mb-8">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Программирование и разработка ПО
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Робототехника и автоматизация
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Искусственный интеллект и машинное обучение
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  3D-моделирование и проектирование
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Электронная инженерия
                </li>
              </ul>
              <Link
                href="/tracks/engineering"
                className="inline-flex items-center text-white font-medium hover:underline"
              >
                Подробнее <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="bg-purple-600 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="p-8 h-full">
              <h3 className="text-3xl font-bold text-white mb-4">
                Творческие направления
              </h3>
              <p className="text-white opacity-90 mb-6 text-lg">
                Дизайн, изобразительное искусство, актерское мастерство, 
                цифровая сценография, медиа-арт и другие креативные дисциплины.
              </p>
              <ul className="space-y-3 text-white mb-8">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Актерское мастерство и навыки коммуникаций
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Цифровая сценография и медиа-арт
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Основы дизайна и моды
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Нейропластика и биомеханическое движение
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Крафтовые и ремесленные мастерские
                </li>
              </ul>
              <Link
                href="/tracks/creative"
                className="inline-flex items-center text-white font-medium hover:underline"
              >
                Подробнее <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Мастер-классы и воркшопы */}
      <div className="py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Мастер-классы и воркшопы
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Интенсивные практические занятия под руководством экспертов в своей области
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48 bg-blue-600"></div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-3">
                Мастер-класс
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Создание цифровой инсталляции
              </h3>
              <p className="text-gray-600 mb-4">
                Интерактивный мастер-класс по созданию медиа-инсталляций
                с использованием проекций и сенсоров.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">4 часа</span>
                <Link
                  href="/workshops/1"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48 bg-purple-600"></div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full mb-3">
                Воркшоп
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3D-сканирование объектов
              </h3>
              <p className="text-gray-600 mb-4">
                Практический воркшоп по 3D-сканированию объектов
                и их последующей обработке в специализированном ПО.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">6 часов</span>
                <Link
                  href="/workshops/2"
                  className="text-purple-600 hover:text-purple-800 font-medium text-sm"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48 bg-pink-600"></div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-pink-600 text-white text-xs font-medium rounded-full mb-3">
                Мастер-класс
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Основы нейросетевого искусства
              </h3>
              <p className="text-gray-600 mb-4">
                Мастер-класс по созданию художественных работ
                с использованием нейросетевых технологий.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">3 часа</span>
                <Link
                  href="/workshops/3"
                  className="text-pink-600 hover:text-pink-800 font-medium text-sm"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 