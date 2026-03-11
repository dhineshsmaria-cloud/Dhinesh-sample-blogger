export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white mt-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <p className="text-gray-300">
              A personal blog exploring web development and technology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-secondary">Home</a></li>
              <li><a href="/blog" className="hover:text-secondary">Blog</a></li>
              <li><a href="/about" className="hover:text-secondary">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-secondary">Twitter</a></li>
              <li><a href="#" className="hover:text-secondary">GitHub</a></li>
              <li><a href="#" className="hover:text-secondary">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Dhinesh Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
