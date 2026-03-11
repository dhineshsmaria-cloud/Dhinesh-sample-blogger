export default function AboutPage() {
  return (
    <div>
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4">About Me</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-primary mb-4">Welcome!</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I'm a passionate developer and tech enthusiast exploring the world of web development,
              cloud technologies, and software engineering best practices.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Through this blog, I share my learnings, experiences, and insights on various
              technologies and development methodologies. My goal is to help others grow in their
              programming journey.
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Skills & Interests</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Languages</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>JavaScript / TypeScript</li>
                  <li>Python</li>
                  <li>Node.js</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Technologies</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>React / Next.js</li>
                  <li>Web Development</li>
                  <li>Cloud Services</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-secondary text-white p-6 rounded-lg h-fit">
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">GitHub</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="mailto:contact@example.com" className="hover:underline">Email</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
