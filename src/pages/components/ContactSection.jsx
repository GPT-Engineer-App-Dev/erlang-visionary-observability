import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from 'react-hook-form';

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the form data to your backend
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4">
          <div>
            <Input
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <Input
              placeholder="Subject"
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
          </div>
          <div>
            <Textarea
              placeholder="Message"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;