import React from 'react'

export async function getServerSideProps(context) {
  const { routeid, directionid, placecode } = context.params
  const res = await fetch(
    `https://svc.metrotransit.org/nextripv2/${routeid}/${directionid}/${placecode}`
  )
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}

const index = ({ data }) => {
  console.log('data in placecode', data)
  return (
    <ul>
      {data.departures.map((departure) => {
        return (
          <li key={departure.trip_id}>
            {departure.description} - {departure.departure_text}
          </li>
        )
      })}
    </ul>
  )
}

export default index
