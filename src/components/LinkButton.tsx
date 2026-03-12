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
    primary: "bg-secondary text-secondary-foreground hover:brightness-105 border border-secondary",
    secondary: "bg-secondary text-secondary-foreground hover:brightness-105 border border-secondary",
    compact: "bg-transparent text-foreground/70 hover:text-foreground",
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
