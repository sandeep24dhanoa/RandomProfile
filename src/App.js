import React, { useEffect, useState } from "react";

import Axios from "axios";
import moment from "moment";

export default function App() {
  const [profileData, setProfileData] = useState("");

  useEffect(() => {
    Axios.get("https://api.randomuser.me/").then((res) => {
      console.log(res, "Res");

      setProfileData(res?.data?.results);
      console.log(res, "Res yugihu");
    });
  }, []);
  console.log(profileData, "DATA");

  return (
    profileData &&
    profileData.map((val) => (
      <div className="font-serif bg-blue-600 h-screen absolute rounded-2xl w-screen">
        <div className="text-left bg-white rounded-2xl flex mt-20 ml-10 mr-10">
          <img
            className="w-48 h-64 rounded-2xl"
            src={val?.picture?.large}
            alt="profile Pic"
          />

          <div className="text-left m-1 text-1xl text-black bg-white">
            <div className="mt-2 ml-2 mb-2 text-gray-700 text-2xl font-semibold">
              {val?.name?.title} {val?.name?.first} {val?.name?.last}
            </div>
            <div>
              <span className="underline font-semibold text-blue-700">
                About
              </span>
              <div className="mb-2 mt-2 ml-2 font-semibold">
                ID:
                <div className="ml-2 font-medium">
                  <div> Name:{val?.id?.name}</div>
                  <div>Value: {val?.id?.value}</div>
                </div>
              </div>
              <div className="mb-2 mt-2 ml-2 font-semibold">
                Gender: <span style={{ fontWeight: "200" }}>{val?.gender}</span>
              </div>
              <div className="mb-2 mt-2 ml-2 font-semibold">
                DOB:
                <div className="ml-2 font-medium">
                  <div>Date: {moment(val?.dob?.date).format("llll")} </div>
                  <div>Age: {val?.dob?.age}</div>
                </div>
              </div>
            </div>
            <div>
              <span className="underline font-semibold text-blue-700">
                Contact Info
              </span>
              <div className="mb-2 mt-2 ml-2 font-semibold">
                <span mb-2 mt-2 ml-2 font-semibold>
                  Email:
                </span>{" "}
                <span className="italic text-blue-700 font-medium underline">
                  {val?.email}
                </span>
              </div>
              <div>
                <span className="mb-2 mt-2 ml-2 font-semibold"> Phone: </span>
                <span className="text-red-600 font-medium ">{val?.phone}</span>
              </div>
              <div>
                <span className="mb-2 mt-2 ml-2 font-semibold"> Cell:</span>{" "}
                <span className="text-red-600 font-medium">{val?.cell}</span>
              </div>
            </div>
          </div>

          <div>
            <span className="underline font-semibold text-blue-700">
              Location:
            </span>
            <div className="mb-2 mt-2 ml-2 font-semibold">
              <div>
                City:
                <span className="ml-2 font-medium">{val?.location?.city}</span>
              </div>
              <div className="mb-2 mt-2 ml-1 font-semibold">
                Coordinates:
                <div className="mb-2 mt-2 ml-1 font-semibold">
                  <div>
                    latitude:{" "}
                    <span className="ml-2 font-medium">
                      {" "}
                      {val?.location?.coordinates?.latitude}
                    </span>
                  </div>
                  <div>
                    longitude:{" "}
                    <span className="ml-2 font-medium">
                      {val?.location?.coordinates?.longitude}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-2 mt-2 ml-1 font-semibold">
                Country:{" "}
                <span className="ml-2 font-medium">
                  {val?.location?.country}
                </span>
              </div>
              <div className="mb-2 mt-2 ml-1 font-semibold">
                Postcode:{" "}
                <span className="ml-2 font-medium">
                  {val?.location?.postcode}
                </span>{" "}
              </div>
              <div className="mb-2 mt-2 ml-1 font-semibold">
                State:{" "}
                <span className="ml-2 font-medium">{val?.location?.state}</span>
              </div>
              <div>
                Street:
                <div className="mb-2 mt-2 ml-1 font-semibold">
                  <div>
                    Name:
                    <span className="ml-2 font-medium">
                      {" "}
                      {val?.location?.street?.name}
                    </span>
                  </div>
                  <div>
                    Number:
                    <span className="ml-2 font-medium">
                      {" "}
                      {val?.location?.street?.number}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-2 mt-2 ml-1 font-semibold">
                Timezone:
                <div className="mb-2 mt-2 ml-1 font-semibold">
                  <div>
                    Description:{" "}
                    <span className="ml-2 font-medium">
                      {val?.location?.timezone?.description}
                    </span>
                  </div>
                  <div>
                    Offset:{" "}
                    <span className="ml-2 font-medium">
                      {val?.location?.timezone?.offset}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="underline font-semibold text-blue-700">Login</span>
            <div className="mb-2 mt-2 ml-2 font-semibold">
              MD5:
              <span className="ml-2 font-medium">{val?.login?.md5}</span>
            </div>
            <div className="mb-2 mt-2 ml-2 font-semibold">
              Password:
              <span className="ml-2 font-medium">
                {val?.login?.password}
              </span>{" "}
            </div>
            <div className="mb-2 mt-2 ml-2 font-semibold">
              Salt:
              <span className="ml-2 font-medium"> {val?.login?.salt}</span>
            </div>
            <div className="mb-2 mt-2 ml-2 font-semibold">
              Username:
              <span className="ml-2 font-medium"> {val?.login?.username}</span>
            </div>
            <div>
              <span className="underline font-semibold text-blue-700">
                Registration Details
              </span>

              <div className="mb-2 mt-2 ml-2 font-semibold">
                Registered:
                <div style={{ marginLeft: "20px" }}>
                  Age:
                  <span className="ml-2 font-medium">
                    {val?.registered?.age}
                  </span>
                </div>
                <div style={{ marginLeft: "20px" }}>
                  Date:
                  <span className="ml-2 font-medium">
                    {moment(val?.registered?.date).format("llll")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  );
}
