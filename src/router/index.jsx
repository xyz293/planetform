import {lazy} from 'react'
import {Suspense} from 'react'
import {Spin} from 'antd'
const User = lazy(() => import('../page/user/index'))
const router =[
    {
    path: '/',
    element: (
        <Suspense fallback={<div>
            <Spin />
        </div>}>
            <User />
        </Suspense>
    )
}
]
export default router
