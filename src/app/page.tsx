'use client';
import React from 'react';
import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero секция с улучшенным дизайном */}
      <div className="relative overflow-hidden">
        {/* Анимированные декоративные элементы */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animate-float"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 animate-float"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 animate-float"></div>
        
        <div className="relative text-center py-20 md:py-32 fade-in-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Educative Creative Board
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 px-4">
            Создана для университетов, позволяет выбирать элективные курсы 
            инженерных и творческих направлений, мастер-классы и воркшопы
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Link
              href="/programs"
              className="group relative px-8 py-3 button-gradient bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl shadow-gradient glow-on-hover smooth-transition"
            >
              <span className="relative z-10">Изучить программы</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
            </Link>
            <Link
              href="/register"
              className="group px-8 py-3 bg-white text-blue-600 font-medium rounded-xl gradient-border glow-on-hover smooth-transition"
            >
              <span className="gradient-text bg-gradient-to-r from-blue-600 to-purple-600">
                Зарегистрироваться
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Преимущества */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold gradient-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Преимущества нашей платформы
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-pulse-slow"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group relative bg-white p-8 rounded-2xl shadow-gradient card-hover smooth-transition fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
              <div className="relative">
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-6 animate-float">
                  <BookOpen className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Элективные курсы</h3>
                <p className="text-gray-600">
                  Широкий выбор элективных курсов инженерных и творческих направлений,
                  которые можно добавить в свою программу обучения.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-white p-8 rounded-2xl shadow-gradient card-hover smooth-transition fade-in-up" style={{animationDelay: "0.2s"}}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
              <div className="relative">
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6 animate-float" style={{animationDelay: "0.2s"}}>
                  <Layers className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Мастер-классы и воркшопы</h3>
                <p className="text-gray-600">
                  Интенсивные практические занятия с профессионалами
                  в своей области для быстрого освоения навыков.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-white p-8 rounded-2xl shadow-gradient card-hover smooth-transition fade-in-up" style={{animationDelay: "0.4s"}}>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
              <div className="relative">
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-r from-pink-500 to-blue-500 text-white mb-6 animate-float" style={{animationDelay: "0.4s"}}>
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

      {/* Направления обучения с улучшенным дизайном */}
      <div className="py-20">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold gradient-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Направления обучения
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Выбирайте направления обучения в соответствии со своими интересами и целями
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-pulse-slow"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="group relative overflow-hidden rounded-2xl shadow-gradient card-hover smooth-transition fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-90"></div>
            <div className="absolute inset-0 grid-pattern opacity-10"></div>
            <div className="relative p-8 h-full">
              <h3 className="text-3xl font-bold text-white mb-4">
                Инженерные направления
              </h3>
              <p className="text-blue-50 mb-6 text-lg">
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
                className="inline-flex items-center text-white font-medium group-hover:underline smooth-transition"
              >
                Подробнее <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-purple-600/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-gradient card-hover smooth-transition fade-in-up" style={{animationDelay: "0.2s"}}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-90"></div>
            <div className="absolute inset-0 grid-pattern opacity-10"></div>
            <div className="relative p-8 h-full">
              <h3 className="text-3xl font-bold text-white mb-4">
                Творческие направления
              </h3>
              <p className="text-purple-50 mb-6 text-lg">
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
                className="inline-flex items-center text-white font-medium group-hover:underline smooth-transition"
              >
                Подробнее <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 to-pink-600/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </div>
      
      {/* Мастер-классы и воркшопы с улучшенным дизайном */}
      <div className="py-20">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold gradient-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Мастер-классы и воркшопы
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Интенсивные практические занятия под руководством экспертов в своей области
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-pulse-slow"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="group bg-white rounded-2xl overflow-hidden shadow-gradient card-hover smooth-transition fade-in-up">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute inset-0 grid-pattern opacity-30"></div>
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium rounded-full mb-3">
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
                  className="text-blue-600 hover:text-purple-600 font-medium text-sm smooth-transition"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl overflow-hidden shadow-gradient card-hover smooth-transition fade-in-up" style={{animationDelay: "0.2s"}}>
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute inset-0 grid-pattern opacity-30"></div>
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium rounded-full mb-3">
                Воркшоп
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3D-сканирование объектов
              </h3>
              <p className="text-gray-600 mb-4">
                Практический воркшоп по 3D-сканированию и обработке
                полученных моделей для дальнейшего использования.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">6 часов</span>
                <Link
                  href="/workshops/2"
                  className="text-purple-600 hover:text-pink-600 font-medium text-sm smooth-transition"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl overflow-hidden shadow-gradient card-hover smooth-transition fade-in-up" style={{animationDelay: "0.4s"}}>
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-blue-500 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute inset-0 grid-pattern opacity-30"></div>
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-xs font-medium rounded-full mb-3">
                Мастер-класс
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Биомеханика движения
              </h3>
              <p className="text-gray-600 mb-4">
                Мастер-класс по основам биомеханического движения,
                пластики тела и импровизации в пространстве.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">3 часа</span>
                <Link
                  href="/workshops/3"
                  className="text-pink-600 hover:text-blue-600 font-medium text-sm smooth-transition"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            href="/workshops"
            className="inline-block px-8 py-3 button-gradient bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl shadow-gradient glow-on-hover smooth-transition"
          >
            Все мастер-классы и воркшопы
          </Link>
        </div>
      </div>
      
      {/* Призыв к действию с улучшенным дизайном */}
      <div className="relative overflow-hidden rounded-3xl mb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="relative py-16 px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-float">
            Готовы начать обучение?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Присоединяйтесь к нашей образовательной платформе и выбирайте курсы, 
            которые соответствуют вашим интересам и целям.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/register"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-xl border-2 border-white/30 hover:bg-white/20 smooth-transition glow-on-hover"
            >
              Зарегистрироваться сейчас
            </Link>
            <Link
              href="/programs"
              className="px-8 py-3 glass text-white font-medium rounded-xl hover:bg-white/20 smooth-transition"
            >
              Узнать больше
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 