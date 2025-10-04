import React, { Suspense ,lazy} from 'react'
import DynamicLoading from '../../components/DynamicLoading'
// import Navbar from '../Navbar'
// import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
const Navbar =lazy(()=>import("./Navbar"))
const Sidebar =lazy(()=>import('./Sidebar'))
const WrapperAdmin = () => {
  return (
    <div>

<Suspense fallback={<DynamicLoading/>}>



<Box>
<Navbar/>
<Sidebar/>
 <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "64px", ml: "240px" }}>
          <Outlet />
        </Box>
</Box>
</Suspense>

    </div>
  )
}

export default WrapperAdmin