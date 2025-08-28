export default function Projects() {
  const projects = [
    {
      title: "Internal Company Portal",
      tech: "Next.js",
      details: [
        "Designed and developed portal enabling real-time publishing of organizational news.",
        "Built user-friendly employee interface and admin dashboard for HR.",
        "Implemented secure authentication with token-based login & session handling.",
      ],
    },
    {
      title: "Company Website",
      tech: "HTML, Tailwind",
      details: [
        "Re-engineered the website from scratch, resolving layout & styling issues.",
        "Delivered responsive design optimized for all devices.",
        "Improved load speed by 25% with lazy loading & optimization.",
        "Achieved 100% SEO score with on-page optimization.",
      ],
    },
    {
      title: "Healthcare Chatbot",
      tech: "Machine Learning Project",
      details: [
        "Crafted chatbot for disease diagnosis using NLP + ML algorithms.",
        "Implemented Support Vector Machine and Decision Tree models.",
        "Achieved high precision in disease classification.",
      ],
    },
  ];

  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.title} className="border p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 mb-2">{project.tech}</p>
            <ul className="list-disc ml-6 space-y-1">
              {project.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
