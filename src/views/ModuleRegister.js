import React, { Component } from 'react';
import {
    FormGroup,
    ControlLabel,
    FormControl,
    Grid,
    Row,
    Col,
    Well,
    Button,
    Glyphicon
} from 'react-bootstrap';
import { Card, CardHeader, CardBody } from 'reactstrap';

import Header from '../components/Header';

/**
 * Module
 *      lesson
 *          
 *      exerice
 *          Alternative
 */

class ModuleRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [
                { file: null },
            ],
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            files: [
                ...this.state.files,
                { file: URL.createObjectURL(e.target.files[0]) }
            ]
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Grid className='distancing-Top'>
                    <Row>
                        <Col xs={12} md={8}>
                            <Card outline color="primary" >
                                <CardHeader tag="h3">
                                    <Well bsSize='lg'>New Module</Well>
                                </CardHeader>
                                <CardBody>
                                    <form>
                                        <FormGroup>

                                            <ControlLabel> Title* </ControlLabel>
                                            <FormControl />

                                        </FormGroup>
                                        <Well bsSize='lg' style={{ borderTop: "solid 1px rgba(0, 0, 0, 0.125)" }}>Add Lessons </Well>
                                        <FormGroup>
                                            <ControlLabel> Title Lesson* </ControlLabel>
                                            <FormControl />
                                        </FormGroup>
                                        <FormGroup>
                                            <div>
                                                <ControlLabel> Upload Video* </ControlLabel>{" "}
                                            </div>
                                            <FormControl
                                                type="file"
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                        <div>
                                            {this.state.files.map((file) => (

                                                <video src={file.file} className="tumble-upload " />
                                            ))}

                                        </div>
                                        <Button onClick={this.handleChange} style={{ margin: '10px' }}>Add <Glyphicon glyph="plus" /></Button>
                                        <Button
                                            type="button"
                                            onClick={() => true}
                                            bsStyle="primary"
                                            bsSize="large"
                                            block
                                        >
                                            Save
                                        </Button>
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

export default ModuleRegister;
