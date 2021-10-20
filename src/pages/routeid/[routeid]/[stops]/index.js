import React from 'react'
import RouteStopSelectorForm from '../../../../components/routeStopSelectorForm/RouteStopSelectorForm'

export async function getServerSideProps(context) {
  const { route, stops } = context.params

  const res = await fetch(`https://svc.metrotransit.org/nextripv2/stops/${route}/${stops}`)
  const data = await res.json()
  console.log('data serverside', data)
  return {
    props: {
      data,
    },
  }
}

const Stops = ({ data }) => {
  return <RouteStopSelectorForm data={data} />
}

export default Stops
