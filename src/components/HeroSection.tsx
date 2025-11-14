import { Shield, Lock, Activity } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTEyIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02em0tMTIgMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iaHNsKDE4NyA4NSUgNDMlIC8gMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L3N2Zz4=')] opacity-50"></div>
      
      <div className="container relative mx-auto px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <Shield className="h-4 w-4" />
              Encrypted & Secure
            </div>
            
            <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Rent Better,
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Protect Medical Data
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground sm:text-xl">
              Hospitals rent medical equipment with encrypted usage logs to prevent overbilling
              and protect sensitive medical data. Every transaction is secured with blockchain technology.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Encrypted Logs</div>
                  <div className="text-sm text-muted-foreground">Protected usage data</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-accent/10 p-2">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Secure Contracts</div>
                  <div className="text-sm text-muted-foreground">Blockchain verified</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Real-time Tracking</div>
                  <div className="text-sm text-muted-foreground">Transparent billing</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border/50 shadow-2xl">
              <img
                src={heroBanner}
                alt="Secure Medical Equipment"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 rounded-xl border border-border bg-card p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <Lock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Data Protection</div>
                  <div className="text-lg font-bold text-foreground">256-bit Encrypted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
