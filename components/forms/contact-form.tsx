'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  budget: z.string().min(1, 'Please select a budget range'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      budget: '',
      projectType: '',
      message: '',
    },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 429) {
          toast.error('Too many requests. Please wait a moment and try again.')
          return
        }
        throw new Error(data.error || 'Failed to submit form')
      }

      toast.success(data.message || 'Thank you! We\'ll get back to you within 24 hours.')
      form.reset()
    } catch (error) {
      console.error('Form submission error:', error)
      if (error instanceof Error && error.message.includes('429')) {
        toast.error('Too many requests. Please wait a moment and try again.')
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Name *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                    placeholder="Your name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Email *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                    placeholder="your@email.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Company *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                    placeholder="Company name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Budget Range *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="under-50k">Under ₹50k</SelectItem>
                    <SelectItem value="50k-1l">₹50k - ₹1L</SelectItem>
                    <SelectItem value="1l-3l">₹1L - ₹3L</SelectItem>
                    <SelectItem value="3l-plus">₹3L+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-300">Project Type *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="web-design">Web Design & Development</SelectItem>
                  <SelectItem value="e-commerce">E-Commerce Solution</SelectItem>
                  <SelectItem value="social-media">Social Media Management</SelectItem>
                  <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                  <SelectItem value="landing-page">Landing Page</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-300">Message (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={4}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  placeholder="Tell us about your project..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full bg-accent hover:bg-accent/90 text-white rounded-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Form>
  )
}
