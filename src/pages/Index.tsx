import config from "@/config/links";
import LinkButton from "@/components/LinkButton";

const getRandomWhatsAppUrl = () => {
  const { whatsappNumbers, whatsappMessage } = config;
  const randomNumber = whatsappNumbers[Math.floor(Math.random() * whatsappNumbers.length)];
  const encodedMessage = encodeURIComponent(whatsappMessage);
  return `https://wa.me/${randomNumber}?text=${encodedMessage}`;
};

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open(getRandomWhatsAppUrl(), "_blank");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md text-center space-y-8">
        {/* Avatar / Logo placeholder */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-secondary border-2 border-primary flex items-center justify-center text-3xl">
            💬
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">{config.title}</h1>
          <p className="text-muted-foreground">{config.subtitle}</p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <LinkButton
            label={config.whatsappButtonLabel}
            onClick={handleWhatsAppClick}
            icon="whatsapp"
            variant="primary"
          />

          {config.extraLinks.map((link, index) => (
            <LinkButton
              key={index}
              label={link.label}
              href={link.url}
              icon={link.icon}
            />
          ))}
        </div>

        {/* Footer */}
        <p className="text-xs text-muted-foreground/50 pt-4">
          © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Index;
