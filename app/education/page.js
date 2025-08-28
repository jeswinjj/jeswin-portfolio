export default function Education() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">B.Tech in Computer Science Engineering</h3>
          <p className="text-gray-600">Christ University | 2020 – 2024 | CGPA: 8.00/10</p>
        </div>

        <h3 className="text-2xl font-semibold mt-8">Certificates</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>IBM Developer Skills Network: Introduction to Data Science</li>
          <li>CCNAv7: Introduction to Networks</li>
          <li>NPTEL: Software Testing</li>
          <li>Coursera: Programming for Everybody (Getting Started with Python)</li>
        </ul>
      </div>
    </section>
  );
}
