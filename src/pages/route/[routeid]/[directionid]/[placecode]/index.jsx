import React from 'react'
import DepartureDisplay from '../../../../../components/departureDisplay/DepartureDisplay'

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
  return <DepartureDisplay data={data} />
}

export default index
