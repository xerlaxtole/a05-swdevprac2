import Banner from '@/components/Banner'
import Card from '@/components/Card'

const venues = [
  { venueName: 'The Bloom Pavilion', imgSrc: '/img/bloom.jpg' },
  { venueName: 'Spark Space', imgSrc: '/img/sparkspace.jpg' },
  { venueName: 'The Grand Table', imgSrc: '/img/grandtable.jpg' },
]

export default function Home() {
  return (
    <div>
      <Banner />
      <main className="mx-auto max-w-6xl p-8">
        <h2 className="mb-6 text-2xl font-medium">Featured venues</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {venues.map((v) => (
            <Card key={v.venueName} {...v} />
          ))}
        </div>
      </main>
    </div>
  )
}
