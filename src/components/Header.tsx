import { ConnectButton } from '@rainbow-me/rainbowkit';
import logo from '@/assets/logo.png';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="MedDevice Rental Logo" className="h-10 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-foreground">MedDevice Rental</h1>
              <p className="text-xs text-muted-foreground">Rent Better, Protect Medical Data</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <ConnectButton
              chainStatus="icon"
              showBalance={false}
              accountStatus={{
                smallScreen: 'avatar',
                largeScreen: 'full',
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
