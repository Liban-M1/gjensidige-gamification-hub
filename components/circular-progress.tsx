interface CircularProgressProps {
  value: number
  max?: number
  size?: number
  strokeWidth?: number
  label?: string
}

export function CircularProgress({ value, max = 100, size = 120, strokeWidth = 8, label }: CircularProgressProps) {
  const percentage = Math.min((value / max) * 100, 100)
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            className="text-accent"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            className="text-secondary transition-all duration-500 ease-out"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-card-foreground">{Math.round(percentage)}%</span>
        </div>
      </div>
      {label && <p className="text-sm font-medium text-card-foreground/70">{label}</p>}
    </div>
  )
}
