// import React from 'react'
import type { Option } from '../types'


export default function OptionButton({
  option,
  selected,
  onSelect
}: {
  option: Option
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      role="listitem"
      onClick={onSelect}
      aria-pressed={selected}
      className={`w-full text-sm text-slate-700 py-3 rounded-md border transition-shadow focus:outline-none focus:ring-2 focus:ring-cyan-200
        ${selected ? 'bg-cyan-100 border-cyan-300 shadow-sm' : 'bg-white border-slate-100 hover:shadow-md'}`}
    >
      {option.text}
    </button>
  )
}

