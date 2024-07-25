// 'use client'
// import React from 'react'
// import DashboardCard from './_components/DashboardCard'
// import TotalForm from './_components/TotalForm'
// import AnnouncementForm from './_components/AnnouncementForm'
// import ActivityForm from './_components/ActivityForm'
// import ScheduleForm from './_components/ScheduleForm'
// import { checkAuth } from '@/middleware/auth'
// import { NextPageContext } from 'next'
// import { useRouter } from 'next/navigation'

// interface DashboardProps {
//   isAuthorized: boolean
// }

// export default function Dashboard({ isAuthorized }: DashboardProps) {

//   const router = useRouter()

//   // if (!isAuthorized) {
//   //     return router.push('/login');
//   // }

//   return (
//     <div className='mt-4'>
//       <div className="flex gap-2">
//         <div className="" style={{ flex: 4 }}>
//           <div className="flex gap-4">
//             <DashboardCard />
//             <DashboardCard />
//             <DashboardCard />
//           </div>
//           <div className="mt-4 flex gap-4">
//             <TotalForm />
//             <TotalForm />
//           </div>
//           <div className="my-4">
//             <AnnouncementForm />
//           </div>
//         </div>

//         <div className="" style={{ flex: 2 }}>
//           <ActivityForm />
//           <div className="my-4">
//             <ScheduleForm />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// Dashboard.getInitialProps = async (
//   context: NextPageContext
// ): Promise<DashboardProps> => {
//   //@ts-ignore
//   const isAuthorized = await checkAuth(context.req, context.res);
//   return { isAuthorized };
// };
'use client'

import React from 'react'
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { Button } from '@/components/ui/button';
import DashCard from './_components/DashCard';


function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <DashCard
          title='Events Attended'
          value={5}
          subtile='Upcoming'
          recent={'2 recently attended'}
        />
        <DashCard
          title='Downloads'
          value={4}
          subtile='Upcoming'
          recent={'2 recently downloaded'}
        />
        <DashCard
          title='Events Hosted'
          value={2}
          subtile='Upcoming'
          recent={'2 recently hosted'}
        />
      </div>
    </div>
  )
}

export default Dashboard