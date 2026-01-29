import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Users,
  UserPlus,
  CalendarDays,
  DollarSign,
  UsersRound,
  Mail,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
  Church,
  ClipboardCheck,
  LogOut,
  Bell,
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
}

const mainNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Members', href: '/members', icon: Users },
  { label: 'Visitors', href: '/visitors', icon: UserPlus, badge: 5 },
  { label: 'Attendance', href: '/attendance', icon: ClipboardCheck },
  { label: 'Events', href: '/events', icon: CalendarDays },
  { label: 'Contributions', href: '/contributions', icon: DollarSign },
  { label: 'Groups', href: '/groups', icon: UsersRound },
  { label: 'Communications', href: '/communications', icon: Mail },
  { label: 'Resources', href: '/resources', icon: FileText },
];

const bottomNavItems: NavItem[] = [
  { label: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const NavLink = ({ item }: { item: NavItem }) => {
    const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + '/');
    
    return (
      <Link to={item.href}>
        <Button
          variant={isActive ? 'sidebar-active' : 'sidebar'}
          size={isCollapsed ? 'icon' : 'default'}
          className={cn(
            'w-full justify-start gap-3 transition-all duration-200',
            isCollapsed && 'justify-center px-0'
          )}
        >
          <item.icon className="h-5 w-5 shrink-0" />
          {!isCollapsed && (
            <>
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sidebar-primary text-xs text-sidebar-primary-foreground">
                  {item.badge}
                </span>
              )}
            </>
          )}
        </Button>
      </Link>
    );
  };

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 flex h-screen flex-col bg-sidebar transition-all duration-300',
        isCollapsed ? 'w-[70px]' : 'w-[260px]'
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        <Link to="/dashboard" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-primary">
            <Church className="h-5 w-5 text-sidebar-primary-foreground" />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="font-display text-lg font-semibold text-sidebar-foreground">
                ChurchOS
              </span>
              <span className="text-xs text-sidebar-foreground/60">
                Management System
              </span>
            </div>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        <div className="space-y-1">
          {mainNavItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </div>
      </nav>

      {/* Bottom section */}
      <div className="border-t border-sidebar-border p-3">
        <div className="space-y-1">
          {bottomNavItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
          <Button
            variant="sidebar"
            size={isCollapsed ? 'icon' : 'default'}
            className={cn(
              'w-full justify-start gap-3 text-destructive hover:bg-destructive/10 hover:text-destructive',
              isCollapsed && 'justify-center px-0'
            )}
          >
            <LogOut className="h-5 w-5 shrink-0" />
            {!isCollapsed && <span>Sign Out</span>}
          </Button>
        </div>
      </div>

      {/* Collapse button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-20 flex h-6 w-6 items-center justify-center rounded-full border bg-background shadow-md transition-transform hover:scale-110"
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </button>
    </aside>
  );
}
