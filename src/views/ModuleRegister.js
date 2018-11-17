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
  Glyphicon,
} from 'react-bootstrap';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Header from '../components/Header';

class ModuleRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: null,
      editorState: EditorState.createEmpty(),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
    // TODO trata no submit
    // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  handleChange(e) {
    this.setState({
      files: URL.createObjectURL(e.target.files[0]),
    });
  }

  createMarkup() {
    const { editorState } = this.state;
    const text = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    return { __html: text };
  }

  render() {
    const { files, editorState } = this.state;
    return (
      <div>
        <Header />
        <Grid className="distancing-Top">
          <Row>
            <Col xs={12} md={8}>
              <Card outline color="primary">
                <CardHeader tag="h3">
                  <Well bsSize="lg">New Course</Well>
                </CardHeader>
                <CardBody>
                  <form>
                    <FormGroup>
                      <ControlLabel> Title* </ControlLabel>
                      <FormControl />
                    </FormGroup>

                    <FormGroup>
                      <ControlLabel> Description </ControlLabel>
                    </FormGroup>
                    <div>
                      <Editor
                        editorState={editorState}
                        wrapperClassName="editor-style"
                        editorClassName="editor-class"
                        onEditorStateChange={this.onChange}
                        localization={{
                          locale: 'pt',
                        }}
                      />
                    </div>
                    <FormGroup>
                      <div>
                        <ControlLabel> Imagem capa* </ControlLabel>
                        {' '}
                      </div>
                      <FormControl type="file" onChange={this.handleChange} />
                    </FormGroup>
                    <div>
                      <video src={files} className="tumble-upload">
                        <track kind="captions" />
                      </video>
                    </div>
                    <Button onClick={this.handleChange} style={{ margin: '10px' }}>
                      Add
                      {' '}
                      <Glyphicon glyph="plus" />
                    </Button>
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
                  {{
                    /* <span dangerouslySetInnerHTML={{
                      __html: draftToHtml(convertToRaw(editorState.getCurrentContent()))
                    }}/> */
                  }}
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
