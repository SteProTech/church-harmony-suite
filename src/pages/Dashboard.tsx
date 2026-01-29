import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { UpcomingEvents } from '@/components/dashboard/UpcomingEvents';
import { AttendanceChart } from '@/components/dashboard/AttendanceChart';
import { PageHeader } from '@/components/common/PageHeader';
import { Users, UserPlus, DollarSign, ClipboardCheck, Calendar, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <PageHeader
          title="Dashboard"
          description="Welcome back, Pastor John. Here's what's happening at Grace Church."
        />

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Members"
            value="1,247"
            change={8.2}
            icon={Users}
            iconColor="text-primary"
            iconBgColor="bg-primary/10"
          />
          <StatCard
            title="Weekly Attendance"
            value="258"
            change={12.5}
            icon={ClipboardCheck}
            iconColor="text-info"
            iconBgColor="bg-info/10"
          />
          <StatCard
            title="Monthly Giving"
            value="$47,850"
            change={5.3}
            icon={DollarSign}
            iconColor="text-accent"
            iconBgColor="bg-accent/10"
          />
          <StatCard
            title="New Visitors"
            value="23"
            change={-2.4}
            icon={UserPlus}
            iconColor="text-success"
            iconBgColor="bg-success/10"
          />
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Charts and Activity */}
        <div className="grid gap-6 lg:grid-cols-2">
          <AttendanceChart />
          <RecentActivity />
        </div>

        {/* Upcoming Events */}
        <UpcomingEvents />
      </div>
    </DashboardLayout>
  );
}
