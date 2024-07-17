import { zodResolver } from "@hookform/resolvers/zod";
import { ToastAction } from "@radix-ui/react-toast";
import { GitlabIcon, LockIcon, MailIcon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Form,
  FormControl,
  FormField as FormFields,
  FormItem,
  FormLabel,
} from "./ui/form";
import { Toaster } from "./ui/toaster";
import { toast } from "./ui/use-toast";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

type FormFields = z.infer<typeof formSchema>;

export default function LoginForm() {
  const form = useForm<FormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const fetchedData = await fetch("api/auth/login/", {
        method: "POST",
        body: JSON.stringify(data)
      });

      console.log(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    const error = form.formState.errors;
    for (const [key, value] of Object.entries(error)) {
      toast({
        variant: "destructive",
        title: `invalid ${key}`,
        description: value.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <div className="flex min-h-[100dvh] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl p-10 rounded-sm space-y-8 bg-opacity-35 backdrop-blur-md bg-gray-900 text-white">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm">
            Or{" "}
            <Link
              to="/register"
              className="font-medium text-primary hover:text-primary/80"
            >
              create a new account
            </Link>
          </p>
        </div>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <FormFields
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email" className="sr-only">
                    email
                  </FormLabel>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MailIcon className="h-5 w-5 text-gray-300" />
                    </div>
                    <FormControl>
                      <Input
                        type="text"
                        autoComplete="email"
                        className="block w-full rounded-md border-input border-black bg-black pl-10 focus:border-primary focus:ring-primary"
                        placeholder="Email address"
                        {...field}
                      />
                    </FormControl>
                  </div>

                </FormItem>
              )}
            ></FormFields>

            <FormFields
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="password" className="sr-only">
                    Password
                  </FormLabel>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <LockIcon className="h-5 w-5 text-gray-300" />
                    </div>
                    <FormControl>
                      <Input
                        type="password"
                        autoComplete="current-password"
                        className="block w-full rounded-md border-input border-black bg-black pl-10 focus:border-primary focus:ring-primary"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                  </div>

                </FormItem>
              )}
            ></FormFields>

            <div className="flex items-center justify-between">
              {/* <FormFields
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <Checkbox
                        className="h-4 w-4 rounded focus:ring-primary"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <Label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-muted-foreground"
                      >
                        Remember me
                      </Label>
                    </div>
                  </FormItem>
                )}
              ></FormFields> */}
              <div className="text-sm">
                <Link
                  to="#"
                  className="font-medium text-primary hover:text-primary/80 cursor-not-allowed"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div>
              {form.formState.isSubmitting ? (
                <Button
                  type="submit"
                  className="w-full"
                  disabled
                  onClick={handleClick}
                >
                  Signing in
                </Button>
              ) : (
                <Button type="submit" className="w-full" onClick={handleClick}>
                  Sign in
                </Button>
              )}
            </div>
          </form>
        </Form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t  border-none" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2">Or continue with</span>
          </div>
        </div>
        <div>
          <Button
            variant="outline"
            className="w-full py-6 bg-black border-black cursor-not-allowed"
          >
            <GitlabIcon className="w-5 h-5 mr-2" />
            Sign in with GitHub
          </Button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
