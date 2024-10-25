import Image from 'next/image'
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react'

export default function SRKEventInstagramEmbed() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="flex items-center p-4">
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="SRK Event Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="ml-3">
          <span className="text-sm font-semibold">srkevent</span>
          <span className="text-xs text-gray-500 block">Follow</span>
        </div>
        <button className="ml-auto text-sm font-semibold text-blue-500">
          View profile
        </button>
      </div>
      <div className="relative h-96">
        <Image
          src="/placeholder.svg?height=384&width=384"
          alt="SRK Event Instagram post"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-4">
            <Heart className="w-6 h-6 cursor-pointer" />
            <MessageCircle className="w-6 h-6 cursor-pointer" />
            <Send className="w-6 h-6 cursor-pointer" />
          </div>
          <Bookmark className="w-6 h-6 cursor-pointer" />
        </div>
        <p className="text-sm font-semibold mb-2">Liked by others</p>
        <p className="text-sm">
          <span className="font-semibold">srkevent</span> Experience the magic of our events! #SRKEvent
        </p>
        <p className="text-xs text-gray-500 mt-2 cursor-pointer">View all comments</p>
      </div>
      <div className="border-t p-4">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full text-sm outline-none"
        />
      </div>
      <div className="border-t p-4 text-center text-sm text-gray-500">
        <p>Contact us: 7386450477</p>
      </div>
    </div>
  )
}