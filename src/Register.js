import "./register.css";
import { useState } from "react";
export default function Register() {
  const [focus, setfocus] = useState({
    firstname: false,
    lastname: false,
  });
  const converttodate = (date) => {
    const new_date = new Date(date);
    const day = new_date.getDate() + 1;
    const month = new_date.getMonth() + 1;
    const year = new_date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    date: "",
  });
  const handlesubmit = (e) => {
    e.preventDefault();
    alert(
      `First-Name: ${data.firstname} Last-Name: ${
        data.lastname
      } DOB: ${converttodate(data.date)}`
    );
    setdata({
      firstname: "",
      lastname: "",
      date: "",
    });
    setfocus({
      firstname: false,
      lastname: false,
    });
  };
  return (
    <form onSubmit={handlesubmit}>
      <h1>Registration</h1>
      <div className="form_inputs">
        <label>First Name</label>
        <input
          placeholder="First Name"
          value={data.firstname}
          type="text"
          pattern="^[A-Za-z0-9]{3,16}$"
          required
          onChange={(event) =>
            setdata({ ...data, firstname: event.target.value })
          }
          onBlur={() => setfocus({ ...focus, firstname: true })}
          focus={focus.firstname.toString()}
        />
        <span>should be between 3-16 character, no special char</span>
      </div>
      <div className="form_inputs">
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          value={data.lastname}
          onChange={(event) =>
            setdata({ ...data, lastname: event.target.value })
          }
          type="text"
          pattern="^[A-Za-z0-9]{3,16}$"
          required
          focus={focus.lastname.toString()}
          onBlur={() => setfocus({ ...focus, lastname: true })}
        />
        <span>should be between 3-16 character, no special char</span>
      </div>
      <div className="form_inputs">
        <label>Date of Birth</label>

        <input
          type="date"
          value={data.date}
          required
          onChange={(event) => setdata({ ...data, date: event.target.value })}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}
