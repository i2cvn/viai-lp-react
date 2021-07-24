import React from "react";
import { Button } from "react-bootstrap";

export function ServiceCard({ serviceData }) {
  return (
    <div className="card shadow text-center">
      <h2>{serviceData.title}</h2>
      <p>{serviceData.description}</p>
      <img src={serviceData.imgUrl} alt="" />
      <p style={{ padding: "10px" }}>
        <Button variant="primary" size="sm">
          View details &raquo;
        </Button>
      </p>
    </div>
  );
}
