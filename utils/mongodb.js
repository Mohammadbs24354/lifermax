{/** Standard Code für die Mongos Verbindung, man kann den Code auch vom Internet Kopieren  */}

import mongoose from "mongoose";

let cached = global.mongoose;

{/* con steht für Conection (also Verbindung)   promise steht für ein versprechen ( das sind Daten die mitgegeben werden sollen) */}
if(!cached){
    cached = global.mongoose = { con: null, promise: null}
}

{/** Überprüfung ob die verbindung aktiv ist */}
async function dbConnect () {
    if (cached.con) {
       // console.log('DB Verbindung aktiv');
        return cached.con;
    }

{/** weitere optionen bei nicht Funktion   (Beuler play Code)*/}

    if (!cached.promise) {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology:true,
            bufferCommands:false
        }

{/** Wenn Cached.promise nicht existiert dann wird Cached.promise angelegt*/}
        cached.promise = mongoose.connect(process.env.MONGODB_URI, options).then(mongoose => {
            //console.log('DB Verbindung sestartet');
            return mongoose;
        });
    }

{/** Hier wird dem Cached Conection dem cached promise übergeben */}
    cached.con = await cached.promise;
    return cached.con;
}

{/** Disconect Funktion */}
async function dbDisconnect(){
    await mongoose.disconnect();
    //console.log('DB Verbindung beendet');
}

{/** Beide Funktionen exportieren um sie in anderen Funktionen zu benutzen */}
const mongodb = {dbConnect, dbDisconnect}
export default mongodb;