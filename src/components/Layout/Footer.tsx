import { Link } from 'react-router-dom'
import { Instagram, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold gradient-text">CreatorPilot</span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Your AI Content Team in One App. Script, speak, edit, schedule, monetize — all with AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-600 hover:text-purple-600">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-purple-600">Pricing</Link></li>
              <li><Link to="/demo" className="text-gray-600 hover:text-purple-600">Demo</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-500">
          <p>Built with Bolt.new • Deployed via Netlify • Domain by Entri</p>
          <p className="mt-2">© 2024 CreatorPilot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer