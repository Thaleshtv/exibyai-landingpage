"use client"

import type { ReactNode } from "react"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface FormFieldProps {
  label: string
  error?: string
  children: ReactNode
  className?: string
  required?: boolean
}

export function FormField({
  label,
  error,
  children,
  className,
  required,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label error={!!error}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      {children}
      {error && (
        <p className="text-sm text-red-500 animate-in slide-in-from-top-1 duration-200">
          {error}
        </p>
      )}
    </div>
  )
}
