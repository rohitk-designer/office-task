import Accordion from 'react-bootstrap/Accordion';
import "./accoudian.css"

function Accoudian() {
  return (
    <div >
    <Accordion defaultActiveKey={['0']} alwaysOpen >
      <Accordion.Item eventKey="0" style={{border: 'none'}}>
        <Accordion.Header  className='accordion-header' style={{ textAlign: 'center', justifyContent: 'center', display: 'flex',borderBottom: "2px solid var(--brown-color)",  borderTop: "2px solid var(--brown-color)",fontSize: '2.8rem'}}  > How can we help you?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={{border: 'none'}}>
        <Accordion.Header   style={{ textAlign: 'center', justifyContent: 'center', display: 'flex',borderBottom: "2px solid var(--brown-color)",fontSize: '2.8rem' }}>Legal and law advice.</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" style={{border: 'none'}}>
        <Accordion.Header    style={{ textAlign: 'center', justifyContent: 'center', display: 'flex',borderBottom: "2px solid var(--brown-color)",fontSize: '2.8rem' }}> Get comepensation for your injuries</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3"  style={{border: 'none'}}>
        <Accordion.Header    style={{width: '100%', textAlign: 'center', justifyContent: 'center', display: 'flex',alignItems: 'center',borderBottom: "2px solid var(--brown-color)",fontSize: '10rem'}}>Our mission is your success</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default Accoudian;