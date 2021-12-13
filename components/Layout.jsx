import Head from 'next/head';
import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Lagacy Real State</title>
    </Head>
    <Box maxWidth="1280px" m="auto">
      <header>
        <Navbar/>
      </header>
      <main>
        {children}
      </main>
      <footer>

      </footer>
    </Box>
  </>
)

export default Layout;
