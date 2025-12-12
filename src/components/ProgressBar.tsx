interface Props {
    value: number;
    max: number;
  }
  
  export default function ProgressBar({ value, max }: Props) {
    return (
      <div className="w-full max-w-xl mx-auto">
        <div className="flex gap-2">
          {Array.from({ length: max }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-all duration-300
                ${i < value ? "bg-gray-700" : "bg-white/30"}
              `}
            />
          ))}
        </div>
      </div>
    );
  }
  