import React from 'react'

export default function MapSection() {
  return (
    <div className="w-full h-full rounded-md overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.422795027558!2d3.4994339302343165!3d6.444645591267801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf68c618182ab%3A0x3e0cbfccc028f1e3!2s10%20Chris%20Akinro%20Cl%2C%20Lekki%20Penninsula%20II%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1772709489089!5m2!1sen!2sng"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        //allowFullScreen=""
        // loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
}
