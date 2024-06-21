import mongoose from "mongoose";

const PaisesSchema = new mongoose.Schema({
    grupo: { 
        type: String,
    },
    pais: {
        type: String,
    },
    pg: { 
        type: String, 
    },
    pt: { 
        type: String, 
    },
    pe: { 
        type: String, 
    },
    pj: { 
        type: String, 
    },
    bandera: { 
        type: String, 
    }
}, {
    timestamps: true,
});

export default mongoose.models.Paises || mongoose.model('Paises', PaisesSchema)