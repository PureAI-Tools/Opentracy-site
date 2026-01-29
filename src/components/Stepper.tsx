interface Step {
  number: number;
  title: string;
  description: string;
}

interface StepperProps {
  steps: Step[];
  className?: string;
}

export default function Stepper({ steps, className = "" }: StepperProps) {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center gap-4 lg:gap-0">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-10 w-10 items-center justify-center border border-[#333333] bg-[#0a0a0a] font-mono text-sm">
                {step.number}
              </div>
              <span className="mt-2 font-mono text-xs uppercase tracking-wider">
                {step.title}
              </span>
              <span className="mt-1 text-xs text-[#888888] max-w-[120px]">
                {step.description}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden lg:flex items-center mx-4">
                <div className="w-16 xl:w-24 stepper-line" />
                <span className="text-[#888888] ml-1">→</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
