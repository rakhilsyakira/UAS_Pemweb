import { ConnectDB } from "@/lib/config/db";
import Kapal from "@/lib/models/Kapal";
const { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";
const fs = require("fs");
import path from "path";

const LoadDB = async () => {
    await ConnectDB();
};

LoadDB();

export async function GET(request) {
    try {
        const kapalId = request.nextUrl.searchParams.get("id");
        if (kapalId) {
            const kapal = await Kapal.findById(kapalId);
            if (!kapal) {
                return NextResponse.json({ msg: "Kapal tidak ditemukan" }, { status: 404 });
            }
            return NextResponse.json(kapal);
        } else {
            const kapals = await Kapal.find({});
            return NextResponse.json({ kapals });
        }
    } catch (error) {
        console.error("Error fetching kapal:", error);
        return NextResponse.json(
            { msg: "Error fetching kapal data" },
            { status: 500 }
        );
    }
}


export async function POST(request) {
    try {
        const formData = await request.formData();
        const timestamp = Date.now();

        const image = formData.get('image');
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const imagePath = path.join(process.cwd(), "public", `${timestamp}_${image.name}`);

        // Simpan file gambar
        await writeFile(imagePath, buffer);
        const imgUrl = `${process.env.BASE_URL || 'http://localhost:3000'}/${timestamp}_${image.name}`;


        // Siapkan data untuk MongoDB
        const kapalData = {
            nama_kapal: formData.get("nama_kapal"),
            kapasitas_muatan: parseInt(formData.get("kapasitas_muatan"), 10),
            jenis_kapal: formData.get("jenis_kapal"),
            waktu_terdaftar: new Date(formData.get("waktu_terdaftar")),
            image: imgUrl,
        };

        // Simpan ke MongoDB
        const kapal = await Kapal.create(kapalData);
        console.log("Data kapal berhasil disimpan:", kapal);

        return NextResponse.json({ success: true, msg: "Kapal Ditambahkan" });
    } catch (err) {
        console.error("Error di POST handler:", err);
        return NextResponse.json({ success: false, msg: "Gagal menambahkan kapal" });
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        const kapal = await Kapal.findById(id);

        if (!kapal) {
            return NextResponse.json({ msg: "Kapal tidak ditemukan" }, { status: 404 });
        }

        if (kapal.image) {
            const imagePath = path.join(process.cwd(), "public", kapal.image);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await Kapal.findByIdAndDelete(id);
        return NextResponse.json({ msg: "Kapal berhasil dihapus" });
    } catch (error) {
        console.error("Error while deleting kapal:", error);
        return NextResponse.json(
            { msg: "Terjadi kesalahan saat menghapus kapal." },
            { status: 500 }
        );
    }
}