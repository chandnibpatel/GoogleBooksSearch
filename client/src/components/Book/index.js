import React from 'react';
import {Container, Row,Col} from "../Grid";
import Thumbnail from "../Thumbnail";
export function Book({
  
    authors,
    description,
    image,
    link, 
    title
    }) {
    return (
      <li className="list-group-item">
        <Container>
          <Row>
              <Col size="xs-12 sm-12">
              <h2>{title}</h2>
              
              <h3>{authors}</h3>
              </Col>
            <Col size="xs-4 sm-2">
              <Thumbnail src={image} />
            </Col>
            <Col size="xs-8 sm-9">
             
              <p>{description}</p>
              {/* <a rel="noreferrer noopener" target="_blank" href={href}>
                Go to recipe!
              </a> */}
            </Col>
          </Row>
        </Container>
      </li>
    );
  } 