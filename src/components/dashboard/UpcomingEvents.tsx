import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Clock, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';

interface UpcomingEvent {
  id: string;
  title: string;
  date: Date;
  time: string;
  location: string;
  registrations: number;
  capacity?: number;
  type: 'service' | 'meeting' | 'outreach' | 'social' | 'training';
}

const eventTypeColors = {
  service: 'bg-primary/10 text-primary',
  meeting: 'bg-info/10 text-info',
  outreach: 'bg-success/10 text-success',
  social: 'bg-accent/10 text-accent',
  training: 'bg-warning/10 text-warning',
};

const upcomingEvents: UpcomingEvent[] = [
  {
    id: '1',
    title: 'Sunday Worship Service',
    date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    time: '10:00 AM',
    location: 'Main Sanctuary',
    registrations: 0,
    type: 'service',
  },
  {
    id: '2',
    title: 'Youth Group Meeting',
    date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    time: '6:30 PM',
    location: 'Youth Center',
    registrations: 28,
    capacity: 50,
    type: 'meeting',
  },
  {
    id: '3',
    title: 'Community Outreach',
    date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    time: '9:00 AM',
    location: 'Downtown Park',
    registrations: 45,
    capacity: 100,
    type: 'outreach',
  },
  {
    id: '4',
    title: 'Leadership Training',
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    time: '7:00 PM',
    location: 'Conference Room A',
    registrations: 12,
    capacity: 20,
    type: 'training',
  },
];

export function UpcomingEvents() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <span>Upcoming Events</span>
          <Button variant="ghost" size="sm" className="gap-1 text-sm">
            View All
            <ChevronRight className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="group cursor-pointer rounded-xl border p-4 transition-all hover:border-accent/50 hover:shadow-card-hover"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium group-hover:text-accent transition-colors">
                    {event.title}
                  </h4>
                  <Badge className={eventTypeColors[event.type]} variant="outline">
                    {event.type}
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {format(event.date, 'MMM d, yyyy')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.location}
                  </span>
                </div>
              </div>
              {event.capacity && (
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm">
                    <Users className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="font-medium">{event.registrations}</span>
                    <span className="text-muted-foreground">/ {event.capacity}</span>
                  </div>
                  <div className="mt-1 h-1.5 w-20 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-accent transition-all"
                      style={{ width: `${(event.registrations / event.capacity) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
