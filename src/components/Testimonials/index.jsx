import React from "react";
import Card from "react-bootstrap/Card";
import "./style.scss";

const TestimonialsCard = () => {
  return (
    <div className="testimonial-container container">
      <div className="testimonial-img-container">
        <img
          src="https://d8it4huxumps7.cloudfront.net/uploads/images/633bb3d488316_preeti_sequeira.png?d=190x183"
          alt=""
        />
      </div>
      <div className="testimonial-card-container">
        <Card className="card-container">
          <Card.Body>
            <div className="comma-container">
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/testimonial/testimonials.png?d=57x45"
                alt="comma"
              />
            </div>
            <Card.Text className="paragraph-container">
              Glad to have partnered with Unstop to run ABG’s flagship
              competitions – Stratos & HeadstaRt 2022. The entire process was
              managed smoothly by the team. The microsite built for both
              competitions provided seamless user experiences & also helped in
              achieving our objective of engagement & increased participation.
              The team is proactive and always willing to go the extra mile to
              extend the necessary support. Look forward to partnering with the
              team again in the future!
            </Card.Text>
            <div className="card-footer-container">
              <div className="card-footer-title-content">
                <Card.Title>Preeti Sequeira</Card.Title>
                <p>
                  Lead - Careers, L&D, Engagement & Social Media Branding -
                  Aditya Birla Leadership Program
                </p>
              </div>
              <div>
                <img
                  src="https://d8it4huxumps7.cloudfront.net/images/partners/partners125/5c7a7bebf06cc_aditya.png?d=120x120"
                  alt=""
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default TestimonialsCard;
