import { GitlabIcon, MailIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { MountainIcon } from "../assets/icons";
import { Button } from "../components/ui/button";

export default function RegisterPage() {
  return (
    <div className="grid place-content-center h-screen backdrop-blur-sm bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <div className="flex min-h-[80vh] font-Inter ">
        <div className="hidden lg:flex flex-col justify-between lg:w-1/2 p-8 bg-opacity-30 backdrop-blur-md bg-gray-900  text-white">
          <div>
            <div className="flex items-center space-x-2">
              <MountainIcon className="w-6 h-6" />
              <span className="text-xl font-semibold">Blog Inc</span>
            </div>
          </div>
          <div className="pb-8">
            <blockquote className="text-lg italic">
              "This Blog Site has saved me countless hours of work and helped me
              write and read blogs faster than ever before."
            </blockquote>
            <p className="mt-4 text-sm">Sofia Davis</p>
          </div>
        </div>
        <div className="flex flex-col r w-min-[85%] lg:w-1/2 p-8 bg-opacity-40 backdrop-blur-md bg-gray-800 text-white">
          <div className="flex justify-between lg:justify-end mb-4 h-[32%]">
            <div className="lg:hidden flex space-x-2">
              <MountainIcon className="w-6 h-6" />
              <span className="text-xl font-semibold">Blog Inc</span>
            </div>
            <Link to="/login" className="text-sm font-medium hover:underline">
              Login
            </Link>
          </div>
          <div className="max-w-md mx-auto h-full">
            <h2 className="mb-2 text-2xl font-bold">Create an account</h2>
            <p className="mb-6 text-sm text-gray-400">
              Enter your email below to create your account
            </p>
            <div className="space-y-4">
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MailIcon className="h-5 w-5 text-gray-300" />
                </div>
              {/* <Input type="email" placeholder="name@example.com" className="w-full border-black bg-black" /> */}
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-input border-black bg-black pl-10 focus:border-primary focus:ring-primary"
                  placeholder="name@example.com"
                />
              </div>
              <Button className="w-full">Sign In with Email</Button>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-sm text-gray-400">OR CONTINUE WITH</span>
              </div>
              <Button
                variant="outline"
                className="w-full cursor-not-allowed border-black bg-black"
              >
                <GitlabIcon className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>
            <p className="mt-6 text-xs text-gray-400">
              By clicking continue, you agree to our{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
