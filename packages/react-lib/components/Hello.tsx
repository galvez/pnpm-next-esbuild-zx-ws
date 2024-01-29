import React from 'react'

export type Props = {
  message: string
}

export default function Hello (props: Props) {
  return (
  	<>
  	  <p>Something 23</p>
  	  <p>{props.message}</p>
  	</>
  )
}
