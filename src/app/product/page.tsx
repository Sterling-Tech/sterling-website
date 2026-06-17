
import Hero from '@/components/productsNservices/Hero'
import Integration from '@/components/productsNservices/Integration'
import Products from '@/components/productsNservices/Products'
import Services, { serviceList } from '@/components/productsNservices/Services'
import { AppLayout } from '@/layouts'
import React from 'react'

export default function ProductsAndServices() {

  return (
    <AppLayout>
      <Hero/>
      <Products/>
      <Services data={serviceList} />
      <Integration/>
    </AppLayout>
  )
}
