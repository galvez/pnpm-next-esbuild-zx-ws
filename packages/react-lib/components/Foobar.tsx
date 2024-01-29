import React from 'react'

export type Props = {
  message: string
}

export default function Foobar (props: Props) {
  return (
  	<>
  	  <p>Something 2</p>
  	  <p>{props.message}</p>
  	</>
  )
}
