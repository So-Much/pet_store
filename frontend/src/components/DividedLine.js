import React from 'react'

export default function DividedLine({size}) {
  return (
    <div className="w-10 h-1 bg-green-600 rounded-full my-4" style={{width : size.width, height : size.height}}></div>
  )
}
