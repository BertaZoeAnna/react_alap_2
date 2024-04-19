export default function egyKerdes() {
    const [tesztek, setTesztek] = useState([]);
    useEffect(() => {
        const getTesztek = async () => {
            const apiTesztek = await axios.get("http://localhost:8000/api/tesztek");
            console.log(apiTesztek.data.tesztek)
            setTesztek(apiTesztek.data.tesztek);
        };
        getTesztek();
    }, []);

    return (
        <div>
            {tesztek.map((item) =>
                <div key={item.id}>
                    <p>{item.kerdes}</p>
                    <p>{item.v1}</p>
                    <p>{item.v2}</p>
                    <p>{item.v3}</p>
                    <p>{item.v4}</p>
                </div>)}
        </div>
    );
}