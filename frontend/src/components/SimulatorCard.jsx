import api from "../services/api";

function SimulatorCard(){

    const simulate = async()=>{

        try{

            await api.post("/simulator");

            alert("Dummy Transactions Generated");

        }
        catch(err){

            console.error(err);

        }

    }

    return(

        <div className="card shadow mt-4">

            <div className="card-body text-center">

                <h4>Kafka Simulator</h4>

                <button
                    className="btn btn-primary mt-3"
                    onClick={simulate}
                >

                    Generate Dummy Transactions

                </button>

            </div>

        </div>

    );

}

export default SimulatorCard;