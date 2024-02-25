'use client'

import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Button} from '@/components/ui/button'
import {zodResolver} from '@hookform/resolvers/zod'
import {Textarea} from '../ui/textarea'
import {useSWRConfig} from 'swr'
import {SendIcon} from '../icons/send'
import {useEffect} from 'react'

export const MessageForm = () => {
  const {mutate} = useSWRConfig()

  const FormSchema = z.object({
    message: z.string()
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      message: ''
    }
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const channelId = localStorage['chat-id']
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          channelId,
          message: data.message
        })
      })
      const {ok, error} = await response.json()
      if (error) throw error
      form.reset()
      mutate(`/api/chat/messages?channel-id=${channelId}`)
    } catch (error) {
      console.log(error)
      alert('Something went wrong.')
    }
  }

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        onSubmit(form.getValues())
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start gap-2">
        <FormField
          control={form.control}
          name="message"
          render={({field}) => (
            <FormItem className="grow">
              <FormLabel className="sr-only">Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Message" required autoResize {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" aria-label="Send Message" className="shrink-0 h-[3.25rem]">
          <SendIcon className="h-4 -mx-1.5 text-white" />
        </Button>
      </form>
    </Form>
  )
}
