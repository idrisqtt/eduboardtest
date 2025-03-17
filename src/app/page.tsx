'use client';
import React from 'react';
import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Users, Code, Paintbrush, Lightbulb, Award, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero секция с улучшенным дизайном */}
      <div className="relative overflow-hidden min-h-screen flex items-center">
        {/* Анимированные декоративные элементы */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-10 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        
        <div className="relative w-full text-center py-20 md:py-32 fade-in-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            EduBoard
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 px-4 leading-relaxed">
            Платформа для выбора элективных курсов инженерных и творческих направлений, 
            мастер-классов и воркшопов
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Link
              href="/programs"
              className="group relative px-8 py-4 button-gradient bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center">
                Изучить программы
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
            </Link>
            <Link
              href="/register"
              className="group px-8 py-4 bg-white text-blue-600 font-medium rounded-xl border-2 border-transparent gradient-border hover:shadow-lg transition-all duration-300"
            >
              <span className="gradient-text bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                Зарегистрироваться
                <Users className="ml-2 h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Преимущества */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold gradient-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Преимущества нашей платформы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы создали удобную и функциональную платформу для выбора образовательных программ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md card-hover">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6 mx-auto">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Широкий выбор курсов</h3>
              <p className="text-gray-600 text-center">
                Более 50 различных курсов по инженерным и творческим направлениям
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md card-hover">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-600 mb-6 mx-auto">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Сертификация</h3>
              <p className="text-gray-600 text-center">
                По окончании курса вы получите сертификат, подтверждающий ваши навыки
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md card-hover">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-pink-100 text-pink-600 mb-6 mx-auto">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Гибкий график</h3>
              <p className="text-gray-600 text-center">
                Занимайтесь в удобное для вас время, выбирая оптимальный темп обучения
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Направления обучения */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold gradient-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Направления обучения
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите интересующее вас направление и начните обучение уже сегодня
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link 
              href="/tracks/engineering"
              className="group relative overflow-hidden rounded-xl shadow-md card-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
              <div className="relative p-8">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white text-blue-600 mr-4">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Инженерные направления</h3>
                </div>
                <p className="text-white/90 mb-6">
                  Программирование, робототехника, анализ данных и другие технические дисциплины
                </p>
                <div className="flex items-center text-white font-medium">
                  Подробнее 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>

            <Link 
              href="/tracks/creative"
              className="group relative overflow-hidden rounded-xl shadow-md card-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-400 opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
              <div className="relative p-8">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white text-purple-600 mr-4">
                    <Paintbrush className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Творческие направления</h3>
                </div>
                <p className="text-white/90 mb-6">
                  Дизайн, искусство, музыка и другие творческие дисциплины
                </p>
                <div className="flex items-center text-white font-medium">
                  Подробнее 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Призыв к действию */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-10 md:p-16 shadow-xl">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Готовы начать обучение?
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Присоединяйтесь к тысячам студентов, которые уже выбрали наши курсы и развивают свои навыки
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/programs"
                  className="px-8 py-4 bg-white text-blue-600 font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Выбрать программу
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-transparent text-white font-medium rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  Связаться с нами
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EduBoard</h3>
              <p className="text-gray-400">
                Платформа для выбора элективных курсов и образовательных программ
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Направления</h4>
              <ul className="space-y-2">
                <li><Link href="/tracks/engineering" className="text-gray-400 hover:text-white transition-colors">Инженерные</Link></li>
                <li><Link href="/tracks/creative" className="text-gray-400 hover:text-white transition-colors">Творческие</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Информация</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">О нас</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Связаться</h4>
              <p className="text-gray-400 mb-2">info@eduboard.com</p>
              <p className="text-gray-400">+7 (123) 456-78-90</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2023 EduBoard. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 