import { GitlabIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { Input } from "..//components/ui/input"
import { MountainIcon } from "../assets/icons"
import { Button } from "../components/ui/button"

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
              "This library has saved me countless hours of work and helped me\n deliver stunning designs to my clients
              faster than ever before."
            </blockquote>
            <p className="mt-4 text-sm">Sofia Davis</p>
          </div>
        </div>
        <div className="flex flex-col r w-min-[85%] lg:w-1/2 p-8 bg-opacity-40 backdrop-blur-md bg-gray-800 text-white">
          <div className="flex justify-between lg:justify-end mb-4 h-[32%]">
            <div className="lg:hidden flex space-x-2">
              <MountainIcon className="w-6 h-6" />
              <span className="text-xl font-semibold">Acme Inc</span>
            </div>
            <Link to="/login" className="text-sm font-medium hover:underline" >
              Login
            </Link>
          </div>
          <div className="max-w-md mx-auto h-full">
            <h2 className="mb-2 text-2xl font-bold">Create an account</h2>
            <p className="mb-6 text-sm text-gray-400">Enter your email below to create your account</p>
            <div className="space-y-4">
              <Input type="email" placeholder="name@example.com" className="w-full" />
              <Button className="w-full">Sign In with Email</Button>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-sm text-gray-400">OR CONTINUE WITH</span>
              </div>
              <Button variant="secondary" className="w-full cursor-not-allowed">
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
  )
}
