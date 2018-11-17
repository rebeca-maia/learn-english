import React, { Component } from 'react';
import {
  Card, CardImg, CardBody, CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import Header from '../components/Header';

class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hoverClass: 'card-course',
    };
  }

  render() {
    const { hoverClass } = this.state;
    return (
      <div>
        <Header />
        <Sidebar />
        <div className="courses">
          <Link to="/">
            <Card
              className={hoverClass}
              onMouseOver={() => {
                this.setState({
                  hoverClass: 'card-course card-course-hover',
                });
              }}
              onMouseOut={() => {
                this.setState({
                  hoverClass: 'card-course',
                });
              }}
              onFocus={() => {
                this.setState({
                  hoverClass: 'card-course card-course-hover',
                });
              }}
              onBlur={() => {
                this.setState({
                  hoverClass: 'card-course',
                });
              }}
            >
              <CardImg
                top
                width="300px"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
              />
              <CardBody>
                <CardTitle>Module Title</CardTitle>
              </CardBody>
            </Card>
          </Link>
          <Card style={{ margin: 10, width: 320 }}>
            <CardImg
              top
              width="300px"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            />
            <CardBody>
              <CardTitle>Module Title</CardTitle>
            </CardBody>
          </Card>
          <Card style={{ margin: 10, width: 320 }}>
            <CardImg
              top
              width="300px"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            />
            <CardBody>
              <CardTitle>Module Title</CardTitle>
            </CardBody>
          </Card>
          <Card style={{ margin: 10, width: 320 }}>
            <CardImg
              top
              width="300px"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            />
            <CardBody>
              <CardTitle>Module Title</CardTitle>
            </CardBody>
          </Card>
          <Card style={{ margin: 10, width: 320 }}>
            <CardImg
              top
              width="300px"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            />
            <CardBody>
              <CardTitle>Module Title</CardTitle>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
export default Panel;
