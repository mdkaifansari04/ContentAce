"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { Heading } from "@/components/typography";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FeedbackBody, feedbackSchema } from "@/lib/validation";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MainSectionWrapper } from "@/components/shared/sectionWrapper";

const resolver = zodResolver(feedbackSchema);

export default function DashboardFeatureRequest() {
  const form = useForm<FeedbackBody>({ resolver });

  const onSubmit: SubmitHandler<FeedbackBody> = (data) => {
    // mutate(data, {
    //   onSuccess: () => {
    //     toast({
    //       title: "Thank you 🙏",
    //       description: "Your request is submitted",
    //       variant: "success",
    //     });
    //     form.reset({});
    //   },
    // });
  };

  return (
    <MainSectionWrapper>
      <Heading text="Request a feature"></Heading>
      <p className="mt-2 max-w-2xl text-sm tracking-tight text-secondary-text wrap-balance md:text-base">
        Share your ideas and suggestions to shape the future of our app. Tell us
        what features {"you'd"} love to see, and our team will consider your
        input as we work on enhancing your app experience. Your feedback
        matters!
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="description"
            defaultValue=""
            control={form.control}
            render={({ field }) => (
              <FormItem className="mt-8 max-w-3xl">
                <FormControl>
                  <Textarea placeholder="..." rows={8} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="primary mt-6 min-w-[180px]">
            Submit
            {/* {isPending ? "Submitting..." : "Submit"} */}
          </Button>
        </form>
      </Form>
    </MainSectionWrapper>
  );
}
