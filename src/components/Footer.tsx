import { Shield, Heart, Lock } from 'lucide-react';
import { useEffect, useState } from 'react';

const maintenanceTips = [
  "Regular calibration ensures accurate readings",
  "Clean equipment surfaces daily with approved disinfectants",
  "Check power connections before each use",
  "Inspect cables and sensors for wear",
  "Update firmware when notifications appear",
  "Store equipment in temperature-controlled environments",
  "Follow manufacturer guidelines for sterilization",
  "Log maintenance activities in the system",
];

const Footer = () => {
  const [maintenanceTip, setMaintenanceTip] = useState('');

  useEffect(() => {
    // Set random maintenance tip on mount
    const randomTip = maintenanceTips[Math.floor(Math.random() * maintenanceTips.length)];
    setMaintenanceTip(randomTip);
  }, []);

  return (
    <footer className="border-t border-border bg-muted/30">
      {/* Maintenance Reminder Banner */}
      <div className="border-b border-border bg-accent/5">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3 text-sm">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10">
              <Heart className="h-4 w-4 text-accent" />
            </div>
            <div className="flex-1">
              <span className="font-medium text-foreground">Maintenance Reminder: </span>
              <span className="text-muted-foreground">{maintenanceTip}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">About</h3>
            <p className="text-sm text-muted-foreground">
              Encrypted medical device rental platform ensuring transparent billing and protected patient data.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Security</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Lock className="h-3 w-3" />
                End-to-end encryption
              </li>
              <li className="flex items-center gap-2">
                <Shield className="h-3 w-3" />
                Blockchain verified
              </li>
              <li className="flex items-center gap-2">
                <Lock className="h-3 w-3" />
                HIPAA compliant
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Documentation</li>
              <li>API Reference</li>
              <li>Support Center</li>
              <li>System Status</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>support@meddevice.rental</li>
              <li>Emergency: 24/7 Available</li>
              <li>Technical Support</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Encrypted MedDevice Rental. All rights reserved. Protected by blockchain technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
