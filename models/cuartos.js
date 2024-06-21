import mongoose from "mongoose";

const CuartosSchema = new mongoose.Schema({
    pais1: { 
        type: String,
    },
    bandera1: {
        type: String,
    },
    gol1: { 
        type: String, 
    },
    pais2: { 
        type: String, 
    },
    bandera2: { 
        type: String, 
    },
    gol2: { 
        type: String, 
    },
    fecha: { 
        type: String, 
    },
    hora: { 
        type: String,
    },
    estadio: { 
        type: String, 
    },
    partido: { 
        type: String, 
    },
    resumen: {
        type: String,
    },
    goles1: [{
        type: String,
        default: []
    }],
    goles2: [{
        type: String,
        default: []
    }],
}, {
    timestamps: true,
});

export default mongoose.models.Cuartos || mongoose.model('Cuartos', CuartosSchema)