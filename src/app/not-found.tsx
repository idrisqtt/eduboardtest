import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-blue-600 to-purple-600">
          404 - Страница не найдена
        </h2>
        <p className="text-gray-600 mb-8">
          Извините, запрашиваемая страница не существует.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl shadow-gradient hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  )
} 