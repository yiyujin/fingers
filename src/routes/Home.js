import React, { useState } from 'react';
import data from '../data';
import data2 from '../data2';

function Home() {
  // MODAL 1
  const [modal, setModal] = useState(null);

  const openModal = (item) => {
    setModal(item);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal') {
        setModal(!modal);
    }
  };

  // MODAL 1
  const [modal2, setModal2] = useState(null);

  const openModal2 = (item) => {
    setModal2(item);
  };

  const handleOutsideClick2 = (e) => {
    if (e.target.className === 'modal2') {
        setModal2(!modal2);
    }
  };

  return (
    <div className="container">
      <div className="page">
        <img width="100%" src="1.jpg" />

        <h3>Fingers</h3>
        <p>
          Exploring finger interactions for turning on light. 
        </p>

        <p style = { { color : "rgba(0, 0, 0, 0.5)" }} onClick = { () => openModal2(data2[0])}>
          More on theme and process →
        </p>


        <br/>

        <div style = { { display : "flex", borderTop : "1px solid black", borderBottom : "1px solid black"} }>
          <p style = { { width : "64px", fontSize : "14px", lineHeight : "0.5"} }>Index</p>
          <p style = { { width : "64px", fontSize : "14px", lineHeight : "0.5"} }>Fingers</p>
        </div>

        
        {
          data.map(item => (
            <div key={item.id} className = "table" onClick = { () => openModal(item) }>
              <p className = "index">{ item.id }</p>
              <p>{ item.title }</p>
              <p style = { { color : "rgba(0, 0, 0, 0.5" , paddingLeft : "12px"}}>{ item.titleKor }</p>
            </div>
          ))
        }
        
        {/* MODAL 1 */}
        {
          modal && (
            <div className = "modal" onClick = { handleOutsideClick }>
              <div className = "modal-content" onClick={(e) => e.stopPropagation()}>
                <div>
                    <h3>{ modal.title }</h3>
                    <p style = { { color : "rgba(0, 0, 0, 0.5" }}>{ modal.titleKor }</p>
                </div>

                <div style={{ display: "flex", borderTop : "1px solid black", borderBottom: "1px solid black" }}>
                    <p style={{ width: "64px", fontSize : "14px", lineHeight : "0.5" }}>Index</p>
                    <p style={{ width: "300px", fontSize : "14px", lineHeight : "0.5"}}>Tools</p>
                    <p style={{ width: "200px", fontSize : "14px", lineHeight : "0.5"}}>Materials</p>
                </div>

                <div style={{ display: "flex", borderBottom: "1px solid black" }}>
                    <p style={{ width: "64px"}}>{modal.id}</p>
                    <p style={{ width: "300px"}}>{modal.methods}</p>
                    <p style={{ width: "200px"}}>{modal.materials}</p>
                </div>

                {
                    modal.img.map( (item, i) => 
                        <img key = {i} src = { item } />
                    )
                }

                <video width="100%" controls src = { modal.video }/>

              </div>
            </div>
          )
        }

        {/* MODAL 2 */}
        {
          modal2 && (
            <div className = "modal2" onClick = { handleOutsideClick2 }>
              <div className = "modal-content2" onClick={(e) => e.stopPropagation()}>
                <div>
                    <h3>{ modal2.title }</h3>
                </div>
                
                <h3>Theme</h3>
                <p>{ modal2.theme }</p>

                <img src = { modal2.img }/>

                <h3>Process</h3>
                <p>{ modal2.process }</p>

                {
                    modal2.img2.map( (item, i) => 
                        <img key = {i} src = { item } />
                    )
                }




              </div>
            </div>
          )
        }


        {/* FOOTER */}
        <div style = { { marginTop : "72px" } }>
            <p style = { { fontSize : "14px" } } >Jin Yi, Intro to Fabrication (Fall 2024)</p>
        </div>

      </div>
    </div>
  );
}

export default Home;
