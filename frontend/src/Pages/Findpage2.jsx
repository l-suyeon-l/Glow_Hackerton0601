import React from "react";
import "../Styles/Findpage2.css";

const Findpage2 = () => {
  return (
    <div className="Findpage2">
      <div className="overlap">

        {/* 지도 */}
        <div className="map" />

        {/* 팝업창 */}
        <div className="pop-up">

          {/* 팝업창 : 검색 */}
          <div className="search">
            <img className="img" alt="돋보기" src="imtc_search.png" />
            <img className="image-2" alt="검색선" src="line-search.png" />
            <div className="text-search">상호명 및 주소를 검색해주세요</div>
          </div>

          {/* 팝업창 : 가게목록 */}
          <div className="store-list">
            <img className="image" alt="가게정보윗선" src="line-storelistupper.png" />

            <div className="upperSide">
              <div className="text-storeInfo">가게정보</div>
              <div className="back">
                <div className="text-back">←</div>
              </div>
            </div>

            <div className="middleSide">
              <img className="storePic" alt="가게사진" src="profile1.jpg" />
              
              <div className="storeContent">
                <div className="text-storeName">벨로</div>

                <div className="umbrellaCntFrame">
                  <div className="text-currentUmbrella">현재 보유 우산</div>
                  <div className="umbrellaCntBack">
                    <div className="text-umbrellaCnt">2개</div>
                  </div>
                </div>
                
                <img className="location" alt="Location" src="imtc_location.png" />
                <div className="text-address">대구 북구 대학로23길 114 1층</div>
                <div className="text-postalCode">(우)41544</div>
                <div className="text-regionNumber">(지번) 산격동 1308-22</div>

                <img className="telephone" alt="Telephone" src="imtc_telephone.png" />
                <div className="text-phoneNumber">0507-1414-3994</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Findpage2;