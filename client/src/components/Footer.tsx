import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full px-4 py-6 md:px-6 border-t mt-auto border-gray-500">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; 2024 Acme Inc. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link to="#" className="text-sm hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link to="#" className="text-sm hover:underline underline-offset-4">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
  )
}
