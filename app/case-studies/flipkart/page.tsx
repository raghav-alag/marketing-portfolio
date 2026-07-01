export default function FlipkartCaseStudy() {
  return (
    <div className="w-full h-screen bg-[#0F172A]">

      {/* Header */}
      <div className="h-20 border-b border-slate-700 flex items-center justify-between px-10 bg-[#111827]">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Flipkart Minutes GTM Strategy
          </h1>

          <p className="text-slate-400">
            Case Study Presentation
          </p>
        </div>

        <a
          href="/images/case-studies/flipkart.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
        >
          Download PDF
        </a>
      </div>

      {/* PDF Viewer */}
      <iframe
        src="/images/case-studies/flipkart.pdf"
        title="Flipkart Case Study"
        className="w-full h-[calc(100vh-80px)] bg-white"
      />
    </div>
  );
}