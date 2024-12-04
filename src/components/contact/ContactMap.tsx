export default function ContactMap() {
  const lat = 40.899801;  // Latitude
  const lng = 29.189471;  // Longitude
  const address = 'Maslak, Büyükdere Caddesi No:123, 34485 Sarıyer/İstanbul';
  const phone = '+90 (212) 123 45 67';
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
