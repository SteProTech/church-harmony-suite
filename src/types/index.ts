// User and Auth Types
export type UserRole = 'super_admin' | 'pastor' | 'staff' | 'finance' | 'department_leader' | 'member';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: Date;
  lastLoginAt?: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Member Types
export interface Member {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  dateOfBirth?: Date;
  gender?: 'male' | 'female' | 'other';
  maritalStatus?: 'single' | 'married' | 'divorced' | 'widowed';
  address?: Address;
  householdId?: string;
  membershipStatus: 'active' | 'inactive' | 'visitor' | 'pending';
  membershipDate?: Date;
  avatarUrl?: string;
  tags: string[];
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Household {
  id: string;
  name: string;
  members: Member[];
  primaryContactId: string;
  address?: Address;
  createdAt: Date;
}

// Attendance Types
export interface AttendanceRecord {
  id: string;
  memberId: string;
  eventId: string;
  checkInTime: Date;
  checkOutTime?: Date;
  method: 'manual' | 'qr' | 'self';
  notes?: string;
}

export interface Service {
  id: string;
  name: string;
  date: Date;
  startTime: string;
  endTime: string;
  type: 'sunday' | 'midweek' | 'special' | 'youth' | 'prayer';
  attendanceCount: number;
}

// Event Types
export interface Event {
  id: string;
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  location?: string;
  type: 'service' | 'meeting' | 'outreach' | 'social' | 'training';
  capacity?: number;
  registrations: number;
  isPublic: boolean;
  createdBy: string;
}

// Contribution Types
export interface Contribution {
  id: string;
  memberId?: string;
  memberName?: string;
  amount: number;
  fundId: string;
  fundName: string;
  date: Date;
  method: 'cash' | 'check' | 'card' | 'online' | 'bank_transfer';
  checkNumber?: string;
  notes?: string;
  receiptSent: boolean;
}

export interface Fund {
  id: string;
  name: string;
  description?: string;
  type: 'tithe' | 'offering' | 'mission' | 'building' | 'special' | 'other';
  targetAmount?: number;
  currentAmount: number;
  isActive: boolean;
}

// Group Types
export interface Group {
  id: string;
  name: string;
  description?: string;
  type: 'department' | 'small_group' | 'ministry' | 'committee';
  leaderId?: string;
  leaderName?: string;
  memberCount: number;
  meetingSchedule?: string;
  isActive: boolean;
}

// Visitor Types
export interface Visitor {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  firstVisitDate: Date;
  source?: string;
  status: 'new' | 'contacted' | 'following_up' | 'converted' | 'not_interested';
  assignedTo?: string;
  notes?: string;
}

// Dashboard Stats
export interface DashboardStats {
  totalMembers: number;
  memberGrowth: number;
  weeklyAttendance: number;
  attendanceChange: number;
  monthlyGiving: number;
  givingChange: number;
  newVisitors: number;
  visitorChange: number;
  pendingTasks: number;
  upcomingEvents: number;
}

// Table Types
export interface TableColumn<T> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  render?: (item: T) => React.ReactNode;
}

export interface PaginationState {
  page: number;
  pageSize: number;
  total: number;
}
