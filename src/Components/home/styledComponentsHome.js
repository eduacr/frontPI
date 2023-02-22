import styled from "styled-components";
import { ReactComponent as IconLocation } from "../../img/icon-location.svg";

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
`;

export const FormSearch = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
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

  p {
    color: #7F7F7F;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const SearchDateBtn = styled.button`
  height: 38px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  text-align: left;
  padding-left: 10px;
  cursor: pointer;
  color: #7F7F7F;
  font-size: 14px;
  font-weight: 500;
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
`;

export const SelectOption = styled.option`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 50px;
`
export const IconLugar = styled(IconLocation)`
fill: red;
`