import React from 'react'

const DashboardLayout = ({sideMenu,children}) => {
  return (
   <>
   <div>
    <aside>
        {sideMenu}
    </aside>
    <main>
        {children}
    </main>
   </div>
   </>
  )
}

export default DashboardLayout