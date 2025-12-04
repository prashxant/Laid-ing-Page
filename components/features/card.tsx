import { cn } from '@/lib/utils'
import React from 'react'



type CardProps = {
  className?: string
  children : React.ReactNode
}

export const Card = ({className,children}:CardProps
) => {
  return (
    <div className={cn(`bg-neutral-100 dark:bg-neutral-800 rounded-lg ${className}`)}>
      {children}
    </div>
  )
}



export const CardTitle = ({ className, children }: CardProps) => {
  return <h3 className={cn(`text-lg md:text-2xl font-bold font-display${className}`)}>
    {children}
  </h3>
};
