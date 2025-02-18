"use client"

import { Tiles } from "@/components/ui/tiles"

export function TilesDemo() {
  return (
    <div className="w-full h-screen">
      <Tiles 
        rows={100} 
        cols={8}
        tileSize="md"
      />
    </div>
  )
}