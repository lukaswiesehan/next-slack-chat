'use client'

import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Button} from '@/components/ui/button'
import {zodResolver} from '@hookform/resolvers/zod'
import {Textarea} from '../ui/textarea'
import {useSWRConfig} from 'swr'

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
      mutate(`/api/chat-messages/${channelId}`)
    } catch (error) {
      console.log(error)
      alert('Something went wrong.')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <FormField
          control={form.control}
          name="message"
          render={({field}) => (
            <FormItem>
              <FormLabel className="sr-only">Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Message" autoResize {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" aria-label="Send Message">
          Send Message
        </Button>
      </form>
    </Form>
  )
}
