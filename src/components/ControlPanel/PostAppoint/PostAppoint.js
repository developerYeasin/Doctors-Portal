import React from 'react';
import ControlPanel from '../SideBar/ControlPanel';
import PostAppointForm from './PostAppointForm';

const PostAppoint = () => {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <ControlPanel />
            <div className="col-md-8 ms-auto me-5">
              <h1>Post appoint</h1>
              <PostAppointForm />
            </div>
          </div>
        </div>
      </div>
    );
};

export default PostAppoint;