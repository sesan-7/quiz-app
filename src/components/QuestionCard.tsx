import React from 'react'
import type { Question } from '../types'
import OptionButton from './OptionButton'


export default function QuestionCard({
  question,
  selected,
  onSelect
}: {
  question: Question
  selected?: string
  onSelect: (id: string) => void
}) {
  return (
<div className="space-y-4 w-full flex flex-col items-center">


                {/* <div
  className="w-full max-w-xl rounded-xl p-4 text-center 
             bg-gradient-to-br from-[#C6E9F7] to-[#E5F8FF]
             border border-blue/70"
> */}
<div
  className="w-full max-w-xl rounded-xl p-4 text-center 
             bg-gradient-to-br from-[#C6E9F7] to-[#E5F8FF]
             border border-[#96E5FF]"
>


  <p className="text-lg font-semibold  text-black">
    {question.text}
  </p>
</div>


<div className="w-full max-w-xl space-y-2 " role="list">


  {question.options.map(opt => (
    <OptionButton
      key={opt.id}
      option={opt}
      selected={selected === opt.id}
      onSelect={() => onSelect(opt.id)}
    />
  ))}
</div>

</div>



  )
}


