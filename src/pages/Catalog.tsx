import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Info, X, Shield, Battery, Zap } from 'lucide-react';

const vehicles = [
  {
    id: 1,
    type: 'scooter',
    name: 'Urban Rider 125',
    price: '2,499',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    specs: ['125cc', 'Automática', 'LED Lights', 'ABS'],
    description: 'Perfecta para la ciudad, combina estilo y eficiencia.',
    features: [
      'Motor de 125cc de última generación',
      'Sistema de frenos ABS en ambas ruedas',
      'Iluminación LED completa',
      'Panel digital multifunción',
      'Puerto USB para carga',
      'Compartimento bajo el asiento'
    ],
    performance: {
      power: '12.5 HP',
      consumption: '2.2L/100km',
      topSpeed: '95 km/h'
    }
  },
  {
    id: 2,
    type: 'motorcycle',
    name: 'Street Master 250',
    price: '4,999',
    image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    specs: ['250cc', 'Manual', 'ABS', 'Bluetooth'],
    description: 'Deportiva y ágil, ideal para los amantes de la velocidad.',
    features: [
      'Motor bicilíndrico de 250cc',
      'Sistema de frenos ABS deportivo',
      'Conectividad Bluetooth',
      'Modos de conducción',
      'Suspensión ajustable',
      'Display TFT a color'
    ],
    performance: {
      power: '30 HP',
      consumption: '3.5L/100km',
      topSpeed: '140 km/h'
    }
  },
  {
    id: 3,
    type: 'scooter',
    name: 'City Glide 150',
    price: '2,899',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    specs: ['150cc', 'Automática', 'USB Port', 'LCD Display'],
    description: 'Comodidad y tecnología para tu día a día.',
    features: [
      'Motor de 150cc eficiente',
      'Puerto USB integrado',
      'Display LCD multifunción',
      'Asiento ergonómico',
      'Sistema start-stop',
      'Baúl espacioso'
    ],
    performance: {
      power: '14.5 HP',
      consumption: '2.4L/100km',
      topSpeed: '100 km/h'
    }
  },
  {
    id: 4,
    type: 'motorcycle',
    name: 'Adventure Pro 650',
    price: '7,999',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    specs: ['650cc', 'Manual', 'GPS', 'Cruise Control'],
    description: 'Lista para cualquier aventura que te propongas.',
    features: [
      'Motor 650cc de alto rendimiento',
      'GPS integrado',
      'Control de crucero',
      'Suspensión de largo recorrido',
      'Protectores de motor',
      'Maletas laterales'
    ],
    performance: {
      power: '65 HP',
      consumption: '4.5L/100km',
      topSpeed: '180 km/h'
    }
  },
  {
    id: 5,
    type: 'scooter',
    name: 'Eco Ride 50',
    price: '1,999',
    image: 'https://images.unsplash.com/photo-1519083994092-4b1d44b3d2c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    specs: ['50cc', 'Automática', 'Eco Mode', 'Light Weight'],
    description: 'Económica y ecológica, perfecta para principiantes.',
    features: [
      'Motor 50cc económico',
      'Modo ECO de conducción',
      'Peso ligero',
      'Fácil manejo',
      'Bajo mantenimiento',
      'Ideal para ciudad'
    ],
    performance: {
      power: '4.5 HP',
      consumption: '1.8L/100km',
      topSpeed: '45 km/h'
    }
  },
  {
    id: 6,
    type: 'motorcycle',
    name: 'Sport Elite 1000',
    price: '12,999',
    image: 'https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    specs: ['1000cc', 'Manual', 'Race Mode', 'Quick Shifter'],
    description: 'Rendimiento extremo para los más exigentes.',
    features: [
      'Motor 1000cc de competición',
      'Quick shifter bidireccional',
      'Modos de conducción',
      'Control de tracción',
      'Suspensión Öhlins',
      'Frenos Brembo'
    ],
    performance: {
      power: '180 HP',
      consumption: '6.5L/100km',
      topSpeed: '299 km/h'
    }
  }
];

const VehicleModal = ({ vehicle, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold">{vehicle.name}</h2>
              <p className="text-gray-600">{vehicle.description}</p>
            </div>
            <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-semibold">
              ${vehicle.price}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Zap className="h-6 w-6 mx-auto mb-2 text-blue-600" />
              <div className="font-semibold">{vehicle.performance.power}</div>
              <div className="text-sm text-gray-600">Potencia</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Battery className="h-6 w-6 mx-auto mb-2 text-blue-600" />
              <div className="font-semibold">{vehicle.performance.consumption}</div>
              <div className="text-sm text-gray-600">Consumo</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Shield className="h-6 w-6 mx-auto mb-2 text-blue-600" />
              <div className="font-semibold">{vehicle.performance.topSpeed}</div>
              <div className="text-sm text-gray-600">Vel. Máx</div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Características</h3>
            <div className="grid grid-cols-2 gap-3">
              {vehicle.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {vehicle.specs.map((spec, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Catalog = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesFilter = filter === 'all' || vehicle.type === filter;
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-2">Nuestro Catálogo</h1>
            <p className="text-gray-600 mb-8">Descubre nuestra selección de vehículos premium</p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              {['all', 'scooter', 'motorcycle'].map((type) => (
                <motion.button
                  key={type}
                  onClick={() => setFilter(type)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                    filter === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type === 'all' ? 'Todos' : type === 'scooter' ? 'Scooters' : 'Motos'}
                </motion.button>
              ))}
            </div>
            
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ${vehicle.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-4">{vehicle.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vehicle.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedVehicle(vehicle)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Info className="h-4 w-4" />
                    <span>Más información</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedVehicle && (
          <VehicleModal
            vehicle={selectedVehicle}
            onClose={() => setSelectedVehicle(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Catalog;