import React from 'react';

const SelectedYear=(props)=>{
    return (
        <>
        <div id="selected-year">
            {!props.selectedYear?"No year selected":`Selected year-${props.selectedYear}`};
        </div>
        </>
    )
}
export default SelectedYear;