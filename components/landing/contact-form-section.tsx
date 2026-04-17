"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Send,
  CheckCircle2,
  Loader2,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Message sent successfully! We'll get back to you soon.");
    form.reset();
  }

  return (
    <section
      id="contact-form"
      ref={sectionRef}
      className="relative py-16 lg:py-24 overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-foreground/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-foreground/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Side: Contact Info */}
          <div
            className={`space-y-10 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 uppercase tracking-widest">
                <span className="w-8 h-px bg-foreground/30" />
                Contact Us
              </span>
              <h2 className="text-4xl lg:text-6xl font-display tracking-tight leading-[1.1] mb-8">
                Let's build <br />
                <span className="text-muted-foreground">
                  the next big thing.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Whether you're starting a new brand or scaling an existing one,
                our team is ready to help you navigate the digital landscape
                with precision and creativity.
              </p>
            </div>

            <div className="grid gap-8">
              <div className="flex items-start gap-6 group">
                <div className="mt-1 w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground/10 transition-colors">
                  <Mail className="w-5 h-5 text-foreground/70" />
                </div>
                <div>
                  <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hello@floxiastudio.com"
                    className="text-xl font-medium hover:text-muted-foreground transition-colors underline underline-offset-8 decoration-foreground/10 hover:decoration-foreground/30"
                  >
                    hello@floxiastudio.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="mt-1 w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground/10 transition-colors">
                  <Phone className="w-5 h-5 text-foreground/70" />
                </div>
                <div>
                  <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+15551234567"
                    className="text-xl font-medium hover:text-muted-foreground transition-colors underline underline-offset-8 decoration-foreground/10 hover:decoration-foreground/30"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="mt-1 w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground/10 transition-colors">
                  <MapPin className="w-5 h-5 text-foreground/70" />
                </div>
                <div>
                  <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-1">
                    Location
                  </p>
                  <p className="text-xl font-medium">
                    San Francisco, California
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-foreground/10">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for new projects
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="bg-foreground/5 backdrop-blur-sm border border-foreground/10 p-8 lg:p-12 rounded-2xl">
              {isSuccess ? (
                <div className="py-20 flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 rounded-full bg-foreground/5 flex items-center justify-center border border-foreground/10">
                    <CheckCircle2 className="w-10 h-10 text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display">Inquiry Received</h3>
                    <p className="text-muted-foreground">
                      We'll be in touch within 24 hours.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setIsSuccess(false)}
                    className="rounded-full border-foreground/20 hover:bg-foreground/5"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <div className="grid sm:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                              Full Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Name"
                                {...field}
                                className="bg-transparent border-0 border-b border-foreground/20 focus:border-foreground rounded-none px-0 h-12 transition-all placeholder:text-muted-foreground/30 shadow-none focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage className="text-[10px] font-mono" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Email "
                                {...field}
                                className="bg-transparent border-0 border-b border-foreground/20 focus:border-foreground rounded-none px-0 h-12 transition-all placeholder:text-muted-foreground/30 shadow-none focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage className="text-[10px] font-mono" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                            Subject
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="What are you looking for?"
                              {...field}
                              className="bg-transparent border-0 border-b border-foreground/20 focus:border-foreground rounded-none px-0 h-12 transition-all placeholder:text-muted-foreground/30 shadow-none focus-visible:ring-0"
                            />
                          </FormControl>
                          <FormMessage className="text-[10px] font-mono" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project, goals, and timeline..."
                              className="min-h-[120px] bg-transparent border-0 border-b border-foreground/20 focus:border-foreground rounded-none px-0 py-4 transition-all resize-none placeholder:text-muted-foreground/30 shadow-none focus-visible:ring-0"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-[10px] font-mono" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 h-14 px-10 rounded-full text-base group transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
