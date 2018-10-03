import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Button, Collapse } from 'reactstrap';

class ModuleBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }
    }

    render() {
        return (
            <div>
                <Card>
                    <CardHeader>
                        <Button onClick={() => this.setState({ open: !this.state.open })}>
                            Name of Modulo
                        </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.open}>
                        <CardBody>
                                Lorem ipsum vitae convallis ipsum vulputate ipsum phasellus
                                 condimentum hendrerit elit nisl tincidunt etiam
                                cursus venenatis augue habitant, proin accumsan
                                pulvinar tristique risus hendrerit ipsum interdum
                                ultrices a dictumst consequat turpis molestie nisi congue
                                . massa taciti sit bibendum lectus fermentum
                                primis integer quis, per torquent potenti auctor
                                 egestas proin fames sodales dictum, vel morbi
                                 ullamcorper nibh velit ornare justo. accumsan molestie
                                 augue aptent sodales, augue amet primis euismod
                                 porta, iaculis class lobortis. habitasse lacus
                                quisque mi nunc lacinia aliquet gravida sagittis porta
                                vitae aptent bibendum, himenaeos etiam
                                 pellentesque mollis consequat venenatis
                                consectetur ornare quam gravida.Habitant ad nullam sed, at.
                        </CardBody>
                    </Collapse>
                </Card>
            </div>
        );
    }
}

export default ModuleBar;
