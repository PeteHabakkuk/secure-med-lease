import { useState } from 'react';
import { Lock, Clock, CheckCircle2, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { useAccount } from 'wagmi';

interface EquipmentCardProps {
  id: string;
  name: string;
  description: string;
  hourlyRate: number;
  usageHours: number;
  encrypted: boolean;
  available: boolean;
  image?: string;
}

const EquipmentCard = ({
  name,
  description,
  hourlyRate,
  usageHours,
  encrypted,
  available,
  image,
}: EquipmentCardProps) => {
  const [isRented, setIsRented] = useState(false);
  const [currentUsage, setCurrentUsage] = useState(usageHours);
  const { isConnected } = useAccount();

  const handleRent = () => {
    if (!isConnected) {
      toast.error('Please connect your wallet first');
      return;
    }

    setIsRented(true);
    toast.success(`Successfully rented ${name}`, {
      description: 'Contract signed and encrypted usage tracking activated',
    });

    // Simulate usage increment
    const interval = setInterval(() => {
      setCurrentUsage(prev => {
        const newValue = prev + 0.1;
        if (newValue >= usageHours + 5) {
          clearInterval(interval);
          return newValue;
        }
        return newValue;
      });
    }, 2000);
  };

  const handleReturn = () => {
    setIsRented(false);
    toast.success(`Equipment returned`, {
      description: `Total usage: ${currentUsage.toFixed(1)} hours. Payment processed securely.`,
    });
  };

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-hover)]">
      {encrypted && (
        <div className="absolute right-3 top-3 z-10">
          <Badge variant="secondary" className="gap-1 bg-accent text-accent-foreground">
            <Lock className="h-3 w-3" />
            Encrypted
          </Badge>
        </div>
      )}

      {image && (
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl">{name}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Usage Hours</span>
          </div>
          <div className="flex items-center gap-2">
            {encrypted && <Lock className="h-3 w-3 text-accent" />}
            <span className="font-semibold text-foreground">
              {currentUsage.toFixed(1)}h
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Activity className="h-4 w-4" />
            <span>Hourly Rate</span>
          </div>
          <span className="font-semibold text-primary">${hourlyRate}/hr</span>
        </div>

        {isRented && (
          <div className="rounded-lg border border-accent/30 bg-accent/5 p-3">
            <div className="flex items-center gap-2 text-sm text-accent-foreground">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span className="font-medium">Currently Rented</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Estimated cost: ${(currentUsage * hourlyRate).toFixed(2)}
            </p>
          </div>
        )}
      </CardContent>

      <CardFooter>
        {!isRented ? (
          <Button
            className="w-full bg-primary hover:bg-primary/90"
            onClick={handleRent}
            disabled={!available}
          >
            {available ? 'Rent Equipment' : 'Currently Unavailable'}
          </Button>
        ) : (
          <Button
            className="w-full"
            variant="outline"
            onClick={handleReturn}
          >
            Return Equipment
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default EquipmentCard;
