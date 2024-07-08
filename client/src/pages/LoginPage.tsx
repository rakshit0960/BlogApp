import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { GitlabIcon, LockIcon, MailIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="backdrop-blur-sm bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <div className="flex min-h-[100dvh] items-center justify-center px-4 py-12 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-xl p-10 rounded-sm space-y-8 bg-opacity-35 backdrop-blur-md bg-gray-900  text-white">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Or{" "}
              <Link
                to="/register"
                className="font-medium text-primary hover:text-primary/80"
              >
                create a new account
              </Link>
            </p>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <Label htmlFor="email" className="sr-only">
                Email address
              </Label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MailIcon className="h-5 w-5 text-gray-300" />
                </div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-input bg-background pl-10 focus:border-primary focus:ring-primary"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockIcon className="h-5 w-5 text-gray-300" />
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-input bg-background pl-10 focus:border-primary focus:ring-primary"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox
                  id="remember-me"
                  name="remember-me"
                  className="h-4 w-4 rounded focus:ring-primary"
                />
                <Label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-muted-foreground"
                >
                  Remember me
                </Label>
              </div>
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
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </div>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-muted" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div>
            <Button variant="outline" className="w-full py-6">
              <GitlabIcon className="w-5 h-5 mr-2" />
              Sign in with GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// function GitlabIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
//     </svg>
//   );
// }

// function LockIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
//       <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//     </svg>
//   );
// }

// function MailIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="20" height="16" x="2" y="4" rx="2" />
//       <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//     </svg>
//   );
// }
