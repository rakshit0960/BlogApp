import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function BlogItem() {
  return (
  <div className="grid lg:grid-cols-6 w-[80%] items-center border-2 overflow-hidden rounded-lg lg:gap-4 p-2 cursor-pointer">
      <Link  to="#" className="row-span-1 lg:row-span-1 lg:order-1 overflow-hidden rounded-lg lg:col-span-2 aspect-video">
        <img
          src="https://plus.unsplash.com/premium_photo-1720020552749-a103c0157ff3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Blog post cover image"
          className="object-fill"
        />
      </Link>
      <div className="py-10 lg:py-2 h-full lg:row-span-1 lg:col-span-4 flex flex-col justify-between w-full px-2">
        <div className="mb-4 flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <div className="text-sm font-medium text-muted-foreground">John Doe</div>
            <div className="text-xs text-muted-foreground">May 15, 2023</div>
          </div>
        </div>
        <Link to="#" >
          <h3 className="text-xl font-semibold transition-colors duration-200 group-hover:text-primary">
            The Future of Web Development: Trends and Innovations
          </h3>
        </Link>
        <div className="mt-4 overflow-y-auto">
          <p className="text-sm text-muted-foreground">
            Discover the latest trends and innovations shaping the future of web development. From AI-powered tools to
            serverless architectures, explore the technologies that will redefine how we build and deploy web
            applications. 
          </p>
        </div>
          <div className="flex items-center space-x-2 mt-8">
            <HeartIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">123 likes</span>
            <MessageCircleIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">45 comments</span>
          </div>
      </div>
    </div>
  )
}

function HeartIcon(props: {className?: string}) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MessageCircleIcon(props: {className?: string}) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}