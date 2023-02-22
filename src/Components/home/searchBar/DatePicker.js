import { useState } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es"

registerLocale("es", es);

export default function Datepicker({ startDate, endDate, interval, onChange }) {
  return (
    <>
      <ReactDatePicker
        // selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        monthsShown={window.innerWidth > 600 ? 2 : 1}
        locale="es"
        minDate={new Date()}
      >
        {/* <div className="btnContainer"> */}
          <button className="btnAplicar">Aplicar</button>
          <div className="linea-divisoria"></div>
        {/* </div> */}
      </ReactDatePicker>
    </>
  );
}