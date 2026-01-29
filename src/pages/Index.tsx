import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Church,
  Users,
  CalendarDays,
  DollarSign,
  Mail,
  Shield,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Star,
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Member Management',
    description: 'Track member profiles, households, attendance history, and engagement seamlessly.',
  },
  {
    icon: CalendarDays,
    title: 'Events & Calendar',
    description: 'Create events, manage registrations, send reminders, and coordinate schedules.',
  },
  {
    icon: DollarSign,
    title: 'Contributions',
    description: 'Record tithes, offerings, and donations with detailed reports and receipts.',
  },
  {
    icon: Mail,
    title: 'Communications',
    description: 'Send targeted emails and SMS to segments of your congregation.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Enterprise-grade security with role-based access control and data encryption.',
  },
  {
    icon: TrendingUp,
    title: 'Reports & Analytics',
    description: 'Gain insights with attendance trends, giving patterns, and growth metrics.',
  },
];

const testimonials = [
  {
    quote: "ChurchOS has transformed how we manage our congregation. Everything we need is in one place.",
    author: "Pastor David Miller",
    church: "Grace Community Church",
    rating: 5,
  },
  {
    quote: "The attendance tracking and follow-up features have helped us connect with visitors like never before.",
    author: "Sarah Thompson",
    church: "New Life Fellowship",
    rating: 5,
  },
  {
    quote: "Finally, a church management system that's both powerful and easy to use.",
    author: "Rev. James Wilson",
    church: "First Baptist Church",
    rating: 5,
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Church className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-semibold">ChurchOS</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/login">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10 gradient-warm" />
        <div className="container mx-auto px-4 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              <Star className="h-4 w-4" />
              Trusted by 500+ Churches Worldwide
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              The Complete Platform for{' '}
              <span className="text-accent">Modern Church</span> Management
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Streamline your congregation management, events, contributions, and communications
              with an intuitive, all-in-one platform designed specifically for churches.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/login">
                <Button size="xl" className="gap-2">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button size="xl" variant="outline">
                Watch Demo
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                Free 14-day trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24" id="features">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Everything You Need to Manage Your Church
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From member management to financial tracking, we've got you covered with
              powerful features designed for churches of all sizes.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                variant="interactive"
                className="group"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 gradient-warm">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Loved by Churches Everywhere
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See what church leaders are saying about ChurchOS.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-lg">"{testimonial.quote}"</blockquote>
                  <div className="mt-6">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.church}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Card className="gradient-primary overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
                Ready to Transform Your Church Management?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
                Join hundreds of churches already using ChurchOS to streamline their operations
                and focus on what matters most - their congregation.
              </p>
              <div className="mt-8">
                <Link to="/login">
                  <Button size="xl" variant="accent" className="gap-2">
                    Get Started Today
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Church className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-semibold">ChurchOS</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 ChurchOS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
