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
  icon: "instagram" | "telegram" | "email" | "phone" | "link" | "tiktok";
}

/** Links secundários menores (redes sociais, etc.) */
export interface SecondaryLink {
  /** Texto que aparece no botão */
  label: string;
  /** URL de redirecionamento */
  url: string;
  /** Ícone do botão */
  icon: "instagram" | "telegram" | "email" | "phone" | "link" | "tiktok";
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
  /** Links/botões extras de tamanho completo (Instagram, Telegram, etc.) */
  extraLinks: ExtraLink[];
  /** Links secundários menores, menos chamativos (redes sociais, etc.) */
  secondaryLinks: SecondaryLink[];
}

// =============================================
// 👇 EDITE AQUI SUAS CONFIGURAÇÕES 👇
// =============================================

const config: PageConfig = {
  title: "Distribuidora Esmeralda",
  subtitle: "Somos o ÚNICO FORNECEDOR que sua ótica precisa! Enviamos P/ Todo Brasil! 🇧🇷",

  // 📱 NÚMEROS DE WHATSAPP
  // Adicione quantos números quiser. O cliente será direcionado aleatoriamente.
  // Para desativar o aleatório, deixe apenas 1 número.
  whatsappNumbers: [
    "5562984840044",
    "5562984080079",
    "5562982020142",
    "5562981163175",
    "5562983000220",
    "5562982019452",
    "5562982220543",
    "5562984030162",
    "5562981727099",
    "5562982640039",
    "5562981737525",
  ],

  // 💬 Mensagem padrão ao abrir o WhatsApp
  whatsappMessage: "Olá! Quero acessar o catálogo!",

  // 🏷️ Texto do botão
  whatsappButtonLabel: "Falar pelo WhatsApp",

  // 🔗 LINKS EXTRAS DE TAMANHO COMPLETO (descomente e edite para adicionar)
  extraLinks: [
    // { label: "Canal no Telegram", url: "https://t.me/seucanal", icon: "telegram" },
    // { label: "Enviar E-mail", url: "mailto:contato@empresa.com", icon: "email" },
  ],

  // 🔗 LINKS SECUNDÁRIOS (menores, menos chamativos — ideal para redes sociais)
  secondaryLinks: [
    { label: "Instagram", url: "https://www.instagram.com/esmeralda.atacado", icon: "instagram" },
    { label: "TikTok", url: "https://www.tiktok.com/@esmeraldaatacado", icon: "tiktok" },
  ],
};

export default config;
