import { UserDetailScreen } from 'app/features/user/detail-screen'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <UserDetailScreen id={id as string} />
    </>
  )
}
