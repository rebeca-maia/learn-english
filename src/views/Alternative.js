import React, { Component } from 'react';
import {
  Button, FormGroup, Radio, Grid, Row, Col, Well,
} from 'react-bootstrap';
import { Card, CardHeader, CardBody } from 'reactstrap';

class Alternative extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} md={8}>
              <Card>
                <CardHeader tag="h4">
                  <Well bsSize="lg">Alternative</Well>
                </CardHeader>
                <CardBody>
                  <form>
                    <FormGroup>
                      <Radio name="radioGroup">Alternative</Radio>
                      <Radio name="radioGroup">Alternative</Radio>
                      <Radio name="radioGroup">Alternative</Radio>
                    </FormGroup>
                    <Button bsStyle="success">Enviar</Button>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Alternative;
