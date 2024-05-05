// Documents.js
import React from "react";
import OrderCard from "./Document";
import "./documents.css";

function Documents() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-around p-1">
        <OrderCard
          bgClass="bg-c-blue"
          title="Project Specification Report"
          deadline={"Nov 17, 2023"}
          link="https://docs.google.com/document/d/1xv_pR-MWioqB1SUthPg6Pq_hl0nEuUU70wVY_EjQhUI/edit?usp=sharing"
        />
        <OrderCard
          bgClass="bg-c-green"
          title="Analysis and Requirements Report"
          deadline={"Dec 8, 2023"}
          link="https://docs.google.com/document/d/1NA_nEiAfiWk3bqHou7YIiB77Byyt1IRRbknFcRXA9DE/edit?usp=sharing"
        />

        <OrderCard
          bgClass="bg-c-pink"
          title="Detailed Design Report"
          deadline={"15.03.2024"}
          link="https://docs.google.com/document/d/1LEE3vf-pvUjpEM1V9K640K-_-mNrPuvYCIjupzSpmaE/edit?usp=sharing"
        />

        <OrderCard
          bgClass="bg-c-purple"
          title="Final Report"
          deadline={"10.05.2024"}
          link="https://docs.google.com/document/d/1PL71wuRqcajUr64Y7Hup2_LhYMwm3pm5tZ4MGURKCYo/edit?usp=sharing"
        />

<OrderCard
          bgClass="bg-c-green"
          title="User Manual"
          deadline={"10.05.2024"}
          link="https://www.canva.com/design/DAGEWJf28oU/frbGwvRBZlXlA1cj7u0gFA/edit?utm_content=DAGEWJf28oU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        />  
        
      </div>
    </div>
  );
}

export default Documents;
