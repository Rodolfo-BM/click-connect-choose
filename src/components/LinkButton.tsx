import { MessageCircle, Instagram, Send, Mail, Phone, ExternalLink } from "lucide-react";

const iconMap = {
  whatsapp: MessageCircle,
  instagram: Instagram,
  telegram: Send,
  email: Mail,
  phone: Phone,
  link: ExternalLink,
};

interface LinkButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  icon: keyof typeof iconMap;
  variant?: "primary" | "secondary";
}

const LinkButton = ({ label, onClick, href, icon, variant = "secondary" }: LinkButtonProps) => {
  const Icon = iconMap[icon];

  const classes =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:brightness-110 animate-pulse-glow"
      : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border";

  const content = (
    <div className={`flex items-center justify-center gap-3 w-full rounded-lg px-6 py-4 text-lg font-medium transition-all duration-200 cursor-pointer ${classes}`}>
      <Icon className="w-5 h-5 shrink-0" />
      <span>{label}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="block w-full">
      {content}
    </button>
  );
};

export default LinkButton;
