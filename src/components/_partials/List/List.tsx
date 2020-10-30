import React from "react";
import "./listStyle.scss";
import { Link } from "react-router-dom";

function List() {
  const first = [
    "나만의 포르쉐 만들기",
    "포르쉐 인증 중고차 찾기",
    "포르쉐 센터 찾기",
  ];
  const second = ["Porsche Financial Services", "뉴스 가입"];
  const third = ["Passion Motorsports", "Porsche Classic"];
  const fourth = [
    "At a Glance",
    "Responsibility",
    "Jobs & Careers",
    "Contact & Information",
    "Christophorus - The Porsche Magazine",
  ];
  const lists = [
    {
      title: "Build & Find",
      listName: first,
    },
    {
      title: "온라인 서비스",
      listName: second,
    },
    {
      title: "Behind the Scenes",
      listName: third,
    },
    {
      title: "Porsche Company",
      listName: fourth,
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="list">
          {lists.map((list, index) => {
            return (
              <div key={index}>
                <h2>{list.title}</h2>
                <ul>
                  {list.listName.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link to="#/">{item}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default List;
