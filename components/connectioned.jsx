import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../appstore/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../appstore/connectionsslice";

const Connected = () => {
  const connectionfeed = useSelector((store) => store.connections);
  const usedispatch = useDispatch();

  const connectionsuser = async () => {
    try {
      const connectedusers = await axios.get(BASE_URL + "/connected/users/review", {
        withCredentials: true,
      });

      usedispatch(addConnection(connectedusers.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    connectionsuser();
  }, []);

  if (!connectionfeed) return null;
  if (connectionfeed.length === 0) return <h1>no user found</h1>;

  // Group connections into rows of 5
  const rows = [];
  for (let i = 0; i < connectionfeed.length; i += 5) {
    rows.push(connectionfeed.slice(i, i + 5));
  }

  return (
    <div>
      <div className="text-center">
        <h4 className="white">Connections</h4>
      </div>

      {/* Render each row (max 5 items per row) */}
      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          {row.map((connections) => {
            const { _id, firstname, lastname, about, photourl } = connections;
            return (
              <div key={_id} className="card w-60 bg-base-300 shadow-sm p-3">
                <div className="card-body items-center text-center">
                  <figure className="mx-auto mb-2">
                    <img
                      className="rounded-full w-20 h-20 object-cover"
                      src={photourl}
                      alt={`${firstname} ${lastname}`}
                    />
                  </figure>
                  <h2 className="card-title">{firstname} {lastname}</h2>
                  <p className="text-sm">{about}</p>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Connected;