import { NavLink } from "react-router-dom"
import { Input } from "./ui/input"
import ProfileDropdown from "./ProfileDropdown"
import { MountainIcon, SearchIcon } from "../assets/icons"


export default function NavBar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-opacity-30 backdrop-blur-md border-border">
      <div className="container flex items-center h-16 px-4 md:px-6">
        <NavLink to="#" className="mr-6 flex items-center gap-2" >
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Blog</span>
        </NavLink>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLink to="#" className="text-foreground hover:text-primary" >
            Home
          </NavLink>
          <NavLink to="#" className="text-foreground hover:text-primary" >
            Blog
          </NavLink>
          <NavLink to="#" className="text-foreground hover:text-primary" >
            About
          </NavLink>
          <NavLink to="#" className="text-foreground hover:text-primary" >
            Contact
          </NavLink>
        </nav>
        <div className="ml-auto relative flex-1 max-w-sm">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
            <SearchIcon className="h-4 w-4" />
          </div>
          <Input
            type="search"
            placeholder="Search blog..."
            className="w-full rounded-md bg-background pl-8 focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="hidden px-4 md:block">
          <ProfileDropdown />
        </div>
      </div>
    </header>
  )
}


