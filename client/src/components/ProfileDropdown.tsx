import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LogOutIcon, SettingsIcon, UserIcon } from "../assets/icons";

interface prop {
  imageSrc?: string;
  fallBack?: string;
  name?: string;
  email?: string;
}
// default props for now
const defaultName = "Rakshit Mehta";
const defaultEmail = "rakshit0960@gmail.com";
export default function ProfileDropdown({
  imageSrc,
  fallBack = "RM",
  name = defaultName,
  email = defaultEmail,
}: prop) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={imageSrc} />
            <AvatarFallback>{fallBack}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 p-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={imageSrc} />
            <AvatarFallback>{fallBack}</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <div className="text-lg font-semibold">{name}</div>
            <div className="text-sm text-muted-foreground">{email}</div>
          </div>
        </div>
        <DropdownMenuSeparator className="my-2" />
        <DropdownMenuItem>
          <Link to="#" className="flex items-center gap-2 cursor-not-allowed">
            <UserIcon className="h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="#" className="flex items-center gap-2 cursor-not-allowed">
            <SettingsIcon className="h-4 w-4" />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-2" />
        <DropdownMenuItem>
          <Link to="#" className="flex items-center gap-2">
            <LogOutIcon className="h-4 w-4" />
            <span>Logout</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
