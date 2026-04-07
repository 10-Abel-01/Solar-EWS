import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_ITEMS } from "./menuConfig";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";

const variants = {
  open: { x: 0, width: 256 },
  collapsed: { x: 0, width: 80 },
  closed: { x: -280, width: 256 },
};

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const getActiveVariant = () => {
    if (window.innerWidth < 1024) {
      return isMobileOpen ? "open" : "closed";
    }
    return isCollapsed ? "collapsed" : "open";
  };

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 flex items-center justify-between z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-200">
            <span className="text-white font-bold text-xs">S</span>
          </div>
          <h1 className="text-lg font-extrabold tracking-tighter text-gray-900">
            SOLAR<span className="text-orange-600"> MONITOR</span>
          </h1>
        </div>
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 rounded-xl bg-gray-50 text-gray-600 active:scale-95 transition-all"
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <motion.aside
        initial={false}
        animate={getActiveVariant()}
        variants={variants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 h-screen bg-white border-r border-gray-100 flex flex-col z-[60] overflow-hidden"
      >
        <div className="p-6 flex items-center justify-between min-h-[80px]">
          <div className="flex items-center gap-3">
            {!isCollapsed && (
              <motion.h1
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl font-extrabold text-gray-900 whitespace-nowrap"
              >
                SOLAR<span className="text-orange-600"> MONITOR</span>
              </motion.h1>
            )}
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 space-y-6 pt-4 custom-scrollbar">
          {MENU_ITEMS.map((group, idx) => (
            <div key={idx} className="space-y-1">
              {!isCollapsed && (
                <p className="text-[10px] font-bold text-gray-400 mb-2 px-3 tracking-widest uppercase">
                  {group.group}
                </p>
              )}
              {group.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group
                    ${isActive ? "bg-emerald-50 text-orange-600 shadow-sm font-bold" : "text-gray-500 hover:bg-gray-50"}
                    ${isCollapsed ? "justify-center px-0" : ""}
                  `}
                >
                  <item.icon size={20} className="shrink-0" />
                  {!isCollapsed && (
                    <span className="text-[13px] whitespace-nowrap">{item.name}</span>
                  )}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

      </motion.aside>

      {/* Backdrop Mobile */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-[55] lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;