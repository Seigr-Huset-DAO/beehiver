import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { supabase } from './supabaseClient'
import { Row, Col, Button, Nav, NavLink, UncontrolledDropdown, NavbarBrand, NavItem, Container, DropdownToggle, DropdownItem, NavbarText,DropdownMenu } from 'reactstrap';

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (email) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
    <Col>
    <h1 className="header">Sign in</h1>
    <p className="description">Sign in via magic link with your email below</p>

        <div>
          <input
            className="inputField"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br/>
        <div>
          <Button color="warning" size="sm"
            onClick={(e) => {
              e.preventDefault()
              handleLogin(email)
            }}
            className={'button block'}
            disabled={loading}
          >
            {loading ? <span>Loading</span> : <span>Send magic link</span>}
          </Button>
        </div>
    </Col>
    </Container>
  )
}