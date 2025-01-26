import axios from "axios";
import React, { useEffect, useState } from "react";
function NavCarusel() {
  const [adabiyot, setAdabiyot] = useState();
  useEffect(() => {
    axios.get("https://backend.book.uz/user-api/genre?page=1").then((res) => {
    //   console.log(res.data.data.data);
      setAdabiyot(res.data.data.data);
    });
  }, []);
  if (!adabiyot) {
    return  <div className="m-auto flex justify-center items-center absolute top-0 bottom-0 left-0 right-0">
    <div className="w-16 h-16 border-4  border-t-transparent rounded-full animate-spin"></div>
  </div>
  }
  return (
    <div className=" h-[500px] overflow-auto  w-[400px] ">
      {adabiyot.map((itme) => (
        <div key={itme._id}>
        <h1  className=" p-2 hover:bg-amber-600 rounded font-semibold ">{itme.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default NavCarusel;
