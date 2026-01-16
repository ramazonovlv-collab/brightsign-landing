import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Send, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Имя должно содержать минимум 2 символа" })
    .max(100, { message: "Имя не должно превышать 100 символов" }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Введите корректный номер телефона" })
    .max(20, { message: "Номер телефона слишком длинный" })
    .regex(/^[\d\s\-\+\(\)]+$/, { message: "Неверный формат номера телефона" }),
  message: z
    .string()
    .trim()
    .max(1000, { message: "Сообщение не должно превышать 1000 символов" })
    .optional(),
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const { data: response, error } = await supabase.functions.invoke(
        "send-telegram",
        {
          body: {
            name: data.name,
            phone: data.phone,
            message: data.message,
          },
        }
      );

      if (error) {
        throw error;
      }

      toast({
        title: language === "ru" ? "Заявка отправлена!" : "Request sent!",
        description:
          language === "ru"
            ? "Мы свяжемся с вами в ближайшее время"
            : "We will contact you soon",
      });

      form.reset();
    } catch (error: any) {
      console.error("Error sending form:", error);
      toast({
        title: language === "ru" ? "Ошибка" : "Error",
        description:
          language === "ru"
            ? "Не удалось отправить заявку. Попробуйте позже"
            : "Failed to send request. Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">
                {language === "ru" ? "Ваше имя" : "Your name"} *
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={language === "ru" ? "Иван Иванов" : "John Doe"}
                  className="bg-background border-border"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">
                {language === "ru" ? "Телефон" : "Phone"} *
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="+7 (999) 123-45-67"
                  className="bg-background border-border"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">
                {language === "ru" ? "Сообщение" : "Message"}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={
                    language === "ru"
                      ? "Расскажите о вашем проекте..."
                      : "Tell us about your project..."
                  }
                  className="bg-background border-border min-h-[100px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
          variant="cta"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {language === "ru" ? "Отправка..." : "Sending..."}
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              {language === "ru" ? "Отправить заявку" : "Send request"}
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};
