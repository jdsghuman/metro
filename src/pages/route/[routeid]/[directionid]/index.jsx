import useSWR from 'swr'
import { useRouter } from 'next/router'
import React from 'react'
import RouteStopSelectorForm from '../../../../components/RouteStopSelectorForm'
import HeaderBlock from '../../../../components/HeaderBlock'
import fetcher from '../../../../components/util/fetcher'

const Stops = () => {
  const router = useRouter()
  const { routeid, directionid } = router.query

  const shouldFetch = routeid && directionid

  const { data, error } = useSWR(
    () =>
      shouldFetch ? `https://svc.metrotransit.org/nextripv2/stops/${routeid}/${directionid}` : null,
    fetcher,
    { refreshInterval: 60000 }
  )

  if (error) return <HeaderBlock subtitle="Failed to load" />
  if (data?.status === 400 || !data) return <HeaderBlock subtitle="Loading..." />
  return <RouteStopSelectorForm data={data} />
}

export default Stops
