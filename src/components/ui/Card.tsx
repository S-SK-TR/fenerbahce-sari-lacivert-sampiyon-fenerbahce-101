import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      "rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm",
      className
    )}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: CardProps) {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)}>{children}</div>
  );
}

export function CardTitle({ children, className }: CardProps) {
  return (
    <h3 className={cn("font-semibold tracking-tight text-lg", className)}>{children}</h3>
  );
}

export function CardContent({ children, className }: CardProps) {
  return (
    <div className={cn("p-6 pt-0", className)}>{children}</div>
  );
}