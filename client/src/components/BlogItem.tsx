import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { HeartIcon, MessageCircleIcon } from "../assets/icons";

export default function BlogItem() {
  return (
  <div className="grid lg:grid-cols-6 w-[80%] items-center overflow-hidden rounded-lg lg:gap-4 p-2 border-2 border-gray-500">
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

