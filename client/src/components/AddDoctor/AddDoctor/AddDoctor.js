import React, { useState } from 'react';

const AddDoctor = () => {

    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = e => {
        setFile(e.target.files[0]);
    }
    return (
        <section className="container-fluid row">
            <div className="col-md-10 p-4 pr-5">
                <h5 className="text-brand">Add a Doctor</h5>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter a email"
                            onBlur={handleBlur} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Name"
                            onBlur={handleBlur} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Upload a image</label>
                        <input type="file" onChange={handleFileChange} className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;