import React, { useEffect,useMemo } from "react";


const data = [
  {
    id: 1,
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/beats_by_dr_dre_900_00109_01_studio_wireless_headphones_red_1016369.jpg",
    title: "Wireless Headphones",
    price: 59.99,
    rating: 4.5,
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/61VbKHdE0rL._AC_SL1500_.jpg",
    title: "Smartwatch",
    price: 129.99,
    rating: 4.2,
  },
  {
    id: 3,
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/jbl_jblxtremebluus_xtreme_portable_bluetooth_speaker_1182619.jpg",
    title: "Bluetooth Speaker",
    price: 39.95,
    rating: 4.7,
  },
  {
    id: 4,
    image:
      "https://alexnld.com/wp-content/uploads/2019/11/1573529398_5dcf7b96a2b2d.jpg",
    title: "Gaming Mouse",
    price: 25.49,
    rating: 4.1,
  },
  {
    id: 5,
    image: "https://www.mokinglobal.com/uploads/202003/5e5e9d6b9f4a0.jpg",
    title: "USB-C Hub",
    price: 44.99,
    rating: 4.6,
  },
  {
    id: 6,
    image:
      "https://www.myclaw.in/wp-content/uploads/2019/09/CLAW-Laptop-Stand-1.jpg",
    title: "Laptop Stand",
    price: 34.99,
    rating: 4.4,
  },
];

function Body({search,addValue }) {
  
  const filterData = useMemo(()=>{
    return data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()))}, [search]);

  useEffect(()=>{
    alert("you sha")
  },[])
  return (
    <>
      <div className="body">
       
        {filterData.length == 0 ? (
          <p style={{ fontSize: "5rem" }}> No product found!!!</p>
        ) : (
          filterData.map((d) => (
            <div className="cards" key={d.id}>
              <img src={d.image} alt={d.title} />
              <h2>{d.title}</h2>
              <h3>{d.price}</h3>
              <h4>{d.rating}</h4>
              <button onClick={addValue}>Add</button>
            </div>
          ))
        )}
      </div>
    </>
  );
}
export default Body;
