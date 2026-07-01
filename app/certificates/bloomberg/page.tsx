export default function BloombergCertificate() {
  return (
    <div className="w-full h-screen bg-[#0F172A]">

      {/* Header */}
      <div className="h-20 bg-[#111827] border-b border-slate-700 flex items-center justify-between px-10">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Bloomberg Market Concepts Certificate
          </h1>

          <p className="text-slate-400">
            Bloomberg Market Concepts (BMC)
          </p>
        </div>

        <a
          href="/certificates/bloomberg.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold"
        >
          Download PDF
        </a>

      </div>

      <iframe
        src="/certificates/bloomberg.pdf#toolbar=1"
        className="w-full h-[calc(100vh-80px)] bg-white"
        title="Bloomberg Certificate"
      />

    </div>
  );
}