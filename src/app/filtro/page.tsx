import FilterSection from "@/components/filter-section"
import ResultsSection from "@/components/results-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Encontre o imóvel ideal</h1>
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          <FilterSection />
          <ResultsSection />
        </div>
      </div>
    </main>
  )
}
