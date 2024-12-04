export default function ContactMap() {
  const lat = 40.899801;  // Latitude
  const lng = 29.189471;  // Longitude
  const address = 'KARLIKTEPE MAH. BLOKEVLERİ SK. NO: 4 B İÇ KAPI NO: 132 KARTAL/ İSTANBUL';
  const phone = '-';
  const email = 'info@sosttech.com';
  const workHours = 'Pazartesi - Cuma: 09:00 - 18:00';

  const popupContent = `
    <strong>Adres:</strong> ${address} <br />
    <strong>Telefon:</strong> ${phone} <br />
    <strong>Email:</strong> ${email} <br />
    <strong>Çalışma Saatleri:</strong> ${workHours}
  `;

  const iframeSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01},${lat - 0.01},${lng + 0.01},${lat + 0.01}&layer=mapnik&marker=${lat},${lng}&popup=${encodeURIComponent(popupContent)}`;

  return (
    <iframe
      width="100%"
      height="400"
      style={{ border: "none" }}
      src={iframeSrc}
      title="OpenStreetMap"
    ></iframe>
  );
}
