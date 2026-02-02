// Chart component - not used in this project
// If needed, install proper recharts types and uncomment

import * as React from "react"

export type ChartConfig = Record<string, any>

export const ChartContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={className} {...props} />
)
ChartContainer.displayName = "ChartContainer"

export const ChartTooltip = () => null
export const ChartTooltipContent = () => null
export const ChartLegend = () => null
export const ChartLegendContent = () => null
export const ChartStyle = () => null
