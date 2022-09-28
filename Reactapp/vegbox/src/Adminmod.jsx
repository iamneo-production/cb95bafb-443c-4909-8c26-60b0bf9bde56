import "./Adminmod.css"
const Adminmod=()=>{
    return (
        <div className="Adminmod">
            <h1 className="er">Hey Welcome To Admin Page</h1>
            <div className="mod1">
                <h2 className="he">Adding a Product</h2>
                <div className="add-Product">
                    <div className="dhello">
                    <input type="text" placeholder="enter Product id"></input><br/>
                    <input type="text" placeholder="enter Name Of Product"></input><br/>
                    <input type="text" placeholder="enter Price"></input><br/>
                    <input type="text" placeholder="enter Quantity"></input><br/>
                    <button>AddProduct</button>
                    </div>
                </div>
                <h2 className="he">Removing a Product</h2>
                <div className="rem-Product">
                <div className="hello">
                <input type="text" placeholder="enter Product id"></input><br/>
                <button>Remove</button>
                </div>
                </div>
            </div>

        </div>

    )
}
export default Adminmod;