import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  UserPlus, 
  CalendarPlus, 
  DollarSign, 
  Mail, 
  ClipboardCheck,
  FileText,
  Users,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuickAction {
  label: string;
  description: string;
  icon: React.ElementType;
  href: string;
  color: string;
  bgColor: string;
}

const quickActions: QuickAction[] = [
  {
    label: 'Add Member',
    description: 'Register new member',
    icon: UserPlus,
    href: '/members/new',
    color: 'text-success',
    bgColor: 'bg-success/10 hover:bg-success/20',
  },
  {
    label: 'Record Donation',
    description: 'Log contribution',
    icon: DollarSign,
    href: '/contributions/new',
    color: 'text-accent',
    bgColor: 'bg-accent/10 hover:bg-accent/20',
  },
  {
    label: 'Check In',
    description: 'Service attendance',
    icon: ClipboardCheck,
    href: '/attendance/checkin',
    color: 'text-info',
    bgColor: 'bg-info/10 hover:bg-info/20',
  },
  {
    label: 'Create Event',
    description: 'Schedule event',
    icon: CalendarPlus,
    href: '/events/new',
    color: 'text-primary',
    bgColor: 'bg-primary/10 hover:bg-primary/20',
  },
  {
    label: 'Send Message',
    description: 'Email or SMS',
    icon: Mail,
    href: '/communications/new',
    color: 'text-warning',
    bgColor: 'bg-warning/10 hover:bg-warning/20',
  },
  {
    label: 'View Reports',
    description: 'Analytics & insights',
    icon: FileText,
    href: '/reports',
    color: 'text-muted-foreground',
    bgColor: 'bg-muted hover:bg-muted/80',
  },
];

export function QuickActions() {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {quickActions.map((action) => (
            <Link key={action.label} to={action.href}>
              <button
                className={`flex w-full flex-col items-center gap-2 rounded-xl p-4 transition-all ${action.bgColor}`}
              >
                <div className={`rounded-lg p-2 ${action.color}`}>
                  <action.icon className="h-5 w-5" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">{action.label}</p>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </div>
              </button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
