import mongoose from "mongoose";

const KapalSchema = new mongoose.Schema({
  nama_kapal: {
    type: String,
    required: true,
  },
  kapasitas_muatan: {
    type: Number,
    required: true,
    min: 1, // Pastikan kapasitas hanya angka positif
  },
  jenis_kapal: {
    type: String,
    enum: ["Feri", "Pesiar", "Kargo", "Penumpang"],
    default: "Feri",
  },
  waktu_terdaftar: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Kapal = mongoose.models.Kapal || mongoose.model("Kapal", KapalSchema);

export default Kapal;
