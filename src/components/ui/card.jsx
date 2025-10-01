import { cn } from '../../lib/utils.js';

export function Card({ className, ...props }) {
  return <div className={cn('bg-white border border-slate-200 rounded-xl shadow-sm', className)} {...props} />;
}

export function CardHeader({ className, ...props }) {
  return <div className={cn('p-6 border-b border-slate-100', className)} {...props} />;
}

export function CardTitle({ className, ...props }) {
  return <h3 className={cn('text-lg font-semibold text-slate-700', className)} {...props} />;
}

export function CardContent({ className, ...props }) {
  return <div className={cn('p-6', className)} {...props} />;
}
