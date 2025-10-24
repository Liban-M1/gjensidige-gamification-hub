interface ProgressBarProps {
  value: number
  max?: number
  label?: string
  showPercentage?: boolean
}

export function ProgressBar({ value, max = 100, label, showPercentage = true }: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100)

  return (
    <div className="w-full space-y-2">
      {label && (
        <div className="flex justify-between items-center text-sm">
          <span className="font-medium text-card-foreground">{label}</span>
          {showPercentage && <span className="text-card-foreground/70">{Math.round(percentage)}%</span>}
        </div>
      )}
      <div className="w-full h-3 bg-accent rounded-full overflow-hidden">
        <div
          className="h-full bg-secondary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
