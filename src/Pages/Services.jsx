import React from "react";
import { useContext } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Data } from "../Context/DataContext";

const Services = () => {
  const { services } = useContext(Data);
  return (
    <div style={{ background: "#FFEAEB", padding: "5rem 0" }}>
      <div className="container">
        <h1 className="text-danger mb-4">Our Services</h1>
        <Row gap={2}>
          {services?.data?.content_boxes?.map((items, indexTop) => {
            return (
              <Col sm={12} md={6} lg={3} className="mb-4" key={indexTop}>
                <Card style={{ height: "100%" }}>
                  <Card.Header as="h5" className="text-danger">
                    {items.heading}
                  </Card.Header>
                  <Card.Body>
                    <ul>
                      {services?.data?.content_boxes[indexTop]?.text?.map(
                        (textItems, index) => {
                          return <li key={index}>{textItems}</li>;
                        }
                      )}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Services;
