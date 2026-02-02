import { Phone } from 'lucide-react';

const MobileCallButton = () => {
  return (
    <a
      href="tel:+998909273506"
      className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 animate-pulse hover:animate-none hover:scale-110 transition-transform"
    >
      <Phone className="w-6 h-6 text-primary-foreground" />
    </a>
  );
};

export default MobileCallButton;
