"use client"

import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface StepProgressProps {
  currentStep: number
  totalSteps: number
  steps: { title: string; description: string }[]
}

export function StepProgress({ currentStep, steps }: StepProgressProps) {
  return (
    <div className="w-full">
      {/* Mobile: Compact progress */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Passo {currentStep} de {steps.length}
            </p>
            <p className="font-semibold text-foreground">
              {steps[currentStep - 1].title}
            </p>
          </div>
          <div className="flex gap-1.5">
            {steps.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index + 1 < currentStep && "bg-primary",
                  index + 1 === currentStep && "bg-primary w-6",
                  index + 1 > currentStep && "bg-gray-200"
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: Full step indicators */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const stepNumber = index + 1
            const isCompleted = currentStep > stepNumber
            const isCurrent = currentStep === stepNumber

            return (
              <div key={index} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center relative">
                  {/* Step circle */}
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 relative z-10",
                      isCompleted &&
                        "bg-primary text-white shadow-lg shadow-primary/30",
                      isCurrent &&
                        "bg-primary text-white shadow-lg shadow-primary/30 ring-4 ring-primary/20",
                      !isCompleted &&
                        !isCurrent &&
                        "bg-gray-100 text-gray-400 border-2 border-gray-200"
                    )}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5" strokeWidth={3} />
                    ) : (
                      stepNumber
                    )}
                  </div>

                  {/* Step label */}
                  <div className="mt-3 text-center">
                    <p
                      className={cn(
                        "text-sm font-medium transition-colors",
                        (isCompleted || isCurrent)
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {step.title}
                    </p>
                  </div>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="flex-1 h-0.5 mx-4 mt-[-24px] relative">
                    <div className="absolute inset-0 bg-gray-200 rounded-full" />
                    <div
                      className={cn(
                        "absolute inset-y-0 left-0 bg-primary rounded-full transition-all duration-500 ease-out",
                        currentStep > stepNumber ? "w-full" : "w-0"
                      )}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
