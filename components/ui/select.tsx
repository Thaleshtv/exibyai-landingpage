import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(
            "flex h-12 w-full appearance-none rounded-xl border-2 border-gray-200 bg-white px-4 py-3 pr-10 text-base",
            "focus-visible:outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/10",
            "hover:border-gray-300",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50",
            "transition-all duration-200",
            error && "border-red-400 focus-visible:border-red-500 focus-visible:ring-red-100",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
      </div>
    )
  }
)
Select.displayName = "Select"

export { Select }
