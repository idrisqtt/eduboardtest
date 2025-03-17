'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text bg-gradient-to-r from-blue-600 to-purple-600">
                EduBoard
              </span>
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link
              href="/programs"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/programs')
                  ? 'gradient-text bg-gradient-to-r from-blue-600 to-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Программы
            </Link>
            <Link
              href="/tracks"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/tracks')
                  ? 'gradient-text bg-gradient-to-r from-blue-600 to-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Направления
            </Link>
            <Link
              href="/workshops"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/workshops')
                  ? 'gradient-text bg-gradient-to-r from-blue-600 to-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Мастер-классы
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="/register"
              className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 smooth-transition"
            >
              Регистрация
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 