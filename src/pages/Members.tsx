import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { PageHeader } from '@/components/common/PageHeader';
import { MemberTable } from '@/components/members/MemberTable';
import { MemberFilters } from '@/components/members/MemberFilters';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, UserCheck, UserX, UserPlus } from 'lucide-react';
import type { Member } from '@/types';

// Mock data for demonstration
const mockMembers: Member[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@email.com',
    phone: '(555) 123-4567',
    membershipStatus: 'active',
    membershipDate: new Date('2020-01-15'),
    tags: ['volunteer', 'worship team'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.j@email.com',
    phone: '(555) 234-5678',
    membershipStatus: 'active',
    membershipDate: new Date('2019-06-20'),
    tags: ['leader', 'women\'s ministry'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    firstName: 'Michael',
    lastName: 'Brown',
    email: 'mbrown@email.com',
    phone: '(555) 345-6789',
    membershipStatus: 'active',
    membershipDate: new Date('2021-03-10'),
    tags: ['youth', 'volunteer'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '4',
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@email.com',
    membershipStatus: 'pending',
    tags: ['new'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '5',
    firstName: 'David',
    lastName: 'Wilson',
    email: 'dwilson@email.com',
    phone: '(555) 567-8901',
    membershipStatus: 'visitor',
    tags: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '6',
    firstName: 'Lisa',
    lastName: 'Anderson',
    email: 'lisa.a@email.com',
    phone: '(555) 678-9012',
    membershipStatus: 'inactive',
    membershipDate: new Date('2018-09-05'),
    tags: ['senior'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const stats = [
  { label: 'Total Members', value: '1,247', icon: Users, color: 'text-primary', bg: 'bg-primary/10' },
  { label: 'Active', value: '1,089', icon: UserCheck, color: 'text-success', bg: 'bg-success/10' },
  { label: 'Inactive', value: '112', icon: UserX, color: 'text-muted-foreground', bg: 'bg-muted' },
  { label: 'Visitors', value: '46', icon: UserPlus, color: 'text-info', bg: 'bg-info/10' },
];

export default function Members() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [tagFilter, setTagFilter] = useState('all');

  // Filter members
  const filteredMembers = mockMembers.filter((member) => {
    const matchesSearch =
      !searchQuery ||
      `${member.firstName} ${member.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.phone?.includes(searchQuery);

    const matchesStatus = statusFilter === 'all' || member.membershipStatus === statusFilter;
    const matchesTag = tagFilter === 'all' || member.tags.includes(tagFilter);

    return matchesSearch && matchesStatus && matchesTag;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <PageHeader
          title="Members"
          description="Manage your church congregation and household information."
        />

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} variant="flat" className="border">
              <CardContent className="flex items-center gap-4 p-4">
                <div className={`rounded-lg p-2.5 ${stat.bg}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <MemberFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
          tagFilter={tagFilter}
          onTagChange={setTagFilter}
        />

        {/* Members Table */}
        <MemberTable members={filteredMembers} />

        {/* Pagination placeholder */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {filteredMembers.length} of {mockMembers.length} members
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
