import React from "react";
import "./footerStyle.scss";

function Footer() {
  const lists = [
    "© 2020 Porsche Korea Ltd. Legal notice 개인정보처리방침 ",
    "※ 표기된 연비는 표준 모드에 의한 것으로 도로상태, 운전방법,차량적재, 정비상태 및 외기온도에 따라 실주행연비와 차이가 있습니다.",
    "※ 본 웹사이트에 기재된 내용은 사전에 예고 없이 변경될 수 있으므로 실제 차량과 다를 수 있습니다.",
    "※ 차량 이미지는 실제 모델과 다를 수 있으며, 국내 적용 사양 및 구성에 따라 차이가 있을 수 있습니다.",
    "※ 국내 출시 이전 차량의 경우 국내 공인 연비 정보 및 타이어 에너지소비효율 정보가 존재하지 않을 수 있습니다.",
    "※ 개별소비세 인하 관련 공지사항",
    "포르쉐 코리아는 정부의 일시적 개별소비세 인하 정책에 따라 2020년 3월부터 6월30일까지 관련 차량에 대해 개별소비세 감면 혜택을 적용합니다.",
    "자세한 사항은 포르쉐 센터를 통하여 문의하시기 바랍니다.",
  ];
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <h2>국가 / 지역 변경:</h2>
          <div className="select"></div>
        </div>
        <div className="bottom">
          <ul>
            {lists.map((list, index) => {
              return <li key={index}>{list}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
