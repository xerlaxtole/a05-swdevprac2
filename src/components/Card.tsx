import Image from 'next/image'
import InteractiveCard from './InteractiveCard'

export default function Card({ imgSrc, venueName }: { imgSrc: string; venueName: string }) {
  return (
    <InteractiveCard>
      <div className="relative w-full h-48">
        <Image src={imgSrc} alt={venueName} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="p-4 text-center font-medium">{venueName}</div>
    </InteractiveCard>
  )
}
