/**
 * ===== CONFIGURAÇÃO DOS LINKS =====
 * 
 * Edite este arquivo para gerenciar os botões e links da página.
 * 
 * COMO FUNCIONA O WHATSAPP ALEATÓRIO:
 * - Adicione vários números no array `whatsappNumbers`
 * - Quando o cliente clicar, será redirecionado para um número aleatório
 * - Para desativar o aleatório, deixe apenas 1 número na lista
 * 
 * COMO ADICIONAR NOVOS BOTÕES:
 * - Adicione um novo objeto no array `extraLinks`
 * - Cada botão precisa de: label, url, e icon
 * - Icons disponíveis: "instagram", "telegram", "email", "phone", "link"
 */

export interface ExtraLink {
  /** Texto que aparece no botão */
  label: string;
  /** URL de redirecionamento */
  url: string;
  /** Ícone do botão */
  icon: "instagram" | "telegram" | "email" | "phone" | "link";
}

export interface PageConfig {
  /** Nome ou título exibido no topo da página */
  title: string;
  /** Descrição curta abaixo do título */
  subtitle: string;
  /** Lista de números de WhatsApp (com código do país, ex: 5511999999999) */
  whatsappNumbers: string[];
  /** Mensagem padrão que aparece no WhatsApp ao abrir */
  whatsappMessage: string;
  /** Texto do botão de WhatsApp */
  whatsappButtonLabel: string;
  /** Links/botões extras (Instagram, Telegram, etc.) */
  extraLinks: ExtraLink[];
}

// =============================================
// 👇 EDITE AQUI SUAS CONFIGURAÇÕES 👇
// =============================================

const config: PageConfig = {
  title: "Fale Conosco",
  subtitle: "Escolha o melhor canal para entrar em contato",

  // 📱 NÚMEROS DE WHATSAPP
  // Adicione quantos números quiser. O cliente será direcionado aleatoriamente.
  // Para desativar o aleatório, deixe apenas 1 número.
  whatsappNumbers: [
    "5511999999999",
    "5511888888888",
    "5511777777777",
  ],

  // 💬 Mensagem padrão ao abrir o WhatsApp
  whatsappMessage: "Olá! Gostaria de mais informações.",

  // 🏷️ Texto do botão
  whatsappButtonLabel: "Falar pelo WhatsApp",

  // 🔗 LINKS EXTRAS (descomente e edite para adicionar)
  extraLinks: [
    // { label: "Nosso Instagram", url: "https://instagram.com/seuuser", icon: "instagram" },
    // { label: "Canal no Telegram", url: "https://t.me/seucanal", icon: "telegram" },
    // { label: "Enviar E-mail", url: "mailto:contato@empresa.com", icon: "email" },
  ],
};

export default config;
