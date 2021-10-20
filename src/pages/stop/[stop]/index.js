import useSWR from 'swr'
import { useRouter } from 'next/router'
import StopInputSelector from '../../../components/stopInputSelector'
import RouteError from '../../../components/ErrorHandling/RouteError/RouteError'
import DepartureDisplay from '../../../components/departureDisplay/DepartureDisplay'
import fetcher from '../../../components/util/fetcher'
import HeaderBlock from '../../../components/headerBlock'

const StopNumber = () => {
  const router = useRouter()

  const { stop } = router.query

  const shouldFetch = stop

  const { data, error } = useSWR(
    () => (shouldFetch ? `https://svc.metrotransit.org/nextripv2/${stop}` : null),
    fetcher,
    { refreshInterval: 60000 }
  )

  if (error) return <HeaderBlock subtitle="Failed to load" />
  if (data?.status === 400 || !data) return <HeaderBlock subtitle="Loading..." />
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
