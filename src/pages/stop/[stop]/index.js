import React from 'react'
import StopInputSelector from '../../../components/StopInputSelector'
import RouteError from '../../../components/ErrorHandling/RouteError/RouteError'

export async function getServerSideProps(context) {
  const { stop } = context.params
  const res = await fetch(`https://svc.metrotransit.org/nextripv2/${stop}`)
  const data = await res.json()
  console.log('data serverside', data)
  return {
    props: {
      data,
    },
  }
}

const StopNumber = ({ data }) => {
  console.log('data', data)
  if (data.status === 400) return <RouteError>{data.detail}</RouteError>
  return (
    <div>
      <StopInputSelector />
      {data?.departures?.length ? (
        <ul>
          {data?.departures?.map((departure) => (
            <li key={departure.trip_id}>{departure.description}</li>
          ))}
        </ul>
      ) : (
        <h3>No departures at this time</h3>
      )}
    </div>
  )
}

export default StopNumber
