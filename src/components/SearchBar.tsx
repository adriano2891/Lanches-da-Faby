import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  resultCount?: number;
  totalProductsCount: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  resultCount,
  totalProductsCount,
}) => {
  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 pt-3 pb-2">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-purple-700">
          <Search className="h-5 w-5" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar por lanche, cuscuz ou ingrediente (ex: bacon, queijo coalho)..."
          aria-label="Buscar produtos ou ingredientes"
          className="w-full pl-11 pr-10 py-2.5 sm:py-3 text-sm sm:text-base bg-white rounded-xl border border-stone-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition text-stone-900 placeholder:text-stone-500 shadow-xs"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            aria-label="Limpar busca"
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-600 hover:text-stone-900"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {searchTerm.trim() !== '' && (
        <div className="mt-2 text-xs sm:text-sm text-stone-600 px-1 flex flex-wrap items-center justify-between gap-1">
          <span>
            Mostrando resultados para <strong className="text-purple-900">"{searchTerm}"</strong>
          </span>
          <span className="font-semibold text-stone-800">
            {resultCount} {resultCount === 1 ? 'produto encontrado' : 'produtos encontrados'}
          </span>
        </div>
      )}
    </div>
  );
};
