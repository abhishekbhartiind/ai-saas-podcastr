import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcastr</h1>
        <Button className="bg-orange-1 text-white-1"></Button>
      </section>
    </div>
  )
}
