import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 버스 이용시
            <br />
            [광천치안센터 정류장 하차]
            <br />
            01,02,03,12,26,37,38,47,53,60,64,84
            <br />
            <br />
            [신세계백화점 정류장 하차]
            <br />
            14,25,36,37,1187
            <br />
            <br />
            [광주종합버스터미널 정류장 하차]
            <br />
            01,02,03,09,16,25,26,30,36,38,39,47,53,60
            <br />
            64,65,68,69,89,228,500,518,1187
          </div>
          <div />
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>웨딩그룹 위더스 광주, 광주 서구 죽봉대로 153</b>
            <br />
            <br />
            (주차장 이용 시 웨딩홀과 바로 연결)
          </div>
          <div />
          <div className="content">
            <b>
              ※ 건물 뒤 주차장 이용, 주차요원의 안내를 받으세요
            </b>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
