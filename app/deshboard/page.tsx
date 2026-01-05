import { BottomDashboardSection } from '@/components/deshboard/BottomDashboardSection'
import { DashboardOverview } from '@/components/deshboard/DashboardOverview'
import { RecentOrders } from '@/components/deshboard/RecentOrder'
import React from 'react'

const DeshboardPage = () => {
  return (
    <div>
        <DashboardOverview />
        <RecentOrders />
        <BottomDashboardSection />
    </div>
  )
}

export default DeshboardPage