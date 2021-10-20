import useSWR from 'swr'
import { useRouter } from 'next/router'
import RouteDirection from '../../../components/routeDirection/RouteDirection'
import HeaderBlock from '../../../components/headerBlock'
import fetcher from '../../../components/util/fetcher'

const index = () => {
  const router = useRouter()
  const { routeid } = router.query

  const shouldFetch = routeid

  const { data, error } = useSWR(
    () => (shouldFetch ? `https://svc.metrotransit.org/nextripv2/directions/${routeid}` : null),
    fetcher,
    { refreshInterval: 30000 }
  )

  if (error) return <HeaderBlock subtitle="Failed to load" />
  if (data?.status === 400 || !data) return <HeaderBlock subtitle="Loading..." />
  return <RouteDirection data={data} />
}

export default index
