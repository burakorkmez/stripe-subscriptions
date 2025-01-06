



'use client'

import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useQuery } from '@tanstack/react-query'
import { checkAuthStatus } from './actions'
import { useEffect } from 'react'


const Page = () => {
    const router = useRouter()
    const { user } = useKindeBrowserClient()
    const { data } = useQuery({
        queryKey: ['checkAuthStatus'],
        queryFn: async () => await checkAuthStatus(),
    })

    useEffect(() => {
        const stripePaymentLink = localStorage.getItem('stripePaymentLink')
        if (data?.success && stripePaymentLink && user?.email) {
            localStorage.removeItem('stripePaymentLink')
            router.push(stripePaymentLink + `?prefilled_email=${user.email}`)
         } else if (data?.success === false) {
            router.push('/')
        }
     
    }, [router,user,data])

    if (data?.success)  router.push('/')
        return (
            <div className="flex flex-col justify-center items-center h-screen">
                <Loader className="animate-spin text-blue-500 mb-4" size={48} />
                <p className="text-lg font-medium">Redirecting...</p>
                <p className="text-sm text-gray-500">Please wait...</p>
            </div>
        )
    }



export default Page
