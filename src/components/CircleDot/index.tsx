import React from 'react'

export default (props: {size: number, color: string}) => {
  return (
    <svg width={props.size} height={props.size} viewBox={`${props.size}, ${props.size}`}>
      <circle cx={props.size/2} cy={props.size/2} r={props.size/2} fill={props.color} />
    </svg>
  )
}
