export default function LeanSixSigmaCertificate() {
  return (
    <div className="w-full h-screen bg-[#0F172A]">

      {/* Header */}
      <div className="h-20 bg-[#111827] border-b border-slate-700 flex items-center justify-between px-10">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Lean Six Sigma Green Belt
          </h1>

          <p className="text-slate-400">
            Certification
          </p>
        </div>

        <a
          href="/certificates/lean-six-sigma.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
        >
          Download PDF
        </a>

      </div>

      <iframe
        src="/certificates/lean-six-sigma.pdf#toolbar=1"
        title="Lean Six Sigma Certificate"
        className="w-full h-[calc(100vh-80px)] bg-white"
      />

    </div>
  );
}