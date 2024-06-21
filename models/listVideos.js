import mongoose from "mongoose";

const ListVideosSchema = new mongoose.Schema({
    titulo: { 
        type: String,
    },
    descrip: {
        type: String,
    },
    url: { 
        type: String, 
    }
}, {
    timestamps: true,
});

export default mongoose.models.ListVideos || mongoose.model('ListVideos', ListVideosSchema)