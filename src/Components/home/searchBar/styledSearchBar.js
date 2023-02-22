import styled, { css } from "styled-components";
import { ReactComponent as Icon_Location } from "../../../img/icon-location.svg";
import { ReactComponent as Icon_Calendar } from "../../../img/icon-calendar.svg";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const SearchBarContainer = styled.div`
  background-color: ${PURPLE3};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const SearchBarTitle = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
  max-width: 400px;

  @media (min-width: 768px) {
    max-width: none;
    margin-bottom: 20px;
  }
`;

export const FormSearch = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  max-width: 400px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: none;
  }
`;

export const SelectCity = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 38px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  padding-left: 10px;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  z-index: 50;

  p {
    font-size: 14px;
    font-weight: 500;
  }

  ${({ $empty }) => {
    if ($empty === null) {
      return css`
        fill: #7f7f7f;
        color: #7f7f7f;
      `;
    } else {
      return css`
        fill: ${PURPLE3};
        color: ${PURPLE3};
      `;
    }
  }};

  @media (min-width: 768px) {
    width: 40%;
    max-width:420px;
  }
`;

export const SearchDateInput = styled.div`
  height: 38px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  text-align: left;
  padding-left: 10px;
  cursor: pointer;
  color: #7f7f7f;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  position: relative;

  ${({ $empty }) => {
    if ($empty === null) {
      return css`
        fill: #7f7f7f;
        color: #7f7f7f;
      `;
    } else {
      return css`
        fill: ${PURPLE3};
        color: ${PURPLE3};
      `;
    }
  }};

  @media (min-width: 768px) {
    width: 40%;
    max-width:420px;
  }
`;

export const BtnSearch = styled.button`
  background-color: ${PRIMARY_COLOR};
  border: none;
  height: 40px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 20%;
    max-width: 206px;
  }
`;

export const IconLocation = styled(Icon_Location)`
  margin-right: 6px;
`;

export const IconCalendar = styled(Icon_Calendar)`
  margin-right: 6px;
`;

export const SelectCityOptionContainer = styled.div`
  width: 100%;
  height: 0px;
  overflow: hidden;
  padding: 0;

  ${({ $show }) => {
    if ($show) {
      return css`
        height: calc(279px);
        padding: 10px 15px;
      `;
    }
  }};

  transition: all 0.4s ease;

  position: absolute;
  background-color: #fff;
  left: 0;
  top: calc(38px + 10px);
  border-radius: 0px 0px 5px 5px;
  > div:last-child {
    border-bottom: none;
  }
`;

export const SelectCityOptionStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: solid 1px ${PRIMARY_COLOR};
  width: 100%;
  padding-bottom: 13px;
  margin-top: 13px;
`;

export const SelectCityOptionNames = styled.div`
  p {
    font-weight: 700;
  }
  p:nth-child(1) {
    color: #000;
  }
  p:nth-child(2) {
    color: ${PURPLE3};
  }
`;
