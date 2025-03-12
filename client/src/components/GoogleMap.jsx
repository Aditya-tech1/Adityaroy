const GoogleMap = () => {
    return (
      <div className="w-full h-full rounded-xl drop-shadow-2xl">
        <iframe
          className="w-full h-full rounded-xl drop-shadow-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12830.461508979537!2d77.04313369793114!3d28.563926907293585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1affa5d4444b%3A0x3676c4af08d810cf!2sSector%2023%2C%20Dwarka%2C%20Delhi!5e1!3m2!1sen!2sin!4v1741678544610!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default GoogleMap;
  
  