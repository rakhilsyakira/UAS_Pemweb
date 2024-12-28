import mongoose from 'mongoose';

const KapalSchema = new mongoose.Schema({
    nama_kapal: { type: String, required: true },
    kapasitas_muatan: { type: Number, required: true },
    jenis_kapal: { type: String, required: true },
    waktu_terdaftar: { type: Date, required: true },
    image: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          // Validasi untuk path, tidak harus URL lengkap
          return /^\/[a-zA-Z0-9_-]+(\.jpg|\.jpeg|\.png|\.gif)$/.test(v);
        },
        message: props => `${props.value} bukan path gambar yang valid!`
      }
    }
  });
  
  export default mongoose.models.Kapal || mongoose.model('Kapal', KapalSchema);
  
  
