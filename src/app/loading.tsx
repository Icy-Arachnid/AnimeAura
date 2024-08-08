import { CardAnimeSkeleton } from '@/components/ui/CardAnimeSkeleton'
import React from 'react'

export default function Loading () {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-auto">
        <CardAnimeSkeleton/>
        <CardAnimeSkeleton/>
        <CardAnimeSkeleton/>
        <CardAnimeSkeleton/>
        <CardAnimeSkeleton/>
        <CardAnimeSkeleton/>
        <CardAnimeSkeleton/>
        <CardAnimeSkeleton/>
        <CardAnimeSkeleton/>
        <CardAnimeSkeleton/>
    </div>
  )
}
