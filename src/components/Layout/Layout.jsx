import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import NavigationBar from './NavigationBar.jsx'
import Footer from './Footer.jsx'


const Layout = ({children}) => {
  return (
    <>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }} >
          <ToastContainer />
            <NavigationBar />
              <Container className='mt-5 text-blue-800'>{children}</Container>
        </Container>
        <Footer />
    </>
  )
}

export default Layout