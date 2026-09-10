import Link from 'next/link'
import Banner from '@/components/Banner'
import Card from '@/components/Card'

const venues = [
  { name: 'The Bloom Pavilion', img: '/images/venue-card.jpg' },
  { name: 'Spark Space', img: '/images/venue-card.jpg' },
  { name: 'The Grand Table', img: '/images/venue-card.jpg' },
]

export default function Home() {
  return (
    <div>
      <Banner />
      <main className="mx-auto max-w-6xl p-8">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-2xl font-medium">Featured venues</h2>
          <Link href="/booking" className="underline">
            Book a venue
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {venues.map((v) => (
            <Card key={v.name} venueName={v.name} imgSrc={v.img} />
          ))}
        </div>
      </main>
    </div>
  )
}
