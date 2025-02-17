import { useState, useRef } from "react";
import { addUsers } from "../features/Users";
import { ChangeFooter } from "./ChangeFooter";
import { Navbar } from "./Navbar";
import { useSelector, useDispatch } from "react-redux";

export const AddUser = () => {
  const color = useSelector((state) => state?.color?.value || "primary");
  const dispatcher = useDispatch();
  const usersList = useSelector((state) => state?.users?.value || []);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const alertRef = useRef();

  let newUser = function () {
    if (!firstName?.trim() || !lastName?.trim()) {
      if (alertRef.current) {
        alertRef.current.hidden = false;
        alertRef.current.textContent = "📢 Please fill the two inputs!";
        alertRef.current.classList.add("alert-danger");
        setTimeout(() => {
          if (alertRef.current) alertRef.current.hidden = true;
        }, 2000);
      }
      return;
    }

    let user = {
      id: usersList.length ? usersList[usersList.length - 1]?.id + 1 : 1,
      firstName: firstName,
      lastName: lastName,
    };
    dispatcher(addUsers(user));

    if (alertRef.current) {
      alertRef.current.classList.remove("alert-danger");
      alertRef.current.hidden = false;
      alertRef.current.textContent = "🎉 User added Successfully!";
      alertRef.current.classList.add("alert-success");
      setTimeout(() => {
        if (alertRef.current) alertRef.current.hidden = true;
      }, 2000);
    }

    setFirstName("");
    setLastName("");
  };

  return (
    <>
      <div
        className={`vh-100 d-flex align-items-center justify-content-center bg-${color}`}
      >
        <div className="card position-absolute w-50">
          <div className="card-header">
            <Navbar />
          </div>
          <div className="card-body">
            <div className="d-block">
              <div className="Items">
                <h1>Enter user </h1>
                <div ref={alertRef} className="alert" hidden></div>
                <div className="mb-3 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onBlur={(e) => {
                      if (!e.target.value.trim()) {
                        e.target.classList.add("border-danger");
                      } else {
                        e.target.classList.remove("border-danger");
                        e.target.classList.add("border-success");
                      }
                    }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onBlur={(e) => {
                      if (!e.target.value.trim()) {
                        e.target.classList.add("border-danger");
                      } else {
                        e.target.classList.remove("border-danger");
                        e.target.classList.add("border-success");
                      }
                    }}
                  />
                </div>
                <div className="mb-3">
                  <button
                    type="button"
                    className={`btn w-100 btn-sm btn-${color}`}
                    onClick={newUser}
                  >
                    Add user
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ChangeFooter />
        </div>
      </div>
    </>
  );
};
export default AddUser;
