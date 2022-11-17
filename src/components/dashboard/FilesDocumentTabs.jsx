import { RiFile3Line } from "react-icons/ri";
import React from "react";


function LinkWithIconAndFileSize({
    nameOfLink,
}) {
    return (
        <div className="bg-light border p-2 rounded-1 d-flex flex-row justify-content-between student__file-tab__link">
            <div className=" d-flex flex-row">
                <div className="me-3">
                    <RiFile3Line color="black" />
                </div>
                <div>{nameOfLink}</div>
            </div>
            <div>{'15kb'}</div>
        </div>
    );
}

export default LinkWithIconAndFileSize;