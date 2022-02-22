import React, { useState } from 'react';
import ControlPanel from '../SideBar/ControlPanel';

const AddDoctors = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    
    const handleBlur = (e) => {
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }
    const handleSubmit = () => {
         const formData = new FormData();
         formData.append("file", file);
         formData.append("name", info.name);
         formData.append("email", info.email);

         fetch("http://localhost:5000/addADoctor", {
           method: "POST",
           body: formData,
         })
           .then((response) => response.json())
           .then((data) => {
             console.log(data);
           })
           .catch((error) => {
             console.error(error);
           });
    }
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <ControlPanel />
            <div className="col-md-8 ms-auto me-5">
              <h1>Add a Doctors</h1>
              <form className="addDoctors" onSubmit={handleSubmit}>
                <input
                  onBlur={handleBlur}
                  type="email"
                  name="email"
                  placeholder="email"
                />
                <input
                  onBlur={handleBlur}
                  type="text"
                  name="name"
                  placeholder="email"
                />
                <input onChange={handleFileChange} type="file" />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddDoctors;