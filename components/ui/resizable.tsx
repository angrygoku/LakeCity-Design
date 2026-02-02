// Resizable component - not used in this project
// If needed, fix the import and uncomment

import * as React from "react"
import { cn } from "@/lib/utils"

export const ResizablePanelGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex", className)} {...props} />
)
ResizablePanelGroup.displayName = "ResizablePanelGroup"

export const ResizablePanel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={className} {...props} />
)
ResizablePanel.displayName = "ResizablePanel"

export const ResizableHandle = () => null
