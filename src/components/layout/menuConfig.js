import { 
  Settings,
  LayoutDashboard, 
  BookOpen, 
  Calculator 
} from "lucide-react";

export const MENU_ITEMS = [
  {
    group: "UTAMA",
    items: [
      { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    ]
  },
  {
    group: "KONTROL",
    items: [
      { name: "Analisa", path: "/analytics", icon: BookOpen },
      { name: "Diagnostik", path: "/diagnostics", icon: Calculator },
    ]
  },
  {
    group: "MAIN MENU",
    items: [
      { name: "Landing Page", path: "/", icon: Settings },
    ]
  },
];