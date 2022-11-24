//Schema(estructura que representa una colección)
//mapea una columna o propiedad
import mongoose from "mongoose";
const {Schema, model} = mongoose;
const ArtistaSchema = new Schema ({
    _idArtista :{
        type: String,
        required:true

    },
    noDocumento  :{
        type: String,
        required:true

    },
    tipoDocumento :{
        type: String,
        required:true

    },
    nombreArtista :{
        type: String,
        required:true

    },
    apellidoArtista :{
        type: String,
        required:true

    },
    nombreArtistico :{
        type: String,
      

    },
    feNacimiArtista :{
        type: Date,
        required:true

    },
    emailArtista :{
        type: String,
        required:true

    },
    estadoArtista :{
        type: String,
        required:true

    }
},{collection:'Artistas'});

const Artista = model('artista',ArtistaSchema);
export default Artista;

