import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import egyKerdes from "./egyKerdes";
import './style.css';
export default function Tesztek() {
    const [tesztek, setTesztek] = useState([]);
    const [kategoriak, setKategoriak] = useState([]);
    useEffect(() => {
        const getTesztek = async () => {
            const apiTesztek = await axios.get("http://localhost:8000/api/tesztek");
            console.log(apiTesztek.data.tesztek)
            setTesztek(apiTesztek.data.tesztek);
        };
        getTesztek();
    }, []);

    useEffect(() => {
        const getKategoriak = async () => {
            const apiKategoriak = await axios.get("http://localhost:8000/api/kategoriak");
            console.log(apiKategoriak.data.kategoriak)
            setKategoriak(apiKategoriak.data.kategoriak);
        };
        getKategoriak();
    }, []);
    /* const helyes(){

    } */
    return (
        <div>  
        <select name="kategoriak" id="kategoriak">
          {kategoriak.map((item) =>
                    <option key={item.id}><a className="dropdown-item" href="#">{item.kategorianev}</a></option>
                )}
      </select>
             
            {tesztek.map((item) =>
                <div key={item.id} className="doboz" style={{ border: "1px solid grey", margin: "15px", borderRadius: "5px" }}>
                    <h3 className="bg-dark p-3 text-white">{item.kerdes}</h3>
                    <div className="gombok "style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>

                        <button class="btn btn-primary " style={{ margin: "5px" }} >{item.v1}</button>
                        <button class="btn btn-primary" style={{ margin: "5px" }}>{item.v2}</button>
                        <button class="btn btn-primary" style={{ margin: "5px" }}>{item.v3}</button>
                        <button class="btn btn-primary" style={{ margin: "5px" }}>{item.v4}</button></div>
                </div>)}
        </div>
    );
}