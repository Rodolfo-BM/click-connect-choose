import { MessageCircle, Instagram, Send, Mail, Phone, ExternalLink, Music } from "lucide-react";

const iconMap = {
  whatsapp: MessageCircle,
  instagram: Instagram,
  telegram: Send,
  email: Mail,
  phone: Phone,
  link: ExternalLink,
  tiktok: Music,
};

interface LinkButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  icon: keyof typeof iconMap;
  variant?: "primary" | "secondary" | "compact";
}

const LinkButton = ({ label, onClick, href, icon, variant = "secondary" }: LinkButtonProps) => {
  const Icon = iconMap[icon];

  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:brightness-110",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
    compact: "bg-transparent text-muted-foreground hover:text-foreground border border-border/50 hover:border-border",
  };

  const sizeClasses = variant === "compact"
    ? "px-4 py-2.5 text-sm gap-2"
    : "px-6 py-4 text-lg gap-3";

  const content = (
    <div className={`flex items-center justify-center w-full rounded-lg font-medium transition-all duration-200 cursor-pointer ${sizeClasses} ${variantClasses[variant]}`}>
      <Icon className={variant === "compact" ? "w-4 h-4 shrink-0" : "w-5 h-5 shrink-0"} />
      <span>{label}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={variant === "compact" ? "inline-block" : "block w-full"}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={variant === "compact" ? "inline-block" : "block w-full"}>
      {content}
    </button>
  );
};

export default LinkButton;
