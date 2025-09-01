import {lazy} from 'react'
import {Suspense} from 'react'
import {Spin} from 'antd'
const User = lazy(() => import('../page/user/index'))
const Job = lazy(() => import('../page/user/inform/job/job'))
const Product = lazy(() => import('../page/user/product/show-product'))
const Firstpage = lazy(() => import('../page/user/firstpage/index'))
const Mainnew = lazy(() => import('../page/user/inform/new/index'))
const SearchDetail = lazy(() => import('../page/user/inform/job/job-detail'))
const Searchlist = lazy(() => import('../page/user/inform/job/searchlist'))
const Company = lazy(() => import('../page/user/inform/search/company'))
const SearchJob = lazy(() => import('../page/user/inform/search/searchjob'))
const router =[
    {
    path: '/',
    element: (
        <Suspense fallback={<div>
            <Spin />
        </div>}>
            <User />
        </Suspense>
    ),
    children:[
        {
            path:'product',
            element:(
                <Suspense fallback={<div>
                    <Spin />
                </div>}>
                    <Product />
                </Suspense>
            )
        },
        {
           path:'detail/:id',
           element:(
                <Suspense fallback={<div>
                    <Spin />
                </div>}>
                    <SearchDetail />
                </Suspense>
           )
        },
        {
           path:'list/:title',
           element:(
                <Suspense fallback={<div>
                    <Spin />
                </div>}>
                    <Searchlist />
                </Suspense>
           ),
        },

        {
            path:'firstpage',
            element:(
                <Suspense fallback={<div>
                    <Spin />
                </div>}>
                    <Firstpage />
                </Suspense>
            ),
            children:[
                {
                    path:'news',
                    element:(
                        <Suspense fallback={<div>
                            <Spin />
                        </div>}>
                            <Mainnew />
                        </Suspense>
                    )
                },
                {
                    path:'job',
                    element:(
                          <Suspense fallback={<div>
                            <Spin />
                        </div>}>
                          <Job/>
                        </Suspense>
                    )
                },
            ]

        },
    ]
    },
]
export default router
