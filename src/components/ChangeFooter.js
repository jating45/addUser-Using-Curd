import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../features/userSlice";

import { change } from "../features/Color";

export const ChangeFooter = () => {
  const dispatcher = useDispatch();
  const [inputChange, setInputChange] = useState("");
  const colors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "white",
  ];

  return (
    <>
      <div className="card-footer text-muted">
        <div className="input-group input-group-sm">
         
        
          
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Color
          </button>
          <ul className="dropdown-menu p-0">
            <div className="row g-0">
              {colors.map((c) => {
                return (
                  <div
                    key={colors.indexOf(c)}
                    className="col"
                    style={{ height: "20px", width: "20px" }}
                  >
                    <button
                      className={`dropdown-item bg-${c} border border-dark`}
                      onClick={() => dispatcher(change(c))}
                      style={{ height: "20px", width: "20px" }}
                    ></button>
                  </div>
                );
              })}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
export default ChangeFooter;
