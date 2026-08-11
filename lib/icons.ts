import {
  HeartHandshake,
  Building2,
  Stethoscope,
  Factory,
  HardHat,
  Landmark,
  Briefcase,
  Home,
  Users,
  Network,
  Lock,
  Monitor,
  ShieldCheck,
  ClipboardCheck,
  ReceiptText,
  BookOpenCheck,
  FileSpreadsheet,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps the icon-name strings stored in lib/firm-data.ts and lib/homepage.ts to
 * Lucide components. Falls back to ShieldCheck if a name is missing.
 */
export const iconMap: Record<string, LucideIcon> = {
  HeartHandshake,
  Building2,
  Stethoscope,
  Factory,
  HardHat,
  Landmark,
  Briefcase,
  Home,
  Users,
  Network,
  Lock,
  Monitor,
  ShieldCheck,
  ClipboardCheck,
  ReceiptText,
  BookOpenCheck,
  FileSpreadsheet,
};

export const getIcon = (name: string): LucideIcon => iconMap[name] ?? ShieldCheck;
