import { cn } from '../../lib/utils.js';

export const Input = ({ className, ...props }) => (
  <input
    className={cn(
      'flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  />
);
