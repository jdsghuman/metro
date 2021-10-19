import React from 'react'
import { useRouter } from 'next/router'
import RouteError from '../../../components/ErrorHandling/RouteError/RouteError'

export async function getServerSideProps(context) {
  const { routeid } = context.params
  const res = await fetch(`https://svc.metrotransit.org/nextripv2/directions/${routeid}`)
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}

const index = ({ data }) => {
  const router = useRouter()
  console.log('router', router)
  const getStops = (directionid) => {
    router.push(`${router.asPath}/${directionid}`)
  }

  if (data.status === 400) return <RouteError>{data.detail}</RouteError>
  return (
    <div>
      <h3>Select Direction</h3>
      {data.map((route) => {
        return (
          <button onClick={() => getStops(route.direction_id)} key={route.direction_id}>
            {route.direction_name}
          </button>
        )
      })}
    </div>
  )
}

export default index
