"use client";

export default function Skills() {
  const categories = [
    {
      title: "Programming",
      skills: [
        { name: "React.js", logo: "/logos/react.svg" },
        { name: "Next.js", logo: "/logos/nextjs.svg" },
        { name: "JavaScript", logo: "/logos/javascript.svg" },
        { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
        { name: "Python", logo: "/logos/python.svg" },
        { name: "C", logo: "/logos/c.svg" },
        { name: "Java", logo: "/logos/java.svg" },
        { name: "HTML", logo: "/logos/html.svg" },
        { name: "PHP", logo: "/logos/php.svg" },
      ],
    },
    {
      title: "Analytics",
      skills: [
        { name: "Power BI", logo: "/logos/powerbi.svg" },
        { name: "SPSS", logo: "/logos/spss.svg" },
      ],
    },
    {
      title: "Version Control & Collaboration",
      skills: [
        { name: "GitHub", logo: "/logos/github.svg" },
        { name: "Jira", logo: "/logos/jira.svg" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", logo: "/logos/mysql.svg" },
        { name: "SQL Querying", logo: "/logos/sql.svg" },
        { name: "Microsoft Excel", logo: "/logos/excel.svg" },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Communication", logo: "/logos/communication.svg" },
        { name: "Leadership", logo: "/logos/leadership.svg" },
        { name: "Team Work", logo: "/logos/teamwork.svg" },
        { name: "Critical Thinking", logo: "/logos/thinking.svg" },
        { name: "Time Management", logo: "/logos/timemanagement.svg" },
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((category) => (
          <div
            key={category.title}
            className="bg-white/10 dark:bg-black/30 p-6 rounded-2xl shadow-md backdrop-blur-md border border-gray-200 dark:border-gray-700 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-semibold mb-4 text-[var(--accent)]">
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-3 text-lg">
                  {/* Logo Placeholder */}
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-6 h-6 object-contain"
                  />
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
