export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Junior Software Developer</h3>
          <p className="text-gray-600">Stellar Innovation Pvt. Ltd | Jul 2024 – Present | Bengaluru, India</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Developed responsive, accessible, and user-friendly interfaces using React.js, Next.js, Tailwind CSS.</li>
            <li>Optimized website performance by 25% with lazy loading, JS/CSS minification, and performance best practices.</li>
            <li>Led the end-to-end development of the company website from scratch.</li>
            <li>Implemented RESTful APIs for backend services.</li>
            <li>Built an internal company portal using Next.js for real-time announcements.</li>
            <li>Integrated Redux for state management and handled secure authentication workflows.</li>
            <li>Resolved vulnerabilities by fixing Snyk-reported issues across projects.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
