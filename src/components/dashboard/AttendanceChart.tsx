import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const attendanceData = [
  { week: 'Week 1', attendance: 185, visitors: 12 },
  { week: 'Week 2', attendance: 210, visitors: 18 },
  { week: 'Week 3', attendance: 195, visitors: 8 },
  { week: 'Week 4', attendance: 245, visitors: 22 },
  { week: 'Week 5', attendance: 230, visitors: 15 },
  { week: 'Week 6', attendance: 258, visitors: 20 },
  { week: 'Week 7', attendance: 275, visitors: 25 },
  { week: 'Week 8', attendance: 262, visitors: 18 },
];

export function AttendanceChart() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle>Attendance Trends</CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline" className="gap-1">
              <div className="h-2 w-2 rounded-full bg-primary" />
              Members
            </Badge>
            <Badge variant="outline" className="gap-1">
              <div className="h-2 w-2 rounded-full bg-accent" />
              Visitors
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={attendanceData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="attendanceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(222, 47%, 20%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(222, 47%, 20%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="visitorsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(38, 92%, 50%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(38, 92%, 50%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(40, 20%, 90%)" />
              <XAxis
                dataKey="week"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: 'hsl(222, 20%, 45%)' }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: 'hsl(222, 20%, 45%)' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(0, 0%, 100%)',
                  border: '1px solid hsl(40, 20%, 90%)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Area
                type="monotone"
                dataKey="attendance"
                stroke="hsl(222, 47%, 20%)"
                strokeWidth={2}
                fill="url(#attendanceGradient)"
                name="Attendance"
              />
              <Area
                type="monotone"
                dataKey="visitors"
                stroke="hsl(38, 92%, 50%)"
                strokeWidth={2}
                fill="url(#visitorsGradient)"
                name="Visitors"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
