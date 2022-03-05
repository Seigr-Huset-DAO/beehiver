import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Auth from './Auth'
import Account from './Account'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import { Container, Col, Row } from 'reactstrap';


export default function Login() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (

<Container>
    <Row>
    <Col
      className="bg-light border"
      xs="6"
    >
      {!session ? <Auth /> : <Account key={session.user.id} session={session} />}

     </Col>
     </Row>
     </Container>
    )
}