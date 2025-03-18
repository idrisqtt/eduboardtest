'use client';
import React from 'react';
import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Users, Code, Paintbrush, Lightbulb, Award, Clock, ChevronRight, Star, Zap, Shield, Brain } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero секция с концепцией "двух полушарий" */}
      <div className="relative overflow-hidden min-h-screen flex items-center brain-container">
        {/* Разделение на "полушария" */}
        <div className="brain-divider"></div>
        <div className="brain-connector top">
          <Brain className="h-5 w-5 text-blue-500" />
        </div>
        <div className="brain-connector middle">
          <Brain className="h-5 w-5 text-purple-500" />
        </div>
        <div className="brain-connector bottom">
          <Brain className="h-5 w-5 text-pink-500" />
        </div>
        
        {/* Фоновые волны для технического и творческого */}
        <div className="brain-wave tech top-20"></div>
        <div className="brain-wave creative top-40"></div>
        <div className="brain-wave tech bottom-20"></div>
        
        {/* Анимированные декоративные элементы */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        
        <div className="relative w-full text-center py-20 md:py-32 fade-in-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-purple-600 bg-purple-100 rounded-full">Образовательная платформа 2025</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 dual-gradient-text text-shadow-lg">
            EduBoard
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 px-4 leading-relaxed">
            Платформа для выбора элективных курсов инженерных и творческих направлений, 
            мастер-классов и воркшопов
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Link
              href="/programs"
              className="split-button group relative px-8 py-4 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center">
                Изучить программы
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            <Link
              href="/register"
              className="group px-8 py-4 bg-white text-blue-600 font-medium rounded-xl border-2 border-transparent gradient-border hover:shadow-lg transition-all duration-300"
            >
              <span className="dual-gradient-text flex items-center justify-center">
                Зарегистрироваться
                <Users className="ml-2 h-5 w-5" />
              </span>
            </Link>
          </div>
          
          <div className="flex justify-center mt-16">
            <div className="flex items-center space-x-8 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-md half-split-container">
              <div className="flex items-center half-split-content">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-gray-700">4.9/5 рейтинг</span>
              </div>
              <div className="hidden md:flex items-center half-split-content">
                <Users className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-700">10,000+ студентов</span>
              </div>
              <div className="flex items-center half-split-content">
                <Zap className="h-5 w-5 text-purple-500 mr-2" />
                <span className="text-gray-700">50+ курсов</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Преимущества - секция разделённая на технические и творческие преимущества */}
      <div className="py-20 bg-white half-split-container">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 half-split-content">
          <div className="text-center mb-16 fade-in-up">
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-3">Почему мы</span>
            <h2 className="text-4xl font-bold dual-gradient-text mb-4">
              Преимущества нашей платформы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы создали удобную и функциональную платформу для выбора образовательных программ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-modern tech scale-in stagger-1 left-brain-card">
              <div className="p-8">
                <div className="flex items-center justify-center h-16 w-16 rounded-full left-brain-gradient text-white mb-6 mx-auto pulse-tech">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Широкий выбор курсов</h3>
                <p className="text-gray-600 text-center">
                  Более 50 различных курсов по инженерным и творческим направлениям
                </p>
              </div>
            </div>

            <div className="card-modern scale-in stagger-2">
              <div className="p-8">
                <div className="flex items-center justify-center h-16 w-16 rounded-full gradient-purple-pink text-white mb-6 mx-auto">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Сертификация</h3>
                <p className="text-gray-600 text-center">
                  По окончании курса вы получите сертификат, подтверждающий ваши навыки
                </p>
              </div>
            </div>

            <div className="card-modern creative scale-in stagger-3 right-brain-card">
              <div className="p-8">
                <div className="flex items-center justify-center h-16 w-16 rounded-full right-brain-gradient text-white mb-6 mx-auto pulse-creative">
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
      </div>

      {/* Направления обучения - разделение на технические и творческие */}
      <div className="py-20 brain-container">
        <div className="brain-divider"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
          <div className="left-brain p-10 md:p-20 flex items-center justify-center">
            <div className="max-w-md">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">Инженерные <br/>направления</h2>
              <p className="text-lg text-gray-600 mb-8">
                Развивайте аналитическое мышление и технические навыки с нашими инженерными курсами
              </p>
              <Link 
                href="/tracks/engineering"
                className="left-brain-card group inline-flex items-center px-6 py-3 bg-white rounded-lg shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="tech-icon-container flex justify-center items-center h-10 w-10 rounded-md mr-4">
                  <Code className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-blue-600 font-medium">Выбрать курс</span>
                  <div className="flex items-center text-sm text-gray-500">
                    Программирование, робототехника
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="right-brain p-10 md:p-20 flex items-center justify-center">
            <div className="max-w-md">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-600">Творческие <br/>направления</h2>
              <p className="text-lg text-gray-600 mb-8">
                Раскройте свой творческий потенциал и развивайте воображение с нашими креативными курсами
              </p>
              <Link 
                href="/tracks/creative"
                className="right-brain-card group inline-flex items-center px-6 py-3 bg-white rounded-lg shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="creative-icon-container flex justify-center items-center h-10 w-10 rounded-md mr-4">
                  <Paintbrush className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-purple-600 font-medium">Выбрать курс</span>
                  <div className="flex items-center text-sm text-gray-500">
                    Дизайн, искусство, музыка
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>

              {/* Творческие специальности - карточки */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white/90 p-3 rounded-lg right-brain-card text-sm">
                  <div className="text-purple-600 font-medium mb-1">Цифровая сценография</div>
                  <div className="text-gray-500 text-xs">Визуальные эффекты и декорации</div>
                </div>
                <div className="bg-white/90 p-3 rounded-lg right-brain-card text-sm">
                  <div className="text-purple-600 font-medium mb-1">Актерское мастерство</div>
                  <div className="text-gray-500 text-xs">Техники выразительности и перевоплощения</div>
                </div>
                <div className="bg-white/90 p-3 rounded-lg right-brain-card text-sm">
                  <div className="text-purple-600 font-medium mb-1">Театральная пластика</div>
                  <div className="text-gray-500 text-xs">Язык тела и сценическое движение</div>
                </div>
                <div className="bg-white/90 p-3 rounded-lg right-brain-card text-sm">
                  <div className="text-purple-600 font-medium mb-1">Основы моды и дизайна</div>
                  <div className="text-gray-500 text-xs">Создание концепций и коллекций</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Статистика */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text bg-gradient-to-r from-blue-600 to-blue-400 mb-2">50+</div>
              <p className="text-gray-600">Курсов</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">10K+</div>
              <p className="text-gray-600">Студентов</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text bg-gradient-to-r from-pink-600 to-purple-600 mb-2">30+</div>
              <p className="text-gray-600">Экспертов</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text bg-gradient-to-r from-blue-600 to-blue-400 mb-2">95%</div>
              <p className="text-gray-600">Трудоустройство</p>
            </div>
          </div>
        </div>
      </div>

      {/* Наши преподаватели - разделение на технических и творческих */}
      <div className="py-20 brain-container">
        <div className="brain-divider"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full mb-3">Наша команда</span>
            <h2 className="text-4xl font-bold dual-gradient-text mb-4">
              Преподаватели курсов
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Наши курсы ведут опытные эксперты-практики из различных отраслей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Левая часть - преподаватели технических направлений */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-600 border-b border-blue-200 pb-2">Технические дисциплины</h3>
              
              <div className="flex items-start p-4 card-modern left-brain-card">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white text-xl font-bold">АБ</div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Алмас Байжанов</h4>
                  <p className="text-blue-600">Программирование и Разработка ПО</p>
                  <p className="text-sm text-gray-600 mt-1">Кандидат технических наук, 8 лет опыта в индустрии разработки ПО</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 card-modern left-brain-card">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xl font-bold">НТ</div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Нурлан Тулеубаев</h4>
                  <p className="text-blue-600">Аналитика Данных и ML</p>
                  <p className="text-sm text-gray-600 mt-1">PhD в области компьютерных наук, исследователь в области машинного обучения</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 card-modern left-brain-card">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-400 flex items-center justify-center text-white text-xl font-bold">ДК</div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Дамир Касымов</h4>
                  <p className="text-blue-600">Робототехника и Инженерное дело</p>
                  <p className="text-sm text-gray-600 mt-1">Технический директор стартапа по робототехнике с 12-летним опытом работы</p>
                </div>
              </div>
            </div>
            
            {/* Правая часть - преподаватели творческих направлений */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-purple-600 border-b border-purple-200 pb-2">Творческие дисциплины</h3>
              
              <div className="flex items-start p-4 card-modern right-brain-card">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 flex items-center justify-center text-white text-xl font-bold">АС</div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Айнур Сатпаева</h4>
                  <p className="text-purple-600">Цифровая Сценография и VFX</p>
                  <p className="text-sm text-gray-600 mt-1">10+ лет опыта в дизайне и создании визуальных эффектов для кино и театра</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 card-modern right-brain-card">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center text-white text-xl font-bold">МЕ</div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Мадина Ержанова</h4>
                  <p className="text-purple-600">Актерское Мастерство и Театральная Пластика</p>
                  <p className="text-sm text-gray-600 mt-1">Актриса театра и кино, преподаватель сценического искусства</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 card-modern right-brain-card">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 flex items-center justify-center text-white text-xl font-bold">АИ</div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Арман Искаков</h4>
                  <p className="text-purple-600">Мода и Дизайн</p>
                  <p className="text-sm text-gray-600 mt-1">Модельер-дизайнер с международным опытом, участник модных показов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Призыв к действию с концепцией "двух полушарий" */}
      <div className="py-20 brain-container">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl p-10 md:p-16 shadow-xl">
            <div className="brain-divider"></div>
            <div className="absolute left-0 top-0 bottom-0 w-1/2 left-brain-gradient opacity-90"></div>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 right-brain-gradient opacity-90"></div>
            <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-10"></div>
            
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-shadow">
                Готовы развивать оба полушария?
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Наши курсы помогут вам развить как аналитические, так и творческие способности
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/programs"
                  className="px-8 py-4 bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="dual-gradient-text">Выбрать программу</span>
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 glass-effect text-white font-medium rounded-xl border border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  Связаться с нами
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Преимущества обучения - разделение на технические и творческие */}
      <div className="py-20 bg-white half-split-container">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 half-split-content">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-3">Обучение у нас</span>
            <h2 className="text-4xl font-bold dual-gradient-text mb-4">
              Почему стоит выбрать нас
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы предлагаем комплексный подход к образованию
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex p-6 card-modern left-brain-card">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg left-brain-gradient text-white">
                  <Shield className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
                <p className="text-gray-600">
                  Мы тщательно отбираем преподавателей и постоянно обновляем программы курсов
                </p>
              </div>
            </div>
            
            <div className="flex p-6 card-modern right-brain-card">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg right-brain-gradient text-white">
                  <Users className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Сообщество</h3>
                <p className="text-gray-600">
                  Доступ к сообществу студентов и выпускников для нетворкинга и обмена опытом
                </p>
              </div>
            </div>
            
            <div className="flex p-6 card-modern left-brain-card">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg left-brain-gradient text-white">
                  <Layers className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Практические проекты</h3>
                <p className="text-gray-600">
                  Работа над реальными проектами с возможностью пополнить своё портфолио
                </p>
              </div>
            </div>
            
            <div className="flex p-6 card-modern right-brain-card">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg right-brain-gradient text-white">
                  <BookOpen className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Современные методики</h3>
                <p className="text-gray-600">
                  Использование передовых образовательных методик и технологий
                </p>
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
              <h3 className="text-xl font-bold mb-4 dual-gradient-text">EduBoard</h3>
              <p className="text-gray-400">
                Платформа для выбора элективных курсов и образовательных программ
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Направления</h4>
              <ul className="space-y-2">
                <li><Link href="/tracks/engineering" className="text-gray-400 hover:text-blue-400 transition-colors">Инженерные</Link></li>
                <li><Link href="/tracks/creative" className="text-gray-400 hover:text-purple-400 transition-colors">Творческие</Link></li>
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
          <div className="brain-container border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <div className="brain-divider"></div>
            <p>© 2025 EduBoard. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 