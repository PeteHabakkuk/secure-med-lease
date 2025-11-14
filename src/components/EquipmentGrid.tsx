import EquipmentCard from './EquipmentCard';

const equipmentData = [
  {
    id: '1',
    name: 'Ventilator Pro X500',
    description: 'Advanced mechanical ventilator with encrypted usage monitoring',
    hourlyRate: 45,
    usageHours: 152.3,
    encrypted: true,
    available: true,
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Patient Monitor Elite',
    description: 'Multi-parameter monitoring system with secure data logging',
    hourlyRate: 32,
    usageHours: 89.7,
    encrypted: true,
    available: true,
    image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Infusion Pump Smart',
    description: 'Programmable infusion system with encrypted dose tracking',
    hourlyRate: 28,
    usageHours: 234.5,
    encrypted: true,
    available: true,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Defibrillator AED Plus',
    description: 'Automated external defibrillator with encrypted event logs',
    hourlyRate: 38,
    usageHours: 45.2,
    encrypted: true,
    available: true,
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Ultrasound Scanner HD',
    description: 'Portable ultrasound with encrypted imaging data protection',
    hourlyRate: 65,
    usageHours: 178.9,
    encrypted: true,
    available: false,
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Anesthesia Machine',
    description: 'Advanced anesthesia delivery with secure usage analytics',
    hourlyRate: 55,
    usageHours: 312.1,
    encrypted: true,
    available: true,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop',
  },
];

const EquipmentGrid = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-bold text-foreground">Available Equipment</h2>
        <p className="text-muted-foreground">
          All equipment features encrypted usage logs to prevent overbilling and protect medical data
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {equipmentData.map((equipment) => (
          <EquipmentCard key={equipment.id} {...equipment} />
        ))}
      </div>
    </section>
  );
};

export default EquipmentGrid;
