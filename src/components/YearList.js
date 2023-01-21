import React from 'react';
const YearList=(props)=>{
    return (
    <>
    <select value={props.selectedYear} onChange={props.changeSelectedYear}>
        <option value={null}></option>
        {props.years.map((year)=>{
            return <option key={year} value={year}>{year}</option>
        })}
    </select>
    </>
    )
}
export default YearList;