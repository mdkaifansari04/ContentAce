'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { MainSectionWrapper } from '@/components/shared/sectionWrapper';
import { Heading } from '@/components/typography';
import { UserFormBody, userSchema } from '@/lib/validation';
import { FadeImg } from '@/components/core/fadeImg';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useUpdateUser } from '@/hooks/mutation';
import useStore from '@/store/app';
import toast from 'react-hot-toast';

const resolver = zodResolver(userSchema);

export default function DashboardProfile() {
  const form = useForm<UserFormBody>({ resolver });
  const { mutate, isPending: isUpdating } = useUpdateUser();
  const { setUser, user } = useStore();

  const onSubmit: SubmitHandler<UserFormBody> = (data) => {
    mutate(
      { name: data.name, email: data.email, bio: data.bio, userId: '009090' },
      {
        onSuccess: (response) => {
          setUser(response.user);
          toast.success('User updated successfully !');
        },
        onError: () => {
          toast.error('Something went wrong');
        },
      }
    );
  };

  return (
    <MainSectionWrapper>
      <Heading text="Profile" className="mt-10"></Heading>

      <section className="relative mt-3 bg-background">
        <div className="relative">
          <FadeImg src="../images/banner.webp" alt="banner" />

          <FadeImg
            src="../images/profile.avif"
            className="absolute top-[70%] left-20 md:left-[40%] bg-white w-32 md:w-40 md:h-40 rounded-full"
          />
        </div>

        <div className="relative p-5 md:py-20 pt-32 md:pt-36 w-full md:w-2/4 mx-auto grid grid-cols-1 gap-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                name="name"
                defaultValue={user.name ?? 'Unknown'}
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
                defaultValue={user.email ?? 'Unknown'}
                control={form.control}
                render={({ field }) => (
                  <FormItem className="mt-8 max-w-3xl">
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="bio"
                defaultValue={user.bio ?? 'Unknown'}
                control={form.control}
                render={({ field }) => (
                  <FormItem className="mt-8 max-w-3xl">
                    <FormControl>
                      <Textarea placeholder="Bio" rows={10} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={isUpdating}
                className="primary mt-6 min-w-[180px]"
              >
                {isUpdating ? 'Updating...' : 'Update'}
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </MainSectionWrapper>
  );
}
