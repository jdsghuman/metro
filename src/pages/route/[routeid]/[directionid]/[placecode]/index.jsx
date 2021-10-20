import useSWR from 'swr'
import { useRouter } from 'next/router'
import DepartureDisplay from '../../../../../components/departureDisplay/DepartureDisplay'
import fetcher from '../../../../../components/util/fetcher'
import HeaderBlock from '../../../../../components/headerBlock'

const index = () => {
  const router = useRouter()
  const { routeid, directionid, placecode } = router.query

  const shouldFetch = routeid && directionid && placecode

  const { data, error } = useSWR(
    () =>
      shouldFetch
        ? `https://svc.metrotransit.org/nextripv2/${routeid}/${directionid}/${placecode}`
        : null,
    fetcher,
    { refreshInterval: 60000 }
  )

  if (error) return <HeaderBlock subtitle="Failed to load" />
  if (data?.status === 400 || !data) return <HeaderBlock subtitle="Loading..." />
  return <DepartureDisplay data={data} />
}

export default index
