import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Ubicación</h3>
            <div className="flex items-start space-x-2">
              <MapPin className="h-5 w-5 mt-1" />
              <p>Av. Principal 123<br />Ciudad, País</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <p>+1 234 567 890</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <p>info@motostyle.com</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Horario</h3>
            <div className="flex items-start space-x-2">
              <Clock className="h-5 w-5 mt-1" />
              <div>
                <p>Lun - Vie: 9:00 - 19:00</p>
                <p>Sáb: 10:00 - 14:00</p>
                <p>Dom: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} MotoStyle. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;