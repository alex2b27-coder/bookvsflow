create table public.leads (
  id uuid primary key default gen_random_uuid(),
  salon_name text not null,
  owner_name text not null,
  phone text not null,
  email text not null,
  city text not null,
  business_type text not null,
  number_of_staff text not null,
  number_of_services text not null,
  current_booking_system text,
  use_online_booking text,
  need_online_payments boolean default false,
  need_financial_reports boolean default false,
  preferred_contact text not null,
  why_need_it text,
  business_purpose text,
  biggest_challenge text,
  monthly_clients text,
  additional_comments text,
  email_sent boolean default false,
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

create policy "Anyone can submit a lead"
  on public.leads for insert
  to anon, authenticated
  with check (true);

create policy "Authenticated users can view leads"
  on public.leads for select
  to authenticated
  using (true);