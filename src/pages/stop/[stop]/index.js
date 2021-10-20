import React from 'react'
import StopInputSelector from '../../../components/stopInputSelector'
import RouteError from '../../../components/ErrorHandling/RouteError/RouteError'
import DepartureDisplay from '../../../components/departureDisplay/DepartureDisplay'

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
  if (data.status === 400)
    return (
      <>
        <StopInputSelector />
        <RouteError>{data.detail}</RouteError>
      </>
    )
  return (
    <div>
      {data?.departures?.length ? (
        <DepartureDisplay data={data} />
      ) : (
        <h3>No departures at this time</h3>
      )}
    </div>
  )
}

export default StopNumber
