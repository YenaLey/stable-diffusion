// HomePage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../style/main.css';
import { QRCodeCanvas } from "qrcode.react";

function Main() {
  const navigate = useNavigate();
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    const localIp = "10.0.14.232"; // 현재 노트북의 IP 주소 (연결된 네트워크에 따라 달라짐)
    setIpAddress(localIp);
  }, []);

  return (
    <div className="main-container">

      <div className="main-title">
        <p className="main-title-top">일상 속 사진을 명작으로_아트픽스</p>
        <h4 className="main-title-title">ARTPICS</h4>
        <p className="main-title-bottom">여러분의 사진을 화가의 손길을 거쳐 새롭게 만나보세요</p>
      </div>

      <div className="main-qr">
        {ipAddress && (
          <>
            <QRCodeCanvas 
              value={`http://${ipAddress}:3000/upload`}
              fgColor="rgb(55, 117, 117)"
              size={64}
            />
            <p>QR코드를 인식해서 사진을 선택해주세요</p>
          </>
        )}

        <button onClick={()=>navigate('/result')}>
          인물 이미지 생성
        </button>
        <button onClick={()=>{
          navigate('/result');
        }}>
          풍경 이미지 생성
        </button>
      </div>
    </div>
  );
}

export default Main;
