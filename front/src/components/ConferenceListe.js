import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const conferences = [
  { id: 1, title: "Conf 1", lien: "lien conf" },
  { id: 2, title: "Conf 2", lien: "lien conf" },
  { id: 3, title: "Conf 3", lien: "lien conf" },
  { id: 4, title: "Conf 4", lien: "lien conf" },
  { id: 5, title: "Conf 5", lien: "lien conf" },
  { id: 6, title: "Conf 6", lien: "lien conf" },
  { id: 7, title: "Conf 7", lien: "lien conf" },
  { id: 8, title: "Conf 8", lien: "lien conf" },
]

const GenerateRow = () => {
  return conferences.map( (v, idx) => { 
    return (
    <Col sm={4}>
      <Card id={v.id}>
      <Card.Body>
        <Card.Title>{v.title}</Card.Title>
        <Card.Text>
          {v.lien}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"> updated 3 mins ago</small>
      </Card.Footer>
      </Card>
    </Col>
  )})
  .reduce(( {res, acc} , curr, idx) => {
    if(idx === conferences.length - 1) {
      acc.push(curr)
      res.push(acc)
      return { res, acc }
    }

    if(idx % 3 === 0 && idx !== 0) {
      res.push(acc)
      return { res, acc: [curr] }
    }

    acc.push(curr)
    return { res, acc }
  }, { res: [], acc: [] } ).res
  .map( (v) => {
    return <Row style={{marginTop: "15px", marginBottom: "15px"}} >{v}</Row>
  })
}

const ConferenceListe = () => {
  
  const lstConf = GenerateRow();

  return (
  <Container>
    {lstConf}
  </Container>
  )
}


export default ConferenceListe
