'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Heading } from '@/components/typography';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { contactFormSchema, ContactFormSchema } from '@/lib/validation';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MainSectionWrapper } from '@/components/shared/sectionWrapper';
import { Input } from '@/components/ui/input';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useState } from 'react';

const resolver = zodResolver(contactFormSchema);

export default function DashboardContactPage() {
  const form = useForm<ContactFormSchema>({ resolver });
  const [pending, setPending] = useState(false);

  const onSubmit: SubmitHandler<ContactFormSchema> = async (data) => {
    setPending(true);
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
      data,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );
    setPending(false);
    form.reset();
    toast.success(
      'Your message has been sent successfully! We will get back to you soon.'
    );
  };

  return (
    <MainSectionWrapper>
      <Heading text="Contact"></Heading>
      <p className="mt-2 max-w-2xl text-sm tracking-tight text-secondary-text wrap-balance md:text-base">
        Get answers to common questions and troubleshoot issues for a seamless
        app experience. If you need further assistance, contact our support
        team.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="name"
            defaultValue=""
            control={form.control}
            render={({ field }) => (
              <FormItem className="mt-8 max-w-3xl">
                <FormControl>
                  <Input type="text" placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            defaultValue=""
            control={form.control}
            render={({ field }) => (
              <FormItem className="mt-4 max-w-3xl">
                <FormControl>
                  <Input type="email" placeholder="Email Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="message"
            defaultValue=""
            control={form.control}
            render={({ field }) => (
              <FormItem className="mt-4 max-w-3xl">
                <FormControl>
                  <Textarea placeholder="Message" rows={10} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={pending} className="primary mt-6 min-w-[180px]">
            {pending ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </Form>
    </MainSectionWrapper>
  );
}
