import { env } from '@/env'

const Home = () => {
  const name = env.NEXT_PUBLIC_NAME
  console.log(name)

  return (
   <h1>view</h1>
  )
}
export default Home