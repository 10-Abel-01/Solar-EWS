import {
  LayoutDashboard,
  BookOpen,
  Calculator
} from "lucide-react";
import { FaBook } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";

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
      { name: "Analytics", path: "/analytics", icon: BookOpen },
      { name: "Diagnostics", path: "/diagnostics", icon: Calculator },
      { name: "Documentation", path: "/documentation", icon: FaBook },
    ]
  },
  {
    group: "MAIN MENU",
    items: [
      { name: "Landing Page", path: "/", icon: MdArrowBack },
    ]
  },
];