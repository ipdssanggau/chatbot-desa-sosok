const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const runGeminiAi = async (message) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Berikut kalimat pesan yang bisa di parafrase: Terima kasih banyak atas pertanyaan dan minat Anda pada layanan yang kami sediakan! Kami sangat memahami bahwa terkadang ada kebutuhan untuk mendapatkan informasi yang lebih mendalam. Untuk detail lebih lengkap, panduan layanan, dan informasi tambahan yang mungkin Anda perlukan, kami dengan senang hati mengarahkan Anda ke situs web resmi kami.

Di sana, Anda dapat mengeksplorasi berbagai informasi terkait layanan, dokumen, dan petunjuk yang mungkin berguna bagi Anda. Kami telah menyiapkan panduan yang jelas dan mudah dipahami agar Anda dapat mengikuti proses dengan lebih baik. Silakan kunjungi website kami di: https://sosok.desa.id/category/petunjuk/.

Jika Anda masih memerlukan bantuan lebih lanjut setelah mengunjungi situs kami, jangan ragu untuk kembali ke sini. Kami dengan senang hati akan membantu Anda lebih jauh! 😊 Terima kasih atas kepercayaan Anda kepada kami. Dari Kalimat yang bisa di parafrase dan dengan informasi tambahan sumber pencarian google dan web Desa Sosok Kecamatan Tayan Hulu Kabupaten Sanggau: https://sosok.desa.id/category/petunjuk/, Jawablah pesan berikut sebagai admin Desa Sosok dengan ramah sebanyak paling banyak maksimal 30 kata: ${message}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = `${response.text()} \n\n*Disclaimer:*\nJawaban ini dihasilkan oleh asisten digital (Gemini AI). Kami sangat menghargai saran dan kritik Anda untuk pengembangan yang lebih baik. Terima kasih!😁`;
    console.log(text);
    return text;
}

module.exports.runGeminiAi = runGeminiAi;