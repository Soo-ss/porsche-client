import React, { useState } from "react";
import Axios from "axios";

function FormSection() {
  const [Model, setModel] = useState("");
  const [School, setSchool] = useState("");
  const [Dept, setDept] = useState("");
  const [Phone, setPhone] = useState("");

  const onModel = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setModel(event.target.value);
  };

  const onSchool = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSchool(event.target.value);
  };
  const onDept = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDept(event.target.value);
  };
  const onPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const info = {
      modelName: Model,
      schoolName: School,
      dept: Dept,
      phone: Phone,
    };

    Axios.post("/api/user/contact", info).then((res) => {
      console.log(res.data);
      if (res.data.success) {
        alert("메시지 전송 성공");
      } else {
        alert("메시지 전송 실패!!");
      }
    });
  };

  return (
    <div className="usedCarForm">
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="formGroup">
          <p>Model Name*</p>
          <select required={true} value={Model} onChange={onModel}>
            <option hidden></option>
            <option>Panamera 4</option>
            <option>Panamera 4S</option>
            <option>Panamera GTS</option>
            <option>Panamera E-Hybrid</option>
          </select>
        </div>
        <div className="formGroup">
          <p>학교명*</p>
          <input
            type="text"
            required={true}
            value={School}
            onChange={onSchool}
          />
        </div>
        <div className="formGroup">
          <p>학과*</p>
          <input type="text" required={true} value={Dept} onChange={onDept} />
        </div>
        <div className="formGroup">
          <p>전화번호*</p>
          <input type="tel" required={true} value={Phone} onChange={onPhone} />
        </div>
        <p>* 필수 입력 정보</p>
        <div className="formGroup">
          <button className="question">
            <i className="fa fa-envelope-o" aria-hidden="true">
              &nbsp;문의 보내기
            </i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormSection;
