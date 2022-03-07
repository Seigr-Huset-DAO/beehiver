import { useState } from 'react';
import { FcTodoList } from 'react-icons/fc'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { TiDeleteOutline } from 'react-icons/ti'
import { Alert, Row, Col, Button, FormGroup, Label, Nav, NavLink, CardText, CardTitle, Card, Container, DropdownToggle, DropdownItem, NavbarText, Form, Input, DropdownMenu } from 'reactstrap';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ApiariesAdd = () => {
  const [apiary_name, setApiary_name, beehives_nr, established] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    if (apiary_name === '') return;
  };
  return (
      <Container>
    <Form className="Input-container">

      <Input className="Input-field App-border-radius" placeholder="Apiary's name" type="text" value={apiary_name} onChange={(e) => setApiary_name(e.target.value)} />

      <FormGroup>
    <Label for="beehives_nr">
      Select
    </Label>
    <Input
    className="Input-field App-border-radius" placeholder="Beehives number" value={beehives_nr} onChange={(e) => setApiary_name(e.target.value)}
      id="exampleSelect"
      name="select"
      type="select" 
    >
      <option>
        1
      </option>
      <option>
        2
      </option>
      <option>
        3
      </option>
      <option>
        4
      </option>
      <option>
        5
      </option>
      <option>
        6
      </option>
      <option>
        7
      </option>
      <option>
        8
      </option>
      <option>
        9
      </option>
      <option>
        10
      </option>
    </Input>
  </FormGroup>

      <Input className="Input-field App-border-radius" placeholder="Established" type="date" value={established} onChange={(e) => setApiary_name(e.target.value)} />

<br/>
      <Button color="warning" outline type="submit" onClick={onSubmit} className="App-button Add-button App-border-radius">Add <IoMdAddCircleOutline size={20} style={{ verticalAlign: "middle" }} /></Button>

    </Form>
    </Container>
  );
};

const Apiaries = ({ id, completed, apiary_name }) => {
  const [apiaries, setApiaries] = useState(apiary_name);

  const onEditApiaries = (id, apiary_name) => {
    
  };

  const onCompleteApiaries = (id) => {
    
  }

  const onDeleteApiaries = () => {
    
  };

  return <div key={id} className="List-tile App-border-radius">
    <input checked={completed} className="List-tile-leading" type="checkbox" onChange={(e) => {
      e.preventDefault();
      onCompleteApiaries(id);
    }} />
    <input style={{
      width: '100%',
      height: '1.75rem',
      fontSize: '1.5rem',
      background: 'transparent',
      border: '0.02rem solid black',
      borderRadius: 8,
      paddingLeft: 8
    }} value={apiaries} onChange={(e) => {
      const { value } = e.target;
      setApiaries(value);
    }} />
    {apiary_name !== apiaries && <button onClick={() => onEditApiaries(id, apiaries)} className="Apiaries-update-submit">save</button>}
    <TiDeleteOutline className="List-tile-trailing" onClick={onDeleteApiaries} />
  </div>;
};

export default ApiariesAdd;