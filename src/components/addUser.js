import { useState, useRef } from "react";
import { addUsers } from "../features/Users";
import { ChangeFooter } from "./ChangeFooter";
import { Navbar } from "./Navbar";
import { useSelector, useDispatch } from "react-redux";

export const AddUser = () => {
  const color = useSelector((state) => state.color.value);
  const dispatcher = useDispatch();
  const usersList = useSelector((state) => state.users.value);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const alertRef = useRef();

  const user = () => {
    if (firstName === "" || lastName === "") {
      alertRef.current.hidden = false;
      alertRef.current.textContent = "📢 Please fill the two inputs!";
      alertRef.current.classList.add("alert-danger");
      setTimeout(() => {
        alertRef.current.hidden = true;
      }, 2000);
      return;
    } else {
      let newUser = {
        id: usersList.length !== 0 ? usersList[usersList.length - 1].id + 1 : 1,
        firstName: firstName,
        lastName: lastName,
      };
      dispatcher(addUsers(newUser));
      
    
      alertRef.current.classList.remove("alert-danger");

      
      alertRef.current.hidden = false;
      alertRef.current.textContent = "🎉 User added successfully!";
      alertRef.current.classList.add("alert-success");
   
      setFirstName("");
      setLastName("");
    }
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
                <h1>Enter user_s infos</h1>
                <div ref={alertRef} className="alert" hidden></div>
                <div className="mb-3 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onBlur={(e) => {
                      if (e.target.value === "") {
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
                      if (e.target.value === "") {
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
                    onClick={user}
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
