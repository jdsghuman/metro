import RouteError from '../../../components/ErrorHandling/RouteError/RouteError'
import RouteDirection from '../../../components/RouteDirection/RouteDirection'

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
  if (data.status === 400) return <RouteError>{data.detail}</RouteError>
  return <RouteDirection data={data} />
}

export default index
