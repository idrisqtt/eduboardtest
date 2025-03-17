'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-blue-600 to-purple-600">
          Что-то пошло не так!
        </h2>
        <p className="text-gray-600 mb-8">
          Произошла ошибка при загрузке страницы.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl shadow-gradient hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
        >
          Попробовать снова
        </button>
      </div>
    </div>
  )
} 