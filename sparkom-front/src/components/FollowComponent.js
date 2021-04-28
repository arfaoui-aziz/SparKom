import React from "react";
import { useHistory } from "react-router-dom";

export default function FollowComponent({ data }) {
  const history = useHistory();

  return (
    <div className="row my-4">
      <div className="col-md-8 mx-auto p-2">
        <div className="row">
          {data && data.length > 0 ? (
            data.map((user) => (
              <div
                style={{ cursor: "pointer" }}
                className="col-md-3"
                key={user._id}
                onClick={() => history.push(`/user/${user._id}`)}
              >
                <img
                  src={`http://localhost:8888/api/user/photo/${user._id}`}
                  width="50"
                  height="50"
                  className="img-fluid rounded pr-2"
                  alt={user.name}
                />
                <h4 className="mt-3">{user && user.name}</h4>
              </div>
            ))
          ) : (
            <div className="alert alert-info" role="alert">
              <h4 className="alert-heading">Aucune donnée</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}