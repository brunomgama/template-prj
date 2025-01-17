import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: "default" | "fancy"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, variant = "default", ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "some-styles",
                    variant === "fancy" && "some-fancy-styles",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)

Input.displayName = "Input"

export { Input }
