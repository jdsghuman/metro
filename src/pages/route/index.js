import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import RouteSelectorForm from '../../components/RouteSelectorForm'

export async function getStaticProps() {
  const res = await fetch('https://svc.metrotransit.org/nextripv2/routes')
  const routes = await res.json()
  return {
    props: {
      routes,
    },
    revalidate: 60,
  }
}

const index = ({ routes }) => {
  return <RouteSelectorForm routes={routes} />
}

export default index
