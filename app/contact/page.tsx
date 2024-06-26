"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
        // Assuming the form elements have the 'name' attribute set correctly
        name: (event.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
        email: (event.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
        message: (event.currentTarget.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    const response = await fetch('/contact/sendMail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (response.ok) {
        alert('Message sent successfully');
    } else {
        alert('Failed to send message');
    }
};

export default function Contact() {
    return (
        <div>
            
            <div className="mx-auto max-w-md space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Get in Touch</h2>
                    <p className="text-muted-foreground">Fill out the form below and I'll get back to you as soon as possible.</p>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message" className="min-h-[120px]" required />
                    </div>
                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                </form>
            </div>
        
        </div>
    );
}