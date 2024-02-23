'use client'

import * as React from 'react'
import {cn} from '@/utils/cn'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  autoResize?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({className, autoResize = false, ...props}, ref) => {
  const onInput = (e: any) => {
    e.target.style.height = 'auto'
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  return (
    <textarea
      className={cn(
        'flex w-full h-[52px] max-h-[112px] rounded-lg border border-slate-200 text-black bg-white px-2.5 py-1.5 text-sm ring-offset-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300',
        autoResize && 'resize-none',
        className
      )}
      ref={ref}
      onInput={autoResize ? onInput : undefined}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export {Textarea}
