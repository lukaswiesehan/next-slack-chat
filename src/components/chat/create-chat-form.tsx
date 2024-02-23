'use client'

import {Input} from '@/components/ui/input'
import {createChannelName} from '@/utils/slack/create-channel-name'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Button} from '@/components/ui/button'
import {zodResolver} from '@hookform/resolvers/zod'

export const CreateChatForm = ({userId}: {userId: string}) => {
  const FormSchema = z.object({
    name: z.string().min(2, {
      message: 'Your Name should have at least 2 characters.'
    })
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: ''
    }
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const channelName = createChannelName(data.name)
      const response = await fetch('/api/create-channel', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          channelName,
          userId
        })
      })
      const {channel, error} = await response.json()
      if (error) throw error
      localStorage.setItem('chat-id', channel.id)
      alert(`Channel '${channelName}' successfully created.`)
    } catch (error) {
      console.log(error)
      alert('Something went wrong.')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <FormField
          control={form.control}
          name="name"
          render={({field}) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Start Chat</Button>
      </form>
    </Form>
  )
}
