import { cn } from '../../lib/utils.js';

const variants = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow',
  outline: 'border border-slate-200 bg-white hover:bg-slate-50',
  ghost: 'hover:bg-slate-100'
};

const sizes = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 px-3',
  lg: 'h-11 px-8',
  icon: 'h-10 w-10'
};

export function Button({ className, variant = 'default', size = 'default', ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
