import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { UserPlus, DollarSign, Calendar, Users, ClipboardCheck } from 'lucide-react';

interface Activity {
  id: string;
  type: 'member_joined' | 'donation' | 'event' | 'group' | 'attendance';
  title: string;
  description: string;
  timestamp: string;
  user?: {
    name: string;
    avatar?: string;
  };
  amount?: number;
}

const activityIcons = {
  member_joined: { icon: UserPlus, color: 'text-success', bg: 'bg-success/10' },
  donation: { icon: DollarSign, color: 'text-accent', bg: 'bg-accent/10' },
  event: { icon: Calendar, color: 'text-info', bg: 'bg-info/10' },
  group: { icon: Users, color: 'text-primary', bg: 'bg-primary/10' },
  attendance: { icon: ClipboardCheck, color: 'text-warning', bg: 'bg-warning/10' },
};

const recentActivities: Activity[] = [
  {
    id: '1',
    type: 'member_joined',
    title: 'New Member',
    description: 'Sarah Johnson joined the congregation',
    timestamp: '5 minutes ago',
    user: { name: 'Sarah Johnson' },
  },
  {
    id: '2',
    type: 'donation',
    title: 'Donation Received',
    description: 'Michael Brown contributed to Building Fund',
    timestamp: '1 hour ago',
    amount: 500,
    user: { name: 'Michael Brown' },
  },
  {
    id: '3',
    type: 'event',
    title: 'Event Created',
    description: 'Youth Summer Camp registration opened',
    timestamp: '2 hours ago',
  },
  {
    id: '4',
    type: 'attendance',
    title: 'Service Completed',
    description: 'Sunday Morning Service - 245 attendees',
    timestamp: '1 day ago',
  },
  {
    id: '5',
    type: 'group',
    title: 'Group Update',
    description: 'Women\'s Ministry added 3 new members',
    timestamp: '2 days ago',
  },
];

export function RecentActivity() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <span>Recent Activity</span>
          <Badge variant="muted" className="font-normal">Today</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentActivities.map((activity) => {
          const { icon: Icon, color, bg } = activityIcons[activity.type];
          
          return (
            <div
              key={activity.id}
              className="flex items-start gap-4 rounded-lg p-2 transition-colors hover:bg-muted/50"
            >
              <div className={`rounded-lg p-2 ${bg}`}>
                <Icon className={`h-4 w-4 ${color}`} />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{activity.title}</p>
                  {activity.amount && (
                    <span className="text-sm font-semibold text-accent">
                      ${activity.amount.toLocaleString()}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
