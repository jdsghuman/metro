import React from 'react'
import RouteStopSelectorForm from '../../../../components/RouteStopSelectorForm'

export async function getServerSideProps(context) {
  const { routeid, directionid } = context.params

  const res = await fetch(`https://svc.metrotransit.org/nextripv2/stops/${routeid}/${directionid}`)
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
